import React, { useRef, useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import { selectTimerIsShowingOptions } from '../redux/timerSelectors'
import TimerContext from './TimerContext'
import TimerWidget from './TimerWidget'
import TimerOptions from './TimerOptions'

const TimerRoot = styled.div({
	position: 'relative',
})

const Timer = React.memo(props => {
	const containerRef = useRef(null)
	const timerContext = useContext(TimerContext)
	const isShowingOptions = useSelector(state => selectTimerIsShowingOptions(state, timerContext.view, props.instance.timer_id))
	const dispatch = useDispatch()

	const instance = props.instance

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if(containerRef.current && !containerRef.current.contains(e.target)) {
				dispatch({type: 'TIMER_OPTIONS_HIDE'})
			}
		}

		if(isShowingOptions) {
			document.addEventListener("mousedown", handleOutsideClick)
		}
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick)
		}
	}, [isShowingOptions, dispatch])

	const handleClick = (e) => {
		e.stopPropagation()
		dispatch({
			type: 'TIMER_OPTIONS_SHOW',
			timerContext,
			timer_id: (!isShowingOptions) ? instance.timer_id : null,
		})
	}

	return (
		<TimerRoot ref={containerRef} className={props.className}>
			<TimerWidget instance={instance} onClick={handleClick}>
				
			</TimerWidget>
			{isShowingOptions ? (
				<TimerOptions instance={instance} />
			) : null}
		</TimerRoot>
	)
})

export default Timer
