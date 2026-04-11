import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    title: 'Back-end Developer',
    company: 'Hridayangam Technology',
    period: 'Nov 2023 – Jul 2025',
    location: 'Sanepa, Lalitpur · On-site',
    bullets: [
      'Designed and built 50+ REST API endpoints using Python and FastAPI for an enterprise ERP system covering HR, payroll, and finance modules',
      'Built a payroll calculation engine handling income tax, statutory contributions, allowances, and deductions with high accuracy',
      'Architected a multi-tenant PostgreSQL database using schema-per-organization isolation across multiple client organizations',
      'Integrated AWS S3 for secure document storage and built CSV/Excel export workflows for business reporting',
      'Automated deployment pipelines using GitHub Actions and Docker with multi-stage builds',
    ],
    skills: ['Python', 'FastAPI', 'PostgreSQL', 'AWS S3', 'Docker', 'CI/CD'],
  },
  {
    title: 'Back-end Developer',
    company: 'Tuteeline (aeon soft solution technology)',
    period: 'Dec 2022 – Nov 2023',
    location: 'Putalisadak, Kathmandu',
    bullets: [
      'Designed and maintained 50+ PostgreSQL data models across users, organizations, payments, and feeds with structured migrations',
      'Implemented Redis caching for user and feed data, reducing database load on frequently accessed resources',
      'Combined PostgreSQL and Firebase Firestore in one production system for relational and real-time data needs',
      'Built multi-environment CI/CD pipelines using GitHub Actions and Docker for dev, production, and medical deployments',
    ],
    skills: ['PostgreSQL', 'Redis', 'Firebase', 'Docker', 'GitHub Actions', 'GraphQL'],
  },
  {
    title: 'Python Developer',
    company: 'Princelab Pvt. Ltd.',
    period: 'Apr 2022 – Nov 2022',
    location: 'Kathmandu, Nepal',
    bullets: [
      'Built a gym membership management desktop app with a dashboard tracking payroll status and membership trends',
      'Developed REST APIs for a real estate management system using Django REST Framework',
    ],
    skills: ['Python', 'Django', 'REST APIs', 'PostgreSQL'],
  },
]