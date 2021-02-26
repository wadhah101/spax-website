import * as React from 'react'
import BlogPreview from './BlogPreview'
import { Blog } from './data/blogs.data'

interface IArticleListProps {
	blogs: Blog[]
}

const ArticleList: React.FunctionComponent<IArticleListProps> = ({ blogs }) => {
	return (
		<div className="grid gap-8">
			{blogs.map((e, ind) => (
				<BlogPreview key={ind} blog={e} />
			))}
		</div>
	)
}

export default ArticleList
