import type { PortfolioContent } from '../types/portfolio'
import { projects } from './projects'

export const portfolio: PortfolioContent = {
  siteTitle: 'Jeevan Dhakal — Portfolio',
  person: {
    name: 'Jeevan Dhakal',
  },
  hero: {
    roleTarget: 'Data Engineer · Data Analyst',
    specialty:
      'Backend engineer who models data, ships APIs, and turns raw information into reliable systems and analysis.',
    proofPoints: [
      'Design and implement relational models and REST/GraphQL APIs on PostgreSQL (FastAPI, SQLAlchemy, GORM).',
      'Hands-on analytics and ML: EDA with Pandas, visualization, and deep learning for NLP-style problems.',
      'Team lead experience: mentoring, coordinating backend delivery, and shipping production features end to end.',
    ],
    // Add your public resume URL (e.g. PDF on GitHub or Google Drive) to show the Resume button.
    // resumeUrl: 'https://example.com/resume.pdf',
  },
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/jeevandhakal' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jeevandhakal' },
  ],
  skills: [
    { name: 'GraphQL', category: 'backend' },
    { name: 'FastAPI', category: 'backend' },
    { name: 'SQLAlchemy', category: 'backend' },
    { name: 'PostgreSQL', category: 'data' },
    { name: 'Pandas', category: 'data' },
    { name: 'Matplotlib', category: 'data' },
  ],
  experiences: [
    {
      id: 'hridayangam',
      title: 'Back-End Developer',
      company: 'Hridayangam Technology Pvt. Ltd.',
      location: 'Sanepa, Lalitpur',
      employmentType: 'Full time',
      start: 'Nov 2023',
      end: null,
      highlights: [
        'Lead day-to-day backend delivery for a production ERP: prioritize work with stakeholders, review changes, and keep releases predictable for a multi-module product.',
        'Own relational modeling and data design for core domains (orders, inventory, finance-adjacent flows), evolving PostgreSQL schemas with SQLAlchemy migrations as requirements shift.',
        'Build and harden REST APIs with FastAPI—validation, auth boundaries, and service layering—so clients consume consistent contracts over large, joined datasets.',
        'Mentor junior engineers on Python, SQL, and API design; raise code quality through pairing, clearer patterns, and pragmatic performance checks on hot queries and endpoints.',
        'Reduce ambiguity between product and engineering by documenting endpoints and data assumptions, making it easier to onboard teammates and debug production issues.',
      ],
    },
    {
      id: 'aeon-soft',
      title: 'Back-End Developer',
      company: 'Aeon-Soft Solution Pvt. Ltd.',
      location: 'Putalisadak, Kathmandu',
      employmentType: 'Full time',
      start: 'Dec 2022',
      end: 'Nov 2023',
      highlights: [
        'Shipped features for Tuteeline (student/institute application workflows) end to end: schema changes in PostgreSQL, GraphQL resolvers in Gqlgen, and persistence with GORM.',
        'Designed and implemented a recommendation system on top of structured application and user-activity data—feature extraction, ranking logic, and safe fallbacks when signals are sparse.',
        'Owned database design for new modules: normalization vs. read paths, indexes for list/search screens, and constraints that keep multi-step admissions data consistent.',
        'Delivered a production chat system alongside the core app: message storage, retrieval patterns, and API shapes that supported real-time-style UX without compromising data integrity.',
        'Supervised interns and broke down milestones into reviewable PRs, improving throughput while keeping graph and SQL changes auditable for the rest of the team.',
      ],
    },
  ],
  projects,
  contact: {
    lead: 'Reach out by email or use the links below. A contact form will be added in a later task.',
    address: 'Ghattekulo, Bagmati, Nepal, 44600',
    phone: '+977 986-7321296',
    email: 'dhakaljeevan165@gmail.com',
  },
  footer: {
    shortName: 'JD.',
    tagline: 'Data-focused backend engineer from Nepal.',
    copyrightName: 'Jeevan Dhakal',
  },
}
