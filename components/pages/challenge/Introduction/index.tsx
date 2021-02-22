import * as React from 'react'
import DescriptionElement from './DescriptionElement'
import styles from './style.module.scss'
import { INTRO_DATA } from './index.data'

const Goal: React.FunctionComponent = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.container}>
				{INTRO_DATA.map(({ title, text }) => (
					<DescriptionElement key={title} text={text} title={title} />
				))}
			</div>
		</section>
	)
}

export default Goal
