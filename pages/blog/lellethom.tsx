import { NextPage } from 'next'
import Head from 'next/head'
import * as React from 'react'
import { mainArticles } from '../../components/pages/Blog/blogs.data'
import BannerLeletom from '../../components/pages/Blog/Lelethom/LelethomBanner'
import LelethomArticle from '../../components/pages/Blog/Lelethom/LelethomArticle'

const l = mainArticles[0]

const BlogElementPage: NextPage = () => {
	return (
		<div>
			<Head>
				<title>From Engineering To Entrepreneurship</title>
				<meta name="Description" content={l.description} />

				<meta property="og:title" content={l.title} />
				<meta property="og:description" content={l.description} />
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
