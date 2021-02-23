import * as React from 'react'
import styles from '../shared/basePage.module.scss'

const NotFoundComp: React.FunctionComponent = () => {
	return (
		<div className="grid h-screen text-white bg-black place-items-center">
			<div style={{ zIndex: 5 }} className={styles.baseContainer}>
				<h1 className={styles.baseTitle}>
					<span className={styles.bigger}> 404 </span>
					<br />
					<span> PAGE NOT FOUND </span>
				</h1>
			</div>
		</div>
	)
}

export default NotFoundComp
