import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export function ProjectCarousel() {
  return (
    <section id="projects" className="w-full">
      <div className="mb-8">
        <h2 className="font-headline text-3xl font-bold">My Projects</h2>
        <p className="text-muted-foreground">A selection of my recent work.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>// Web Systems & Interaction Design</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <CardDescription>
              I design and build interactive web platforms, focusing on dynamic visual mapping tools, responsive UI/UX, and admin interfaces for content management.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>// Data Visualization & Infographics</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <CardDescription>
            I engineer sophisticated data visualizations and infographics that transform complex datasets into clear, compelling narratives. My work involves architecting interactive, data-driven documents using libraries like D3.js to render dynamic SVG and Canvas elements. I specialize in creating programmatic designs with robust layout logic—from hierarchical tree structures to force-directed graphs—and apply information design principles to ensure clarity and impact for both digital and print media.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>// Emerging Computation & Theory</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <CardDescription>
            My work explores novel computing frontiers, including quantum computation concepts, neuromorphic principles, and their architectural implications for task efficiency.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>// AI & Transcription Systems</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <CardDescription>
            I build and optimize speech-to-text pipelines using large language models, managing GPU acceleration and memory efficiency for fast, accurate transcription of long-form content.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
       <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>// Latest Project</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Check out my latest work in progress.</p>
              <Button asChild>
                <Link href="http://149.202.53.23:8080" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
    </section>
  );
}
