type HeroStat = {
  label: string;
  value: string;
};

type HeroHighlightCardProps = {
  base: string;
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  stats?: HeroStat[];
};

const defaultStats: HeroStat[] = [
  { label: "Experiência", value: "5 anos" },
  { label: "Projetos", value: "3+" },
  { label: "Stack", value: "Web/Mobile" },
];

export function HeroHighlightCard({
  base,
  imageSrc,
  imageAlt = "Demonstração do player (mock)",
  title = "Destaque do portfólio",
  description = "Projetos Web e Mobile com foco em UX, performance e organização de código.",
  stats = defaultStats,
}: HeroHighlightCardProps) {
  const src = imageSrc ?? `${base}hero-spotlight.png`;

  return (
    <div className="relative overflow-x-hidden">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow">
        <img
          src={src}
          alt={imageAlt}
          className="aspect-16/10 w-full rounded-xl bg-black/30 object-cover"
          loading="lazy"
        />

        <div className="mt-4">
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="mt-1 text-[13px] text-white/60 sm:text-sm">
            {description}
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3"
            >
              <p className="text-[11px] text-white/60 sm:text-xs">
                {stat.label}
              </p>
              <p className="text-[13px] font-bold text-white sm:text-sm">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-white/5 blur-3xl opacity-60 sm:opacity-80" />
    </div>
  );
}
