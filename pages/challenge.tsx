import { NextPage } from 'next'
import React from 'react'
import ChallengeBanner from '../components/pages/challenge/Banner'
import BasePage from '../components/shared/BasePage'

const challenge: NextPage = () => {
	return (
		<BasePage>
			<ChallengeBanner />
		</BasePage>
	)
}

export default challenge
