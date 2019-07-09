import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import BasicLayout from '@/layouts/BasicLayout';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
			{
        path: '/login',
        component: Login,
      },
      {
        path: '/dashboard',
        component: Dashboard,
      },
      {
        path: '/',
        redirect: '/login',
      }
    ],
  },
];

export default routerConfig;
