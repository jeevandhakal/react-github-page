import { Heading, Section } from '../components'
import { portfolio } from '../content/portfolio'

export function Contact() {
  const { contact } = portfolio

  return (
    <Section id="contact" labelledBy="contact-heading">
      <Heading level={2} id="contact-heading">
        Contact
      </Heading>
      <p className="max-w-xl text-zinc-400">{contact.lead}</p>

      <dl className="mt-5 grid max-w-md grid-cols-[auto_1fr] gap-x-5 gap-y-1.5">
        {contact.email && (
          <>
            <dt className="text-xs font-semibold text-zinc-500">Email</dt>
            <dd className="text-sm">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </dd>
          </>
        )}
        {contact.phone && (
          <>
            <dt className="text-xs font-semibold text-zinc-500">Phone</dt>
            <dd className="text-sm">
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
            </dd>
          </>
        )}
        {contact.address && (
          <>
            <dt className="text-xs font-semibold text-zinc-500">Location</dt>
            <dd className="text-sm text-zinc-300">{contact.address}</dd>
          </>
        )}
      </dl>
    </Section>
  )
}
