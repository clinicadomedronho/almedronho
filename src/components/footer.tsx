import Link from 'next/link';
import { Logo } from './logo';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Facebook, Instagram, Linkedin, Send } from 'lucide-react';

const footerLinks = {
  company: [
    { href: '/#about', label: 'About / Mission' },
    { href: '/production', label: 'Production' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Us' },
  ],
  support: [
    { href: '/where-to-buy', label: 'Where to Buy' },
    { href: '/partners', label: 'B2B / Partnerships' },
    { href: '/faq', label: 'FAQ' },
    { href: '/research', label: 'Research & Resources' },
  ],
  legal: [
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/cookies', label: 'Cookie Policy' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <div className="h-12 w-12"><Logo /></div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Al-Medronho, Herdade da Bagagem, Aljezur, Portugal.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
              <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 col-span-1 lg:col-span-2">
            <div>
              <h3 className="font-headline font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map(link => (
                  <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map(link => (
                  <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map(link => (
                  <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.label}</Link></li>
                ))}
                 <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">Complaints Book</a></li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-1">
            <h3 className="font-headline font-semibold mb-4">Join our newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Get updates on new releases, events, and the world of Medronho.</p>
            <form className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" className="bg-background"/>
                <Button type="submit" size="icon"><Send className="h-4 w-4" /></Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Al-Medronho Artisanal Distillery. All Rights Reserved.</p>
          <p className="mt-2">Drink responsibly. For ages 18 and over.</p>
        </div>
      </div>
    </footer>
  );
}
