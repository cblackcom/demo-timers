import React from 'react'
import styled from '@emotion/styled'
import { Box, BoxTitle, BoxViewTimerContainer } from './Box'

const Cat = styled.img({
	width: '100%',
})

const CatBox = React.memo(props => (
	<Box>
		<BoxTitle>CAT BOX!</BoxTitle>
		<p>
			This cat (picture) wants to be timed.<br/>
			Give it a go!  It's so enjoyable!
		</p>
		<BoxViewTimerContainer />
		<Cat src={`//cataas.com/cat?v=${Math.random()}`}/>
	</Box>
))

export default CatBox
