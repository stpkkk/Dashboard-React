import React, { type UIEventHandler } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { SidebarData } from '../../data/sidebarData'

interface SidebarProps {
  sidebar: boolean
  showSidebar: UIEventHandler
}

const Navbar: React.FC<SidebarProps> = ({
  showSidebar,
  sidebar
}: SidebarProps) => {
  return (
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className="nav-menu-items" onClick={showSidebar}>
        {SidebarData.map((item, index: number) => {
          return (
            <li key={index} className={item.clName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
