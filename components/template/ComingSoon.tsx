import * as React from 'react'
import BannerWithImage from './BannerWithImage'

const ComingSoon: React.FunctionComponent = () => {
	return (
		<BannerWithImage src="/space.jpg">
			<h1
				style={{ zIndex: 3, textAlign: 'center' }}
				className="text-2xl font-bold tracking-wide md:text-8xl"
			>
				COMING <br /> SOON
			</h1>
		</BannerWithImage>
	)
}

export default ComingSoon
