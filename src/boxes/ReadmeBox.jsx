import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, BoxTitle, BoxViewTimerContainer } from './Box'
import BsButton from '../misc/BsButton'
import * as style from '../misc/style'

const ReadmeBoxRoot = styled(Box)({
	gridColumn: '1/3',
})

const Row = styled.div({
	display: 'flex',
	flexDirection: 'row',
})

const Content = styled.div({
	flex: '1 1 62%',
	paddingRight: 20,
})

const SpinningIcon = styled(FontAwesomeIcon)({
	'&:hover': {
		animation: `${style.rotateKeyframes} .5s linear infinite`,
	},
})

const GrantMessage = styled.span({
	fontSize: '80%',
	color: '#555',
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
						Welcome to demo-timers.  This is a demo of some tricks
						and techniques I have picked up over the last couple
						of years in the front-end space.  Click on a link to
						view some code highlights.
					</p>
					<ul>
						<li>React 16.x Hooks</li>
						<li>Redux</li>
						<li>Memoized Selectors (reselect)</li>
						<li>Custom Hooks + Debouncing</li>
					</ul>
					<p>
						<SpinningIcon icon="head-side-cough" />
						&nbsp;&nbsp;
						<GrantMessage>
							Grant for this development time generously provided by the Coronavirus
						</GrantMessage>
					</p>
				</Content>
				<Buttons>
					<BoxViewTimerContainer />
					<BsButton color="primary" icon="book-reader" onClick={handleReadmeClick}>
						README on GitHub
					</BsButton>
				</Buttons>
			</Row>
		</ReadmeBoxRoot>
	)
})

export default ReadmeBox
