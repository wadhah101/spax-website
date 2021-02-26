import dayjs from 'dayjs'
import * as React from 'react'
import ImageHeader from '../../../../shared/ImageHeader'
import { Blog } from '../../data/blogs.data'

interface IArticleProps {
	blog: Blog
}

const BannerLeletom: React.FC<IArticleProps> = ({ blog }) => {
	const formatedDate = dayjs(blog.date).format('DD MMMM YYYY')

	return (
		<div>
			<ImageHeader
				alt="Blog Page Banner Image"
				src={blog.image.href}
				className="grid place-items-center"
				height={50}
			>
				<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
				<div className="relative z-10 text-white ">
					<div className="text-center mcontainer">
						<p className="mb-2 text-xs font-semibold text-white uppercase md:mb-4 text-opacity-80 ">
							{/* may god forgive me &nbsp;&nbsp;&nbsp; */}
							BY {blog.writer}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
							{formatedDate}
							&nbsp;&nbsp;&nbsp;
						</p>
						<h1 className="mb-4 text-4xl font-bold md:mb-6 md:text-6xl ">
							{blog.title}
						</h1>
					</div>
				</div>
			</ImageHeader>
		</div>
	)
}

export default BannerLeletom
