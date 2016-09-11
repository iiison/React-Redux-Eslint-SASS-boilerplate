/**
 * Demo Schema
 */
{
	user: {
		isFetching,
		error,
		isAuthed,
		authedId,
		payments: {
			isFetching,
			error,
			data
		},
		[uid]: {
			lastUpdated,
			info: {
				name,
				uid,
				avatar
			}
		}
	}
}

/**
 * Real Schema
 */

{
	offers : {
		mainOffer: {
			text,
			image
		},
		vendorOffers: {
			[vendorname]: {
				vendorName,
				vendorImage,
				offerCount,
				offers: [
					{
						head,
						details,
						couponCode,
						url
					}
				]
			}
		}
	},
	user : {
		error,
		isAuthed,
		authToken,
		isFetching,
		currentRole,
		roles : ['role', 'role'],
		info : {

		}
	},
	dashboard : {
		owner : [hid, hid],
		tanent : [hid]
	},
	houses: {
		[houseId]: {
			title,
			id,
			location,
			bhkDetails,
			...more
		}
	},

}