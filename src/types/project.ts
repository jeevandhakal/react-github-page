/**
 * Case-study-ready project model (T13).
 * Fill links and screenshots as you publish repos, demos, and assets.
 */

export type ProjectCategory = 'data-engineering' | 'analytics' | 'backend' | 'ml'

export type ProjectLink = {
  label: string
  href: string
}

export type ProjectScreenshot = {
  /** Public path under `public/` (e.g. `/projects/himalaya.png`). */
  src: string
  alt: string
}

export type Project = {
  id: string
  title: string
  /** Short type line on the card (e.g. production API, course work). */
  kind: string
  start: string
  end: string | null
  categories: ProjectCategory[]
  /** Recruiter-facing blurb on the card (1–2 sentences). */
  summary: string
  /** Problem or goal in plain language. */
  problem: string
  /** Where data comes from (DBs, files, APIs, warehouse, synthetic, etc.). */
  dataSource: string
  /** How you solved it: methods, pipelines, modeling choices. */
  approach: string
  /** Systems view: storage, services, orchestration, boundaries. */
  architecture: string
  /** Outcomes, metrics, or honest qualitative results (avoid invented numbers). */
  impact: string
  stack: string[]
  links: ProjectLink[]
  screenshots?: ProjectScreenshot[]
}
