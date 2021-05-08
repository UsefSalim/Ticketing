import { Redirect, Route } from 'react-router-dom'

export const AuthRoutes = ({ component: Component, role, auth, ...rest }) => {
	return (
		<Route
			{...rest}
			render={() =>
				!auth && !role ? (
					<Component />
				) : auth && role === 'User' ? (
					<Redirect to='/dashboard/user' />
				) : auth && role === 'Admin' ? (
					<Redirect to='/dashboard/admin' />
				) : (
					<Redirect to='/dashboard/tech' />
				)
			}
		/>
	)
}
export const UserRoutes = ({ component: Component, role, auth, ...rest }) => (
	<Route
		{...rest}
		render={() =>
			auth && role === 'User' ? <Component /> : <Redirect to='/' />
		}
	/>
)
export const AdminRoutes = ({ component: Component, role, auth, ...rest }) => {
	return (
		<Route
			render={() =>
				auth && role === 'Admin' ? <Component {...rest} /> : <Redirect to='/' />
			}
		/>
	)
}
export const TechRoutes = ({ component: Component, role, auth, ...rest }) => (
	<Route
		{...rest}
		render={() =>
			auth && role === 'Tech' ? <Component /> : <Redirect to='/' />
		}
	/>
)
