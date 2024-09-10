import { ElementType } from 'react'

import Link from 'next/link'

type NavItemProps = {
  href: string
  icon: ElementType
  title: string
}

export const NavItem = ({ href, icon: Icon, title }: NavItemProps) => (
  <Link href={href} className="flex items-center gap-1 rounded-lg active:bg-sky-100 outline-none">
    <Icon className="w-6 h-6 stroke-slate-950" />
    <p className="font-medium text-neutral-700 font-open-sans">{title}</p>
  </Link>
)
