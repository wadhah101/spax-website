import * as React from 'react'
import ArticlePreview from './ArticlePreview'
import { Blog } from './data'

interface IArticleListProps {
	blogs: Blog[]
}

const ArticleList: React.FunctionComponent<IArticleListProps> = ({ blogs }) => {
	return (
		<div className="grid gap-8">
			{blogs.map((e, ind) => (
				<ArticlePreview key={ind} blog={e} />
			))}
		</div>
	)
}

export default ArticleList
