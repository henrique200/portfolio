import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const isPokedex = project.id === "pokedex";

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow hover:bg-white/10">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="h-44 w-full object-cover"
          loading="lazy"
        />

        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-black/60 px-3 py-1 text-xs text-white/80 backdrop-blur">
            {project.type}
          </span>

          {isPokedex ? (
            <>
              <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
                Vanilla
              </span>
              <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
                Desafio
              </span>
            </>
          ) : null}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-base font-bold">{project.title}</h3>
        <p className="mt-1 text-sm text-white/70">{project.highlight}</p>
        <p className="mt-3 text-sm text-white/60">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-2">
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-4 py-2 text-xs font-semibold text-black hover:opacity-90"
            >
              Abrir
            </a>
          ) : project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-4 py-2 text-xs font-semibold text-black hover:opacity-90"
            >
              Ver demo
            </a>
          ) : (
            <button
              disabled
              className="cursor-not-allowed rounded-xl bg-white/20 px-4 py-2 text-xs font-semibold text-white/70"
              title="Adicione um link de demo/deploy quando tiver"
            >
              Demo em breve
            </button>
          )}

          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10"
            >
              GitHub
            </a>
          ) : (
            <button
              disabled
              className="cursor-not-allowed rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/50"
            >
              GitHub
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
