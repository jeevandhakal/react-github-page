import type { ComponentProps } from 'react'
import { cn } from '../lib/cn'

type SectionProps = Omit<ComponentProps<'section'>, 'aria-labelledby'> & {
  /** Value for `aria-labelledby` (maps to the heading `id` in this section). */
  labelledBy: string
}

export function Section({ labelledBy, className, children, ...rest }: SectionProps) {
  return (
    <section
      {...rest}
      aria-labelledby={labelledBy}
      className={cn('border-b border-zinc-700/40 py-10 last:border-b-0', className)}
    >
      {children}
    </section>
  )
}
