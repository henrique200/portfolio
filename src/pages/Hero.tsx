import { HeroActions } from "../components/HeroActions";
import { HeroHighlightCard } from "../components/HeroHighlightCard";
import { HeroSkills } from "../components/HeroSkills";

export function Hero() {
  const base = import.meta.env.BASE_URL;
  const skills = [
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Vite",
    "Expo",
    "Tailwind CSS",
    "styled-components",
  ];

  return (
    <section id="inicio" className="relative scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-14 md:pt-28 md:pb-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm text-white/70">Olá 👋 eu sou</p>

            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              José Henrique
            </h1>

            <p className="mt-2 text-xl font-bold text-white/60 sm:text-2xl">
              Desenvolvedor <span className="text-white">Frontend</span> (Web &
              Mobile)
            </p>

            <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-white/60 sm:text-sm">
              Desenvolvedor Frontend com aproximadamente 5 anos de experiência
              em aplicações web e mobile, atuando de ponta a ponta:
              levantamento, desenvolvimento, performance, manutenção e
              publicação.
            </p>

            <HeroActions base={base} />
            <HeroSkills skills={skills} />
          </div>

          <HeroHighlightCard base={base} />
        </div>
      </div>
    </section>
  );
}
