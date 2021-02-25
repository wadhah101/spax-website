import * as React from 'react'
import { FiChevronRight, FiDownload } from 'react-icons/fi'

const imageUrl = '/pages/challenge/banner.jpg'

const ChallengeBanner: React.FunctionComponent = () => {
	return (
		<div className="relative flex flex-col min-h-screen ">
			<img
				src={imageUrl}
				className="absolute top-0 left-0 object-cover w-full h-full"
			/>
			<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70" />
			<div className="relative z-10 flex items-center flex-grow w-full pb-20 text-white place-items-center mcontainer ">
				<div className="flex flex-col items-center md:items-start">
					<h1 className="text-4xl font-bold tracking-wide md:text-8xl">
						CHALLENGE
					</h1>
					<h2 className="mt-6 text-2xl text-center md:text-left">
						Our special challenge. <br /> The first of its kind in Tunisia IS
						caling you
					</h2>
					<div className="flex flex-col mt-6 md:flex-row md:mt-8 ">
						{/* TODO organize : repeating myself */}
						<a
							className="inline-flex items-center px-6 py-2 font-semibold tracking-wider duration-300 border-2 border-white md:text-xl hover:bg-white hover:text-black hover:text-opacity-80 hover:"
							href="/pages/challenge/cdc-spax.pdf"
							download="cdc-spax.pdf"
						>
							<span>Download PDF</span>
							<div className="ml-4 text-3xl ">
								<FiDownload />
							</div>
						</a>

						<a
							className="inline-flex items-center px-6 py-2 mt-4 font-semibold tracking-wider text-black duration-300 bg-white border-2 border-white md:mt-0 md:ml-4 md:text-xl text-opacity-70 "
							href="https://ieeespaxinsatxenitsb.typeform.com/to/NcsOtEqu"
							target="_blank"
							rel="noreferrer"
						>
							<span>INSCRIPTION</span>
							<div className="ml-2 text-3xl ">
								<FiChevronRight />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChallengeBanner
