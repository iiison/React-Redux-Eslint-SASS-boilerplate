import validations from './validation'

const ruleValidator = (field) => {
	let errors       = {}
	const fieldRules = field.validate.split('|')

	for (let iter = 0, length = fieldRules.length; iter < length; iter++) {
		const rule    = fieldRules[iter]
		const ruleDef = validations[rule]()

		if ((rule && ruleDef) && !ruleDef.reg.test(field.value)) {
			errors = {
				message : ruleDef.message.replace('%c', field.display || field.label || '')
			}
			break
		}
	}

	return errors
}

const fieldsValidator = (formState) => {
	const errors = {}

	for (const field in formState) {
		if (field && formState[field].validate) {
			const validationErros = ruleValidator(formState[field])

			if (Object.keys(validationErros).length > 0) {
				errors[formState[field].idName] = validationErros
			}
		}
	}

	return errors
}

export default fieldsValidator
