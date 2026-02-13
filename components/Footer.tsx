import Link from 'next/link'
import logo from '@/assets/bsiim_logo-removebg.png'
import Image from 'next/image'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
                <Image src={logo} alt='BSIIM Logo' width={100} height={100} className='bg-transparent' />
            </h3>
            <p className="text-sm text-muted-foreground">
              Strategic consulting solutions to transform your business and drive growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/events" className="text-sm text-muted-foreground hover:text-accent transition-colors">Events</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="tel:+2348175637632" className="text-sm text-muted-foreground hover:text-accent transition-colors">+2348175637632</a></li>
              <li><a href="mailto:info@bsiimplatform.com" className="text-sm text-muted-foreground hover:text-accent transition-colors">info@bsiimplatform.com</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Twitter</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} BSIIM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
