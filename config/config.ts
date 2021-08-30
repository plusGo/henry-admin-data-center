import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  extraPostCSSPlugins: [require('tailwindcss')],
  proxy: {
    '/admin-server': {
      target: 'http://localhost:8090/',
      changeOrigin: true,
      pathRewrite: { '^/admin-server': '' },
    },
  },
  devServer: {
    port: 8002,
  },
  qiankun: {
    slave: {},
  },
});
