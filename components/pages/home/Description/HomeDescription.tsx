import clsx from 'clsx'
import * as React from 'react'

const lorem =
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quos fuga animi ut dolor magni voluptate exercitationem nostrum inventore. Temporibus reiciendis rerum ratione autem modi architecto cumque fugit, omnis corporis.'

const IDescItemPropsFactory = (
	sub: string,
	title: string,
	description: string,
	big?: boolean
) => ({ sub, title, description, big })

interface IDescItemProps {
	sub: string
	title: string
	description: string
	big?: boolean
}

const DescItem: React.FunctionComponent<IDescItemProps> = ({
	sub,
	title,
	description,
	big,
}) => {
	return (
		<div>
			<div className="relative inline-block pb-3 mb-3">
				<h2>
					<span className="text-lg font-medium text-spaOrange-500">{sub}</span>
					<br />
					<span className={clsx('font-bold ', [big ? 'text-6xl' : 'text-4xl'])}>
						{title}
					</span>
				</h2>
				<div className="absolute bottom-0 w-full h-1 bg-spaOrange-400" />
			</div>
			<p
				className={clsx(' font-medium text-black text-opacity-90', [
					big ? 'text-xl' : 'text-lg',
				])}
			>
				{description}
			</p>
		</div>
	)
}

const elements: IDescItemProps[] = [
	IDescItemPropsFactory('TAKE PART IN THE', 'CHALLENGE', lorem, true),
	IDescItemPropsFactory('JOIN THE', 'DEBATE', lorem),
	IDescItemPropsFactory("DON'T MISS", 'THE TALKS', lorem),
]

const HomeSecription: React.FC = () => {
	return (
		<div className="grid w-full gap-12 md:grid-cols-2">
			<DescItem {...elements[0]} />
			<div className="mt-5">
				<DescItem {...elements[1]} />
				<div className="h-10" />
				<DescItem {...elements[2]} />
			</div>
		</div>
	)
}

export default HomeSecription
