export default [
  { path: '/', redirect: '/welcome' },
  {
    path: '/',
    component: '@/layouts/AdminLayout',
    routes: [{ path: 'welcome', component: '@/pages/Welcome' }],
  },
];
