import type { Product, Recipe, PressMention } from './types';

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Al-Medronho Original',
    slug: 'al-medronho',
    categoryId: 'spirits',
    price: 39.90,
    abv: 40,
    volume: 700,
    tastingNotes: ['Fruity', 'Smooth', 'Earthy'],
    description: 'The flagship spirit of our distillery. Carefully fermented and slowly distilled in copper alembics for a remarkably smooth and fruity profile that captures the essence of Aljezur.',
    images: ['al-medronho-bottle', 'al-medronho-glass'],
    stock: 150,
    featured: true,
  },
  {
    id: '2',
    name: 'Al-Medronho Reserva',
    slug: 'al-medronho-reserva',
    categoryId: 'spirits',
    price: 54.90,
    abv: 42,
    volume: 700,
    tastingNotes: ['Oak', 'Vanilla', 'Complex'],
    description: 'Aged in Portuguese oak barrels, this special edition offers a complex and refined character with notes of vanilla and spice. A true sipping spirit.',
    images: ['reserva-bottle', 'reserva-glass'],
    stock: 45,
    featured: true,
  },
];

export const seedRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Aljezur Sour',
    imageId: 'aljezur-sour-cocktail',
    difficulty: 'Medium',
    ingredients: '60ml Al-Medronho, 30ml Lemon Juice, 15ml Sugar Syrup, 1 Egg White, Angostura Bitters',
    glassware: 'Coupe',
    garnish: 'Lemon Twist & Bitters',
  },
  {
    id: '2',
    name: 'Medronho & Tonic',
    imageId: 'medronho-tonic-cocktail',
    difficulty: 'Easy',
    ingredients: '50ml Al-Medronho, 150ml Premium Tonic Water',
    glassware: 'Highball',
    garnish: 'Orange Slice & Rosemary Sprig',
  },
  {
    id: '3',
    name: 'Forest Spritz',
    imageId: 'forest-spritz-cocktail',
    difficulty: 'Easy',
    ingredients: '40ml Al-Medronho, 20ml Elderflower Liqueur, 100ml Prosecco, Splash of Soda',
    glassware: 'Wine Glass',
    garnish: 'Mint Sprig & Berries',
  },
];

export const pressMentions: PressMention[] = [
  {
    outlet: 'Vino Vogue',
    quote: 'A stunning debut that puts Medronho back on the map for fine spirits.',
  },
  {
    outlet: 'The Spirit Guide',
    quote: 'Al-Medronho captures the wild spirit of the Algarve in a bottle. Incredibly smooth.',
  },
  {
    outlet: 'Lisbon Culinary Times',
    quote: 'From the first sip, you can taste the craft and care. A must-try for any spirit enthusiast.',
  },
    {
    outlet: 'Portugal Traveler',
    quote: 'The distillery tour is an experience in itself, capped off with a world-class tasting.',
  },
];
