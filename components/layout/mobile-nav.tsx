'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import type { NavLink } from '@/lib/site-config'

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open navigation menu" className="md:hidden">
          <Menu className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="label-mono mb-6 text-(--fg-subtle) uppercase">Menu</DialogTitle>
        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <DialogClose asChild key={link.href}>
              <Link
                href={link.href}
                className="text-lg font-medium text-(--fg) transition-colors duration-150 ease-out hover:text-(--accent)"
              >
                {link.title}
              </Link>
            </DialogClose>
          ))}
        </nav>
      </DialogContent>
    </Dialog>
  )
}
