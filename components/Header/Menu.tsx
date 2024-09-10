import { LuMenu, LuHome, LuPlane, LuImage, LuSmartphone, LuFileText } from 'react-icons/lu'
import { TbDrone } from 'react-icons/tb'

import { MenuItem } from './MenuItem'
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent } from '../ui/menubar'

export const Menu = () => (
  <Menubar className="md:hidden">
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
        <MenuItem href="contact" icon={LuSmartphone} title="Contact" />
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
)
