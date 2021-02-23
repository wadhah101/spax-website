import * as React from 'react'
import BannerWithImage from '../../../template/BannerWithImage'
import Countdown from '../Countdown'
import dayjs from 'dayjs'

const Banner: React.FunctionComponent = () => {
	const eventDate = dayjs('2021-02-24T12:30:00.000Z')

	return (
		<BannerWithImage opacity={0.3} as="section" src="/pages/home/banner.jpg">
			<div className="z-10 flex flex-col items-center flex-grow text-center mcontainrt">
				<h1>
					<img
						className="w-60 md:w-96"
						src="/logo/logo-spax-2021-white-400.png"
					/>
				</h1>

				<div className="mt-8">
					<Countdown date={eventDate} />
				</div>
			</div>
		</BannerWithImage>
	)
}

export default Banner
