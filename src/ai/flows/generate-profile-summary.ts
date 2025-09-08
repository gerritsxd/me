'use server';

/**
 * @fileOverview AI flow to generate a profile summary based on user-provided keywords or bullet points.
 *
 * - generateProfileSummary - Function to generate the profile summary.
 * - GenerateProfileSummaryInput - Input type for the generateProfileSummary function.
 * - GenerateProfileSummaryOutput - Output type for the generateProfileSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProfileSummaryInputSchema = z.object({
  keywordsOrBulletPoints: z
    .string()
    .describe(
      'Keywords or bullet points summarizing experience and skills.'
    ),
});
export type GenerateProfileSummaryInput = z.infer<typeof GenerateProfileSummaryInputSchema>;

const GenerateProfileSummaryOutputSchema = z.object({
  profileSummary: z.string().describe('The generated profile summary.'),
});
export type GenerateProfileSummaryOutput = z.infer<typeof GenerateProfileSummaryOutputSchema>;

export async function generateProfileSummary(
  input: GenerateProfileSummaryInput
): Promise<GenerateProfileSummaryOutput> {
  return generateProfileSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProfileSummaryPrompt',
  input: {schema: GenerateProfileSummaryInputSchema},
  output: {schema: GenerateProfileSummaryOutputSchema},
  prompt: `You are a professional resume writer. Please generate a compelling profile summary based on the following keywords and bullet points:\n\n{{{keywordsOrBulletPoints}}}`,
});

const generateProfileSummaryFlow = ai.defineFlow(
  {
    name: 'generateProfileSummaryFlow',
    inputSchema: GenerateProfileSummaryInputSchema,
    outputSchema: GenerateProfileSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
