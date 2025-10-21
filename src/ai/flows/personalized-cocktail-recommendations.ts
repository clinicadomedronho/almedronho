'use server';

/**
 * @fileOverview A personalized cocktail recommendation AI agent.
 *
 * - personalizedCocktailRecommendations - A function that generates cocktail recipes based on user preferences.
 * - CocktailPreferencesInput - The input type for the personalizedCocktailRecommendations function.
 * - CocktailRecommendationsOutput - The return type for the personalizedCocktailRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CocktailPreferencesInputSchema = z.object({
  ingredients: z
    .string()
    .describe('A comma-separated list of ingredients available to the user.'),
  difficulty: z
    .enum(['Easy', 'Medium', 'Hard'])
    .describe('The desired difficulty level of the cocktail recipe.'),
});
export type CocktailPreferencesInput = z.infer<typeof CocktailPreferencesInputSchema>;

const CocktailRecommendationsOutputSchema = z.object({
  recipes: z.array(
    z.object({
      name: z.string().describe('The name of the cocktail recipe.'),
      ingredients: z.string().describe('A comma-separated list of ingredients for the cocktail.'),
      instructions: z.string().describe('Instructions for making the cocktail.'),
      difficulty: z.enum(['Easy', 'Medium', 'Hard']).describe('The difficulty level of the cocktail.'),
    })
  ).describe('A list of personalized cocktail recipes based on the user preferences.'),
});
export type CocktailRecommendationsOutput = z.infer<typeof CocktailRecommendationsOutputSchema>;

export async function personalizedCocktailRecommendations(
  input: CocktailPreferencesInput
): Promise<CocktailRecommendationsOutput> {
  return personalizedCocktailRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedCocktailRecommendationsPrompt',
  input: {schema: CocktailPreferencesInputSchema},
  output: {schema: CocktailRecommendationsOutputSchema},
  prompt: `You are a world-class bartender specializing in medronho-based cocktails. A user will provide a list of available ingredients and their desired difficulty level, and you will generate personalized cocktail recipes based on these preferences.

  Available Ingredients: {{{ingredients}}}
  Difficulty Level: {{{difficulty}}}

  Generate a list of cocktail recipes that use medronho and the available ingredients, matching the specified difficulty level. Each recipe should include the cocktail name, a comma-separated list of ingredients, step-by-step instructions, and the difficulty level.

  Format your response as a JSON array of cocktail recipes, each with the following fields:
  - name (string): The name of the cocktail.
  - ingredients (string): A comma-separated list of ingredients.
  - instructions (string): Step-by-step instructions to prepare the cocktail.
  - difficulty (string): The difficulty level of the cocktail (Easy, Medium, or Hard).
  `,
});

const personalizedCocktailRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedCocktailRecommendationsFlow',
    inputSchema: CocktailPreferencesInputSchema,
    outputSchema: CocktailRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
