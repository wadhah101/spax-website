import { NextPage } from 'next'
import Head from 'next/head'
import * as React from 'react'
import BlogBanner from '../../components/pages/Blog/BlogBanner'

const BlogPage: NextPage = () => {
	return (
		<div>
			<Head>
				<meta property="og:title" content="Spax Tunisia Blog" />
				<meta
					property="og:description"
					content="The Official Blog for Spax-Tunisia Event"
				/>
				<meta property="og:image" content="/thumbnails/blog.jpg" />
				<meta property="og:url" content="https://spax-tunisia.tech/blog" />
			</Head>
			<BlogBanner />
			<div
				style={{ minHeight: '50vh' }}
				className="flex items-center py-10 md:py-14 mcontainer"
			>
				{/* <ArticleList blogs={mainArticles} /> */}
			</div>
		</div>
	)
}

export default BlogPage
