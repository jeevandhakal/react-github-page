export type SocialLink = {
  label: string
  href: string
}

export type Skill = {
  name: string
  /** Optional bucket for grouped skills UI (e.g. data, backend). */
  category?: string
}

export type Experience = {
  id: string
  title: string
  company: string
  location: string
  employmentType: string
  start: string
  end: string | null
  /** 3–5 outcome-oriented bullets: scope, systems, data/SQL, stakeholders, stack (avoid vague duties). */
  highlights: string[]
}

import type { Project } from './project'

export type { Project } from './project'
export type { ProjectCategory, ProjectLink, ProjectScreenshot } from './project'

export type ContactInfo = {
  lead: string
  address?: string
  phone?: string
  email?: string
}

export type HeroContent = {
  /** Who you’re positioning for (e.g. DE / DA) — recruiters scan this first. */
  roleTarget: string
  /** One-line specialty / value proposition. */
  specialty: string
  /** 2–3 concise proof points (scope, systems, tools, outcomes). */
  proofPoints: string[]
  /** PDF or external resume; omit to hide the Resume CTA until you have a link. */
  resumeUrl?: string
}

export type PortfolioContent = {
  siteTitle: string
  person: {
    name: string
  }
  hero: HeroContent
  socialLinks: SocialLink[]
  skills: Skill[]
  experiences: Experience[]
  projects: Project[]
  contact: ContactInfo
  footer: {
    shortName: string
    tagline: string
    copyrightName: string
  }
}
