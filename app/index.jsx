import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import React             from 'react'
import ReactDOM          from 'react-dom'
import { Provider }      from 'react-redux'
import thunk             from 'redux-thunk'
import routes            from '$config/routes'
import { checkIfAuthed } from '$utils'
import * as reducers     from '$redux'

const store = createStore(combineReducers(reducers), compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : (func) => func
))

const checkAuth = (nextState, replace) => {
	const isAuthed = checkIfAuthed(store)
	const nextPath = nextState.location.pathname

	if (store.getState().user.isFetching === true) {
		return
	}

	if (nextPath === '/dashboard') {
		if (isAuthed !== true) {
			replace('/auth')
		}
	}
}

ReactDOM.render(
	<Provider store={store}>
		{routes(checkAuth)}
	</Provider>,
	document.getElementById('root')
)
