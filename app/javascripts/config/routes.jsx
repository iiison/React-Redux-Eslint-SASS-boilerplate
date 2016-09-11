import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import { MainContainer, AuthContainer, HomeContainer,
	DashboardContainer, PaymentDetailsContainer } from '../containers'

const routes = (checkAuth) => (
	<Router history={hashHistory}>
		<Router path='/' component={MainContainer}>
			<Route path='auth' component={AuthContainer} />
			<Route path='dashboard' component={DashboardContainer} onEnter={checkAuth}>
				<Route path='payments' component={PaymentDetailsContainer} onEnter={checkAuth} />
			</Route>
			<IndexRoute component={HomeContainer} />
		</Router>
	</Router>
)

export default routes
