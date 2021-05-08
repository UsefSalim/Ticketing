import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ifLoged } from './redux/slices/authSlice';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardUser from './pages/DashboardUser';
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardTech from './pages/DashboardTech';
import Departement from './components/Admin/departements/Departement';
import AddTicket from './components/User/AddTicket';
import {
  AdminRoutes,
  AuthRoutes,
  UserRoutes,
  TechRoutes
} from './components/Routes/ProtectedRoutes';
import NotFound from './pages/NotFound';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ifLoged());
  }, [dispatch]);
  const { isAuthenticated: auth, role } = useSelector((state) => state.authentification);
  return (
    <>
      <NavBar />
      <Switch>
        <AuthRoutes exact path="/" component={Login} role={role} auth={auth} />
        <TechRoutes
          exact
          path="/dashboard/tech"
          role={role}
          auth={auth}
          component={DashboardTech}
        />
        <UserRoutes
          exact
          path="/dashboard/user"
          role={role}
          auth={auth}
          component={DashboardUser}
        />
        <UserRoutes
          exact
          path="/dashboard/addtickets"
          role={role}
          auth={auth}
          component={AddTicket}
        />
        <AdminRoutes
          exact
          path="/dashboard/departement"
          role={role}
          auth={auth}
          component={Departement}
        />
        <AdminRoutes
          exact
          path="/dashboard/register"
          role={role}
          auth={auth}
          component={Register}
        />
        <AdminRoutes
          exact
          path="/dashboard/admin"
          role={role}
          auth={auth}
          component={DashboardAdmin}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
