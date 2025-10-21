'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

const AGE_GATE_KEY = 'age_verified_almedronho';

export function AgeGate() {
  const [isVerified, setIsVerified] = useState(true);

  useEffect(() => {
    const ageVerified = sessionStorage.getItem(AGE_GATE_KEY);
    if (ageVerified !== 'true') {
      setIsVerified(false);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleVerification = () => {
    sessionStorage.setItem(AGE_GATE_KEY, 'true');
    setIsVerified(true);
    document.body.style.overflow = 'auto';
  };

  const handleExit = () => {
    window.location.href = 'https://www.google.com';
  };

  if (isVerified) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-card border shadow-xl rounded-lg text-center max-w-md w-full p-8 md:p-12">
        <div className="mx-auto h-16 w-16 mb-6">
          <Logo />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold font-headline mb-4">Are you of legal drinking age?</h1>
        <p className="text-muted-foreground mb-8">
          To visit al-medronho.com, you must be of legal drinking age in your country of residence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={handleVerification} className="w-full">Yes, I am</Button>
          <Button size="lg" variant="outline" onClick={handleExit} className="w-full">No, I am not</Button>
        </div>
        <p className="text-xs text-muted-foreground mt-8">
          By entering this site you are agreeing to our Terms & Conditions and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
