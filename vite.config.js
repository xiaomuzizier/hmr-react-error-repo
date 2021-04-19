import * as path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
const reactSvgPlugin = require('vite-plugin-react-svg');
import legacyPlugin from '@vitejs/plugin-legacy';

// https://cn.vitejs.dev/config/
export default ({ command, mode }) => {
  let rollupOptions = {};

  let optimizeDeps = {
    exclude: ['form-render'],
  };

  let alias = {
    '@src': path.resolve(__dirname, './src'),
    '@utils': path.resolve(__dirname, './src/utils'),
    '@modules': path.resolve(__dirname, './src/modules'),
    '@containers': path.resolve(__dirname, './src/containers'),
    '@constants': path.resolve(__dirname, './src/constants'),
    '@components': path.resolve(__dirname, './src/components'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@reducers': path.resolve(__dirname, './src/reducers'),
  };

  let esbuild = {};

  return {
    base: './', 
    root: './', 
    resolve: {
      alias,
      mainFields: ['module', 'main', 'jsnext:main', 'jsnext'],
    },
    define: {
      'process.env.REACT_APP_IS_LOCAL': "'true'",
    },
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost',
      }  
    },
    build: {
      target: 'es2015',
      minify: 'terser', // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
      manifest: false, // 是否产出maifest.json
      sourcemap: false, // 是否产出soucemap.json
      outDir: 'build', // 产出目录
      rollupOptions,
    },
    esbuild,
    optimizeDeps,
    plugins: [
      reactSvgPlugin({ defaultExport: 'component' }),
      reactRefresh(),
      legacyPlugin({
        targets: [
          'Android > 39',
          'Chrome >= 60',
          'Safari >= 10.1',
          'iOS >= 10.3',
          'Firefox >= 54',
          'Edge >= 15',
        ],
      })
    ],
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
        },
      },
    },
  };
};
