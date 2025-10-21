import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container mx-auto flex h-[calc(100vh-200px)] flex-col items-center justify-center text-center">
      <Compass className="h-24 w-24 text-primary mb-4" />
      <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">Lost in the Medronho Grove?</h1>
      <p className="mt-4 text-lg text-muted-foreground">It seems you've wandered off the path. The page you're looking for doesn't exist.</p>
      <div className="mt-6">
        <Button asChild size="lg">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}
