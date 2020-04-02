import { createContext } from 'react'

const initialValue = {
	view: 'modal',
}

const TimerContext = createContext(initialValue)
export default TimerContext
