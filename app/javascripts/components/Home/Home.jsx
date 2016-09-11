import React, { PropTypesIgnored } from 'react'

const Home = ({ userName }) => (
	<div>
		<div className='header'>
		{
			(userName && userName.length > 1)
				? `Welcome Back ${userName} !`
				: 'Home Component'
		}
		</div>
		<p className='content'>{'I sang to Chuck Norris in your bathroom because I had an epiphany.'}</p>
	</div>
)

export default Home
