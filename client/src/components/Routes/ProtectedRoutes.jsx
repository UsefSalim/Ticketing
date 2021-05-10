import { Redirect, Route,  useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
export const AuthRoutes = ({ component: Component, ...rest }) =>
{
	const { isAuthenticated: auth, role } = useSelector(
		(state) => state.authentification
	);
	const location = useLocation()
	return (
		<Route
			{...rest}
			render={() =>
				!auth ? (
					<Component />
				) : auth && role === 'User' ? (
					<Redirect to={(location.state && location.state.userpath) || '/dashboard/user'} />
				) : auth && role === 'Admin' ? (
					<Redirect to={(location.state && location.state.adminpath) || '/dashboard/admin'} />
				) : auth && role === 'Tech' && (
					<Redirect to={(location.state && location.state.techpath) || '/dashboard/tech'}/>
				)
			}
		/>
	)
}
export const UserRoutes = ({ component: Component, path, ...rest }) =>
{

	const { isAuthenticated: auth, role } = useSelector(
		(state) => state.authentification
	);

	console.log({ ...rest }, 'rest')
	return (
		<Route
			{...rest}
			render={() =>
				auth && role === 'User' ? <Component /> : <Redirect to={{
					pathname: "/",
					state: { userpath:path }
				}} />
			}
		/>
	)
}
export const AdminRoutes = ({ component: Component,path, ...rest }) =>
{
	const { isAuthenticated: auth, role } = useSelector(
		(state) => state.authentification
	);


	return (
		<Route
			render={() =>
				auth && role === 'Admin' ? <Component {...rest} /> :<Redirect to={{
					pathname: "/",
					state: { adminpath:path }
				}} />
			}
		/>
	)
}
export const TechRoutes = ({ component: Component,path, ...rest }) =>
{
	const { isAuthenticated: auth, role } = useSelector(
		(state) => state.authentification
	);
	return (
		<Route
			{...rest}
			render={() =>
				auth && role === 'Tech' ? <Component /> : <Redirect to={{
					pathname: "/",
					state: { techpath:path }
				}} />
			}
		/>
	)

}