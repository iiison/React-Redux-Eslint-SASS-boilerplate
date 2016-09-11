import React, { PropTypesIgnored } from 'react'
import { DashboardSidebar }        from '$components'

// import { PaymentDetailsContainer }          from '$containers'

const Dashboard = ({ child }) => (
	<div>
		<DashboardSidebar />
		<div>{'Dashboard'}</div>
		{ child }
	</div>
)

export default Dashboard
