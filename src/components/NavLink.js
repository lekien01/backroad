import React from 'react'
import { pageLinks } from '../data'

const NavLink = ({ parentNavClass, childNavClass }) => {
  return (
    <ul className={parentNavClass} id="nav-links">
      {pageLinks.map((link) => {
        const { id, href, text } = link
        return (
          <li key={id}>
            <a href={href} className={childNavClass}>
              {text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default NavLink
