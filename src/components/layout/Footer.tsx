import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-muted py-6">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} FolioForge. All rights reserved.
        </p>
        <div className="mt-4 flex items-center space-x-2 md:mt-0">
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
