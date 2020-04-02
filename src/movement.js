import store from './redux/store'

// NOTE
// This simple javascript class updates the `state.timer.movement` branch of
// the state tree by dispatching once per second.
// Because the `selectCalculatedTimers` memoized selector depends on
// `state.timer.movement.epochTime`, all timers are updated automatically
// in unison.

class TimerMovement {
	__construct() {
		this.timeout = null
		this.unsubscribe = null
		this.currentState = null
	}

	start = () => {
		if(!this.unsubscribe) {
			this.unsubscribe = store.subscribe(this.handleStoreUpdate)
			this.handleStoreUpdate()
			const tick = this.handleTick()
			console.debug('[TimerMovement] started at ' + tick)
		}
	}

	stop = () => {
		if(this.timeout) {
			clearTimeout(this.timeout)
		}
		if(this.unsubscribe) {
			this.unsubscribe()
			console.debug('[TimerMovement] stopped')
		}
	}

	handleTick = () => {
		const time = Date.now()
		const mod = (time % 1000)
		const clientTick = (time - mod)
		const epochTime = Math.floor(time / 1000)

		store.dispatch({
			type: 'TIMER_MOVEMENT_TICK',
			clientTick,
			mod,
			epochTime,
		})

		this.timeout = setTimeout(this.handleTick, 1000 - mod + 1)
		return clientTick
	}

	handleStoreUpdate = () => {
		// const movement = store.getState().timer.movement
		// if(movement !== this.currentState) {
		// 	console.debug('[TimerMovement] movement update', movement)
		// 	this.currentState = movement
		// }
	}
}

const movement = new TimerMovement()
export default movement
