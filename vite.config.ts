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
          globals: true, // para usar globals como describe, test, expect sem importá-los
          environment: 'jsdom', // ambiente que simula navegador para React
          setupFiles: './src/setupTests.ts', // arquivo de setup (criaremos a seguir)
          include: ['src/tests/**/*.test.ts', 'src/tests/**/*.test.tsx'], // adiciona isso para buscar os testes nessa pasta,
          coverage: {
               reporter: ['text', 'lcov'], // relatórios de cobertura
          },
          // opcional para ignorar CSS em testes
     },
});
