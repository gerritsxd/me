import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skills = [
  { name: 'HTML5 & CSS3', level: 95 },
  { name: 'JavaScript & TypeScript', level: 90 },
  { name: 'React & Next.js', level: 92 },
  { name: 'Node.js & Express', level: 85 },
  { name: 'SQL & NoSQL Databases', level: 88 },
  { name: 'UI/UX Design Principles', level: 80 },
  { name: 'RESTful APIs & GraphQL', level: 87 },
  { name: 'Docker & CI/CD', level: 75 },
];

export function SkillsShowcase() {
  return (
    <section id="skills" className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>Skills Showcase</CardTitle>
          <CardDescription>My technical proficiency and expertise.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <Progress
                  value={skill.level}
                  aria-label={`${skill.name} proficiency`}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
