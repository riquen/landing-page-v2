'use client'

import Link from 'next/link'
import {
  LuTowerControl,
  LuPlaneTakeoff,
  LuPlaneLanding,
  LuMenu,
  LuHome,
  LuPlane,
  LuImage,
  LuDollarSign,
  LuSmartphone,
  LuFileText,
} from 'react-icons/lu'
import { usePathname } from 'next/navigation'
import { TbDrone } from 'react-icons/tb'

import { MenuItem } from './MenuItem'
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent } from '../ui/menubar'

export const Header = () => {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <div className="flex justify-between bg-sky-200 p-4 border-b-2 border-neutral-300">
      <div className="flex justify-between">
        <Link href="/" className="flex outline-none">
          <LuTowerControl className="w-8 h-8 stroke-slate-950" />
          {isHome ? (
            <LuPlaneTakeoff className="w-8 h-8 stroke-slate-950" />
          ) : (
            <LuPlaneLanding className="w-8 h-8 stroke-slate-950" />
          )}
        </Link>
      </div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <LuMenu className="w-8 h-8 stroke-slate-950" />
          </MenubarTrigger>
          <MenubarContent>
            <MenuItem href="/" icon={LuHome} title="Home" />
            <MenuItem href="intro" icon={LuFileText} title="Intro" />
            <MenuItem href="aircrafts" icon={LuPlane} title="Aircrafts" />
            <MenuItem href="uan" icon={TbDrone} title="UAN" />
            <MenuItem href="gallery" icon={LuImage} title="Gallery" />
            <MenuItem href="pricing" icon={LuDollarSign} title="Prices" />
            <MenuItem href="contact" icon={LuSmartphone} title="Contact" />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
