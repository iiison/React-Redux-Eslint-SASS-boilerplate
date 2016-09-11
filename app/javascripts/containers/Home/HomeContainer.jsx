import React, { Component, PropTypes } from 'react'
import { Home } from '$components'
import { connect } from 'react-redux'

/**
 * Main Container to Render Home component
 */
class HomeContainer extends Component {
	propTypes : {
		userName : PropTypes.string
	}

	/**
	 * Renders Home page
	 * @return {JSX} Home page JSX fregment
	 */
	render() {
		return (
			<Home userName={this.props.userName} />
		)
	}
}

const mapStateToProps = ({ user }) => {
	return {
		userName : (user.authId && user[user.authId].info.name.length > 1)
			? user[user.authId].info.name
			: ''
	}
}

export default connect(mapStateToProps)(HomeContainer)
