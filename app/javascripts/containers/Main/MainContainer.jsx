/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react'
import { Navigation }       from '$components'
import { connect }          from 'react-redux'
import stylesIgnored        from './styles.scss'

/**
 * Main Class, will pass on all the data from here
 */
class MainContainer extends Component {
	propTypes: {
		isAuthed: PropTypes.bool.isRequired
	}

	/**
	 * Render Method for MainContainer
	 * @return {JSX} will be single line
	 */
	render() {
		return (
			<div>
				<Navigation isAuthed={this.props.isAuthed} />
				{this.props.children}
			</div>
		)
	}
}

const mapStateToProps = ({ user }) => {
	return {
		isAuthed : user.isAuthed
	}
}

export default connect(mapStateToProps)(MainContainer)
