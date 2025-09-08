import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProfileSummary } from '@/components/sections/ProfileSummary';
import { SkillsShowcase } from '@/components/sections/SkillsShowcase';
import { ProjectCarousel } from '@/components/sections/ProjectCarousel';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { ContactForm } from '@/components/sections/ContactForm';
import { StyleAssistant } from '@/components/ai/StyleAssistant';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="container mx-auto flex-1 space-y-16 px-4 py-8 md:space-y-24 md:px-6 md:py-12">
        <ProfileSummary />
        <SkillsShowcase />
        <ProjectCarousel />
        <ExperienceTimeline />
        <ContactForm />
      </main>
      <Footer />
      <StyleAssistant />
    </div>
  );
}
