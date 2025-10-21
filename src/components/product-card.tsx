import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Product } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const image = PlaceHolderImages.find(p => p.id === product.images[0]);
  
  return (
    <Card className="group overflow-hidden flex flex-col">
      <CardHeader className="p-0">
        <Link href={`/products/${product.slug}`} className="block overflow-hidden">
          {image && (
            <Image
              src={image.imageUrl}
              alt={product.name}
              data-ai-hint={image.imageHint}
              width={400}
              height={400}
              className="object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
            <h3 className="text-xl font-bold font-headline">
            <Link href={`/products/${product.slug}`}>{product.name}</Link>
            </h3>
            <p className="text-primary font-semibold text-lg mt-1">€{product.price.toFixed(2)}</p>
            <div className="flex flex-wrap gap-2 mt-2">
            {product.tastingNotes.map((note, index) => (
                <Badge key={index} variant="secondary">{note}</Badge>
            ))}
            </div>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{product.description}</p>
        </div>
        <Button asChild className="mt-4 w-full">
          <Link href={`/products/${product.slug}`}>View Product <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </CardContent>
    </Card>
  );
}
