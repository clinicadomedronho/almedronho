export type Product = {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  price: number;
  abv: number;
  volume: number;
  tastingNotes: string[];
  description: string;
  images: string[];
  stock: number;
  featured?: boolean;
};

export type Recipe = {
  id: string;
  name: string;
  imageId: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string;
  glassware: string;
  garnish: string;
};

export type AIRecipe = {
    name: string;
    ingredients: string;
    instructions: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
};

export type PressMention = {
    outlet: string;
    quote: string;
}
