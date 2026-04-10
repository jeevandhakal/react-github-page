import { Container } from '../components'
import { portfolio } from '../content/portfolio'

export function Footer() {
  const year = new Date().getFullYear()
  const { footer } = portfolio

  return (
    <footer
      id="footer"
      className="mt-auto border-t border-zinc-700/40 text-center text-sm text-zinc-500"
    >
      <Container className="py-6">
        <p className="mb-1 text-base font-bold text-zinc-300">{footer.shortName}</p>
        <p className="mx-auto mb-3 max-w-md text-zinc-500">{footer.tagline}</p>
        <p className="text-xs text-zinc-600">
          © {year} {footer.copyrightName}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
