import React, { PropTypes } from 'react'

const PaymentDetails = ({ isFetching, error }) => (
	<div>{
		isFetching === true
			? 'Loading...'
			: 'Payment Details'
	}</div>
)

PaymentDetails.propTypes = {
	isFetching : PropTypes.bool.isRequired,
	error      : PropTypes.object.isRequired
}

export default PaymentDetails
