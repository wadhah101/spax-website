import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import * as React from 'react'

interface IBlogElementPageProps {
	name?: string
}

interface IBlogElementPagePath extends ParsedUrlQuery {
	slug: string
}

const BlogElementPage: NextPage<IBlogElementPageProps> = () => {
	return <div>Enter</div>
}

export const getStaticPaths: GetStaticPaths<IBlogElementPagePath> = async () => {
	return {
		paths: [],
		fallback: false,
	}
}
export const getStaticProps: GetStaticProps<
	IBlogElementPageProps,
	IBlogElementPagePath
> = async () => {
	return {
		props: {},
	}
}

export default BlogElementPage
