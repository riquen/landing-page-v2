import { LuPlane, LuImage, LuSmartphone, LuFileText } from 'react-icons/lu'
import { TbDrone } from 'react-icons/tb'

import { NavItem } from './NavItem'

export const Nav = () => (
  <nav className="hidden md:flex gap-6 lg:gap-10">
    <NavItem href="intro" icon={LuFileText} title="Intro" />
    <NavItem href="aircrafts" icon={LuPlane} title="Aircrafts" />
    <NavItem href="uan" icon={TbDrone} title="UAN" />
    <NavItem href="gallery" icon={LuImage} title="Gallery" />
    <NavItem href="contact" icon={LuSmartphone} title="Contact" />
  </nav>
)
