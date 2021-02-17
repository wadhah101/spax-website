export interface NavElement {
  href: string;
  name: string;
}

export const navElementGen = (href: string, name: string): NavElement => ({
  href,
  name,
});

export const navElements: NavElement[] = [
  navElementGen("/", "home"),
  navElementGen("/blog", "did you know"),
  navElementGen("/challenge", "challenge"),
  navElementGen("/about", "about us"),
  navElementGen("/contact", "contact"),
];

export const inscriptionLink = navElementGen("/inscription", "join us");
