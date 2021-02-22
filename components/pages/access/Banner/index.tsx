import clsx from 'clsx'
import * as React from 'react'
import BannerWithImage from '../../../template/BannerWithImage'
import styles from './style.module.scss'

const image = '/access.webp'
const AccessBanner: React.FunctionComponent = () => {
	return (
		<BannerWithImage opacity={0.25} src={image}>
			<div
				className={clsx(
					styles.baseContainer,
					'z-10  text-center flex flex-col w-full'
				)}
			>
				<h1 className={clsx(styles.baseTitle, ' md:pt-0  pt-16')}>
					THE EVENT HAS CONCLUDED
				</h1>
				<h2 className="font-bold md:text-3xl">
					BUT MORE IS YET TO COME <br /> # IEEE INSAT &nbsp; # IEEE ENISO
				</h2>
			</div>
		</BannerWithImage>
	)
}

export default AccessBanner
