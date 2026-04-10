import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../lib/cn'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Container({ className, children, ...rest }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-3xl px-5 text-left', className)} {...rest}>
      {children}
    </div>
  )
}
