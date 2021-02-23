import * as React from 'react'
import styles from './basePage.module.scss'
import clsx from 'clsx'

const BasePage: React.FunctionComponent<{
	className?: string
}> = ({ children, className }) => {
	return <div className={clsx(className, styles.basePage)}> {children} </div>
}

export default BasePage
