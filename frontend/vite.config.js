import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Timetable_Dashboard_Full_Stack/',
  plugins: [react()],
})
