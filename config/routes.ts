export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
    ],
  },

  { path: '/list', name: '查询表格', icon: 'table', component: './TableList' },
  { path: '/new', name: '新页面', icon: 'table', component: './NewPage' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
