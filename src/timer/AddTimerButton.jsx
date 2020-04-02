import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as style from '../misc/style'
import TimerContext from './TimerContext'
import UnstyledButton from '../misc/UnstyledButton'
import BsButton from '../misc/BsButton'

// NOTE
// AddTimerButton component can be placed anywhere within a TimerContext
// and based on that information alone, it knows how to render and behave;
// no props required.

const MenuAddTimerButton = styled(UnstyledButton)({
	backgroundColor: 'transparent',
	color: 'white',
	fontSize: 24,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	margin: `${style.headerPadding}px 0`,
})

const AddTimerButton = React.memo(props => {
	const timerContext = useContext(TimerContext)
	const dispatch = useDispatch()

	const handleClick = (e) => {
		dispatch({
			type: 'TIMER_CREATE',
			duration_seconds: 70,
			title: timerContext.title,
			related_view: timerContext.view,
		})
	}
	
	if(timerContext.view === 'menu') {
		return (
			<MenuAddTimerButton onClick={handleClick}>
				<FontAwesomeIcon icon="plus-circle" />
			</MenuAddTimerButton>
		)
	} else {
		return (
			<BsButton color="primaryBlue" icon="plus-circle" onClick={handleClick}>
				Add Timer
			</BsButton>
		)
	}
})

export default AddTimerButton
