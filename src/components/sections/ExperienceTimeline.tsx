import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

const timelineItems = [
  {
    type: 'work',
    title: 'Senior Web Developer',
    institution: 'Tech Solutions Inc.',
    date: 'Jan 2020 - Present',
    description:
      'Led the development of a new client-facing portal using React and TypeScript. Mentored junior developers and improved code quality through reviews and best practices.',
  },
  {
    type: 'work',
    title: 'Mid-Level Developer',
    institution: 'Web Innovators',
    date: 'Jun 2017 - Dec 2019',
    description:
      'Developed and maintained features for a large-scale SaaS application. Collaborated with cross-functional teams to deliver high-quality software.',
  },
  {
    type: 'education',
    title: 'B.S. in Computer Science',
    institution: 'University of California, Berkeley',
    date: 'Sep 2013 - May 2017',
    description:
      'Graduated with honors. Focused on software engineering, algorithms, and web technologies. President of the coding club.',
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full scroll-mt-20">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl">
        Work & Education
      </h2>
      <div className="relative pl-6 after:absolute after:inset-y-0 after:left-8 after:w-0.5 after:bg-border">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className="relative grid grid-cols-[auto_1fr] items-start gap-x-6 pb-12 last:pb-0"
          >
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-background">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background">
                  {item.type === 'work' ? (
                    <Briefcase className="h-6 w-6 text-primary" />
                  ) : (
                    <GraduationCap className="h-6 w-6 text-primary" />
                  )}
                </div>
            </div>
            <div className="pt-2">
              <p className="text-sm text-muted-foreground">{item.date}</p>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="font-medium text-primary">{item.institution}</p>
              <p className="mt-2 text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
