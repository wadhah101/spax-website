import * as React from 'react'
import ImageHeader from '../../shared/ImageHeader'

const BlogBanner: React.FunctionComponent = () => {
	return (
		<div>
			<ImageHeader
				alt="Blog Page Banner Image"
				src="/pages/blog/blogpic.jpg"
				className="grid place-items-center"
				height={50}
			>
				<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
				<div className="relative z-10 text-white ">
					<div className="text-center">
						<h1 className="mb-4 text-5xl font-bold md:mb-6 md:text-6xl ">
							BLOG
						</h1>
						<h2 className="text-xl md:text-2xl">Our Latest Articles & news</h2>
					</div>
				</div>
			</ImageHeader>
		</div>
	)
}

export default BlogBanner
