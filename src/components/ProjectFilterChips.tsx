export type ProjectFilter = "Todos" | "Web" | "Mobile";

type ProjectFilterChipsProps = {
  filters: ProjectFilter[];
  active: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
};

export function ProjectFilterChips({
  filters,
  active,
  onChange,
}: ProjectFilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = filter === active;
        return (
          <button
            key={filter}
            onClick={() => onChange(filter)}
            className={[
              "rounded-full border px-4 py-2 text-xs font-semibold transition",
              isActive
                ? "border-white/20 bg-white text-black"
                : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10",
            ].join(" ")}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
