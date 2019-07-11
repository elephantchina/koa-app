// 菜单配置
// headerMenuConfig：头部导航配置

const headerMenuConfig = [
  // {
  //   name: '首页',
  //   path: '/',
  //   icon: 'home',
  // },
  // {
  //   name: '反馈',
  //   path: 'https://github.com/alibaba/ice',
  //   external: true,
  //   newWindow: true,
  //   icon: 'message',
  // },
  // {
  //   name: '帮助',
  //   path: 'https://alibaba.github.io/ice',
  //   external: true,
  //   newWindow: true,
  //   icon: 'bangzhu',
  // },
];

// asideMenuConfig：侧边导航配置

const asideMenuConfig = [
  {
    name: '首页',
    path: '/app/main',
    icon: 'home',
  },
  {
    name: '用户管理',
    path: '/people',
    icon: 'yonghu',
    children: [
      { name: '新增用户', path: '/people/add' },
      { name: '用户列表', path: '/people/list' },
    ],
  },
  {
    name: '系统设置',
    path: '/system',
    icon: 'shezhi',
    children: [
      { name: '话题列表', path: '/app/sys/1' },
      { name: '新增话题', path: '/app/sys/2' },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
