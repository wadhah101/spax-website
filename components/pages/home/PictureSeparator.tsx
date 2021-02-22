import * as React from 'react'
import styled from 'styled-components'
import { down } from 'styled-breakpoints'

interface IPictureSeparatorProps {
	pictures: string[]
}

const Container = styled.section`
	display: flex;
	> * {
		flex-grow: 1;
	}
`

const StyledImage = styled.img`
	object-fit: cover;
	height: 400px;
	${down('md')} {
		width: 50%;
	}
`

const PictureSeparator: React.FunctionComponent<IPictureSeparatorProps> = ({
	pictures,
}) => {
	return (
		<Container>
			{pictures.map((e) => (
				<StyledImage alt={e} src={e} key={e} />
			))}
		</Container>
	)
}

export default PictureSeparator
