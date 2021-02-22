import Head from 'next/head'
import * as React from 'react'

const headDescription = 'TODO'

const AppHead: React.FunctionComponent = () => {
	return (
		<Head>
			<title>SPAx: Tunisia </title>
			<link rel="icon" type="image/png" href="/favicon.png" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="Description" content={headDescription} />
			<meta
				name="Author"
				content="wadhah mahrouk https://www.linkedin.com/in/wadhah-mahroug-392a40184/"
			/>
		</Head>
	)
}

export default AppHead
