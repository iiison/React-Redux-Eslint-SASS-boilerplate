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
export function getPaymentDetails({ email, authToken, role }) {
	return post({
		url     : '/api/v2/receivable_payables/index',
		payload : {
			auth_token : authToken,
			email,
			role
		},
		headers : {
			'Content-Type' : 'application/json; charset=utf-8'
		}
	})
}
