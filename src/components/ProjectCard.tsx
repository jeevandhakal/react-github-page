import type { Project } from '../types/project'
import { PROJECT_CATEGORY_LABELS } from '../content/projectFilters'
import { formatRange } from '../utils/formatRange'
import { ButtonLink } from './ButtonLink'
import { Heading } from './Heading'
import { Tag } from './Tag'

type ProjectCardProps = {
  project: Project
}

const caseStudyRows: { term: string; key: keyof Pick<Project, 'problem' | 'dataSource' | 'approach' | 'architecture' | 'impact'> }[] = [
  { term: 'Problem', key: 'problem' },
  { term: 'Data source', key: 'dataSource' },
  { term: 'Approach', key: 'approach' },
  { term: 'Architecture', key: 'architecture' },
  { term: 'Impact', key: 'impact' },
]

export function ProjectCard({ project: p }: ProjectCardProps) {
  const primaryLink = p.links[0]

  return (
    <article className="flex h-full flex-col rounded-xl border border-zinc-700/60 bg-zinc-900/40 p-4 sm:p-5">
      <header className="mb-3">
        <Heading level={3}>
          {primaryLink ? (
            <a href={primaryLink.href} target="_blank" rel="noreferrer noopener">
              {p.title}
            </a>
          ) : (
            p.title
          )}
        </Heading>
        <p className="text-sm text-zinc-400">{p.kind}</p>
        <p className="mt-1.5 text-xs text-zinc-500">{formatRange(p.start, p.end)}</p>
      </header>

      <p className="mb-3 text-sm leading-relaxed text-zinc-300">{p.summary}</p>

      {p.stack.length > 0 && (
        <ul className="mb-3 flex list-none flex-wrap gap-1.5 p-0" aria-label="Tech stack">
          {p.stack.map((tech) => (
            <li key={tech}>
              <Tag className="border-zinc-600/60 bg-zinc-800/30 text-[0.7rem] text-zinc-300">
                {tech}
              </Tag>
            </li>
          ))}
        </ul>
      )}

      {p.categories.length > 0 && (
        <ul className="mb-4 flex list-none flex-wrap gap-2 p-0" aria-label="Project categories">
          {p.categories.map((c) => (
            <li key={c}>
              <Tag className="text-[0.7rem]">{PROJECT_CATEGORY_LABELS[c]}</Tag>
            </li>
          ))}
        </ul>
      )}

      <details className="mb-4 rounded-lg border border-zinc-800/90 bg-zinc-950/40 [&_summary]:cursor-pointer [&_summary]:select-none">
        <summary className="px-3 py-2.5 text-sm font-semibold text-zinc-200 outline-none marker:text-zinc-500 hover:bg-zinc-900/50">
          Case study
        </summary>
        <div className="border-t border-zinc-800/90 px-3 py-3">
          <dl className="space-y-3">
            {caseStudyRows.map(({ term, key }) => (
              <div key={key}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{term}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-zinc-300">{p[key]}</dd>
              </div>
            ))}
          </dl>

          {p.screenshots && p.screenshots.length > 0 && (
            <div className="mt-4 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Screenshots</p>
              <div className="flex flex-col gap-3">
                {p.screenshots.map((shot) => (
                  <img
                    key={shot.src}
                    src={shot.src}
                    alt={shot.alt}
                    className="max-h-48 w-full rounded-md border border-zinc-700/60 object-cover object-top"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </details>

      <footer className="mt-auto border-t border-zinc-800/80 pt-4">
        {p.links.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {p.links.map((link) => (
              <ButtonLink
                key={`${link.href}-${link.label}`}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="flex-1 min-w-[8rem] sm:flex-none"
              >
                {link.label}
              </ButtonLink>
            ))}
          </div>
        ) : (
          <p className="text-xs text-zinc-500">
            Add <code className="rounded bg-zinc-800 px-1 py-0.5 text-zinc-300">links</code> in{' '}
            <code className="rounded bg-zinc-800 px-1 py-0.5 text-zinc-300">src/content/projects.ts</code>{' '}
            (repo, demo, article).
          </p>
        )}
      </footer>
    </article>
  )
}
