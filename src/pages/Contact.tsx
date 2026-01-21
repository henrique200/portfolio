import { ContactForm } from "../components/ContactForm";
import { ContactInfoCard } from "../components/ContactInfoCard";
import { SectionContainer } from "../components/SectionContainer";
import { SectionHeader } from "../components/SectionHeader";

export function Contact() {
  return (
    <section id="contato" className="py-20 scroll-mt-24">
      <SectionContainer>
        <SectionHeader
          className="mb-8"
          title="Contato"
          subtitle="Se quiser conversar sobre vaga, freelas ou projeto, me chama."
          subtitleClassName="mt-2 text-sm text-white/60"
          titleClassName="text-2xl font-bold text-white"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <ContactInfoCard />
          <ContactForm />
        </div>
      </SectionContainer>
    </section>
  );
}
