import React, { PropTypes } from 'react'
import * as styles from './styles.scss'

const LoginButton = ({ isFetching, onSubmit }) => (
	<button onClick={onSubmit} className={styles.mainButton}>
		{
			isFetching === true
				? 'Loading'
				: 'Sign in'
		}
	</button>
)

LoginButton.propTypes = {
	isFetching : PropTypes.bool.isRequired,
	onSubmit   : React.PropTypes.func.isRequired
}

export default LoginButton
