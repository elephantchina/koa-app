export const routesConfig = [
  // Portal
  {
    path: '/',
    redirect: '/portal/home',
  },
  {
    path: '/portal',
    component: '../layouts/BlankLayout',
    routes: [
      {
        name: 'home',
        path: '/portal/home',
        component: './Portal/Home',
      },
    ],
  },
  // backend
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/login',
      },
    ],
  },
  {
    path: '/backend',
    component: '../layouts/SecurityLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      {
        path: '/backend',
        component: '../layouts/BasicLayout',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/backend/welcome',
            name: 'welcome',
            icon: 'smile',
            component: './Backend/Welcome',
          },
          {
            path: '/backend/admin',
            name: 'admin',
            icon: 'crown',
            // component: './system/Admin',
            authority: ['admin'],
            routes: [
              {
                path: '/backend/admin/user-list',
                name: 'user-management',
                icon: 'smile',
                component: './Backend/System/UserList',
                authority: ['admin'],
              },
            ],
          },
          {
            name: 'list.table-list',
            icon: 'table',
            path: '/backend/list',
            component: './Backend/ListTableList',
          },
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
