import { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="48" stroke="hsl(var(--primary))" strokeWidth="4"/>
        
        {/* 'A' Shape */}
        <path d="M30 75L50 25L70 75" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="38" y1="60" x2="62" y2="60" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round"/>

        {/* Medronho fruit representation */}
        <circle cx="50" cy="52" r="6" fill="hsl(var(--accent))"/>
        <path d="M50 46 V 40" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round"/>
        <path d="M50 40 L 53 43" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
