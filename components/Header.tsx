'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import logo from '@/assets/bsiim_logo-removebg.png'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMobileSub, setActiveMobileSub] = useState(null);

  // Prevent scrolling when off-canvas is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    {
      href: '/',
      label: 'Home',
      subLinks: [
        { href: '/about#executive-summary', label: 'Executive Summary' },
        { href: '/about#ceo-profile', label: 'CEO Profile' },
        { href: '/membership', label: 'Become A Member' },
      ]
    },
    { href: '/about', label: 'About' },
    {
      href: '/events',
      label: 'Events',
      subLinks: [
        { href: '/events/conference', label: 'Conference' },
        { href: '/events/exhibition', label: 'Exhibition' },
        { href: '/events/delegates', label: 'Delegates' },
        { href: '/events/sponsors', label: 'Sponsors' },
        { href: '/events/agenda', label: 'Agenda' },
        { href: '/events/visitors', label: 'Visitors' },
        { href: '/events/seminar', label: 'Seminar' },
        { href: '/events/workshops', label: 'Workshops' },
      ]
    },
    {
      href: '/services',
      label: 'Services',
      subLinks: [
        { href: '/services/sg-business', label: 'SG-Business' },
        { href: '/services/edw-career', label: 'EdW-Career' },
        { href: '/services/js-resource', label: 'JS-Resource' },
      ]
    },
    {
      href: '/gssicf',
      label: 'GSSICF',
      subLinks: [
        { href: '/gssicf/training-course', label: 'Training Course & Calendar' },
        { href: '/gssicf/workshops', label: 'workshops' },
        { href: '/gssicf/security-courses', label: 'Security Courses' },
        { href: '/gssicf/safety-courses', label: 'Safety Courses' },
      ]
    },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="w-full bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="container flex items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Tek1Security Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group py-2">
              <Link
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
                {link.subLinks && <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />}
              </Link>
              {link.subLinks && (
                <div className="absolute top-full left-0 hidden w-64 rounded-md border border-border bg-background shadow-lg opacity-0 invisible group-hover:opacity-100! group-hover:visible! group-hover:block transition-all duration-200 z-50">
                  <div className="py-2 flex flex-col">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.label}
                        href={subLink.href}
                        className="px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <Button variant="default" asChild className="bg-accent hover:bg-accent/90">
            <Link href="/contact">
              Book Consultation
            </Link>
          </Button>
          <Button variant="default" asChild className="bg-accent hover:bg-accent/90">
            <Link href="/login">
              Login
            </Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 my-8 p-6 overflow-y-scroll">
                {navLinks.map((link) => (
                  <div key={link.href} className="flex flex-col py-2">
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-lg font-medium text-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                    {link.subLinks && (
                      <div className="flex flex-col gap-2 mt-2 ml-4 border-l-2 border-border pl-4">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.label}
                            href={subLink.href}
                            className="text-base text-muted-foreground hover:text-accent transition-colors py-1"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button variant="default" asChild className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Book Consultation
                  </Link>
                </Button>
                <Button variant="default" asChild className="bg-accent hover:bg-accent/90">
                  <Link href="/login">
                    Login
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
