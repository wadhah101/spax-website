import dayjs from 'dayjs'
import Link from 'next/link'
import * as React from 'react'
import { Blog } from './data/blogs.data'

interface IArticleProps {
	blog: Blog
}

const BlogPreview: React.FunctionComponent<IArticleProps> = ({ blog }) => {
	const formatedDate = dayjs(blog.date).format('DD MMMM YYYY')
	return (
		<div className="flex flex-col md:flex-row">
			<img
				alt={`${blog.title} image`}
				loading="lazy"
				className="w-full md:w-96"
				src={blog.image.href}
				width={blog.image.width}
				height={blog.image.height}
			/>
			<div className="mt-4 md:mt-0 md:ml-12">
				<h1 className="text-2xl font-semibold text-black md:text-3xl md:text-opacity-80">
					{blog.title}
				</h1>
				<div className="mt-1 mb-2 text-xs font-semibold text-black uppercase md:mb-4 text-opacity-40 ">
					{/* may god forgive me &nbsp;&nbsp;&nbsp; */}
					BY {blog.writer}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{formatedDate}
					&nbsp;&nbsp;&nbsp;
				</div>
				<p className="text-black text-opacity-90 md:text-opacity-70">
					{blog.description}
				</p>
				<Link href={blog.href} passHref>
					<a className="inline-block px-6 py-2 mt-8 text-xs font-semibold tracking-wide text-white duration-300 bg-black border-2 border-black hover:bg-white hover:text-black ">
						CONTINUE READING
					</a>
				</Link>
			</div>
		</div>
	)
}

export default BlogPreview
