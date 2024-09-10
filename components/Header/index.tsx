'use client'

import Link from 'next/link'
import { LuTowerControl, LuPlaneTakeoff, LuPlaneLanding } from 'react-icons/lu'
import { usePathname } from 'next/navigation'

import { Menu } from './Menu'
import { Nav } from './Nav'

export const Header = () => {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <header className="flex justify-between bg-sky-200 p-4 border-b-2 border-neutral-300 fixed top-0 w-full z-10">
      <Link href="/" className="flex outline-none active:bg-sky-100 rounded-lg">
        <LuTowerControl className="w-8 h-8 md:w-12 md:h-12 stroke-slate-950" />
        {isHome ? (
          <LuPlaneTakeoff className="w-8 h-8 md:w-12 md:h-12 stroke-slate-950" />
        ) : (
          <LuPlaneLanding className="w-8 h-8 md:w-12 md:h-12 stroke-slate-950" />
        )}
      </Link>
      <Menu />
      <Nav />
    </header>
  )
}
