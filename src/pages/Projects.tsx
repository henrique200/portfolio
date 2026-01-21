import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import {
  ProjectFilterChips,
  type ProjectFilter,
} from "../components/ProjectFilterChips";
import { SectionContainer } from "../components/SectionContainer";
import { SectionHeader } from "../components/SectionHeader";

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("Todos");
  const filters: ProjectFilter[] = ["Todos", "Web", "Mobile"];

  const filtered = useMemo(() => {
    if (filter === "Todos") return projects;
    return projects.filter((p) => p.type === filter);
  }, [filter]);

  return (
    <section id="projetos" className="py-12 scroll-mt-24">
      <SectionContainer>
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            title="Projetos"
            subtitle="Alguns projetos que mostram meu nível real em Web e Mobile."
            subtitleClassName="mt-1 text-sm text-white/60"
          />
          <ProjectFilterChips
            filters={filters}
            active={filter}
            onChange={setFilter}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
