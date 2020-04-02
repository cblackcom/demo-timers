import _ from 'lodash'

export const selectTimerNextUnusedId = (state) => {
	return Math.max(0, ..._.map(state.instances, 'timer_id')) + 1
}

const initialState = {
	movement: {
		clientTick: null,
		mod: null,
		epochTime: null,
	},
	instances: [],
	showOptionsOnId: {
		menu: null,
	},
}

const timerReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'TIMER_MOVEMENT_TICK':
			return {
				...state,
				movement: {
					...state.movement,
					clientTick: action.clientTick,
					mod: action.mod,
					epochTime: action.epochTime,
				}
			}
		case 'TIMER_CREATE':
			return {
				...state,
				instances: [
					...state.instances,
					{
						// in the real application, these timers would come
						// back from posting to the server with database ids
						// attached.  we're emulating that here.
						timer_id: selectTimerNextUnusedId(state),
						start_time: state.movement.epochTime,
						duration_seconds: action.duration_seconds,
						title: action.title || 'Timer',
					},
				],
			}
		case 'TIMER_SNOOZE':
			return {
				...state,
				instances: state.instances.map(instance => {
					if(instance.timer_id === action.timer_id) {
						return {
							...instance,
							duration_seconds: instance.duration_seconds + 300,
						}
					}
					return instance
				}),
			}
		case 'TIMER_DELETE':
			return {
				...state,
				instances: state.instances.filter(instance => (instance.timer_id !== action.timer_id)),
			}
		case 'TIMER_OPTIONS_SHOW':
			return {
				...state,
				showOptionsOnId: {
					[action.timerContext.view]: action.timer_id,
				},
			}
		case 'TIMER_OPTIONS_HIDE':
			return {
				...state,
				showOptionsOnId: _.mapValues(state.showOptionsOnId, () => null),
			}
		default:
			return state
	}
}

export default timerReducer
