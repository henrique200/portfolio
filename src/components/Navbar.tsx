import { useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const base = import.meta.env.BASE_URL;

  const links = useMemo(
    () => [
      { href: "#inicio", label: "Início" },
      { href: "#projetos", label: "Projetos" },
      { href: "#sobre", label: "Sobre" },
      { href: "#contato", label: "Contato" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <img
            src={`${base}me.jpeg`}
            alt="Foto de José Henrique"
            className="h-9 w-9 rounded-full border border-white/10 object-cover"
            loading="lazy"
          />

          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">José Henrique</p>
            <p className="text-xs text-white/60">
              Desenvolvedor Frontend (Web & Mobile)
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden rounded-xl bg-[#ff4d6d] px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90 md:inline-flex"
          >
            Falar comigo
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
            aria-label="Abrir menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/30 backdrop-blur md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="grid gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10"
                >
                  {l.label}
                </a>
              ))}

              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-[#ff4d6d] px-4 py-3 text-center text-sm font-semibold text-white shadow hover:opacity-90"
              >
                Falar comigo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
