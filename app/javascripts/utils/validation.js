const validations = {
	email() {
		return {
			message : '%c is not valid',
			reg     : /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
		}
	},
	required() {
		return {
			message : '* %c is required',
			reg     : /\S/
		}
	},
	maxLength(length) {
		const reg = new RegExp(`^.{0,${length}}$`)

		return {
			message : `%c should have less than ${length}`,
			reg
		}
	},
	minLength(length) {
		const reg = new RegExp(`^.{${length},}$`)

		return {
			message : `%c should have less than ${length}`,
			reg
		}
	},
	alpha() {
		return {
			message : '%c should contain only aphabets',
			reg     : /^[a-z]+$/i
		}
	},
	numeric() {
		return {
			message : '%c should contain only digits',
			reg     : /^[0-9]+$/
		}
	}
}

export default validations
