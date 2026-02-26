import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'
import ReactCountryFlag from "react-country-flag"
import { upcomingEvents } from '@/data/events'

export const metadata = {
  title: 'Events & Workshops | Consulting Events',
  description: 'Join our upcoming webinars, workshops, and seminars designed to help you stay ahead in your industry.',
}

export default function Events() {
  const pastEvents = [
    {
      id: 7,
      title: 'GSSIC Nigeria',
      countryCode: 'NG',
      date: 'March 8, 2025',
      attendees: 200,
      type: 'In-Person',
    },
    {
      id: 8,
      title: 'GSSIC Ghana',
      countryCode: 'GH',
      date: 'April 15, 2025',
      attendees: 200,
      type: 'In-Person',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">

      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              Events & Workshops
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Connect with industry leaders and expand your knowledge through our curated events
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-2">Upcoming Events</h2>
            <p className="text-muted-foreground">Don't miss our upcoming webinars, workshops, and seminars</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="border-border hover:shadow-lg transition-shadow flex flex-col overflow-hidden">
                {/* Event Type Badge */}
                <CardHeader className="pb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent w-fit">
                    {event.type}
                  </span>
                  <CardTitle className="text-lg mt-2 flex items-center gap-2">
                    <ReactCountryFlag
                      countryCode={event.countryCode}
                      svg
                      style={{
                        width: '1.5em',
                        height: '1.5em',
                      }}
                    />
                    {event.title}
                  </CardTitle>
                </CardHeader>

                {/* Event Content */}
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-3 mb-6 flex-1">
                    <div className="flex items-center gap-2 text-foreground">
                      <Calendar className="h-4 w-4 text-accent shrink-0" />
                      <div>
                        <p className="text-sm font-medium">{event.date}</p>
                        <p className="text-xs text-muted-foreground">{event.time}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-foreground">
                      <MapPin className="h-4 w-4 text-accent shrink-0" />
                      <p className="text-sm">{event.location}</p>
                    </div>

                    <div className="flex items-center gap-2 text-foreground">
                      <Users className="h-4 w-4 text-accent shrink-0" />
                      <p className="text-sm">{event.attendees} expected attendees</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6">{event.description}</p>

                  <Button asChild className="bg-accent hover:bg-accent/90">
                    <Link href="/events/register">
                      Register & RSVP
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-2">Past Events</h2>
            <p className="text-muted-foreground">Recap of our previously held successful events</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pastEvents.map((event) => (
              <Card key={event.id} className="border-border">
                <CardHeader>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-muted text-muted-foreground w-fit mb-2">
                    {event.type}
                  </span>
                  <CardTitle className="text-lg flex items-center gap-2">
                    {event.title}
                    <ReactCountryFlag
                      countryCode={event.countryCode}
                      svg
                      style={{
                        width: '1.5em',
                        height: '1.5em',
                      }}
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-foreground">
                      <Calendar className="h-4 w-4 text-muted-foreground shrink-0" />
                      <p className="text-sm">{event.date}</p>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <Users className="h-4 w-4 text-muted-foreground shrink-0" />
                      <p className="text-sm">{event.attendees} attendees</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold">Stay Updated</h2>
          <p className="mt-6 text-lg opacity-90 leading-relaxed">
            Subscribe to our newsletter to receive updates about upcoming events and insights from our experts.
          </p>

          <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground placeholder-muted-foreground bg-primary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
