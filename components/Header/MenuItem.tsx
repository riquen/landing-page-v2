import { ElementType } from 'react'

import Link from 'next/link'

import { MenubarItem } from '../ui/menubar'

type MenuItemProps = {
  href: string
  icon: ElementType
  title: string
}

export const MenuItem = ({ href, icon: Icon, title }: MenuItemProps) => (
  <MenubarItem asChild>
    <Link href={href}>
      <Icon className="w-5 h-5 stroke-slate-950" />
      <p className="font-medium text-neutral-700 font-open-sans">{title}</p>
    </Link>
  </MenubarItem>
)
