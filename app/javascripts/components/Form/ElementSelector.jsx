import React    from 'react'
import { Text } from './Elems'

const elementSelector = (elemObj, formState, events) => {
	switch (elemObj.type) {
	case 'text':
	case 'tele':
	case 'password':
	case 'email':
		return (
			<Text
				{...elemObj}
				key={elemObj.idName}
				onValueChange={events.onChange}
				elemState={formState}
			/>
		)
	default:
		return null
	}
}

export default elementSelector
