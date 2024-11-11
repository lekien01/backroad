import React from 'react'
import { socialLinks } from '../data'

const SocialLink = ({ parentSocialLink, childSocialLink }) => {
  return (
    <ul className={parentSocialLink}>
      {socialLinks.map((social) => {
        const { id, href, icon } = social
        return (
          <li key={id}>
            <a href={href} target="_blank" className={childSocialLink}>
              <i className={icon}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLink
