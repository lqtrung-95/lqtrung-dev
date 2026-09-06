import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'label-mono inline-flex cursor-pointer items-center justify-center gap-2 rounded-md uppercase transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg) motion-reduce:transition-none',
  {
    variants: {
      variant: {
        default:
          'bg-(--accent) text-(--accent-fg) hover:-translate-y-px hover:bg-(--accent-hover) hover:shadow-[0_0_16px_-2px_var(--glow-shadow)]',
        outline:
          'border border-(--border) bg-transparent text-(--fg) hover:border-(--accent) hover:text-(--accent)',
        ghost: 'bg-transparent text-(--fg) hover:bg-(--bg-elevated-hover)',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { buttonVariants }
