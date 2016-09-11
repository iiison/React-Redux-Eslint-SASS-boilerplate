import auth from '$api/auth'
import payments from './dashboard'

/**
 * Fetch User action creator
 * @return {Object} Action for Fetching user
 */
export function fetchingUser() {
	return {
		type : 'FETCHING_USER'
	}
}

/**
 * Error Action Creator for `fetchingUser`
 * @param	{Object} 	error Error Object, in case user is not fetched
 * @return {Object}       Action for Error Fetching user
 */
export function fetchingUserError(error) {
	return {
		type : 'FETCHING_USER_ERROR',
		error
	}
}

/**
 * Success Action Creator for `fetchingUser`,
 * will be fired when browser gets the data from network call
 * @param  {Object} userDetails      user object that we got from network
 * @param  {Number} authToken           unique user id(from user object)
 * @param  {Time} timeStamp          Time stamp for last updated
 * @return {[type]}                  User data
 */
export function fetchUserSuccess(userDetails, authToken) {
	return {
		type : 'FETCHING_USER_SUCCESS',
		userDetails,
		authToken
	}
}

/**
 * Start Authentication once you have user
 * @param  {Number} authToken  Unique user id
 * @return {Object}            Action for authentication
 */
export function authUser(authToken) {
	return {
		type : 'AUTH_USER',
		authToken
	}
}

/**
 * Start Logging off action
 * @return {Object} Action for unauthentication
 */
export function unAuthUser() {
	return {
		type : 'UNAUTH_USER'
	}
}

/**
 * Will Fetch the user and will make entry to local data store
 * @param  {String} email     User Email
 * @param  {String} password  User Password
 * @return { Thunk }          [description]
 */
export function fetchAndAuthUser(email, password) {
	return (dispatch) => {
		dispatch(fetchingUser())

		return auth(email, password)
		.then((result) => {
			const userDetails = result.data.data

			return dispatch(fetchUserSuccess(userDetails, userDetails.auth_token))
		})
		.then(({ userDetails }) => dispatch(authUser(userDetails.auth_token)))
		.catch((error) => {
			console.log('%c <><><><><><><><><><><><><>', 'color: #2980b9')
			console.log(error)
			console.log('%c <><><><><><><><><><><><><>', 'color: #2980b9')
		})
	}
}

// Reducers for User

/**
 * Child Reducer of `user` reducer
 * @param  {Object} state  User object got from network
 * @param  {Object} action Action for the User
 * @return {Object}        Updated `userid` part of user state
 */
export function userInfo(state = {}, action) {
	switch (action.type) {
	case 'FETCHING_USER_SUCCESS':
		return {
			...state,
			...action.userDetails
		}
	default:
		return state
	}
}

const initialUserState = {
	isAuthed   : false,
	isFetching : false,
	error      : '',
	authToken  : '',
	payments   : {
		isFetching : true
	}
}

/* eslint complexity:0 */

/**
 * Main `user` state Reducer, will have userid, auth details
 * and other user details
 * @param  {Object} state  `user` state
 * @param  {Object} action actions to change particular part of user state
 * @return {Object}        New `user` state
 */
export default function user(state = initialUserState, action) {
	switch (action.type) {
	case 'AUTH_USER': {
		return {
			...state,
			isAuthed : true,
			authId   : action.userId
		}
	}
	case 'UNAUTH_USER': {
		return {
			...state,
			isAuthed : false,
			authId   : ''
		}
	}
	case 'FETCHING_USER': {
		return {
			...state,
			isFetching : true
		}
	}
	case 'FETCHING_USER_ERROR': {
		return {
			...state,
			isFetching : false,
			error      : action.error
		}
	}
	case 'FETCHING_USER_SUCCESS': {
		return {
			...state,
			isFetching  : false,
			error       : '',
			authToken   : action.authToken,
			currentRole : action.userDetails.role,
			roles       : action.userDetails.roles,
			info        : userInfo(state.info, action)
		}
	}
	case 'FETCH_PAYMENT_DETAILS': {
		return {
			...state,
			payments : payments(state.payments, action)
		}
	}
	case 'FETCH_PAYMENT_SUCCESS': {
		return {
			...state,
			payments : payments(state.payments, action)
		}
	}
	default:
		return state
	}
}
