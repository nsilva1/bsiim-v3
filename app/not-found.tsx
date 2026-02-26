import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SearchX } from 'lucide-react'

export const metadata = {
    title: 'Page Not Found | BSIIM',
    description: 'The requested page could not be found.',
}

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background px-4 py-20">
            <div className="text-center max-w-2xl mx-auto flex flex-col items-center">

                {/* Icon Container */}
                <div className="mb-8 p-6 bg-accent/10 rounded-full inline-flex items-center justify-center">
                    <SearchX className="h-16 w-16 text-accent" />
                </div>

                {/* Error Code */}
                <h1 className="text-7xl font-extrabold tracking-tight text-foreground sm:text-8xl mb-4">
                    404
                </h1>

                {/* Main Title */}
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
                    We're sorry, it looks like the page you were looking for doesn't exist, has been moved, or is temporarily unavailable.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                    <Button asChild size="lg" className="bg-primary hover:opacity-90 transition-opacity">
                        <Link href="/">
                            Return to Homepage
                        </Link>
                    </Button>
                </div>

            </div>
        </div>
    )
}
