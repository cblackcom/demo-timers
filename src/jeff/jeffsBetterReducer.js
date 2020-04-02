import _ from 'lodash'
import { TYPE_INSERT_RECORD } from './jeffsActions'

// NOTE—  Jeff, this one's for you!
//
// Here's a super generic "record inserting" reducer
// (without a switch statement, persay)
//
// I'm not saying this is a good idea.  It's simply to demonstrate the
// flexibility in approaches that Redux provides to the architect.

export const jeffsBetterReducer = (state, action) => {
	if(action.type === TYPE_INSERT_RECORD) {
		let newState = { ...state }
		const destination = _.get(state, action.path)
		if(!_.isArray(destination)) {
			throw new Error("Couldn't find destination array")
		}
		_.set(newState, action.path, [
			...destination,
			action.record,
		])
		return newState
	}

	return state
}

export const enhanceReducer = (reducer) => {
	return (state, action) => {
		state = reducer(state, action)
		state = jeffsBetterReducer(state, action)
		return state
	}
}
