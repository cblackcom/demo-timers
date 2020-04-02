import React, { useContext, useRef, useState, useLayoutEffect } from 'react'
import _ from 'lodash'
import $ from 'jquery'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { useDebounce } from 'use-debounce'
import YouTube from 'react-youtube'
import TimerContext from '../timer/TimerContext'
import { Box, BoxTitle, BoxViewTimerContainer } from './Box'

// NOTE
// useLayoutEffect and useDebounce to keep a space measured without
// wrecking the experience during window resize

const VIDEOS = {
	'e1bEWoblGZA': 'Unbox a box',
	'0qBqvfH2YY4': 'Unbox a car',
}

const SelectContainer = styled.div({
	marginBottom: 10,
})

const VideoBox = React.memo(props => {
	const timerContext = useContext(TimerContext)
	const videoContainerRef = useRef(null)
	const [videoId, setVideoId] = useState(_.keys(VIDEOS)[0])
	const [measuredWidth, setMeasuredWidth] = useState(50)
	const [measuredWidthDebounced] = useDebounce(measuredWidth, 250)
	const dispatch = useDispatch()

	useLayoutEffect(() => {
		setMeasuredWidth($(videoContainerRef.current).innerWidth())
	}, [setMeasuredWidth, videoContainerRef])

	const handleVideoChange = (e) => {
		setVideoId(e.currentTarget.value)
	}

	const deleteRelatedTimers = () => {
		dispatch({
			type: 'TIMER_DELETE',
			related_view: timerContext.view,
		})
	}

	const handlePlay = (e) => {
		deleteRelatedTimers()
		const duration_seconds = Math.floor(e.target.getDuration() - e.target.getCurrentTime())
		dispatch({
			type: 'TIMER_CREATE',
			duration_seconds,
			title: timerContext.title,
			related_view: timerContext.view,
		})
	}

	const handlePause = (e) => {
		deleteRelatedTimers()
	}

	const videoOpts = {
		width: measuredWidthDebounced,
		height: measuredWidthDebounced * (9/16),
	}

	return (
		<Box>
			<BoxTitle>Unboxing Box.</BoxTitle>
			<p>
				Yay baby got cool sunglasses 🕶
			</p>
			<SelectContainer>
				Video:
				&nbsp;&nbsp;
				<select value={videoId} onChange={handleVideoChange}>
					{_.map(VIDEOS, (v, k) => (
						<option key={k} value={k}>{v}</option>
					))}
				</select>
			</SelectContainer>
			<BoxViewTimerContainer />
			<div ref={videoContainerRef}>
				<YouTube
					videoId={videoId}
					opts={videoOpts}
					onPlay={handlePlay}
					onPause={handlePause}
				/>
			</div>
		</Box>
	)
})

export default VideoBox
