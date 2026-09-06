'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogClose = DialogPrimitive.Close

const variantClasses = {
  drawer: 'top-0 right-0 h-dvh w-full max-w-xs border-l p-6',
  center:
    'top-1/2 left-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-(--radius-lg) border p-0',
}

export function DialogContent({
  className,
  children,
  variant = 'drawer',
  ...props
}: ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  variant?: keyof typeof variantClasses
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
      <DialogPrimitive.Content
        className={cn(
          'fixed z-50 border-(--border) bg-(--bg-elevated) shadow-lg',
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
        {variant === 'drawer' && (
          <DialogPrimitive.Close className="absolute top-4 right-4 rounded-md p-1 text-(--fg-muted) hover:text-(--fg) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring)">
            <X className="size-5" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}

export const DialogTitle = DialogPrimitive.Title
export const DialogDescription = DialogPrimitive.Description
