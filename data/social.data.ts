import { IconType } from "react-icons";
import { NavElement, navElementGen } from "./nav.data";
import * as fa from "react-icons/fa";

export interface SocialElement extends NavElement {
  icon: IconType;
}

const socialElementFactory = (
  icon: IconType,
  link: NavElement
): SocialElement => ({ icon, ...link });

export const socialElements: SocialElement[] = [
  socialElementFactory(
    fa.FaFacebookF,
    navElementGen(
      "https://www.facebook.com/Tunisia-Entrepreneurship-Summit-Triple-I-112265417325918/",
      "facebook page"
    )
  ),
  socialElementFactory(
    fa.FaInstagram,
    navElementGen(
      "https://www.instagram.com/tes_action_for_iii/",
      "instagram page"
    )
  ),
];
