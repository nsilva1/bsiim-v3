import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { values } from '@/lib/constants'
import Image from 'next/image'
import aboutBSIIM from '@/assets/consultant-2.jpg'

export const metadata = {
  title: 'About ConsultLab | Our Mission & Team',
  description: 'Learn about our consulting firm, mission, values, and the team of experts dedicated to transforming your business.',
}

export default function About() {
  

  

  return (
    <div className="min-h-screen flex flex-col bg-background">

      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              About BSIIM
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Transforming businesses through strategic consulting and expert guidance
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center mb-16">
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  BSIIM was founded on the belief that strategic consulting should drive real, measurable business transformation. For over 15 years, we've worked with leading organizations across industries to navigate change, optimize operations, and unlock growth.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our team of experienced consultants brings deep industry expertise and a proven track record of delivering results that exceed client expectations.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="rounded-lg overflow-hidden aspect-square flex items-center justify-center">
              {/* <div className="text-center space-y-4">
                <div className="text-6xl">🏢</div>
                <p className="text-muted-foreground font-medium">Office Photo</p>
              </div> */}
              <Image src={aboutBSIIM} alt='Office Space' className='rounded-lg' />
            </div>
          </div>

          {/* Mission Section */}
          <div className="grid gap-8 md:grid-cols-2 mb-16 bg-secondary rounded-lg p-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To elevate knowledge, awareness, and income levels across communities by demonstrating how wealth is created through self-development. Our vision is to raise disciplined, self-reliant, and productive citizens who contribute meaningfully to job creation, financial inclusion, education, and entrepreneurship while building prosperous nations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted consulting partner for organizations seeking transformational change and strategic excellence in their industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Our Core Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Guiding principles that define how we work
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Leadership Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Meet our experienced consultants and advisors
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {team.map((member) => (
              <Card key={member.name} className="border-border overflow-hidden">
                <div className="bg-muted h-40 flex items-center justify-center">
                  <span className="text-5xl">👤</span>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm text-accent font-semibold">{member.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {[
              { number: '15+', label: 'Years of Experience' },
              { number: '100+', label: 'Clients Served' },
              { number: '$200M+', label: 'Value Created' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Trusted By Leading Organizations</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We partner with industry leaders to drive transformational change
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {[
              'TK Mart',
              'Tech Innovation Inc',
              'Auto Dynamics Ltd',
              'Rial Healthcare Solutions',
              'Peat Energy Co',
              'Eko Manufacturing',
            ].map((company) => (
              <Card key={company} className="border-border flex items-center justify-center p-8">
                <p className="font-semibold text-foreground text-center">{company}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold">Ready to Work Together?</h2>
          <p className="mt-6 text-lg opacity-90 leading-relaxed">
            Let's discuss how ConsultLab can help you achieve your strategic objectives.
          </p>
          <Button asChild className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90" size="lg">
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
