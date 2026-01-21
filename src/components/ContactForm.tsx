import { useEffect, useRef, useState } from "react";
import * as yup from "yup";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type Status = "idle" | "success" | "error" | "rate_limited" | "config_missing";

const contactSchema = yup.object({
  name: yup.string().required("Informe seu nome."),
  email: yup
    .string()
    .required("Informe seu email.")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email inválido."),
  message: yup.string().required("Escreva uma mensagem."),
});

export function ContactForm() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [botcheck, setBotcheck] = useState(false);

  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
  const apiUrl = import.meta.env.VITE_WEB3FORMS_URL as string | undefined;
  const hideMessageTimer = useRef<number | null>(null);

  function clearHideTimer() {
    if (hideMessageTimer.current) {
      window.clearTimeout(hideMessageTimer.current);
      hideMessageTimer.current = null;
    }
  }

  function setStatusWithAutoHide(next: Status, delayMs = 4000) {
    setStatus(next);
    if (next === "idle") return;

    clearHideTimer();
    hideMessageTimer.current = window.setTimeout(() => {
      setStatus("idle");
    }, delayMs);
  }

  useEffect(() => {
    return () => clearHideTimer();
  }, []);

  function updateField<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const { [key]: _removed, ...rest } = prev;
        return rest;
      });
    }
    if (status !== "idle") setStatus("idle");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (botcheck) {
      setStatusWithAutoHide("error");
      return;
    }

    const lastSubmitKey = "portfolio_last_submit";
    const lastSubmit = Number(localStorage.getItem(lastSubmitKey) || "0");
    const now = Date.now();

    if (now - lastSubmit < 20000) {
      setStatusWithAutoHide("rate_limited", 3500);
      return;
    }

    try {
      await contactSchema.validate(values, { abortEarly: false });
      setErrors({});
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const nextErrors: FormErrors = {};
        err.inner.forEach((issue) => {
          if (issue.path && !nextErrors[issue.path as keyof FormValues]) {
            nextErrors[issue.path as keyof FormValues] = issue.message;
          }
        });
        setErrors(nextErrors);
      }
      return;
    }

    if (!accessKey || !apiUrl) {
      setStatusWithAutoHide("config_missing", 6000);
      return;
    }

    setLoading(true);
    clearHideTimer();

    try {
      localStorage.setItem(lastSubmitKey, String(now));

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Contato pelo Portfólio - ${values.name}`,
          name: values.name,
          email: values.email,
          message: values.message,
          botcheck,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setValues({ name: "", email: "", message: "" });
        setErrors({});
        setBotcheck(false);
        setStatusWithAutoHide("success", 4500);
      } else {
        setStatusWithAutoHide("error", 4500);
      }
    } catch (_err) {
      setStatusWithAutoHide("error", 4500);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 shadow">
      <p className="text-xs font-semibold text-white/60">Mensagem</p>

      <form className="mt-3 grid gap-3" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="text-xs text-white/70">Nome</label>
          <input
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/20"
            placeholder="Seu nome"
          />
          {errors.name ? (
            <p className="mt-2 text-xs text-red-300">{errors.name}</p>
          ) : null}
        </div>

        <div>
          <label className="text-xs text-white/70">Email</label>
          <input
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/20"
            placeholder="seuemail@email.com"
          />
          {errors.email ? (
            <p className="mt-2 text-xs text-red-300">{errors.email}</p>
          ) : null}
        </div>

        <div>
          <label className="text-xs text-white/70">Mensagem</label>
          <textarea
            value={values.message}
            onChange={(e) => updateField("message", e.target.value)}
            className="mt-1 min-h-30 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/20"
            placeholder="Me conte sobre a vaga/projeto..."
          />
          {errors.message ? (
            <p className="mt-2 text-xs text-red-300">{errors.message}</p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full rounded-xl bg-[#ff4d6d] px-4 py-3 text-sm font-semibold text-white shadow hover:opacity-90 disabled:opacity-60"
        >
          <span className="inline-flex items-center justify-center gap-2">
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Enviando...
              </>
            ) : (
              "Enviar"
            )}
          </span>
        </button>

        <div className="hidden">
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            checked={botcheck}
            onChange={(e) => setBotcheck(e.target.checked)}
            aria-hidden="true"
          />
        </div>

        {status === "rate_limited" ? (
          <p className="mt-2 text-xs text-white/70">
            Aguarde alguns segundos antes de enviar novamente.
          </p>
        ) : null}
        {status === "success" ? (
          <p className="mt-2 text-xs text-white/70">
            Mensagem enviada! Vou te responder o mais rápido possível.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="mt-2 text-xs text-white/70">
            Não consegui enviar agora. Tente novamente.
          </p>
        ) : null}
        {status === "config_missing" ? (
          <p className="mt-2 text-xs text-white/70">
            Configuração ausente. Verifique VITE_WEB3FORMS_KEY e
            VITE_WEB3FORMS_URL.
          </p>
        ) : null}
      </form>
    </div>
  );
}
