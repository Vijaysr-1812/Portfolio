import { CognitionHero } from "@/components/cognition-hero";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { FooterSection } from "@/components/footer-section";

export default function HomePage() {
  return (
    <main className="bg-[var(--void)] text-[var(--text)] flex flex-col gap-[8px]">
      <CognitionHero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}
