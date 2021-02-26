import { NextPage } from 'next'
import React from 'react'
import Banner from '../components/pages/home/Banner'
import HomeSecription from '../components/pages/home/Description/HomeDescription'

export const Home: NextPage = () => {
	return (
		<div>
			{/* OverVeiw of the event */}
			{/* conference parts */}
			{/* organizers */}
			{/* program */}
			{/* speakers */}
			{/* location */}
			{/* latest blogs */}
			<Banner />

			<div className="py-14 mcontainer">
				<HomeSecription />
			</div>
		</div>
	)
}

export default Home
