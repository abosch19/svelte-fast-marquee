import { defineConfig } from 'vitest/config'
import { sveltekit } from '@sveltejs/kit/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [sveltekit()],
	test: {
		environment: `jsdom`,
		setupFiles: [`./tests/setup.js`],
	},
})