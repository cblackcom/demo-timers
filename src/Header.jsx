import React from 'react'
import _ from 'lodash'
import { useSelector } from 'react-redux'
import { selectCalculatedTimers } from './redux/timerSelectors'
import styled from '@emotion/styled'
import * as style from './misc/style'
import TimerContext from './timer/TimerContext'
import HeaderClock from './HeaderClock'
import Timer from './timer/Timer'
import AddTimerButton from './timer/AddTimerButton'

const HeaderRoot = styled.div({
	backgroundColor: style.color.notQuiteBlack,
	color: 'white',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: style.headerPadding,
	position: 'relative',
})

const Timers = styled.div({
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	marginBottom: style.headerPadding * -1,
})

const SpacedTimer = styled(Timer)({
	margin: `0 ${style.headerPadding}px ${style.headerPadding}px 0`,
})

const timerContextInfo = {
	view: 'menu',
}

// NOTE
// Hooks + Redux = tidy, predictable code

const Header = React.memo(props => {
	const timerInstances = useSelector(selectCalculatedTimers)

	return (
		<HeaderRoot>
			<TimerContext.Provider value={timerContextInfo}>
				<Timers>
					{_.map(timerInstances, (instance, k) => (
						<SpacedTimer key={k} instance={instance} />
					))}
					<AddTimerButton />
				</Timers>
			</TimerContext.Provider>
			<HeaderClock />
		</HeaderRoot>
	)
})

export default Header
