import React from 'react'
import styled from '@emotion/styled'
import TimerContext from './timer/TimerContext'
import Header from './Header'
import CatBox from './boxes/CatBox'
import VideoBox from './boxes/VideoBox'

const RootContainer = styled.div({
	display: 'flex',
	flexDirection: 'column',
})

const BoxContainer = styled.div({
	display: 'grid',
	gridTemplateColumns: '1fr',
	padding: 20,
	gap: 20,
	'@media (min-width: 780px)': {
		gridTemplateColumns: '1fr 1fr',
	},
})

const Root = React.memo(props => (
	<RootContainer>
		<TimerContext.Provider value={{view: 'menu'}}>
			<Header />
		</TimerContext.Provider>

		<BoxContainer>
			<TimerContext.Provider value={{view: 'catBox', title: 'Cat Box', widgetDisplay: 'jumbo'}}>
				<CatBox />
			</TimerContext.Provider>

			<TimerContext.Provider value={{view: 'videoBox', title: 'Video Box', widgetDisplay: 'jumbo'}}>
				<VideoBox />
			</TimerContext.Provider>
		</BoxContainer>
	</RootContainer>
))

export default Root
