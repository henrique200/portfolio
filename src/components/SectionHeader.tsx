import type { ReactNode } from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export function SectionHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <h2 className={titleClassName ?? "text-2xl font-bold"}>{title}</h2>
      {subtitle ? (
        <p className={subtitleClassName ?? "mt-2 text-sm text-white/60"}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
