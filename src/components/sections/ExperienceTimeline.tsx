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
    <section id="experience" className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>Work & Education</CardTitle>
          <CardDescription>
            My professional journey and academic background.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative pl-8 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-border">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="relative pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background">
                  {item.type === 'work' ? (
                    <Briefcase className="h-4 w-4 text-primary" />
                  ) : (
                    <GraduationCap className="h-4 w-4 text-primary" />
                  )}
                </div>
                <div className="pl-4">
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="font-medium text-primary">{item.institution}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
