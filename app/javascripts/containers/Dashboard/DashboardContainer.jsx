import React, { Component, PropTypesIgnored } from 'react'
import { connect }   from 'react-redux'
import { Dashboard } from '$components'
import dashboard     from '$redux/dashboard'

/**
 * Dashboard Container
 */
class DashboardContainer extends Component {

	/**
	 * Render Method for dashboard
	 * @return {JSX} HTML Fregment for dashboard
	 */
	render() {
		// dashboard(props.email, props.authToken)

		return (
			<Dashboard child={this.props.children} />
		)
	}

	/**
	 * Fetch User Dashboard Data once the user is at Dashboard page
	 * @return {Object} Dummy Object
	 */
	componentDidMoount() {
		console.log('%c <><><><><><><><><><><><><>', 'color: #2980b9')
		console.log(dashboard)
		console.log('%c <><><><><><><><><><><><><>', 'color: #2980b9')

		return {
			dummy : 'my Val'
		}
	}
}

/**
 * Avails State to render method
 * @param  {Object} options.users User state
 * @return {Object} Dashboard data
 */
const mapStateToProps = ({ user }) => {
	const info = user.info

	return {
		authToken : 'info.auth_token',
		email     : 'info.email'
	}
}

export default connect(mapStateToProps)(DashboardContainer)
