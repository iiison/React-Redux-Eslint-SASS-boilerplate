/* eslint-disable */
import React, { PropTypesIgnored } from 'react'

const Text = ({ className, name, idName, placeholder, label, onValueChange, elemState }) => {
	return (
		<p>
			<label htmlFor={name}>{label || 'Enter'}</label>
			<span className="elem-cont">
				<input
					type='text'
					name={name}
					id={idName}
					placeholder={placeholder}
					className={
						(elemState.error && elemState.error.length > 0)
							? `${className} wrong`
							: className
					}
					onChange={onValueChange}
					value={elemState.value}
				/>
				<span className="error">{elemState.error}</span>
			</span>
		</p>
	)
}

// const { string } = PropTypes

/*
	Text.propTypes = {
		className   : string.isRequired,
		name        : string.isRequired,
		idName      : string.isRequired,
		placeholder : string.isRequired,
		label       : string.isRequired
	}
*/

export default Text
