/* eslint-disable */
const dummy = {
	invoices : [
		{
			invoice_id   : '3EU3UFHHLWR4VCS',
			total_amount : 10,
			receivables  : [
				{
					added_reason       : null,
					amount             : 10,
					bank_detail_id     : 144845,
					copy_ref_id        : null,
					created_at         : '2016-08-09T20:23:23+05:30',
					credit_narration   : null,
					due_date           : '2016-08-09',
					due_date_extended  : null,
					from               : null,
					house_id           : 6159,
					id                 : 442409,
					invoice_id         : '3EU3UFHHLWR4VCS',
					is_refunded        : null,
					nach_excluded      : null,
					notes              : null,
					owner_payment_id   : null,
					profile_id         : 144569,
					reason             : 'TOKEN',
					receivable_type    : 'RECEIVABLE',
					refund_ref_id      : null,
					status             : 'SUCCESSFULLY_PAID',
					tenancy_history_id : 24845,
					to                 : null,
					updated_at         : '2016-08-09T20:23:23+05:30'
				}
			],
			status       : 'CLOSED',
			payment      : {
				bank_tx_id   : 'pay_64ZGivbUmmviVi',
				created_at   : '2016-08-09T20        : 23 : 23+05 : 30',
				id           : 150509,
				invoice_id   : '3EU3UFHHLWR4VCS',
				notes        : null,
				paid_on      : '2016-08-09T20        : 23 : 23+05 : 30',
				status       : 'COMPLETED',
				total_amount : 10,
				tx_type      : 'RAZORPAY',
				updated_at   : '2016-08-09T20        : 23 : 23+05 : 30'
			},
			modifiable   : null,
			paynow       : false
		},
		{
			invoice_id   : 'GJN3YBRRTSTM0',
			total_amount : 2490,
			receivables  : [
				{
					added_reason       : null,
					amount             : 2490,
					bank_detail_id     : 144845,
					copy_ref_id        : null,
					created_at         : '2016-08-09T20      : 23 : 23+05 : 30',
					credit_narration   : null,
					due_date           : '2016-08-11',
					due_date_extended  : null,
					from               : null,
					house_id           : 6159,
					id                 : 442410,
					invoice_id         : 'GJN3YBRRTSTM0',
					is_refunded        : null,
					nach_excluded      : null,
					notes              : null,
					owner_payment_id   : null,
					profile_id         : 144569,
					reason             : 'SECURITY_DEPOSIT',
					receivable_type    : 'RECEIVABLE',
					refund_ref_id      : null,
					status             : 'INIT',
					tenancy_history_id : 24845,
					to                 : null,
					updated_at         : '2016-08-09T20      : 23 : 23+05 : 30'
				}
			],
			status       : 'OPEN',
			payment      : null,
			modifiable   : null,
			paynow       : true
		},
		{
			invoice_id   : 'WTWHJ1NBN2YEIXU',
			total_amount : 3387,
			receivables  : [
				{
					added_reason       : null,
					amount             : 3387,
					bank_detail_id     : 144845,
					copy_ref_id        : null,
					created_at         : '2016-08-09T20                : 23 : 23+05 : 30',
					credit_narration   : null,
					due_date           : '2016-08-11',
					due_date_extended  : null,
					from               : '2016-08-11',
					house_id           : 6159,
					id                 : 442411,
					invoice_id         : 'WTWHJ1NBN2YEIXU',
					is_refunded        : null,
					nach_excluded      : null,
					notes              : 'Rent for 21 days in AUGUST',
					owner_payment_id   : null,
					profile_id         : 144569,
					reason             : 'RENT_AUGUST',
					receivable_type    : 'RECEIVABLE',
					refund_ref_id      : null,
					status             : 'INIT',
					tenancy_history_id : 24845,
					to                 : '2016-08-31',
					updated_at         : '2016-08-09T20                : 23 : 23+05 : 30'
				}
			],
			status       : 'OPEN',
			payment      : null,
			modifiable   : null,
			paynow       : true
		}
	]
}
/* eslint-enable */

export function formatPaymentDetails({ invoices }) {
	if (invoices && invoices.length > 0) {
		return {
			invoices
		}
	} else {
		invoices : dummy
	}
}