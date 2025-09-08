import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function ProfileSummary() {
  return (
    <section id="about" className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-4xl md:text-5xl">Gerrit</CardTitle>
          <CardDescription className="text-lg">
            // Web Developer & Tech Enthusiast
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-muted-foreground">
            <p>
              As a frontier explorer in AI, I'm always experimenting with the latest technologies. My background in Artificial Intelligence from VU Amsterdam now fuels my work in computational social science, where I blend deep tech with creative communication. I thrive at the intersection of technology, research, and design, turning complex systems into clear, interactive experiences.
            </p>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">// Research Focus</h3>
              <p>My research blends computational science with a curiosity for how future technologies can reshape energy use and infrastructure. Key interests include:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Comparative analysis of next-gen computing systems (quantum, neuromorphic)</li>
                  <li>Energy efficiency of large-scale computation</li>
                  <li>Visualization of expert knowledge and complex systems</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">// Core Capabilities</h3>
              <p>I leverage modern tools to bridge research, tech, and design, including JavaScript (React, D3.js), Python, AI models (Whisper), and GPU acceleration for performance-critical tasks.</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">// Personal Ethos</h3>
              <p>Driven by curiosity and clarity, I approach technology not just as a tool — but as a medium to interpret the world, challenge conventions, and create thoughtful experiences. I value nuance, practical elegance, and bold ideas grounded in real-world systems.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
