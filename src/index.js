import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faBed } from '@fortawesome/free-solid-svg-icons'
import movement from './movement'
import Header from './Header'
import addInitialTimers from './jeff/addInitialTimers'

library.add(faTrashAlt, faBed)

const App = React.memo(props => (
	<Header />
))

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

movement.start()
addInitialTimers()
