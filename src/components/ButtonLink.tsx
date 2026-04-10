import type { ComponentProps } from 'react'
import { cn } from '../lib/cn'

type ButtonLinkProps = ComponentProps<'a'>

export function ButtonLink({ className, ...rest }: ButtonLinkProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center rounded-lg border border-zinc-600 bg-zinc-800/50 px-4 py-2 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800',
        className,
      )}
      {...rest}
    />
  )
}
