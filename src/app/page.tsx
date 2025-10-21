'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

// === Conteúdo (PT) ===
const content = {
  pt: {
    nav: {
      inicio: 'Início',
      historia: 'História',
      oMedronho: 'O Medronho',
      destilaria: 'A Destilaria',
      galeria: 'Galeria',
      contactos: 'Contactos',
    },
    hero: { button1: 'O Medronho', button2: 'Fala Connosco' },

    history: {
      title: 'A História',
      text:
        'No coração de Aljezur, entre o mar e a serra, nasce o Al-Medronho — uma homenagem à tradição e ao saber antigo que moldam a alma do Algarve. O medronho sempre foi mais do que uma bebida: é uma herança passada em silêncio de geração em geração, feita com tempo, respeito e fogo. É o retrato da vida rural, onde cada fruto é colhido à mão e cada gota conta uma história. O nome “Al-Medronho” evoca essa fusão de culturas que caracteriza a região. O prefixo árabe “Al-” recorda as origens e a história de Aljezur, terra de encontros e influências. Queremos preservar esse espírito — unir tradição e autenticidade, natureza e cultura. Cada garrafa é um tributo ao Algarve mais verdadeiro: rústico, puro e cheio de alma.',
    },

    medronho: {
      title: 'O Medronho',
      description:
        'O Al-Medronho é o resultado de um processo simples, natural e honesto. Usamos apenas frutos maduros colhidos à mão, deixados a fermentar naturalmente, e destilamos em alambique de cobre, como manda a tradição. Não há pressas, nem atalhos. Apenas o tempo, o fogo e o saber. O resultado é um medronho forte, mas suave, com aroma intenso e sabor limpo — uma expressão fiel da terra de onde vem. Sem misturas, sem aditivos, sem compromissos. Cada garrafa reflete um ciclo completo da natureza e o respeito por tudo o que ela nos dá.',
    },

    distillery: {
      title: 'A Destilaria',
      text:
        'A nossa destilaria é o coração do projeto — um espaço simples, funcional e feito com as próprias mãos, onde tradição e autenticidade se encontram. Aqui, o alambique de cobre e o fogo são os verdadeiros mestres. O medronho nasce da fermentação natural em 10 recipientes de fermentação, sem químicos nem aditivos. Depois, é destilado lentamente, gota a gota, até atingir o ponto perfeito. A destilaria está registada no SIR – Sistema da Indústria Responsável como estabelecimento de tipo 3, garantindo que todo o processo cumpre as normas de segurança e qualidade, sem perder a alma artesanal que nos define. É um lugar onde o tempo trabalha connosco — e onde cada destilação é um ritual de paciência, respeito e paixão.',
    },

    gallery: { title: 'Galeria' },

    contact: {
      title: 'Contactos',
      email: 'clinicadomedronho@gmail.com',
      phone: '+351 919 854 419',
      form: { name: 'Nome', email: 'Email', message: 'Mensagem', send: 'Enviar' },
    },

    footer: { copyright: '© Clínica do Medronho — Aljezur' },
  },
} as const;

type Lang = 'pt';

// === Constantes ===
const BEIGE = '#F5EEE2';
const LOGO_SRC = '/logo medronho folha.png';
const SECTION_VH = 'min-h-[100vh]';
const IMAGE_FRAME =
  'group relative w-full h-[320px] md:h-[420px] rounded-lg overflow-hidden shadow-lg transition-shadow bg-white hover:shadow-xl';
const CONTENT_WRAPPER = 'relative z-10 container mx-auto px-4';

// === Padrão de fundo ===
function useFixedPatternStyles() {
  const positions = [
    '6% 10%', '15% 78%', '22% 30%', '32% 65%', '45% 12%', '58% 82%',
    '68% 35%', '78% 70%', '12% 50%', '86% 16%', '38% 84%', '72% 8%',
    '24% 86%', '55% 58%', '64% 18%', '8% 60%', '48% 42%', '90% 50%',
  ];
  const sizes = [
    '64px','42px','54px','50px','40px','60px',
    '46px','52px','38px','50px','44px','36px',
    '34px','48px','40px','32px','36px','44px',
  ];
  const images = positions.map(() => `url('${LOGO_SRC}')`).join(', ');
  const pos = positions.join(', ');
  const siz = sizes.join(', ');
  const att = positions.map(() => 'fixed').join(', ');
  const rep = positions.map(() => 'no-repeat').join(', ');

  return useMemo(
    () => ({
      backgroundImage: images,
      backgroundPosition: pos,
      backgroundSize: siz,
      backgroundAttachment: att,
      backgroundRepeat: rep,
      opacity: 0.07,
      pointerEvents: 'none' as const,
    }),
    [images, pos, siz, att, rep]
  );
}

