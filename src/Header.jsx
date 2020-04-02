import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCalculatedTimers } from './redux/timerSelectors'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeaderClock from './HeaderClock'
import Timer from './timer/Timer'
import UnstyledButton from './misc/UnstyledButton'
import * as style from './misc/style'
import TimerContext from './timer/TimerContext'

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
	flexWrap: 'wrap',
	marginBottom: style.headerPadding * -1,
})

const SpacedTimer = styled(Timer)({
	margin: `0 ${style.headerPadding}px ${style.headerPadding}px 0`,
})

const AddTimerButton = styled(UnstyledButton)({
	backgroundColor: 'transparent',
	color: 'white',
	fontSize: 24,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	margin: `${style.headerPadding}px 0`,
})

const timerContextInfo = {
	view: 'menu',
}

const Header = React.memo(props => {
	const timerInstances = useSelector(selectCalculatedTimers)
	const dispatch = useDispatch()

	const handleAddClick = () => {
		dispatch({
			type: 'TIMER_CREATE',
			duration_seconds: 70,
		})
	}

	return (
		<HeaderRoot>
			<TimerContext.Provider value={timerContextInfo}>
				<Timers>
					{timerInstances.map(instance => (
						<SpacedTimer instance={instance} />
					))}
					<AddTimerButton onClick={handleAddClick}>
						<FontAwesomeIcon icon="plus-circle" />
					</AddTimerButton>
				</Timers>
			</TimerContext.Provider>
			<HeaderClock />
		</HeaderRoot>
	)
})

export default Header
