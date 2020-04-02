import React, { useContext } from 'react'
import styled from '@emotion/styled'
import * as style from '../misc/style'
import TimerContext from './TimerContext'
import TimerProgressIndicator from './TimerProgressIndicator'

const TimerWidgetRoot = styled.div(props => ({
	backgroundColor: props.backgroundColor,
	color: 'white',
	borderRadius: style.borderRadius,
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	padding: '7px 15px',
	cursor: 'pointer',
}))

const Graphic = styled.div(props => ({
	flex: '0 0 auto',
    overflow: 'hidden',  // https://stackoverflow.com/a/43809765
    paddingRight: '7px',
    display: 'flex',
	flexDirection: 'row',
	justifyContent: 'flex-end',
	alignItems: 'center',
}))

const Labels = styled.div(props => ({
	flex: '1 1 auto',
    overflow: props.jumbo ? 'visible' : 'hidden',  // https://stackoverflow.com/a/43809765
    paddingLeft: '7px',
    paddingTop: props.jumbo ? 0 : '2.5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'left',
}))

const Title = styled.div(props => ({
	display: props.jumbo ? 'none' : 'block',
	fontSize: '14px',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
	width: '100%',
	overflow: 'hidden',
}))

const Time = styled.div(props => ({
	fontSize: props.jumbo ? '22px' : '12px',
}))

const TimerWidget = React.memo(props => {
	const timerContext = useContext(TimerContext)
	const instance = props.instance

	const jumbo = (timerContext.widgetDisplay === 'jumbo')

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
			<Graphic jumbo={jumbo}>
				<TimerProgressIndicator R={props.indicatorR} trackColor={trackColor} progress={instance.progress} />
			</Graphic>
			<Labels jumbo={jumbo}>
				<Title jumbo={jumbo}>{instance.title}</Title>
				<Time jumbo={jumbo}>{instance.formattedTime}</Time>
			</Labels>
		</TimerWidgetRoot>
	)
})

export default TimerWidget
