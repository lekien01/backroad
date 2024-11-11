import React from 'react'
import Logo from '../images/logo.svg'
import { socialLinks } from '../data'
import NavLink from './NavLink'
import SocialLink from './SocialLink'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <NavLink parentNavClass="nav-links" childNavClass="nav-link" />
        <SocialLink parentSocialLink="nav-icons" childSocialLink="nav-icon" />
      </div>
    </nav>
  )
}

export default Navbar
