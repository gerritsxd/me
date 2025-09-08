"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Sparkles } from 'lucide-react';

import {
  suggestSkillsShowcaseContent,
  type SuggestSkillsShowcaseContentOutput,
} from '@/ai/flows/suggest-skills-showcase-content';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';

const formSchema = z.object({
  jobTitles: z
    .string()
    .min(3, { message: 'Please provide at least one job title.' }),
  projectDescriptions: z
    .string()
    .min(10, { message: 'Please describe at least one project.' }),
});

const proficiencyToValue = (proficiency: string) => {
  switch (proficiency.toLowerCase()) {
    case 'beginner':
      return 30;
    case 'intermediate':
      return 60;
    case 'advanced':
      return 80;
    case 'expert':
      return 95;
    default:
      return 50;
  }
};

export function SkillsSuggester() {
  const { toast } = useToast();
  const [suggestedSkills, setSuggestedSkills] =
    useState<SuggestSkillsShowcaseContentOutput>([]);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { jobTitles: '', projectDescriptions: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestedSkills([]);
    try {
      const result = await suggestSkillsShowcaseContent({
        jobTitles: values.jobTitles.split('\n').filter(Boolean),
        projectDescriptions: values.projectDescriptions.split('\n').filter(Boolean),
      });
      setSuggestedSkills(result);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Suggestion Failed',
        description: 'There was an error suggesting skills. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Suggest Skills</CardTitle>
          <CardDescription>
            Provide your job titles and project descriptions (one per line). Our
            AI will suggest relevant skills and proficiency levels.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="jobTitles"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Titles</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Senior Web Developer&#10;Frontend Engineer"
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectDescriptions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Descriptions</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Built an e-commerce platform with Next.js and Stripe.&#10;Developed a real-time chat app using WebSockets."
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Suggest Skills
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {(isLoading || suggestedSkills.length > 0) && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="text-primary" />
              Suggested Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 w-1/2 animate-pulse rounded bg-muted"></div>
                    <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                {suggestedSkills.map((skill) => (
                  <div key={skill.skill}>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="font-medium">{skill.skill}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.proficiency}
                      </span>
                    </div>
                    <Progress
                      value={proficiencyToValue(skill.proficiency)}
                      aria-label={`${skill.skill} proficiency`}
                    />
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
