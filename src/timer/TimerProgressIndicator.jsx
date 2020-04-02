import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { color } from '../misc/style'

const π = Math.PI

const TRACK_STROKE_W = 2
const PROG_STROKE_W = 3

// exclamation path was a bit wacked on export,
// so we correct origin manually here (eyeballed on zoom)
const EXC_OX = -1.4
const EXC_OY = 13
const EXC_W = 3.7  // browser measures 3.17; on my chrome it looks more accurate at 3.7
const EXC_H = 13.24

// NOTE
// One benefit of Emotion's styled components—
// You can define measurements in one place— as constants in Javascript
// and use them across HTML, CSS, JS

const Track = styled.circle(props => ({
	strokeWidth: TRACK_STROKE_W,
	stroke: props.stroke || color.boringGrey,
	fill: 'transparent',
}))

const ProgressPath = styled.path({
	strokeWidth: PROG_STROKE_W,
	stroke: 'white',
    fill: 'transparent',
})

const ProgressCircle = ProgressPath.withComponent('circle')

const Blink = keyframes`50% { fill: white; }`
const Exclamation = styled.path({
	fill: 'transparent',
	animation: `${Blink} 1s step-start infinite`,
})

// NOTE
// Because this is a memoized component, it will not re-render
// unless its props change.

const TimerProgressIndicator = React.memo(props => {
	const R = props.R || 13.5
	const W = (R + PROG_STROKE_W) * 2
	const H = W
	const CX = W / 2
	const CY = H / 2
	const PROG_START_X = CX  // start the progress ARC @ 12:00
	const PROG_START_Y = CY - R
	const EXC_X = EXC_OX + CX - (EXC_W / 2)
	const EXC_Y = EXC_OY + CY - (EXC_H / 2)
	
	const progress = Math.max(props.progress || 0, 0)

	let partialPath = null
	if(progress < 1) {
		const prog_end_θ = (-0.5 * π) - (progress * (2 * π))
		const prog_end_X = (Math.cos(prog_end_θ) * R) + CX
		const prog_end_Y = (Math.sin(prog_end_θ) * R) + CY
		const is_large_arc = (progress <= .5) ? 0 : 1
		const prog_path_D = `M ${PROG_START_X} ${PROG_START_Y} A ${R} ${R} 0 ${is_large_arc} 0 ${prog_end_X} ${prog_end_Y}`
		partialPath = (
			<ProgressPath d={prog_path_D} />
		)
	}

	return (
		<svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
			<Track cx={CX} cy={CY} r={R} stroke={props.trackColor} />
			{partialPath ? partialPath : (
				<>
					<ProgressCircle cx={CX} cy={CY} r={R} />
					<Exclamation
						d="M4.716-13.113v5.148a13.6,13.6,0,0,1-.1,1.643q-.1.814-.261,1.66H2.466Q2.3-5.508,2.2-6.322a13.6,13.6,0,0,1-.1-1.643v-5.148ZM1.8-1.413a1.494,1.494,0,0,1,.121-.6A1.524,1.524,0,0,1,2.254-2.5a1.589,1.589,0,0,1,.5-.329,1.6,1.6,0,0,1,.63-.122,1.581,1.581,0,0,1,.621.122,1.645,1.645,0,0,1,.5.329,1.49,1.49,0,0,1,.338.486,1.494,1.494,0,0,1,.122.6,1.526,1.526,0,0,1-.122.608,1.477,1.477,0,0,1-.338.491,1.58,1.58,0,0,1-.5.324,1.634,1.634,0,0,1-.621.117,1.658,1.658,0,0,1-.63-.117,1.527,1.527,0,0,1-.5-.324,1.511,1.511,0,0,1-.333-.491A1.526,1.526,0,0,1,1.8-1.413Z"
						transform={`translate(${EXC_X} ${EXC_Y})`}
					/>
				</>
			)}
		</svg>
	)
})

export default TimerProgressIndicator
