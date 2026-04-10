import { Heading, Section } from '../components'
import { portfolio } from '../content/portfolio'
import { formatRange } from '../utils/formatRange'

export function Experience() {
  const { experiences } = portfolio

  return (
    <Section id="experiences" labelledBy="experiences-heading">
      <Heading level={2} id="experiences-heading">
        Experience
      </Heading>
      <p className="max-w-xl text-zinc-400">
        Ownership, data-heavy systems, and delivery—each role with concrete scope, stack, and outcomes.
      </p>

      <ul className="mt-5 flex list-none flex-col gap-5 p-0">
        {experiences.map((job) => (
          <li
            key={job.id}
            className="rounded-xl border border-zinc-700/60 bg-zinc-900/40 p-4 sm:p-5"
          >
            <div className="mb-4">
              <Heading level={3}>{job.title}</Heading>
              <p className="text-sm text-zinc-400">
                {job.company} · {job.location} · {job.employmentType}
              </p>
              <p className="mt-1.5 text-xs text-zinc-500">{formatRange(job.start, job.end)}</p>
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Impact & scope
            </p>
            <ul
              className="list-outside list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-300 marker:text-zinc-600"
              aria-label={`Highlights for ${job.title} at ${job.company}`}
            >
              {job.highlights.map((line, index) => (
                <li key={`${job.id}-${index}`}>{line}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
