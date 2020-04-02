import { createContext } from 'react'

const initialValue = {
	view: 'modal',
	title: null,
	widgetDisplay: 'regular',
}

const TimerContext = createContext(initialValue)
export default TimerContext
