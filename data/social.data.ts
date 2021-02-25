import { IconType } from 'react-icons'
import { NavElement, navElementGen } from './nav.data'
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
		fa.FaFacebook,
		navElementGen('https://www.facebook.com/spax.tunisia.21/', 'facebook page')
	),
	socialElementFactory(
		fa.FaInstagram,
		navElementGen('https://www.instagram.com/spax.tunisia/', 'instagram page')
	),
]
