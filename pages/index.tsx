import { NextPage } from 'next'
import React from 'react'
import Banner from '../components/pages/home/Banner'
import BasePage from '../components/shared/BasePage'

export const Home: NextPage = () => {
	return (
		<BasePage>
			<Banner />
		</BasePage>
	)
}

export default Home
