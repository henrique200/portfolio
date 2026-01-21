import { FeatureCard } from "../components/FeatureCard";
import { SectionContainer } from "../components/SectionContainer";
import { SectionHeader } from "../components/SectionHeader";

const features = [
  {
    title: "Experiência de ponta a ponta",
    description:
      "Atuação desde a concepção até deploy e publicação nas lojas (Play Store e App Store).",
  },
  {
    title: "Performance e qualidade",
    description:
      "Otimizações, correção de bugs e foco em manutenibilidade e código escalável.",
  },
  {
    title: "Componentização e UI",
    description:
      "Criação de interfaces responsivas e reutilizáveis com atenção a UX.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-12 scroll-mt-24">
      <SectionContainer>
        <SectionHeader
          title="Sobre mim"
          subtitle="Desenvolvedor Frontend Pleno com experiência em aplicações web e mobile, participando do ciclo completo do desenvolvimento: levantamento, implementação, melhorias, correções, otimizações e entrega em produção."
          subtitleClassName="mt-3 max-w-3xl text-sm text-white/70"
        />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
