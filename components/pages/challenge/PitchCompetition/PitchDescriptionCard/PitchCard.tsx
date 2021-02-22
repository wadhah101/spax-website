import * as React from 'react'
import styles from './card.module.scss'

interface IPitchCardProps {
	title: string
	text: string
}

const PitchDescriptionCard: React.FunctionComponent<IPitchCardProps> = ({
	title,
	text,
}) => {
	return (
		<li className={styles.wrapper}>
			<h4>{title}</h4>
			<p> {text} </p>
		</li>
	)
}

export default PitchDescriptionCard
