import React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

const ClockRoot = styled.div({
	fontSize: '16px',
	whiteSpace: 'nowrap',
})

// NOTE
// Hooks + Redux = tidy, predictable code

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
