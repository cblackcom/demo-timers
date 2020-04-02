import React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import { selectCalculatedTimers } from './redux/timerSelectors'
import HeaderClock from './HeaderClock'
import Timer from './timer/Timer'
import TimerContext from './timer/TimerContext'
import * as style from './misc/style'

const HeaderRoot = styled.div({
	backgroundColor: '#1a1a1a',
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
})

const SpacedTimer = styled(Timer)({
	marginRight: '8px',
})

const timerContextInfo = {
	view: 'menu',
}

const Header = React.memo(props => {
	const timerInstances = useSelector(selectCalculatedTimers)

	return (
		<HeaderRoot>
			<TimerContext.Provider value={timerContextInfo}>
				<Timers>
					{timerInstances.map(instance => (
						<SpacedTimer instance={instance} />
					))}
				</Timers>
			</TimerContext.Provider>
			<HeaderClock />
		</HeaderRoot>
	)
})

export default Header
