import { post } from '$utils/requestHandler'

/**
 * Method will be used to
 * 	- Get user detials
 * 	- Login user
 * @param  {String}   email    Optional - Don't need this in case of
 *                             					  get user details
 * @param  {password} password Optional - Don't need this in case of
 *                                        get user details
 * @return {Promise}          Login call promise
 */
export default function auth(email, password) {
	return post({
		url     : '/api/v1/sessions.json',
		payload : {
			user  : {
				email    : email.value,
				password : password.value
			}
		}
	})
}

/**
 * Dummy function, will remove this from here soon
 * @param  {String} authToken User Auth token
 * @param  {String} email      Email
 * @return {Promise}           Dashboard call promise
 */
export function dash(authToken, email) {
	return post({
		url     : '/api/v2/dashboard',
		payload : {
			email,
			auth_token : authToken
		}
	})
}
