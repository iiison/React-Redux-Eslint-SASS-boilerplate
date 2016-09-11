import React, { Component, PropTypes } from 'react'
import { Form } from '$components'
import { fieldsValidator } from '$utils'

// const { object, bool, func } = PropTypes

/**
 * Generic Form Container, will accept JSON format to generate
 * form component
 */
class FormContainer extends Component {
	/**
	 * Set Initial State to track form validation and fields
	 * @param  {Object} props  props that are coming from parent
	 */
	constructor(props) {
		super(props)

		const formState = (() => {
			const temp = {}

			for (const field in props.fields) {
				if (field && props.fields[field].type.length > 0) {
					temp[field] = {
						value    : '',
						error    : false,
						tested   : false,
						validate : props.fields[field].validate,
						display  : props.fields[field].display,
						idName   : props.fields[field].idName,
						field
					}
				}
			}

			return temp
		})()

		const handleChange = (event) => {
			const elemRef = event.target

			event.preventDefault()

			this.setState((previousState) => {
				const idName = elemRef.id

				if (previousState.isTested) {
					const error = fieldsValidator({
						[idName] : previousState.formState[idName]
					})

					if (error[idName] && error[idName].message) {
						previousState.formState[idName].error = error[idName].message
					} else {
						previousState.formState[idName].error = false
					}
				}


				previousState.formState[idName] = {
					...previousState.formState[idName],
					value : elemRef.value
				}

				return previousState
			})
		}

		const handleSubmit = (event) => {
			const errors = fieldsValidator(this.state.formState)
			const updatedState = this.state

			event.preventDefault()
			updatedState.isTested = true

			if (Object.keys(errors).length > 0) {
				for (const field in updatedState.formState) {
					if (errors[field] && errors[field].message.length > 0) {
						updatedState.formState[field].error = errors[field].message
					} else {
						updatedState.formState[field].error = false
					}
				}
				this.setState(updatedState)
			} else {
				this.props.onFetch(this.state.formState)
			}
		}

		this.state = {
			formState : {
				...formState
			},
			events    : {
				onChange : handleChange,
				onSubmit : handleSubmit
			},
			isTested : false
		}
	}

	propTypes : {
		onFetch : PropTypes.func.isRequired,
		isFetching : PropTypes.bool.isRequired,
		fields : PropTypes.object.isRequired
	}

	/**
	 * Render method of FormContainer.
	 * @return {JSX} Generated Form
	 */
	render() {
		const { fields, isFetching } = this.props

		return (
			<Form
				fields={fields}
				formState={this.state.formState}
				events={this.state.events}
				isFetching={isFetching}
			/>
		)
	}
}

export default FormContainer
