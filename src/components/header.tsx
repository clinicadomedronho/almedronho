'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { ShoppingCart, Globe, Menu, User } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const navLinks = [
  { href: '/medronho-101', label: 'Medronho 101' },
  { href: '/production', label: 'Production' },
];

const productsLinks = [
    { id: 'al-medronho', title: 'Al-Medronho', description: 'Our flagship smooth & fruity spirit.' },
    { id: 'special-editions', title: 'Special Editions', description: 'Limited releases and unique batches.' },
    { id: 'gift-packs', title: 'Gift Packs', description: 'Curated sets for the perfect gift.' },
    { id: 'merch', title: 'Merch', description: 'Apparel and accessories.' },
];

const moreLinks = [
    { href: '/recipes', label: 'Recipes & Cocktails' },
    { href: '/visits', label: 'Visits & Experiences' },
    { href: '/research', label: 'Research & Resources' },
    { href: '/blog', label: 'Blog' },
    { href: '/store', label: 'Store' },
    { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const alMedronhoImage = PlaceHolderImages.find(p => p.id === 'al-medronho-bottle');

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Homepage">
            <div className="h-10 w-10">
                <Logo />
            </div>
            <span className="font-bold font-headline text-xl hidden sm:inline-block">Al-Medronho</span>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink active={pathname.startsWith(link.href)} className={navigationMenuTriggerStyle()}>
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-[.75fr_1fr]">
                  <div className="row-span-3 flex items-center justify-center bg-secondary rounded-md p-4">
                    {alMedronhoImage && (
                        <Image src={alMedronhoImage.imageUrl} alt="Al-Medronho Bottle" width={100} height={200} data-ai-hint={alMedronhoImage.imageHint} className="object-contain" />
                    )}
                  </div>
                  {productsLinks.map((link) => (
                    <NavigationMenuLink asChild key={link.id}>
                      <Link href={`/products/${link.id}`} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{link.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{link.description}</p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {moreLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink active={pathname.startsWith(link.href)} className={navigationMenuTriggerStyle()}>
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Language</span>
            </Button>
            <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
            </Button>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col h-full">
                  <div className="border-b pb-4">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="h-10 w-10"><Logo /></div>
                      <span className="font-bold font-headline text-xl">Al-Medronho</span>
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-4 py-4 flex-1 overflow-y-auto">
                    {[...navLinks, ...moreLinks].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          'text-lg font-medium',
                          pathname.startsWith(link.href) ? 'text-primary' : 'text-muted-foreground'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                     <div className="pt-4 border-t">
                        <p className="text-muted-foreground mb-2">Products</p>
                        {productsLinks.map((link) => (
                            <Link key={link.id} href={`/products/${link.id}`}  onClick={() => setIsMobileMenuOpen(false)} className="block p-2 rounded-md hover:bg-accent">{link.title}</Link>
                        ))}
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
