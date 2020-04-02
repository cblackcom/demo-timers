import store from '../redux/store'
import { insertRecord } from './jeffsActions'
import { selectTimerNextUnusedId } from '../redux/timerReducer'

export default () => {

	// NOTE
	// Two very different ways to start a timer via Redux,
	// Same net effect

	store.dispatch({
		type: 'TIMER_CREATE',
		title: 'Timer Uno',
	})

	const state = store.getState()
	insertRecord('timer.instances', {
		timer_id: selectTimerNextUnusedId(state.timer),
		start_time: state.timer.movement.epochTime,
		duration_seconds: 120,
		title: 'Timer Dos',
	})

}
