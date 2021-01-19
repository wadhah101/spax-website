import { IconType } from 'react-icons'
import { NavElement, navFactory } from './nav.data'
import * as fa from 'react-icons/fa'

export interface SocialElement extends NavElement {
  icon: IconType
}

const socialElementFactory = (
  icon: IconType,
  link: NavElement
): SocialElement => ({ icon, ...link })

export const socialElements: SocialElement[] = [
  socialElementFactory(
    fa.FaFacebookF,
    navFactory(
      'https://www.facebook.com/Tunisia-Entrepreneurship-Summit-Triple-I-112265417325918/',
      'facebook page'
    )
  ),
  socialElementFactory(
    fa.FaInstagram,
    navFactory(
      'https://www.instagram.com/tes_action_for_iii/',
      'instagram page'
    )
  ),
]
