import {
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Scott Krech | Growth Systems Portfolio',
  description:
    'Scott Krech builds practical growth systems for small businesses — full-stack web apps, AI workflows, CRM automation, and marketing technology.',
};

export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hey, it's Scott Krech!`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I help busy business owners turn broken/outdated systems/marketing into revenue--FAST.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">How?</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I audit and map what's broken, then build what should have existed two years ago (working software, AI
        workflows, automations that run withOUT a babysitter: -)
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Step 1:</strong> Together we identify &amp; build the systems that STOP
        revenue leaks and quickly claw-back bleeding revenue.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Step 2:</strong> We work to pick the low-hanging fruit (i.e. revenue)
        most folks walk by EVERY day.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: true,
    },
    {
      href: `#${SectionId.Portfolio}`,
      text: 'View Work',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I build practical growth systems for small businesses — websites, forms, funnels, automations, AI-assisted reports, and follow-up workflows. I combine marketing strategy, copywriting, UX judgment, and hands-on technical implementation across the full project lifecycle from architecture to production deployment. Most marketers can't build. Most builders don't think like marketers. I do both.`,
  aboutItems: [
    {label: 'Location', text: 'Charlotte, NC', Icon: MapIcon},
    {label: 'Experience', text: '20+ years', Icon: CalendarIcon},
    {label: 'Focus', text: 'Growth Technology', Icon: SparklesIcon},
    {label: 'Available for', text: 'Contract / Full-time', Icon: BuildingOffice2Icon},
    {label: 'Deployments', text: 'Railway · Vercel', Icon: FlagIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend Development',
    skills: [
      {name: 'React / TypeScript', level: 9},
      {name: 'Tailwind CSS', level: 9},
      {name: 'HTML5 / CSS3', level: 10},
      {name: 'Next.js / Vite', level: 7},
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {name: 'Node.js / Express', level: 9},
      {name: 'PostgreSQL', level: 8},
      {name: 'Python 3', level: 7},
      {name: 'PHP', level: 7},
    ],
  },
  {
    name: 'AI & Automation',
    skills: [
      {name: 'AI Workflow Design', level: 9},
      {name: 'GEO / AI Search', level: 8},
      {name: 'n8n / GoHighLevel', level: 7},
      {name: 'OpenAI API', level: 7},
    ],
  },
  {
    name: 'Marketing Technology',
    skills: [
      {name: 'CRM Architecture', level: 9},
      {name: 'UTM Attribution', level: 9},
      {name: 'Local SEO', level: 8},
      {name: 'Conversion Copywriting', level: 9},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'ACE WorkAuth',
    description:
      'Full customer intake-to-job system for an auto body shop. Intake form → digital signature → drop-off scheduling → admin Kanban board. React/TS, Node/Express, PostgreSQL, SMTP. Live at ace.workauth.org.',
    url: 'https://ace.workauth.org',
    image: porfolioImage1,
  },
  {
    title: 'LeaveAReview.co',
    description:
      'Reputation management SaaS for small businesses. QR/NFC tap-to-review flow, branded pages, private feedback routing, admin generator, Google OAuth, and auto-reply cron. PHP + MySQL multi-client system.',
    url: 'https://leaveareview.co',
    image: porfolioImage2,
  },
  {
    title: 'Elevait Life',
    description:
      'Full AI life coaching platform — 11 phase-based AI chat modules, habit tracker, journal, SMS reminders, Square payments, AWS S3, n8n automation, and complete admin panel. React/TS + tRPC + Drizzle ORM.',
    url: 'https://github.com/scottkrech-prog',
    image: porfolioImage3,
  },
  {
    title: 'GEO — AI Search Toolkit',
    description:
      'Generative Engine Optimization toolkit. Python citability scorer (0–100) for AI citation readiness, 5 AI agent definitions, 6 Schema.org templates, llms.txt generator, brand scanner, and PDF report generator.',
    url: 'https://github.com/scottkrech-prog',
    image: porfolioImage4,
  },
  {
    title: 'CART-IQ',
    description:
      'Shared household grocery PWA with barcode scanning (ZXing), OpenAI receipt parsing, push notifications, multi-profile support, and service worker offline mode. The only project with a full Jest automated test suite.',
    url: 'https://github.com/scottkrech-prog',
    image: porfolioImage5,
  },
  {
    title: 'Roof-M-All',
    description:
      'Conversion-first roofing website with Node/Express + Railway PostgreSQL lead API, 50+ pages, 10 geographic SEO landing pages, Schema.org JSON-LD calculator, and Python image pipeline (Pillow, 3-tier WebP).',
    url: 'https://roof-m-all-production.up.railway.app/index.html',
    image: porfolioImage6,
  },
  {
    title: 'Evergreen Roofing — Prospect Mockup',
    description:
      'Above-the-fold homepage mockup for Evergreen Roofing Charlotte — a password-gated prospect sales tool showing conversion-first design direction before client engagement.',
    url: 'https://evergreen-roofing-mock-production.up.railway.app/',
    image: porfolioImage8,
  },
  {
    title: 'RDK Auto Body — Prospect Mockup',
    description:
      'Conversion-first homepage mockup built for RDK Auto Body as a prospect deliverable — password-gated Node/Express preview server demonstrating design and CTA direction.',
    url: 'https://rdk-auto-body-mock-production.up.railway.app/',
    image: porfolioImage9,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2000 – Present',
    location: 'Self-directed / Real-world implementation',
    title: 'Growth Technology & Marketing Operations',
    content: (
      <p>
        20+ years of independent consulting and hands-on technical implementation. Built production systems across
        React/TypeScript, Node.js, PostgreSQL, Python, PHP, AI APIs, and cloud deployment. Every skill earned on
        real client projects.
      </p>
    ),
  },
  {
    date: 'Ongoing',
    location: 'Continuous learning',
    title: 'AI Implementation & GEO',
    content: (
      <p>
        Generative Engine Optimization, AI workflow design, citability scoring, LLM prompt engineering, AI agent
        architecture, and AI-assisted business automation. Actively building and shipping AI-powered tools.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2024 – Present',
    location: 'Charlotte, NC',
    title: 'Independent Growth Systems Developer',
    content: (
      <p>
        Building full-stack business tools for small businesses: ACE WorkAuth (auto body intake + job management
        system), Roof-M-All WorkAuth (roofing work authorization), LeaveAReview.co (reputation SaaS), CART-IQ
        (household PWA with AI receipt parsing), Elevait Life (AI coaching platform), and GEO toolkit. All
        deployed to production and in active use.
      </p>
    ),
  },
  {
    date: '2022 – 2024',
    location: 'Charlotte, NC',
    title: 'Marketing Technology & Automation Consultant',
    content: (
      <p>
        Built conversion-first websites with lead capture APIs, UTM attribution schemas, and CRM integration
        architecture. Designed AI chat widget knowledge bases, 3-phase migration plans, and geographic SEO
        campaigns for local home-service businesses. Python automation scripts for image pipelines, QA linting,
        and phone-number rotation.
      </p>
    ),
  },
  {
    date: '2000 – 2022',
    location: 'Charlotte, NC',
    title: 'Independent Marketing Consultant',
    content: (
      <p>
        20+ years of direct-response marketing, copywriting, offer design, funnel strategy, and client consulting
        for small businesses across multiple verticals. Developed expertise in customer psychology, conversion
        optimization, and marketing systems before transitioning to hands-on technical implementation.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Justin Brooke',
      text: '"Scott Krech is an AMAZING copywriter."',
      image: '/testimonials/dunJAgv1No8.jpg',
    },
    {
      name: 'David Dutton',
      text: '"Scott Krech gave me one idea that might grow my biz 40%."',
      image: '/testimonials/_83W6d33OJQ.jpg',
    },
    {
      name: 'Tim Paulson',
      text: '"Scott Krech is one of my Marketing Secret Weapons."',
      image: '/testimonials/Zw4HAPh9wLw.jpg',
    },
    {
      name: 'Scott Smith',
      text: '"Scott Krech produces some of the best copy and marketing materials I\'ve ever seen."',
      image: '/testimonials/Nl2D6dLBMb0.jpg',
    },
    {
      name: 'Paul Halme',
      text: '"Scott Krech gave me a HUGE paradigm shift!"',
      image: '/testimonials/DR2235YB3RM.jpg',
    },
    {
      name: 'Aaron O\'Sullivan',
      text: 'Video testimonial — see the full playlist for Scott\'s client results.',
      image: '/testimonials/diX_J4YjHPo.jpg',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'Available for contract work, full-time roles, and consulting engagements. Best fit for marketing technology, growth operations, AI implementation, and full-stack development.',
  items: [
    {
      type: ContactType.Email,
      text: 'scottkrech [at] gmail [dot] com',
      href: '#contact',
    },
    {
      type: ContactType.Location,
      text: 'Charlotte, NC',
      href: 'https://www.google.com/maps/place/Charlotte,+NC',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com/in/scottkrech'},
];
