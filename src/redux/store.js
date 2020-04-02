import { combineReducers, createStore } from 'redux'
import timerReducer from './timerReducer'
import { enhanceReducer } from '../jeff/jeffsBetterReducer'

// NOTE
// https://redux.js.org/faq/reducers#how-do-i-share-state-between-two-reducers-do-i-have-to-use-combinereducers
/* 
"In general, remember that reducers are just functions—you can organize them
and subdivide them any way you want, and you are encouraged to break them down
into smaller, reusable functions (“reducer composition”). While you do so,
you may pass a custom third argument from a parent reducer if a child reducer
needs additional data to calculate its next state. You just need to make sure
that together they follow the basic rules of reducers:
(state, action) => newState,
and update state immutably rather than mutating it directly.
*/
// There's a million ways to structure your state.
// Use of combinedReducers is not required, but it's a nice way to separate
// things out.
// https://redux.js.org/recipes/structuring-reducers/structuring-reducers

const reducer = combineReducers({
	timer: timerReducer,
})

const jeffsBetterReducer = enhanceReducer(reducer)

// NOTE
// Look into redux-devtools-extension for Chrome/Firefox to help you see into
// the state and its changes while testing.
// https://github.com/zalmoxisus/redux-devtools-extension

const store = createStore(jeffsBetterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
