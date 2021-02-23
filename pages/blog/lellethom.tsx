import { NextPage } from 'next'
import * as React from 'react'
import { mainArticles } from '../../components/pages/Blog/data'
import BannerLeletom from '../../components/pages/Blog/Lelethom/Banner'
import LelethomArticle from '../../components/pages/Blog/Lelethom/LelethomArticle'

const l = mainArticles[0]

const BlogElementPage: NextPage = () => {
	return (
		<div>
			<BannerLeletom blog={l} />
			<div className="mcontainer">
				<div className="w-3/4 mx-auto my-10 md:mt-14">
					<LelethomArticle blog={l} />
				</div>
			</div>
		</div>
	)
}

export default BlogElementPage
