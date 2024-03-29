import clsx from 'clsx'
import * as React from 'react'
import styled from 'styled-components'
import styles from './bannerWithImage.module.scss'

interface IBannerWithImageProps {
	src: string
	opacity?: number
	as?: string
	className?: string
}

const BeforeOpacity = styled.div<{ op: number; url: string }>`
	background: url(${({ url }) => url}) center center no-repeat;
	background-size: cover;

	&::before {
		background: rgba(0, 0, 0, ${({ op }) => op});
	}
`

const BannerWithImage: React.FunctionComponent<IBannerWithImageProps> = ({
	src,
	opacity,
	children,
	className,
	as,
}) => {
	return (
		<BeforeOpacity
			as={as as never}
			url={src}
			op={opacity}
			className={clsx(styles.wrapper, className)}
		>
			{children}
		</BeforeOpacity>
	)
}

BannerWithImage.defaultProps = {
	opacity: 0.5,
}

export default BannerWithImage
