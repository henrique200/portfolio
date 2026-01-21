import type { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export function SectionContainer({ children, className }: SectionContainerProps) {
  const classes = ["mx-auto max-w-6xl px-4", className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
