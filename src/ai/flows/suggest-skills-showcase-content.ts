'use server';

/**
 * @fileOverview This file defines a Genkit flow to suggest skills and proficiency levels
 *  for a user's skills showcase section in their portfolio, based on job titles and project descriptions.
 *
 * - suggestSkillsShowcaseContent - The main function to trigger the skill suggestion flow.
 * - SuggestSkillsShowcaseContentInput - The input type for the suggestSkillsShowcaseContent function.
 * - SuggestSkillsShowcaseContentOutput - The output type for the suggestSkillsShowcaseContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSkillsShowcaseContentInputSchema = z.object({
  jobTitles: z.array(z.string()).describe('List of job titles held by the user.'),
  projectDescriptions: z
    .array(z.string())
    .describe('List of descriptions for projects the user has worked on.'),
});

export type SuggestSkillsShowcaseContentInput = z.infer<
  typeof SuggestSkillsShowcaseContentInputSchema
>;

const SuggestSkillsShowcaseContentOutputSchema = z.array(
  z.object({
    skill: z.string().describe('The name of the skill.'),
    proficiency: z
      .string()
      .describe(
        'The proficiency level of the skill (e.g., Beginner, Intermediate, Expert).'
      ),
    icon: z.string().optional().describe('An optional icon name for the skill.'),
  })
);

export type SuggestSkillsShowcaseContentOutput = z.infer<
  typeof SuggestSkillsShowcaseContentOutputSchema
>;

export async function suggestSkillsShowcaseContent(
  input: SuggestSkillsShowcaseContentInput
): Promise<SuggestSkillsShowcaseContentOutput> {
  return suggestSkillsShowcaseContentFlow(input);
}

const suggestSkillsShowcaseContentPrompt = ai.definePrompt({
  name: 'suggestSkillsShowcaseContentPrompt',
  input: {schema: SuggestSkillsShowcaseContentInputSchema},
  output: {schema: SuggestSkillsShowcaseContentOutputSchema},
  prompt: `Based on the following job titles and project descriptions, suggest a list of skills and their corresponding proficiency levels (Beginner, Intermediate, Expert) for a web developer's portfolio. Include an appropriate icon for each skill, if possible. Respond in JSON format.

Job Titles: {{jobTitles}}
Project Descriptions: {{projectDescriptions}}`,
});

const suggestSkillsShowcaseContentFlow = ai.defineFlow(
  {
    name: 'suggestSkillsShowcaseContentFlow',
    inputSchema: SuggestSkillsShowcaseContentInputSchema,
    outputSchema: SuggestSkillsShowcaseContentOutputSchema,
  },
  async input => {
    const {output} = await suggestSkillsShowcaseContentPrompt(input);
    return output!;
  }
);
