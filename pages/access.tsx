import { NextPage } from 'next'
import React from 'react'
import AccessBanner from '../components/pages/access/Banner'
import BasePage from '../components/shared/BasePage'

const access: NextPage = () => {
	return (
		<BasePage>
			<AccessBanner />
		</BasePage>
	)
}

export default access
