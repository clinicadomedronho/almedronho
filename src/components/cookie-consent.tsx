'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Cookie } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'cookie_consent_almedronho';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t p-4 z-50 animate-slide-in-from-bottom-full">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
            <Cookie className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
                We use cookies to enhance your experience and analyze site traffic. By continuing to use our site, you agree to our <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
            </p>
        </div>
        <Button onClick={handleAccept} className="w-full sm:w-auto flex-shrink-0">Accept</Button>
      </div>
    </div>
  );
}
