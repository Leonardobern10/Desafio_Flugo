/// <reference types="vitest" />

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
               '@images': path.resolve(__dirname, 'src/assets/images'),
               '@types': path.resolve(__dirname, 'src/types'),
               '@validations': path.resolve(__dirname, 'src/validations'),
               '@hooks': path.resolve(__dirname, 'src/hooks'),
          },
     },
     test: {
          environment: 'jsdom', // necessário para testes React
          globals: true, // opcional: permite usar expect/describe/it sem importar
          setupFiles: './src/setupTests.ts', // <- caminho para o setup
          alias: {
               '@components': path.resolve(__dirname, 'src/components'),
               '@services': path.resolve(__dirname, 'src/services'),
               '@data': path.resolve(__dirname, 'src/data'),
               '@images': path.resolve(__dirname, 'src/assets/images'),
               '@types': path.resolve(__dirname, 'src/types'),
               '@validations': path.resolve(__dirname, 'src/validations'),
               '@hooks': path.resolve(__dirname, 'src/hooks'),
          },
     },
});
