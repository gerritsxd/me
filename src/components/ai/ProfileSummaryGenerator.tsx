"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';

import { generateProfileSummary } from '@/ai/flows/generate-profile-summary';
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

const formSchema = z.object({
  keywords: z.string().min(10, {
    message: 'Please provide at least 10 characters of keywords or bullet points.',
  }),
});

export function ProfileSummaryGenerator() {
  const { toast } = useToast();
  const [generatedSummary, setGeneratedSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { keywords: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedSummary('');
    try {
      const result = await generateProfileSummary({
        keywordsOrBulletPoints: values.keywords,
      });
      setGeneratedSummary(result.profileSummary);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description:
          'There was an error generating your profile summary. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Generate Profile Summary</CardTitle>
          <CardDescription>
            Enter keywords, phrases, or bullet points about your experience and
            skills. Our AI will craft a professional summary for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your keywords or bullet points</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="- 5+ years experience in React&#10;- Led a team of 3 developers&#10;- Specialized in performance optimization"
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
                Generate Summary
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {(isLoading || generatedSummary) && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Summary</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-2">
                <div className="h-4 w-3/4 animate-pulse rounded bg-muted"></div>
                <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
                <div className="h-4 w-5/6 animate-pulse rounded bg-muted"></div>
              </div>
            ) : (
              <p className="whitespace-pre-wrap text-muted-foreground">
                {generatedSummary}
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
