import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-featured e-commerce site built with Next.js, Stripe for payments, and a custom CMS for product management.',
    image: 'https://picsum.photos/600/400?random=1',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'online store',
  },
  {
    title: 'Project Management Tool',
    description:
      'A collaborative platform for teams to manage tasks, track progress, and communicate effectively, inspired by Trello.',
    image: 'https://picsum.photos/600/400?random=2',
    tags: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'dashboard tasks',
  },
  {
    title: 'Personal Blog',
    description:
      'A statically generated blog using Astro and Markdown, focusing on performance and SEO. Features dark mode and RSS feeds.',
    image: 'https://picsum.photos/600/400?random=3',
    tags: ['Astro', 'Markdown', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'blog article',
  },
];

export function ProjectCarousel() {
  return (
    <section id="projects" className="w-full">
      <div className="mb-8 text-center">
        <h2 className="font-headline text-3xl font-bold">My Projects</h2>
        <p className="text-muted-foreground">A selection of my recent work.</p>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="h-full p-1">
                <Card className="flex h-full flex-col overflow-hidden">
                  <CardHeader className="p-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-48 w-full object-cover"
                      data-ai-hint={project.aiHint}
                    />
                  </CardHeader>
                  <CardContent className="flex-1 space-y-3 p-6">
                    <CardTitle>{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <div className="flex w-full justify-between gap-2">
                      <Button asChild variant="outline" className="w-full">
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </Link>
                      </Button>
                      <Button asChild className="w-full">
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
}
