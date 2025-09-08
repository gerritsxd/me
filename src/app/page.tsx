import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProfileSummary } from '@/components/sections/ProfileSummary';
import { ProjectCarousel } from '@/components/sections/ProjectCarousel';
import { ContactForm } from '@/components/sections/ContactForm';
import { StyleAssistant } from '@/components/ai/StyleAssistant';
import { SkillsShowcase } from '@/components/sections/SkillsShowcase';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="container mx-auto flex-1 space-y-16 px-4 py-8 md:space-y-24 md:px-6 md:py-12">
        <ProfileSummary />
        <SkillsShowcase />
        <ExperienceTimeline />
        <ProjectCarousel />
        <ContactForm />
      </main>
      <Footer />
      <StyleAssistant />
    </div>
  );
}
