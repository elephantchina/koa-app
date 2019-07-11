import Main from '@/pages/Main';
import Login from '@/pages/Login';
import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from '@/layouts/UserLayout';

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
			},
		],
	}
];

export default routerConfig;
