import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure this matches "distDir" in vercel.json
  },
  root: './',  // Ensure Vite runs in the correct folder
});