function SectionFixedPattern() {
  const styles = useFixedPatternStyles();
  return <div aria-hidden="true" className="absolute inset-0 z-0" style={styles} />;
}

export default function Home() {
  const [lang] = useState<Lang>('pt');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = content[lang];
  const handleMenuLinkClick = () => setIsMenuOpen(false);

  return (
    <div className="bg-background text-foreground font-body overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-secondary shadow-md h-14">
        <div className="container mx-auto h-full px-4 flex items-center justify-between">
          <button onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-5 w-5 text-gray-700" />
          </button>
          <Link href="#inicio" className="ml-auto flex items-center">
            <Image src="/clinic logo.png" alt="Clínica do Medronho" width={150} height={48} priority />
          </Link>
        </div>
      </header>

      {/* Menu Mobile */}
      <div
        className={cn(
          'fixed top-0 left-0 h-full w-64 bg-secondary shadow-lg z-[60] transform transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex justify-between items-center p-4 border-b border-primary/20">
          <Image src="/clinic logo.png" alt="Clínica do Medronho" width={150} height={48} priority />
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="h-6 w-6 text-primary" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link href="#inicio" onClick={handleMenuLinkClick}>{t.nav.inicio}</Link>
          <Link href="#historia" onClick={handleMenuLinkClick}>{t.nav.historia}</Link>
          <Link href="#medronho" onClick={handleMenuLinkClick}>{t.nav.oMedronho}</Link>
          <Link href="#destilaria" onClick={handleMenuLinkClick}>{t.nav.destilaria}</Link>
          <Link href="#galeria" onClick={handleMenuLinkClick}>{t.nav.galeria}</Link>
          <Link href="#contactos" onClick={handleMenuLinkClick}>{t.nav.contactos}</Link>
        </nav>
      </div>
      {isMenuOpen && <div onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-black/30 z-40" />}

      {/* HERO */}
      <section id="inicio" className={`relative ${SECTION_VH} flex items-start`} style={{ backgroundColor: BEIGE }}>
        <SectionFixedPattern />
        <div className={CONTENT_WRAPPER}>
          <div className="mx-auto max-w-4xl flex flex-col items-center text-gray-900 pt-16 md:pt-20">
            <Image src="/logo medronho castelo.png" alt="selo" width={520} height={220} priority />
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 mt-0">
              <Button asChild size="lg" variant="default"><Link href="#medronho">{t.hero.button1}</Link></Button>
              <Button asChild size="lg" variant="secondary"><Link href="#contactos">{t.hero.button2}</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* História */}
      <section id="historia" className={`relative ${SECTION_VH} flex items-center`}>
        <div className={CONTENT_WRAPPER}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-headline mb-4">{t.history.title}</h2>
              <p>{t.history.text}</p>
            </div>
            <div className={IMAGE_FRAME} style={{ aspectRatio: '4 / 3' }}>
              <Image
                src="/a1.jpg"
                alt="Colheita"
                fill
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* O Medronho */}
      <section id="medronho" className={`relative ${SECTION_VH} flex items-center`} style={{ backgroundColor: BEIGE }}>
        <SectionFixedPattern />
        <div className={CONTENT_WRAPPER}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-last md:order-first">
              <div className={IMAGE_FRAME} style={{ aspectRatio: '4 / 3' }}>
                <Image
                  src="/4.png"
                  alt="Garrafa de Medronho"
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  priority
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-headline mb-4">{t.medronho.title}</h2>
              <p>{t.medronho.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* A Destilaria */}
      <section id="destilaria" className={`relative ${SECTION_VH} flex items-center`}>
        <div className={CONTENT_WRAPPER}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-headline mb-4">{t.distillery.title}</h2>
              <p>{t.distillery.text}</p>
            </div>
            <div className={IMAGE_FRAME} style={{ aspectRatio: '4 / 3' }}>
              <Image
                src="/a3.jpg"
                alt="Alambique"
                fill
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className={`relative ${SECTION_VH} flex items-center`} style={{ backgroundColor: BEIGE }}>
        <SectionFixedPattern />
        <div className={CONTENT_WRAPPER}>
          <div className="text-center pt-6 md:pt-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <h2 className="text-4xl font-headline">{t.gallery.title}</h2>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Abrir Instagram">
                <Instagram className="h-7 w-7" />
              </a>
            </div>

            {/* Iframe responsivo com o teu SRC */}
            <div className="w-full relative">
              <iframe
                id="embedsocial-feed"
                src="https://embedsocial.com/api/pro_hashtag/49aa68a88f533fd749123bb88fc55dd3182c16da"
                className="w-full"
                style={{ border: 0, height: '600px' }}
                scrolling="no"
                loading="lazy"
                allowTransparency
              />
              {/* Overlay não bloqueia interações */}
              <div className="absolute inset-0 z-10 cursor-default" style={{ pointerEvents: 'none' }} />
            </div>

            {/* Scripts do EmbedSocial */}
            <Script
              src="https://embedsocial.com/js/iframe.js"
              strategy="afterInteractive"
              onLoad={() => {
                if (typeof window !== 'undefined' && (window as any).iFrameResize) {
                  (window as any).iFrameResize({}, '#embedsocial-feed');
                }
              }}
            />
          </div>
        </div>
      </section>

      {/* Contactos */}
      <section id="contactos" className="relative py-16">
        <div className={CONTENT_WRAPPER}>
          <h2 className="text-4xl font-headline text-center mb-12">{t.contact.title}</h2>
          <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <form className="rounded-xl bg-white shadow-md ring-1 ring-black/5 p-6 space-y-4">
                <Input type="text" placeholder={t.contact.form.name} />
                <Input type="email" placeholder={t.contact.form.email} />
                <Textarea placeholder={t.contact.form.message} className="min-h-[110px]" />
                <Button type="submit" className="w-full">{t.contact.form.send}</Button>
              </form>

              <div className="rounded-xl bg-white shadow-md ring-1 ring-black/5 p-6">
                <div className="space-y-2 text-gray-900">
                  <p>Email: <a href={`mailto:${t.contact.email}`} className="text-primary hover:underline">{t.contact.email}</a></p>
                  <p>Telefone: <a href={`tel:${t.contact.phone.replace(/\s/g, '')}`} className="text-primary hover:underline">{t.contact.phone}</a></p>
                  <p>Morada: Aljezur, Vales, Herdade da Bagagem</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-start">
              <div className="rounded-xl overflow-hidden shadow-md ring-1 ring-black/5 w-full max-w-[600px] h-[360px] md:h-[450px]">
                <iframe
                  title="Localização da Destilaria"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2607.684606838381!2d-8.837697827084142!3d37.298597534666456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-PT!2spt!4v1760693140246!5m2!1spt-PT!2spt"
                  className="w-full h-full block"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm opacity-90">
            {t.footer.copyright}
          </p>
        </div>
      </footer>

      {/* === Estilos mobile (≤768px) === */}
      <style jsx global>{`
        @media (max-width: 768px) {
          section {
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;
          }

          #inicio {
            min-height: auto !important;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 6rem;
            padding-bottom: 6rem;
          }

          h2 {
            text-align: center;
            margin-bottom: 1.25rem;
          }

          p {
            text-align: justify;
            line-height: 1.8;
          }

          /* “O Medronho” centrado no mobile */
          #medronho .grid {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 2rem;
          }

          #medronho p {
            max-width: 90%;
            margin-left: auto;
            margin-right: auto;
          }

          /* Galeria: altura menor no mobile para evitar “vazio” */
          #galeria iframe#embedsocial-feed {
            height: 420px !important;
          }

          .container {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}
