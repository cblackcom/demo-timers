import React from 'react'
import styled from '@emotion/styled'
import { Box, BoxTitle, BoxViewTimerContainer } from './Box'
import BsButton from '../misc/BsButton'

const ReadmeBoxRoot = styled(Box)({
	gridColumn: '1/3',
})

const Row = styled.div({
	display: 'flex',
	flexDirection: 'row',
})

const Content = styled.div({
	flex: '1 1 62%',
})

const Buttons = styled.div({
	flex: '1 1 38%',
})

const ReadmeBox = React.memo(props => {
	const handleReadmeClick = (e) => {
		window.location.href = '//github.com/cblackcom/demo-timers'
	}
	return (
		<ReadmeBoxRoot>
			<BoxTitle>README box.</BoxTitle>
			<Row>
				<Content>
					<p>
						This demo demonstrates some things.  The README says more.<br/>
						Say, why don't you time yourself??
					</p>
				</Content>
				<Buttons>
					<BoxViewTimerContainer />
					<BsButton color="primary" icon="book-reader" onClick={handleReadmeClick}>
						CHECK THAT README!
					</BsButton>
				</Buttons>
			</Row>
		</ReadmeBoxRoot>
	)
})

export default ReadmeBox
