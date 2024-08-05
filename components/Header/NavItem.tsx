import { ElementType } from 'react'

import Link from 'next/link'

import { CollapsibleTrigger } from '@/components/ui/collapsible'

type NavItemProps = {
  href: string
  icon: ElementType
  title: string
}

export const NavItem = ({ href, icon: Icon, title }: NavItemProps) => (
  <CollapsibleTrigger asChild>
    <Link href={href} className="flex items-center gap-3 px-3 py-2 rounded-lg active:bg-sky-100">
      <Icon className="w-5 h-5 stroke-slate-950" />
      <span className="font-medium text-neutral-700 font-open-sans">{title}</span>
    </Link>
  </CollapsibleTrigger>
)
