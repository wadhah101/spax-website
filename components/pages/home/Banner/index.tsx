import * as React from 'react'
import { FaYoutube } from 'react-icons/fa'
import { appContext } from '../../../../pages/_app'
import BannerWithImage from '../../../template/BannerWithImage'
import Countdown from '../Countdown'
import dayjs from 'dayjs'

const Banner: React.FunctionComponent = () => {
	const { setVideoOpen } = React.useContext(appContext)
	const eventDate = dayjs('2021-02-24T16:00:00.000Z')

	return (
		<BannerWithImage opacity={0.3} as="section" src="/pages/home/banner.jpg">
			<div className="z-10 flex flex-col items-center flex-grow text-center mcontainrt">
				<h1>
					<img
						className=" w-72 md:w-96"
						src="/logo/logo-spax-2021-white-400.png"
					/>
				</h1>

				<div className="mt-6">
					<button
						onClick={() => setVideoOpen(true)}
						className="flex items-center transition-colors duration-300 ease-in-out "
					>
						<div className="mr-2 text-4xl text-white">
							<FaYoutube />
						</div>
					</button>
				</div>

				<div className="mt-6">
					<Countdown date={eventDate} />
				</div>
			</div>
		</BannerWithImage>
	)
}

export default Banner
