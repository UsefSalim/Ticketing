import React,{useEffect} from 'react'
import {BrowserRouter as Router,Switch} from "react-router-dom"
import {useDispatch,useSelector } from 'react-redux'

import {ifLoged} from './redux/slices/authSlice'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import Register from './pages/Register'
import DashboardUser from './pages/DashboardUser'
import DashboardAdmin from './pages/DashboardAdmin'
import DashboardTech from './pages/DashboardTech'
import Departement from "./components/Admin/departements/Departement"
import {AdminRoutes,AuthRoutes,UserRoutes,TechRoutes} from './components/Routes/ProtectedRoutes'
const App =()=> {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(ifLoged())
  },[dispatch])
const {isAuthenticated:auth,role} = useSelector(state => state.authentification)
  return (
    <Router>
      <NavBar/>
      <Switch>
        <AdminRoutes  path="/dashboard/departement" role={role} auth={auth} component={Departement}/>
        <TechRoutes  path="/dashboard/tech" role={role} auth={auth} component={DashboardTech}/>
        <UserRoutes   path="/dashboard/user" role={role} auth={auth} component={DashboardUser}/>
        <AdminRoutes  path="/dashboard/register" component={Register} role={role} auth={auth}/>
        <AdminRoutes  path="/dashboard/admin" role={role} auth={auth} component={DashboardAdmin}/>
        <AuthRoutes  path="/" component={Login} role={role} auth={auth}/>
      </Switch>
    </Router>
  );
}




export default App;
