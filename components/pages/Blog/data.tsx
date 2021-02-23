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
		image: '/lost.webp',
		title: 'The starting of L’ellet’hom',
		description:
			'Engineering is one of the most honorable jobs in the world. The advancement, we, as the human race, made due to engineering is immense. However, due to this fact, when we talk about engineers as individuals, we only think about machinery, electricity among other industrial fields and limit their individual potential as simply that, people who facilitate our lives in the technical prospect....',
		date: new Date(),
		writer: 'Kmar Mhiri & Achoick gharsallah',
		tags: 'STARTUP',
		href: '/blog/lellethom',
	},
]
