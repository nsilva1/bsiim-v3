import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { services } from '@/lib/constants'

export const metadata = {
  title: 'Consulting Services | Professional Solutions for Your Business',
  description: 'Explore our comprehensive consulting services including strategy, digital transformation, operations optimization, and organizational change.',
}

export default function Services() {
  

  return (
    <div className="min-h-screen flex flex-col bg-background">

      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              Our Consulting Services
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Comprehensive solutions designed to address your most critical business challenges
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:auto-cols-reverse' : ''
                }`}
              >
              <Card className="border-border text-center">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full text-accent-foreground font-bold text-lg mx-auto mb-2">
                    {service.image}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground my-5">{service.description}</p>
                  <div className="space-y-3">
                    {/* <h3 className="font-semibold text-foreground">Key Benefits:</h3> */}
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <p className="text-foreground">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Button asChild className="bg-accent hover:bg-accent/90">
                      <Link href="/contact">
                        Learn More & Book Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Our Consulting Process</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A proven methodology to deliver measurable results
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: '1',
                title: 'Discovery',
                description: 'Understand your business, challenges, and objectives',
              },
              {
                step: '2',
                title: 'Analysis',
                description: 'Conduct in-depth analysis and identify opportunities',
              },
              {
                step: '3',
                title: 'Strategy',
                description: 'Develop tailored strategies and implementation plans',
              },
              {
                step: '4',
                title: 'Implementation',
                description: 'Execute solutions with ongoing support and monitoring',
              },
            ].map((item) => (
              <Card key={item.step} className="border-border text-center">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold text-lg mx-auto mb-2">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
          <p className="mt-6 text-lg opacity-90 leading-relaxed">
            Contact us today to discuss how our consulting services can transform your business.
          </p>
          <Button asChild className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90" size="lg">
            <Link href="/contact">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
