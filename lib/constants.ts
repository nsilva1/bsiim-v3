import { Label } from "radix-ui"

export const services = [
  {
    title: 'SG-Business Model',
    description: 'Build, launch, grow, enhance, triple income, reposition, and expand your businesses effectively',
    image: '',
    benefits: [],
    path: '/services/sg-business-model'
  },
  {
    title: 'JS-Resources Model',
    description: "Equip individuals with the competencies, exposure, and professional readiness required to excel.",
    image: '',
    benefits: [],
    path: '/services/js-resource-model'
  },
  {
    title: 'EDW-Career Model',
    description: 'Streamline processes and increase efficiency across your organization',
    image: '',
    benefits: [],
    path: '/services/edw-career-model'
  }
]

export const testimonials = [
  {
    name: 'Sarah Okonkwo',
    company: 'TechVenture Inc.',
    quote: 'Exceptional strategic guidance that helped us double our market share in 18 months.',
    rating: 5,
  },
  {
    name: 'Michael Effiong',
    company: 'Global Industries',
    quote: 'Professional, insightful, and results-driven. Highly recommend for any transformation initiative.',
    rating: 5,
  },
  {
    name: 'Elena Adeniyi',
    company: 'Innovation Labs',
    quote: 'The consulting team truly understood our unique challenges and delivered actionable solutions.',
    rating: 5,
  },
]

export const values = [
  {
    title: 'Excellence',
    description: 'We deliver the highest quality consulting services with attention to detail and commitment to results.',
  },
  {
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical principles in all our client relationships.',
  },
  {
    title: 'Innovation',
    description: 'We embrace new ideas and cutting-edge approaches to solve complex business challenges.',
  },
  {
    title: 'Impact',
    description: 'We focus on delivering measurable business outcomes and sustainable value creation.',
  },
]

export const navLinks = [
    { 
      href: '/', 
      label: 'Home',
      subLinks: [
        { href: '/#summary-of-products', label: 'Summary Of Products' },
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
        // { href: '/events/conference', label: 'Conference' },
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
        { href: '/services/sg-business-model', label: 'SG-Business Model' },
        { href: '/services/edw-career-model', label: 'EdW-Career Model' },
        { href: '/services/js-resource-model', label: 'JS-Resource Model' },
        { href: '/services/bsiim-real-estate-investment-model', label: 'BSIIM RealEstate Investment Model' },
        { href: '/services/bsiim-agro-model', label: 'BSIIM Agro-Model' },
        { href: '/services/ts-wellbeing-model', label: 'TS-Wellbeing Model' },
      ]
    },
    { 
      href: '/gssicf', 
      label: 'GSSICF',
      subLinks: [
        { href: '/gssicf/training-course', label: 'Training Course & Calendar' },
        { href: '/gssicf/workshops', label: 'Workshops' },
        { href: '/gssicf/security-courses', label: 'Security Courses' },
        { href: '/gssicf/safety-courses', label: 'Safety Courses' },
        { href: '/gssicf/administrative-management-courses-seminars', label: 'Administrative & Management Courses Seminars' },
        { href: '/gssicf/syllabus', label: 'Syllabus' },
        { href: '/gssicf/registration', label: 'Registration' },
      ]
    },
    { href: '/training', label: 'Training' },
    { href: '/abs-real-estate', label: 'ABS-RealEstate' },
    { href: '/contact', label: 'Contact' },
  ]
