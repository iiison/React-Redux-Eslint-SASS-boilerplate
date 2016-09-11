import React, { Component, PropTypes } from 'react'
import { bindActionCreators }  from 'redux'
import { Authentication }      from '$components'
import { connect }             from 'react-redux'
import * as userActionCreators from '$redux/user'

/**
 * Authentication Container
 */
class AuthContainer extends Component {
	propTypes : {
		isFetching : PropTypes.bool.isRequired,
		error : PropTypes.string.isRequired,
		fetchAndAuthUser : PropTypes.func.isRequired
	}

	/**
	 * Initiate fetching user and later on will call to
	 * Authentication with User name and password
	 * @param  {String} options.email    [description]
	 * @param  {String} options.password [description]
	 */
	 handleFetch = ({ email, password }) => {
		const props = this.props

		props.fetchAndAuthUser(email, password)
			.then(() => this.context.router.replace('dashboard'))
	}


	/**
	 * Renders Authentication component and passes the data as props
	 * @return {JSX} Auth component fregment
	 */
	render() {
		const { isFetching, error } = this.props

		return (
			<Authentication
				isFetching={isFetching}
				error={error}
				onFetch={this.handleFetch}
			/>
		)
	}
}

AuthContainer.contextTypes = {
	router : PropTypes.object.isRequired
}

/**
 * Maps dispatch and action ceators to render method
 * @param  {function} dispatch - store's dispatch method
 * @return {object}            - action creators in object
 */
function mapDispatchToProps(dispatch) {
	return bindActionCreators(userActionCreators, dispatch)
}


/**
 * Avails State to render method
 * @param  {Object}  state  - Full State.
 * @return {Object}         - State fregment that is necessary to component.
 */
function mapStateToProps({ user }) {
	return {
		isFetching : user.isFetching,
		error      : user.error
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
