import React, { PropTypes } from 'react'
import { signinForm }       from '$store'
// import { Form }          from '$components'

import { FormContainer }    from '$containers'
import stylesIgnored        from './styles.scss'

const Authentication = ({ error, isFetching, onFetch }) => (
	<div>
		<div className='header'>{'Authentication Component'}</div>
		<p className='content'>{'Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but.'}</p>
		<div className='login-form'>
			<FormContainer
				isFetching={isFetching}
				onFetch={onFetch}
				fields={signinForm.fields}
				form={signinForm}
			/>
			{error}
		</div>
	</div>
)

Authentication.propTypes = {
	isFetching : PropTypes.bool.isRequired,
	error      : PropTypes.string.isRequired,
	onFetch    : PropTypes.func.isRequired
}

export default Authentication
