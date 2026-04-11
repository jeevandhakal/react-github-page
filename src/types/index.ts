export interface Project {
    title: string
    description: string
    problem: string
    tools: string[]
    outcome: string
    githubUrl?: string
    liveUrl?: string
    featured: boolean
  }
  
  export interface Skill {
    category: string
    items: string[]
  }
  
  export interface Experience {
    title: string
    company: string
    period: string
    location: string
    bullets: string[]
    skills: string[]
  }
  
  export interface BlogPost {
    title: string
    url: string
    date: string
    summary: string
  }