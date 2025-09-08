"use client";

import { Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProfileSummaryGenerator } from './ProfileSummaryGenerator';
import { SkillsSuggester } from './SkillsSuggester';

export function StyleAssistant() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
          size="icon"
        >
          <Wand2 className="h-6 w-6" />
          <span className="sr-only">Open Style Assistant</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full overflow-y-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
        <SheetHeader>
          <SheetTitle>AI Style Assistant</SheetTitle>
          <SheetDescription>
            Generate content for your portfolio using AI.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <Tabs defaultValue="summary">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="summary">Profile Summary</TabsTrigger>
              <TabsTrigger value="skills">Skills Showcase</TabsTrigger>
            </TabsList>
            <TabsContent value="summary" className="mt-4">
              <ProfileSummaryGenerator />
            </TabsContent>
            <TabsContent value="skills" className="mt-4">
              <SkillsSuggester />
            </TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  );
}
