import Link from 'next/link';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-muted py-6">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} @gerritsxd. All rights reserved.
        </p>
        <div className="mt-4 flex items-center space-x-2 md:mt-0">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/gerritsxd" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
