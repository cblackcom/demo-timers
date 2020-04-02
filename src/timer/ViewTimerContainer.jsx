import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { selectTimerByView } from '../redux/timerSelectors'
import TimerContext from './TimerContext'
import Timer from './Timer'
import AddTimerButton from './AddTimerButton'

// NOTE
// this component shows the timer for the current TimerContext view,
// or if there isn't one, an Add Timer button

const ViewTimerContainer = React.memo(props => {
	const timerContext = useContext(TimerContext)
	const instance = useSelector(state => selectTimerByView(state, timerContext.view))

	return (
		<div className={props.className}>
			{instance ? (
				<Timer instance={instance} />
			) : (
				<AddTimerButton />
			)}
		</div>
	)
})

export default ViewTimerContainer
