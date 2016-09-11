import React, { PropTypes } from 'react'
import * as styles from './styles.scss'

const Submit = ({ isFetching, onFetch }) => (
	<button onClick={onFetch} className={styles.mainButton}>
		{
			isFetching === true
				? 'Loading'
				: 'Auth with Facebook'
		}
	</button>
)

Submit.propTypes = {
	isFetching : PropTypes.bool.isRequired,
	onFetch    : React.PropTypes.func.isRequired
}

export default Submit
