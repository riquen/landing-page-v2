import { ElementType } from 'react'

import Link from 'next/link'

type NavItemProps = {
  href: string
  icon: ElementType
  title: string
}

export const NavItem = ({ href, icon: Icon, title }: NavItemProps) => (
  <Link href={href} className="flex items-center gap-3 px-3 py-2 rounded-lg active:bg-sky-100">
    <Icon className="w-5 h-5" />
    <span className="font-medium text-neutral-700">{title}</span>
  </Link>
)
