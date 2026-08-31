import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from the custom domain root (see assets/CNAME), so base stays '/'.
// publicDir points at the existing assets/ folder (kept at its original repo
// path) instead of the Vite-conventional public/, so its contents — images
// and CNAME — are copied into dist/ root unchanged.
export default defineConfig({
  plugins: [react()],
  base: '/',
  publicDir: 'assets',
});
