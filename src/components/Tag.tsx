import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

type TagProps = {
  children: ReactNode
  className?: string
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full border border-zinc-600/80 bg-zinc-800/50 px-2.5 py-0.5 text-xs text-zinc-200',
        className,
      )}
    >
      {children}
    </span>
  )
}
