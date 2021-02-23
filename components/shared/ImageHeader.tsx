import clsx from 'clsx'
import * as React from 'react'

interface IImageHeaderProps extends React.ImgHTMLAttributes<any> {
	height: number
}

const ImageHeader: React.FunctionComponent<IImageHeaderProps> = ({
	className,
	height,
	src,
	children,
}) => {
	return (
		<div
			style={{ height: `${height}vh` }}
			className={clsx('relative ', className)}
		>
			<img
				className="absolute top-0 left-0 object-cover w-full h-full "
				loading="lazy"
				src={src}
			/>
			{children}
		</div>
	)
}

export default ImageHeader
