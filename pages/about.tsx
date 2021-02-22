import { NextPage } from 'next'
import React from 'react'
import BasePage from '../components/shared/BasePage'
import ComingSoon from '../components/template/ComingSoon'

const AboutPage: NextPage = () => {
	return (
		<BasePage>
			<ComingSoon />
		</BasePage>
	)
}

export default AboutPage
