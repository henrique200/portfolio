import type { ReactNode } from "react";

type ContactRowProps = {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  display?: string;
};

export function ContactRow({
  icon,
  label,
  value,
  href,
  display,
}: ContactRowProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      title={value}
      className="group flex w-full min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 hover:bg-white/10"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-white/80">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs text-white/60">{label}</p>
        <p className="break-all text-sm font-semibold leading-snug text-white">
          {display ?? value}
        </p>
      </div>
    </a>
  );
}
