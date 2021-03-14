import { NextPage } from 'next'
import Head from 'next/head'
import * as React from 'react'
import { mainArticles } from '../../components/pages/Blog/data/blogs.data'
import BannerLeletom from '../../components/pages/Blog/Pages/Lelethom/LelethomBanner'
import TalksArticles from '../../components/pages/Blog/Pages/talks-debates/tallksArticle'

const l = mainArticles[1]

const BlogElementPage: NextPage = () => {
	return (
		<div>
			<Head>
				<title>SPAx 2021: Talks & Debate</title>
				<meta name="Description" content={l.description} />

				<meta property="og:title" content={l.title} />
				<meta property="og:description" content={l.description} />
				<meta property="og:image" content="/thumbnails/talks-debates.jpg" />
				<meta
					property="og:url"
					content="https://www.spax-tunisia.tech/blog/talks-debates"
				/>
			</Head>
			<BannerLeletom blog={l} />
			<div className="mcontainer">
				<div className="mx-auto my-10 md:my-10 md:w-3/4 md:mt-14">
					<TalksArticles />
				</div>
			</div>
		</div>
	)
}

export default BlogElementPage
