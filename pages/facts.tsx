import { NextPage } from 'next'
import React from 'react'
import FactsBanner from '../components/app/Facts/Banner'
import BasePage from '../components/shared/BasePage'

const facts: NextPage = () => {
	return (
		<BasePage>
			<FactsBanner />
		</BasePage>
	)
}

export default facts
