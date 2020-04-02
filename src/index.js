import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faBed, faPlusCircle, faBookReader, faHeadSideCough } from '@fortawesome/free-solid-svg-icons'
import Root from './Root'
import movement from './movement'
import addInitialTimers from './jeff/addInitialTimers'

library.add(faTrashAlt, faBed, faPlusCircle, faBookReader, faHeadSideCough)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Root />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

movement.start()
addInitialTimers()
