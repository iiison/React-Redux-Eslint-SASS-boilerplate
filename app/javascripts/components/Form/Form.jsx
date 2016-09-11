/* eslint-disable */
import React, { PropTypes } from 'react'
import { LoginButton }             from '$components'
import { Submit }             from './Elems'
import elementSelector             from './ElementSelector'
import { Text }                    from './Elems'
import stylesIgnored               from './styles.scss'

const Form = ({ isFetching, fields, formState, events }) => {
	const formFields = Object.keys(fields).map((item) => elementSelector(fields[item], formState[item], events))

	return (
		<form action='' className=''>
			<fieldset>
				{formFields}
				<LoginButton isFetching={isFetching} onSubmit={events.onSubmit} />
			</fieldset>
		</form>
	)
}

const { bool, func, object } = PropTypes

Form.propTypes = {
	isFetching : bool.isRequired,
	fields     : object.isRequired,
	formState  : object.isRequired,
	events     : object.isRequired
}
export default Form
