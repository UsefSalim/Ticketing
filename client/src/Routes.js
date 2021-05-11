import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { allTickets } from "./redux/slices/Ticket.slice";
import NavBar from './components/NavBar';
import Login from './pages/Login';
import DashboardUser from './pages/DashboardUser';
import AddTicket from './components/User/AddTicket';
import DashboardTech from './pages/DashboardTech';
import {adminRoutes} from './components/Routes/data.routes'
import {
  AdminRoutes,
  AuthRoutes,
  UserRoutes,
  TechRoutes,
} from './components/Routes/ProtectedRoutes';
import NotFound from './pages/NotFound';

const Routes = () => {
 
  return (
    <>
      <NavBar />
      <Switch>
        <AuthRoutes exact path="/" component={Login} />
        <UserRoutes  path="/dashboard/addtickets" component={AddTicket} />
        <UserRoutes  path="/dashboard/user" component={DashboardUser} />
        {adminRoutes.map((route,i)=> (
           <AdminRoutes key={i} {...route} />
        ))}
        <TechRoutes  path="/dashboard/tech" component={DashboardTech} />
        <Route path="/" component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
