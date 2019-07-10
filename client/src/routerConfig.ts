import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from '@/layouts/UserLayout';

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
        path: '/main',
        component: UserLayout,
        children: [
          {
            path: '/',
            component: Dashboard,
					}
        ],
      },
      {
        path: '/',
        redirect: '/login',
      },
    ],
  },
];

export default routerConfig;
