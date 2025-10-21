import { RecipeForm } from '@/components/recipe-form';
import { RecipeCard } from '@/components/recipe-card';
import { seedRecipes } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recipes & Cocktails',
  description: 'Discover delicious cocktails you can make with Al-Medronho. Find your new favorite or let our AI mixologist create one for you.',
};

export default function RecipesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Recipes & Cocktails</h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          Discover the versatility of Al-Medronho. From classic twists to modern creations, here are a few of our favorites. Or, create your own with our personal mixologist tool.
        </p>
      </div>
      
      <div className="border-b-2 border-dashed border-border mb-12 pb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Signature Collection</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seedRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>

      <div className="bg-card p-6 sm:p-8 md:p-12 rounded-lg shadow-lg border">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Your Personal Mixologist</h2>
            <p className="mb-8 max-w-2xl mx-auto text-muted-foreground">
              Have some ingredients on hand? Let our AI-powered tool craft a unique Medronho cocktail just for you.
            </p>
        </div>
        <RecipeForm />
      </div>
    </div>
  );
}
