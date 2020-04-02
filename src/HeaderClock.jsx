import React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

const ClockRoot = styled.div({
	fontSize: '16px',
})

// NOTE
// React and Redux hooks are useful for building really simple
// data driven components.

const Clock = React.memo(props => {
	const clientTick = useSelector(state => state.timer.movement.clientTick)
	const d = new Date(clientTick)
	
	return (
		<ClockRoot>
			{d.toString()}
		</ClockRoot>
	)
})

export default Clock
