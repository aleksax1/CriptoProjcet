import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/CriptoProjcet/', // Your repository name
  plugins: [react()],
});
