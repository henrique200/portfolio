type HeroActionsProps = {
  base: string;
};

export function HeroActions({ base }: HeroActionsProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href="#projetos"
        className="rounded-xl bg-white px-4 py-2 text-xs font-semibold text-black hover:opacity-90"
      >
        Ver projetos
      </a>

      <a
        href="#contato"
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10"
      >
        Entrar em contato
      </a>

      <a
        href={`${base}cv.pdf`}
        download="Jose-Henrique-CV.pdf"
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10"
        title="CV"
      >
        Baixar CV
      </a>
    </div>
  );
}
