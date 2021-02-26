import * as React from 'react'
import Countdown from '../Countdown'
import dayjs from 'dayjs'
import { socialElements } from '../../../app/data/social.data'

const Banner: React.FunctionComponent = () => {
	const eventDate = dayjs('2021-03-07T09:00:00.000Z')

	return (
		<div className="relative w-full ">
			<img
				className="absolute top-0 left-0 w-full h-full "
				src="/pages/home/banner.jpg"
			/>
			<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30" />
			{/* content */}
			<div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white place-items-center f mcontainer">
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
		</div>
	)
}

export default Banner
