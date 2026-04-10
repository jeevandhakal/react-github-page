import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

type HeadingProps = {
  level: 1 | 2 | 3
  id?: string
  children: ReactNode
  className?: string
}

const levelStyles: Record<1 | 2 | 3, string> = {
  1: 'mb-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl',
  2: 'mb-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl',
  3: 'mb-1.5 text-base font-semibold leading-snug [&_a]:text-inherit [&_a]:no-underline hover:[&_a]:underline',
}

export function Heading({ level, id, children, className }: HeadingProps) {
  const styles = cn(levelStyles[level], className)

  if (level === 1) {
    return (
      <h1 id={id} className={styles}>
        {children}
      </h1>
    )
  }
  if (level === 2) {
    return (
      <h2 id={id} className={styles}>
        {children}
      </h2>
    )
  }
  return (
    <h3 id={id} className={styles}>
      {children}
    </h3>
  )
}
