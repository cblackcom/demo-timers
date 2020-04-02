import React, { useContext, useRef, useState, useLayoutEffect } from 'react'
import _ from 'lodash'
import $ from 'jquery'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import YouTube from 'react-youtube'
import TimerContext from '../timer/TimerContext'
import { useDebouncedWindowSize2 } from '../misc/useDebouncedWindowSize'
import { Box, BoxTitle, BoxViewTimerContainer } from './Box'

const VIDEOS = {
	'e1bEWoblGZA': 'Unbox a box',
	'0qBqvfH2YY4': 'Unbox a car',
}

// aspect ratio
const getHeight = (width) => (width * 9/16)

const SelectContainer = styled.div({
	marginBottom: 10,
})

const VideoFrameContainer = styled.div({
	// Create just the right space for the youtube video,
	// and position it over that space rather than IN the space,
	// so that the video doesn't push around the parent box's bounds
	// during resize, and cause this box to be larger than it should be
	// maintaining aspect ratio: https://css-tricks.com/aspect-ratio-boxes/
	width: '100%',
	overflow: 'hidden',
	height: 0,
	paddingTop: getHeight(100) + '%',
	position: 'relative',
	'> *': {
		position: 'absolute',
		top: 0,
		left: 0,
	}
})

const VideoBox = React.memo(props => {
	const timerContext = useContext(TimerContext)
	const videoContainerRef = useRef(null)
	const [videoId, setVideoId] = useState(_.keys(VIDEOS)[0])
	const windowSize = useDebouncedWindowSize2(500)
	const [measuredWidth, setMeasuredWidth] = useState(100)
	const dispatch = useDispatch()

	useLayoutEffect(() => {
		console.debug('windowSize is:', windowSize)
		setMeasuredWidth($(videoContainerRef.current).innerWidth())
	}, [windowSize, setMeasuredWidth, videoContainerRef])

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
		width: measuredWidth,
		height: getHeight(measuredWidth),
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
			<VideoFrameContainer ref={videoContainerRef}>
				<YouTube
					videoId={videoId}
					opts={videoOpts}
					onPlay={handlePlay}
					onPause={handlePause}
				/>
			</VideoFrameContainer>
		</Box>
	)
})

export default VideoBox
