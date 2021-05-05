import React from 'react'
import {Redirect,Route,Switch} from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import DashboardUser from './pages/DashboardUser'
import DashboardAdmin from './pages/DashboardAdmin'
import DashboardTech from './pages/DashboardTech'
function Routes(props) {
  const {auth,role} = props
  return (
    <Switch>
        <AuthRoutes exact path="/" component={Login} role={role} auth={auth}/>
        <TechRoutes exact path="/dashboard/tech" role={role} auth={auth} component={DashboardTech}/>
        <UserRoutes exact  path="/dashboard/user" role={role} auth={auth} component={DashboardUser}/>
        <AdminRoutes exact path="/dashboard/register" component={Register} role={role} auth={auth}/>
        <AdminRoutes exact path="/dashboard/admin" role={role} auth={auth} component={DashboardAdmin}/>
      </Switch>
  )
}


const AuthRoutes = ({path,component:Component,role,auth,...rest})=>{
  return ( 
    (
       <Route
        {...rest}
        render={() => (!auth
          ? (
            <Component />
          ) : ((role === 'User')
            ? (
              <Redirect to="/dashboard/user" />
            ) :(role === 'Admin')
              ? (
                <Redirect to="/dashboard/admin" />
              ):  <Redirect to="/dashboard/tech" />
          ))}
  />
)

  )
}
const UserRoutes = ({path,component:Component,role,auth,...rest})=> {
  return (
    (
       <Route
        {...rest}
        render={() => ( auth && role === 'User'  ? <Component/> : <Redirect to="/" />  )}
  />
)
  )
}
const AdminRoutes = ({path,component:Component,role,auth,...rest})=>{
  return (
    (
       <Route
        {...rest}
        render={() => ( auth && role === 'Admin'  ? <Component/> : <Redirect to="/" />  )}
  />
)
  )
}
const TechRoutes = ({path,component:Component,role,auth,...rest})=>{
  return (
    (
       <Route
        {...rest}
        render={() => ( auth && role === 'Tech'  ? <Component/> : <Redirect to="/" />  )}
  />
)
  )
}

export default Routes
