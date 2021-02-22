import { GetStaticProps, NextPage } from 'next'
import * as React from 'react'

interface IBlogPageProps {
	name?: string
}

const BlogPage: NextPage<IBlogPageProps> = () => {
	return <div>Enter</div>
}

export const getStaticProps: GetStaticProps<IBlogPageProps> = async () => {
	return {
		props: {},
	}
}

export default BlogPage
