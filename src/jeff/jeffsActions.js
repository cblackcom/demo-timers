import store from '../redux/store'

export const TYPE_INSERT_RECORD = 'INSERT_RECORD'

// NOTE
// If you don't like string and object literals, you can create actions.
// https://redux.js.org/basics/actions

export const getInsertRecordAction = (path, record) => ({
	type: TYPE_INSERT_RECORD,
	path,
	record,
})

// NOTE
// Woah, self-dispatching!  It totally works...  Do we hate it?  🤷‍♂️

export const insertRecord = (path, record) => {
	store.dispatch(getInsertRecordAction(path, record))
}
