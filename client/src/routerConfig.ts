import Main from '@/pages/Main';
import Login from '@/pages/Login';
import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from '@/layouts/UserLayout';
import UserList from '@/pages/User/List';

const routerConfig = [
  {
    path: '/user',
    component: BasicLayout,
    children: [
      {
        path: '/login',
        component: Login,
      },
    ],
  },
  {
    path: '/app',
    component: UserLayout,
    children: [
      {
        path: '/main',
        component: Main,
      }
    ],
	},
	{
		path: '/people',
		component: UserLayout,
		children: [
			{
				path: '/list',
				component: UserList,
			},
		],
	},
];

export default routerConfig;
