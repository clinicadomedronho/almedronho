import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Recipe, AIRecipe } from '@/lib/types';
import { ChefHat, BarChart3, Puzzle } from 'lucide-react';

type RecipeCardProps = {
  recipe: Recipe | AIRecipe;
};

function isAIRecipe(recipe: Recipe | AIRecipe): recipe is AIRecipe {
    return 'instructions' in recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const image = 'imageId' in recipe ? PlaceHolderImages.find(p => p.id === recipe.imageId) : PlaceHolderImages.find(p => p.id === 'default-cocktail');

  return (
    <Card className="overflow-hidden flex flex-col h-full">
      {image && (
        <div className="relative h-48 w-full">
            <Image
                src={image.imageUrl}
                alt={recipe.name}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover"
            />
        </div>
      )}
      <CardHeader>
        <CardTitle>{recipe.name}</CardTitle>
        <CardDescription className="flex items-center gap-4 pt-2">
            <Badge variant="outline" className="flex items-center gap-1"><Puzzle className="h-3 w-3"/> {recipe.difficulty}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="flex-grow">
          <h4 className="font-semibold mb-2 flex items-center gap-2"><ChefHat className="h-4 w-4 text-primary" /> Ingredients</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {recipe.ingredients.split(',').map((ingredient, index) => (
              <li key={index}>{ingredient.trim()}</li>
            ))}
          </ul>
          {isAIRecipe(recipe) && (
             <div className="mt-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2"><BarChart3 className="h-4 w-4 text-primary" /> Instructions</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{recipe.instructions}</p>
             </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
