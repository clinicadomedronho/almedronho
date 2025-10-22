import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Clínica do Medronho — Medronho artesanal de Aljezur, Algarve.',
  description: 'Clínica do Medronho — Medronho artesanal de Aljezur, Algarve.',
  icons: {
    icon: '/logo-medronho-folha.png',
    shortcut: '/logo-medronho-folha.png',
    apple: '/logo-medronho-folha.png',
  },
  themeColor: '#F5EEE2',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        {/* Fontes Google */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />

        {/* Ícones universais */}
        <link rel="icon" type="image/png" href="/logo-medronho-folha.png" />
        <link rel="apple-touch-icon" href="/logo-medronho-folha.png" />
        <meta name="theme-color" content="#F5EEE2" />
      </head>

      <body
        className={cn(
          // antes: 'min-h-screen bg-background font-body antialiased'
          'min-h-screen bg-transparent font-body antialiased'
        )}
      >
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
