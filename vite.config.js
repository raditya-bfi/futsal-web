import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'
import jsconfigPaths from 'vite-jsconfig-paths'

// https://vitejs.dev/config/
export default ({ mode }) => {
  // eslint-disable-next-line no-console
  console.log('mode', mode)
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const serverPort = parseInt(`${process.env.VITE_PORT}`, 10) || 3000

  return defineConfig({
    plugins: [react(), jsconfigPaths()],
    resolve: {
      preserveSymlinks: true,
    },
    build: {
      sourcemap: false,
    },
    test: {
      css: false,
      include: ['src/**/__tests__/*'],
      globals: true,
      environment: 'jsdom',
      setupFiles: 'src/setupTests.ts',
      clearMocks: true,
    },
    server: {
      port: serverPort,
    },
  })
}
