import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
     plugins: [react()],
     resolve: {
          alias: {
               '@components': path.resolve(__dirname, 'src/components'),
               '@services': path.resolve(__dirname, 'src/services'),
               '@data': path.resolve(__dirname, 'src/data'),
               '@types': path.resolve(__dirname, 'src/types'),
          },
     },
});
