'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { personalizedCocktailRecommendations } from '@/ai/flows/personalized-cocktail-recommendations';
import type { CocktailRecommendationsOutput } from '@/ai/flows/personalized-cocktail-recommendations';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Loader2 } from 'lucide-react';
import { RecipeCard } from './recipe-card';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const formSchema = z.object({
  ingredients: z.string().min(3, { message: 'Please list at least one ingredient.' }),
  difficulty: z.enum(['Easy', 'Medium', 'Hard']),
});

export function RecipeForm() {
  const [recommendations, setRecommendations] = useState<CocktailRecommendationsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: '',
      difficulty: 'Easy',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setRecommendations(null);
    try {
      const result = await personalizedCocktailRecommendations(values);
      setRecommendations(result);
    } catch (e) {
      setError('Sorry, we couldn\'t generate recommendations at this time. Please try again later.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
                <FormField
                    control={form.control}
                    name="ingredients"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-lg font-semibold">Available Ingredients</FormLabel>
                        <FormControl>
                            <Textarea
                            placeholder="e.g., lime juice, sugar syrup, egg white"
                            className="min-h-[120px]"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="difficulty"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                        <FormLabel className="text-lg font-semibold">Desired Difficulty</FormLabel>
                        <FormControl>
                            <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                            >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl><RadioGroupItem value="Easy" /></FormControl>
                                <FormLabel className="font-normal">Easy</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl><RadioGroupItem value="Medium" /></FormControl>
                                <FormLabel className="font-normal">Medium</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl><RadioGroupItem value="Hard" /></FormControl>
                                <FormLabel className="font-normal">Hard</FormLabel>
                            </FormItem>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
          <Button type="submit" size="lg" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? 'Crafting...' : 'Generate Cocktails'}
          </Button>
        </form>
      </Form>
      
      <div className="mt-12">
        {isLoading && (
            <div className="text-center text-muted-foreground">
                <Loader2 className="mx-auto h-8 w-8 animate-spin mb-2" />
                <p>Our mixologist is thinking...</p>
            </div>
        )}
        {error && (
            <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}
        {recommendations && (
            <div>
                <h3 className="text-2xl font-bold mb-6 text-center font-headline">Your Personalized Recommendations</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recommendations.recipes.map((recipe, index) => (
                        <RecipeCard key={index} recipe={recipe} />
                    ))}
                </div>
            </div>
        )}
      </div>
    </div>
  );
}
