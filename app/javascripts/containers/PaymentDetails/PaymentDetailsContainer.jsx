import React, { Component, PropTypes }   from 'react'
import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'
import { PaymentDetails }     from '$components'
import * as paymentActionCreators from '$redux/dashboard'

/**
 * Payment Details Container
 */
class PaymentsContainer extends Component {
	propTypes : {
		isFetching          : PropTypes.bool.isRequired,
		error               : PropTypes.object.isRequired,
		email               : PropTypes.string.isRequired,
		authToken           : PropTypes.string.isRequired,
		role                : PropTypes.string.isRequired,
		fetchHandlePayments : PropTypes.func.isRequired
	}

	/**
	 * Render Method for Payment Details
	 * @return {JSX} Payment Details HTML Fregment
	 */
	render() {
		return (
			<PaymentDetails {...this.props} />
		)
	}

	/**
	 * Fetch Payment detials once is component is rendered
	 */
	componentDidMount() {
		const props = this.props

		const reqData = {
			email     : props.email,
			authToken : props.authToken,
			role      : props.role
		}

		props.fetchHandlePayments(reqData).then(() => {
			console.log('%c =================', 'color: #2980b9')
			console.log('done!')
			console.log('%c =================', 'color: #2980b9')
		})
	}
}

/**
 * Maps dispatch and action ceators to render method
 * @param  {function} dispatch - store's dispatch method
 * @return {object}            - action creators in object
 */
function mapDispatchToProps(dispatch) {
	return bindActionCreators(paymentActionCreators, dispatch)
}

/**
 * Avails State to render method
 * @param  {Object}  state  - Full State.
 * @return {Object}         - State fregment that is necessary to component.
 */
function mapStateToProps({ user }) {
	const payments = user.payments

	return {
		isFetching : payments.isFetching,
		error      : payments.error,
		email      : user.info.email,
		authToken  : user.authToken,
		role       : user.currentRole
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsContainer)
