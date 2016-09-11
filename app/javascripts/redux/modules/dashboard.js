import { getPaymentDetails }    from '$api/dashboard'
import { formatPaymentDetails } from '$utils/formatters'

/**
 * Initiate Fetch User
 * @return {Object} Action to fetch user
 */
function fetchPaymentDetails() {
	return {
		type : 'FETCH_PAYMENT_DETAILS'
	}
}

/**
 * Error Action Creator for `fetchPaymentDetails`
 * @param  {Object} error   Error Object, Network error or API Error
 * @return {Object}        Error Action
 */
function fetchPaymentError(error) {
	return {
		type : 'FETCH_PAYMENT_ERROR',
		error
	}
}

/**
 * User Payment Details Successfull
 * @param  {Object} paymentDetails  Payment details coming from API
 * @return {Object}                Action for successfull payments fetch
 */
function fetchPaymentSuccess(paymentDetails) {
	return {
		type : 'FETCH_PAYMENT_SUCCESS',
		paymentDetails
	}
}


//  Async Action Creators

/**
 * Fetch and Handle payment details
 * @param  {String} options.authToken   User Auth token, from user state
 * @param  {String} options.currentRole User current role, from user state
 * @param  {Object} options.info        User Info, from user state, returned by API
 * @return {Promise}                    Thunk Action
 */
export function fetchHandlePayments({ email, role, authToken }) {
	return (dispatch) => {
		dispatch(fetchPaymentDetails())

		return getPaymentDetails({
			email,
			role,
			authToken
		})
		.then((result) => {
			const dataValue = result.data

			return dispatch(fetchPaymentSuccess(dataValue))
		})
		.catch((error) => dispatch(fetchPaymentError(error)))
	}
}


// Payments Reducer

const initialPaymentState = {
	isFetching : true,
	error      : ''
}

/**
 * Payment Details Reducer, will update `payments` part of `user` state
 * @param  {Object}   state   payments part of user state
 * @param  {Object}  action  actions to update the state
 * @return {Object}         Updated payments part of usr state
 */
export default function payments(state = initialPaymentState, action) {
	switch (action.type) {
	case 'FETCH_PAYMENT_DETAILS' : {
		return {
			...state,
			isFetching : true
		}
	}
	case 'FETCH_PAYMENT_ERROR' : {
		return {
			...state,
			isFetching : false,
			error      : action.error
		}
	}
	case 'FETCH_PAYMENT_SUCCESS' : {
		return {
			...state,
			isFetching : false,
			error      : '',
			details    : action.paymentDetails
		}
	}

	default:
		return state
	}
}
