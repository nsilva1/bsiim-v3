import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, CheckCircle2, Star } from 'lucide-react'
import Image from 'next/image'
import { services, testimonials } from '@/lib/constants'
import conferenceHall from '@/assets/conference-hall3.jpg'

export const metadata = {
  title: 'Home | Amethyst International BSIIM Ltd',
  description: 'Amethyst International BSIIM Ltd provides strategic consulting solutions, empowerment models, and professional readiness programs to drive sustainable growth.',
}

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col bg-background">
      
      {/* Full Width Hero Image */}
      <div className="w-full relative h-[50vh] min-h-[400px] lg:h-[70vh]">
        <Image 
          src={conferenceHall} 
          alt="Conference Hall Hero Image" 
          fill 
          className="object-cover" 
          priority
        />
        {/* <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent"></div> */}
      </div>

      {/* Main Content (Starting below the image) */}
      <section className="relative w-full -mt-20 sm:-mt-32 px-4 pb-20 sm:px-6 lg:px-8 z-10 flex-1">
        <div className="mx-auto max-w-5xl bg-background/95 backdrop-blur-sm shadow-xl rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-14 border border-border/40">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                Transform Your Business Today
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Strategic consulting solutions designed to elevate your organization and drive sustainable growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 w-full sm:w-auto text-base h-14 px-8 shadow-md transition-all hover:-translate-y-1">
                <Link href="/contact">
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-14 px-8 shadow-sm transition-all hover:-translate-y-1">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-border/50 mt-10 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">Proven Expertise</p>
                  <p className="text-sm text-muted-foreground mt-1">Across 100+ companies</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">15+ Years</p>
                  <p className="text-sm text-muted-foreground mt-1">Industry leading insights</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">Custom Solutions</p>
                  <p className="text-sm text-muted-foreground mt-1">For unique challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Our Consulting Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">Comprehensive solutions tailored to your business needs</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all text-sm"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">What Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">Trusted by leading organizations worldwide</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-border flex flex-col">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-foreground mb-6 italic">{`"${testimonial.quote}"`}</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground">Upcoming Events</h2>
            <p className="mt-4 text-lg text-muted-foreground">Join our webinars, workshops, and seminars</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            {[
              {
                title: 'Global Security, Safety, and Intelligence Conference',
                date: 'May 28 - 31, 2026',
                time: '10:00 AM WAT',
                type: 'In-Person',
              }
            ].map((event) => (
              <Card key={event.title} className="border-border">
                <CardHeader>
                  <div className="mb-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                      {event.type}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.date} • {event.time}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="p-0 text-accent hover:text-accent hover:bg-transparent">
                    <Link href="/events">
                      Register Now
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/events">
                View All Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold">Ready to Transform Your Business?</h2>
          <p className="mt-6 text-lg opacity-90 leading-relaxed">
            Let's discuss how our consulting services can help you achieve your strategic goals.
          </p>
          <Button asChild className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90" size="lg">
            <Link href="/contact">
              Schedule Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
