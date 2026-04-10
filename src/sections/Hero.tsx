import { ButtonLink, Heading, Section, Tag } from '../components'
import { portfolio } from '../content/portfolio'

function pickSocial(label: string) {
  return portfolio.socialLinks.find(
    (l) => l.label.toLowerCase() === label.toLowerCase(),
  )
}

export function Hero() {
  const { person, hero, skills, socialLinks } = portfolio
  const github = pickSocial('GitHub')
  const linkedin = pickSocial('LinkedIn')

  return (
    <Section id="hero" labelledBy="hero-heading">
      <p className="mb-3 inline-block rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-200">
        {hero.roleTarget}
      </p>

      <Heading level={1} id="hero-heading">
        {person.name}
      </Heading>

      <p className="mb-5 max-w-2xl text-lg font-medium leading-snug text-zinc-200 sm:text-xl">
        {hero.specialty}
      </p>

      <ul
        className="mb-6 max-w-2xl list-none space-y-2.5 p-0 text-sm leading-relaxed text-zinc-400 sm:text-base"
        aria-label="Highlights"
      >
        {hero.proofPoints.map((point) => (
          <li key={point} className="flex gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" aria-hidden />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {skills.length > 0 && (
        <ul className="mb-6 flex list-none flex-wrap gap-2 p-0" aria-label="Skills">
          {skills.map((s) => (
            <li key={s.name}>
              <Tag>{s.name}</Tag>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <div className="flex flex-wrap gap-3">
          <ButtonLink
            href="#projects"
            className="border-indigo-500/60 bg-indigo-950/50 hover:border-indigo-400 hover:bg-indigo-950/70"
          >
            View projects
          </ButtonLink>
          {hero.resumeUrl ? (
            <ButtonLink href={hero.resumeUrl} target="_blank" rel="noreferrer noopener">
              Resume
            </ButtonLink>
          ) : null}
          {github ? (
            <ButtonLink href={github.href} target="_blank" rel="noreferrer noopener">
              GitHub
            </ButtonLink>
          ) : null}
          {linkedin ? (
            <ButtonLink href={linkedin.href} target="_blank" rel="noreferrer noopener">
              LinkedIn
            </ButtonLink>
          ) : null}
        </div>
      </div>

      <nav
        className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-zinc-800/80 pt-5 text-sm"
        aria-label="In-page navigation"
      >
        <a href="#experiences" className="text-zinc-400 hover:text-indigo-300">
          Experience
        </a>
        <a href="#contact" className="text-zinc-400 hover:text-indigo-300">
          Contact
        </a>
        {socialLinks
          .filter((l) => l !== github && l !== linkedin)
          .map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-zinc-400 hover:text-indigo-300"
            >
              {link.label}
            </a>
          ))}
      </nav>
    </Section>
  )
}
