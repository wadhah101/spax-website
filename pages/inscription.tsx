import { NextPage } from 'next'
import React from 'react'
import BasePage from '../components/shared/BasePage'
import ComingSoon from '../components/template/ComingSoon'

const inscription: NextPage = () => {
	return (
		<BasePage>
			<ComingSoon />
		</BasePage>
	)
}

export default inscription
