export interface NavElement {
  href: string
  name: string
}

export const navFactory = (href: string, name: string): NavElement => ({
  href,
  name,
})

export const navElements: NavElement[] = [
  navFactory('/', 'home'),
  navFactory('/challenge', 'challenge'),
  navFactory('/access', 'event access'),
  navFactory('/facts', 'did you know'),
]

export const inscriptionLink = navFactory('/inscription', 'join us')
