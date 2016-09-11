import React                from 'react'
import { Link }             from 'react-router'
import { dashboardSideBar } from '$store'
import * as styles from './styles.scss'

const DashboardSidebar = () => {
	const mappedSidebar = (sidebarObj) => (
		Object.keys(sidebarObj).map((key) => {
			const value = sidebarObj[key]

			return (
				<Link
					className={styles.sidebarlinks}
					to={value.link}
					key={key}
				>
					{value.title}
				</Link>
			)
		})
	)

	return (
		<div className={styles.sidebar}>
			{mappedSidebar(dashboardSideBar.tenant)}
		</div>
	)
}

export default DashboardSidebar
