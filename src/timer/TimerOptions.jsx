import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import { UtilityFloatAbsolute } from '../misc/UtilityFloat'
import BsButton from '../misc/BsButton'
import TimerContext from './TimerContext'
import * as style from '../misc/style'

const TimerOptionsRoot = styled(UtilityFloatAbsolute)(props => ({
	display: 'flex',
	flexDirection: 'column',
	padding: '10px 13px 2px',

	// NOTE
	// Using context to change the appearance of a component from several ancestors
	// up without sending props up the heirarchy
	marginTop: (props.view === 'menu') ? style.headerPadding : 0,
}))

const TimerOptionButton = styled(BsButton)({
	marginBottom: '8px',
})

const TimerOptions = React.memo(props => {
	const timerContext = useContext(TimerContext)
	const dispatch = useDispatch()

	const timer_id = props.instance.timer_id

	const handleSnoozeClick = (e) => {
		dispatch({type: 'TIMER_OPTIONS_HIDE'})
		dispatch({
			type: 'TIMER_SNOOZE',
			timer_id,
		})
	}

	const handleDeleteClick = (e) => {
		dispatch({type: 'TIMER_OPTIONS_HIDE'})
		
		// if(window.confirm('Are you sure you want to delete this timer?')) {
			dispatch({
				type: 'TIMER_DELETE',
				timer_id,
			})
		// }
	}

	return (
		<TimerOptionsRoot view={timerContext.view}>
			<TimerOptionButton
				color="primaryBlue"
				icon="bed"
				onClick={handleSnoozeClick}
			>
				+ 5 min
			</TimerOptionButton>
			<TimerOptionButton
				color="danger"
				icon="trash-alt"
				onClick={handleDeleteClick}
			>
				Delete
			</TimerOptionButton>
		</TimerOptionsRoot>
	)
})

export default TimerOptions
