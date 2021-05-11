import Register from '../../pages/Register';
import DashboardAdmin from '../../pages/DashboardAdmin';
import Departement from '../Admin/departements/Departement';
import Chart from '../Admin/tickets/Chart';
export const adminRoutes = [
  {
    path: "/dashboard/departement",
    component: Departement
  },
  {
    path: "/dashboard/register",
    component: Register
  },
  {
    path: "/dashboard/admin",
    component: DashboardAdmin
  },
  {
    path: "/dashboard/admin/chart",
    component: Chart
  },
]