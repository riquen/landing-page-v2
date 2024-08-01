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

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

import { NavItem } from './NavItem'

export const Header = () => {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <Collapsible className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-3 bg-sky-200 p-4 data-[state=open]:bottom-0 data-[state=closed]:border-b-2 data-[state=closed]:border-neutral-300">
      <div className="flex justify-between">
        <Link href="/" className="flex outline-none">
          {/* testar tamanho dos icones em prd */}
          <LuTowerControl className="w-8 h-8" />
          {isHome ? <LuPlaneTakeoff className="w-8 h-8" /> : <LuPlaneLanding className="w-8 h-8" />}
        </Link>
        <CollapsibleTrigger className="outline-none" asChild>
          <button>
            <LuMenu className="w-8 h-8" />
          </button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="data-[state=closed]:hidden" forceMount>
        <nav className="flex flex-col mt-8 gap-2">
          <NavItem href="/" icon={LuHome} title="Home" />
          <NavItem href="intro" icon={LuFileText} title="Intro" />
          <NavItem href="aircrafts" icon={LuPlane} title="Aircrafts" />
          <NavItem href="uan" icon={TbDrone} title="UAN" />
          <NavItem href="gallery" icon={LuImage} title="Gallery" />
          <NavItem href="pricing" icon={LuDollarSign} title="Prices" />
          <NavItem href="contact" icon={LuSmartphone} title="Contact" />
        </nav>
      </CollapsibleContent>
    </Collapsible>
  )
}
