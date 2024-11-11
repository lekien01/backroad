import React from 'react'
import { socialLinks } from '../data'
import NavLink from './NavLink'
import SocialLink from './SocialLink'

const Footer = () => {
  return (
    <footer className="section footer">
      <NavLink parentNavClass="footer-links" childNavClass="footer-link" />
      <SocialLink
        parentSocialLink="footer-icons"
        childSocialLink="footer-icon"
      />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
