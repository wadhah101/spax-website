import { NextPage } from 'next'
import React from 'react'
import Banner from '../components/pages/home/Banner'
import BasePage from '../components/shared/BasePage'
import Trailer from '../components/pages/home/Trailer'
import { appContext } from './_app'

export const Home: NextPage = () => {
	const { videoOpen } = React.useContext(appContext)

	return (
		<BasePage>
			{videoOpen && <Trailer />}
			<Banner />
		</BasePage>
	)
}

export default Home
