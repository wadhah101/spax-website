import { NextPage } from 'next'
import Head from 'next/head'
import * as React from 'react'
import { mainArticles } from '../../components/pages/Blog/data'
import BannerLeletom from '../../components/pages/Blog/Lelethom/Banner'
import LelethomArticle from '../../components/pages/Blog/Lelethom/LelethomArticle'

const l = mainArticles[0]

const BlogElementPage: NextPage = () => {
	return (
		<div>
			<Head>
				<title>The starting of L’ellet’hom</title>
				<meta name="Description" content="The starting of L’ellet’hom" />

				<meta property="og:title" content="The starting of L’ellet’hom" />
				<meta
					property="og:description"
					content="The Official Blog for Spax-Tunisia Event"
				/>
				<meta property="og:image" content="/thumbnails/lilethom.jpg" />
				<meta
					property="og:url"
					content="https://www.spax-tunisia.tech/blog/lellethom"
				/>
			</Head>
			<BannerLeletom blog={l} />
			<div className="mcontainer">
				<div className="mx-auto my-10 md:my-10 md:w-3/4 md:mt-14">
					<LelethomArticle blog={l} />
				</div>
			</div>
		</div>
	)
}

export default BlogElementPage
