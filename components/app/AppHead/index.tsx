import Head from 'next/head'
import * as React from 'react'

const headDescription =
	'SPAx : Student Professional Awareness is an event founded by IEEE back in 1976 and organized by IEEE Student Branches all over the world. This event is an opportunity for students to listen to experienced engineers from diverse backgrounds discuss topics from various professional development categories.These activities can involve virtual and in person talks and presentations, panel sessions as well as workshops focused on giving practical, real-world engineering experience. The ‘X’ in SPAx as in mathematics is a variable. It could be a conference with an invited speaker, a series of activities focused on sharpening career skills, a social event to foster networking and team building skills, a tech talk, or any other form. This year IEEE INSAT SB and IEEE ENIT SB are working together on a really special edition: the first SPAx event in the region'

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
