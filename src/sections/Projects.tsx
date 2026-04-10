import { useMemo, useState } from 'react'
import { Heading, ProjectCard, Section } from '../components'
import { portfolio } from '../content/portfolio'
import { PROJECT_FILTER_OPTIONS, type ProjectFilterValue } from '../content/projectFilters'
import { cn } from '../lib/cn'

export function Projects() {
  const { projects } = portfolio
  const [filter, setFilter] = useState<ProjectFilterValue>('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((p) => p.categories.includes(filter))
  }, [projects, filter])

  return (
    <Section id="projects" labelledBy="projects-heading">
      <Heading level={2} id="projects-heading">
        Projects
      </Heading>
      <p className="max-w-xl text-zinc-400">
        Selected work. Use filters to scan by focus area; open links when available.
      </p>

      <div
        className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
        role="group"
        aria-label="Filter projects by category"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Filter</span>
        <div className="flex flex-wrap gap-2">
          {PROJECT_FILTER_OPTIONS.map((opt) => {
            const selected = filter === opt.value
            return (
              <button
                key={opt.value}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(opt.value)}
                className={cn(
                  'rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors',
                  selected
                    ? 'border-indigo-500/70 bg-indigo-950/50 text-indigo-100'
                    : 'border-zinc-600/80 bg-zinc-900/30 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200',
                )}
              >
                {opt.label}
              </button>
            )
          })}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-sm text-zinc-500" role="status">
          No projects in this category yet. Try another filter or All.
        </p>
      ) : (
        <ul className="mt-8 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2">
          {filtered.map((p) => (
            <li key={p.id} className="min-h-0">
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
