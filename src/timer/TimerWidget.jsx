import React, { useRef, useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import * as style from '../misc/style'
import TimerProgressIndicator from './TimerProgressIndicator'

const TimerWidgetRoot = styled.div(props => {
	// TODO
	// let timerClassName = `timer-timer timerContextView-${timerContext.view} `

	return {
		backgroundColor: props.backgroundColor,
		color: 'white',
		borderRadius: style.borderRadius,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		padding: '7px 15px',
		cursor: 'pointer',
	}
})

const Graphic = styled.div({
	flex: '0 0 auto',
    overflow: 'hidden',  // https://stackoverflow.com/a/43809765
    paddingRight: '7px',
    display: 'flex',
	flexDirection: 'row',
	justifyContent: 'flex-end',
	alignItems: 'center',
})

const Labels = styled.div({
	flex: '1 1 auto',
    overflow: 'hidden',  // https://stackoverflow.com/a/43809765
    paddingLeft: '7px',
    paddingTop: '2.5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'left',
})

const Title = styled.div({
	fontSize: '14px',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
	width: '100%',
	overflow: 'hidden',
})

const Time = styled.div({
	fontSize: '12px',
})

const TimerWidget = React.memo(props => {
	const instance = props.instance

	let backgroundColor = style.color.success
	let trackColor = '#479644'

	if(instance.timeRemaining <= 0) {
		backgroundColor = style.color.danger
		trackColor = 'white'
	} else if(instance.timeRemaining < 60) {
		backgroundColor = '#EB9D50'
		trackColor = '#C37427'
	}

	return (
		<TimerWidgetRoot backgroundColor={backgroundColor} onClick={props.onClick}>
			<Graphic>
				<TimerProgressIndicator R={props.indicatorR} trackColor={trackColor} progress={instance.progress} />
			</Graphic>
			<Labels>
				<Title>{instance.title}</Title>
				<Time>{instance.formattedTime}</Time>
			</Labels>
		</TimerWidgetRoot>
	)
})

export default TimerWidget
