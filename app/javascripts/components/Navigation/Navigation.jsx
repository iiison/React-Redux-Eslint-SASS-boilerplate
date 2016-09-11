// import React, { PropTypes } from 'react'

import React from 'react'
import { Link } from 'react-router'
import stylesIgnored from './styles.scss'

/**
 * Private Dumb Component
 * @param {Boolean} options.isAuthed - wil be true if user is logged in.
 * @return {JSX} - Updated Nav items according to user login state.
 */
function NavControls({ isAuthed }) {
	return isAuthed === true
	? (
		<ul className='right'>
			<li className='controls'>{'Hi Guy'}</li>
			<li className='controls'>{'Profile'}</li>
		</ul>
	)
	: (
		<ul className='right'>
			<li className='controls'>{'Sign up'}</li>
			<li className='controls'>{'Login'}</li>
		</ul>
	)
}

const Navigation = ({ isAuthed }) => (
	<nav>
		<ul className='left'>
			<li className='main-links'>
				<Link to='/'>{'Home'}</Link>
			</li>
			<li className='main-links'>
				<Link to='/auth'>{'Auth'}</Link>
			</li>
		</ul>
		<NavControls isAuthed={isAuthed} />
	</nav>
)

/*
Navigation.propTypes = {
	props: PropTypes.object.isRequired
}
*/

export default Navigation
