import * as React from 'react'
import { WithRouterProps } from 'next/dist/client/with-router'
import clsx from 'clsx'
import { withRouter } from 'next/router'
import Link from 'next/link'
import { Children, cloneElement } from 'react'

interface INavLinkProps {
  href: string
  activeClassName?: string
}

const NavLink: React.FunctionComponent<INavLinkProps & WithRouterProps> = ({
  href,
  children,
  router: { pathname },
  activeClassName = 'active',
}) => {
  const child = Children.only(children) as React.ReactElement<{
    className: string
  }>

  const className = clsx(child.props.className, {
    [activeClassName]: pathname === href,
  })

  return (
    <Link passHref href={href}>
      {cloneElement(child, { className })}
    </Link>
  )
}

export default withRouter(NavLink)
