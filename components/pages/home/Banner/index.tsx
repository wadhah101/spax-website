import * as React from 'react'
import BannerWithImage from '../../../template/BannerWithImage'
import Countdown from '../Countdown'
import dayjs from 'dayjs'
import { socialElements } from '../../../app/data/social.data'

const Banner: React.FunctionComponent = () => {
	const eventDate = dayjs('2021-03-07T09:00:00.000Z')

	return (
		<BannerWithImage opacity={0.3} as="section" src="/pages/home/banner.jpg">
			<div className="z-10 flex flex-col items-center flex-grow text-center mcontainrt">
				<h1>
					<img
						className="w-60 md:w-96"
						src="/logo/logo-spax-2021-white-400.png"
					/>
				</h1>

				<div className="flex items-center mt-8 ">
					{socialElements.map((e) => (
						<a
							title={e.name}
							href={e.href}
							target="_blank"
							rel="noopener noreferrer"
							key={e.href}
							className="mr-4 text-3xl"
						>
							<e.icon />
						</a>
					))}
				</div>
				<div className="mt-8">
					<Countdown date={eventDate} />
				</div>
			</div>
		</BannerWithImage>
	)
}

export default Banner
