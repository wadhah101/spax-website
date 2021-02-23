export interface Blog {
	image: string
	title: string
	description: string
	date: Date
	writer: string
	tags: string
	href: string
}

export const mainArticles: Blog[] = [
	{
		image: '/pages/blog/lilethom/banner.jpg',
		title: 'From Engineering To Entrepreneurship',
		description:
			'Engineering is one of the most honorable jobs in the world. The advancement, we, as the human race, made due to engineering is immense. However, due to this fact, when we talk about engineers as individuals, we only think about machinery, electricity among other industrial fields and limit their individual potential as simply that, people who facilitate our lives in the technical prospect....',
		date: new Date('2021-02-23T12:00:00'),
		writer: 'Kmar Mhiri, Achoick gharsallah & Sarrah Kamoun',
		tags: 'STARTUP',
		href: '/blog/lellethom',
	},
]
