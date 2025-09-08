import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function ProfileSummary() {
  return (
    <section id="about" className="w-full">
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-1">
            <Image
              src="https://picsum.photos/600/800"
              alt="Profile Picture"
              width={600}
              height={800}
              className="h-full w-full object-cover object-top"
              data-ai-hint="professional portrait"
              priority
            />
          </div>
          <div className="flex flex-col justify-center md:col-span-2">
            <CardHeader>
              <p className="font-medium text-primary">Hello, I'm</p>
              <CardTitle className="font-headline text-4xl md:text-5xl">
                Jane Doe
              </CardTitle>
              <CardDescription className="text-lg">
                A Passionate Full-Stack Web Developer from San Francisco, CA
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-muted-foreground">
                <p>
                  With over 5 years of hands-on experience, I specialize in
                  building robust and scalable web applications. My journey in
                  tech has been driven by a passion for solving complex
                  problems and creating intuitive, user-friendly experiences.
                </p>
                <p>
                  I'm proficient in a wide range of technologies, from
                  front-end frameworks like React and Next.js to back-end
                  systems with Node.js and databases. I thrive in collaborative
                  environments and am always eager to learn new things.
                </p>
              </div>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </CardContent>
          </div>
        </div>
      </Card>
    </section>
  );
}
