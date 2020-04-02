import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, BoxTitle, BoxViewTimerContainer } from './Box'
import * as style from '../misc/style'

const ReadmeBoxRoot = styled(Box)({
	gridColumn: '1/3',
})

const SuccessSpan = styled.span({
	color: style.color.success,
})

const SuccessLink = styled(SuccessSpan)({
	textDecoration: 'none',
	'&:hover': {
		textDecoration: 'underline',
	}
}).withComponent('a')

const SrcA = React.memo(props => (
	<SuccessLink href={'https://github.com/cblackcom/demo-timers/blob/master/src/' + props.file}>{props.children}</SuccessLink>
))

const CommentSpan = styled(SuccessSpan)({
	fontFamily: 'monospace',
	fontWeight: 'bold',
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

const ReadmeBox = React.memo(props => {
	return (
		<ReadmeBoxRoot>
			<BoxTitle>README box.</BoxTitle>
			<p>
				Welcome to demo-timers.  This is a demo of some tricks
				and techniques I have picked up over the last couple
				of years in front-end.
			</p>
			<BoxViewTimerContainer />
			<p>
				Links to example code highlights in&nbsp;
				<SuccessSpan>green</SuccessSpan> below—<br/>
				look for&nbsp;
				{/* eslint-disable-next-line */}
				<CommentSpan>// NOTE </CommentSpan> comments in the files for
				additional commentary.
			</p>
			<ul>
				<li>
					React 16.8+&nbsp;
					<a href="https://reactjs.org/docs/hooks-overview.html">Hooks</a> and&nbsp;
					<a href="https://reactjs.org/docs/react-api.html#reactmemo">Memoized Components</a>
					<ul>
						<li>for tidy, predictable code</li>
						<li><SrcA file="HeaderClock.jsx">HeaderClock component</SrcA></li>
						<li><SrcA file="Header.jsx">Header component</SrcA></li>
						<li><SrcA file="boxes/CatBox.jsx">CatBox component</SrcA></li>
					</ul>
				</li>
				<li>
					<a href="https://reactjs.org/docs/context.html">Context</a> +&nbsp;
					<a href="https://reactjs.org/docs/hooks-reference.html#usecontext">useContext hook</a>
					<ul>
						<li><i>"...provides a way to pass data through the component tree without having to pass props down manually at every level..."</i></li>
						<li><SrcA file="timer/TimerContext.js">Timer Context</SrcA></li>
						<li><SrcA file="Root.jsx">Root component</SrcA></li>
						<li><SrcA file="timer/AddTimerButton.jsx">AddTimerButton component</SrcA></li>
						<li><SrcA file="timer/ViewTimerContainer.jsx">ViewTimerContainer component</SrcA></li>
					</ul>
				</li>
				<li>
					Redux
					<ul>
						<li>a global database with auto UI binding... if you use it right</li>
						<li><SrcA file="redux/timerReducer.js">Timer Reducer</SrcA> (standard stuff)</li>
						<li><SrcA file="movement.js">movement.js</SrcA></li>
						<li>
							<SrcA file="jeff/">
								<FontAwesomeIcon icon="cannabis" /> Alternative patterns for Jeff <FontAwesomeIcon icon="cannabis" />
							</SrcA>
						</li>
						<li>
							<a href="https://github.com/zalmoxisus/redux-devtools-extension">redux-devtools</a> introspection tool&nbsp;
							<FontAwesomeIcon icon="thumbs-up" />	
						</li>
					</ul>
				</li>
				<li>
					<a href="https://redux.js.org/recipes/computing-derived-data">Reselect — Memoized Selectors</a> for derived data
					<ul>
						<li><SrcA file="redux/timerSelectors.js">Timer Selectors</SrcA></li>
					</ul>
				</li>
				<li>
					<a href="https://emotion.sh">Emotion</a>
					<ul>
						<li>combines the styling into the component</li>
						<li><SrcA file="boxes/Box.jsx">Box components</SrcA></li>
					</ul>
				</li>
				<li><SrcA file="misc/useDebouncedWindowSize.js">useDebouncedWindowSize custom hook</SrcA></li>
				<li><SrcA file="timer/TimerProgressIndicator.jsx">TimerProgressIndicator component</SrcA></li>
			</ul>
			<p>
				<SpinningIcon icon="head-side-cough" />
				&nbsp;&nbsp;
				<GrantMessage>
					Grant for this development time generously provided by the Coronavirus
				</GrantMessage>
			</p>
		</ReadmeBoxRoot>
	)
})

export default ReadmeBox
