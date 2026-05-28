import { defineConfig } from 'vitest/config'
import { sveltekit } from '@sveltejs/kit/vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { fileURLToPath } from 'node:url'

const isTest = process.env.VITEST === 'true'

export default defineConfig({
	plugins: isTest ? [svelte({ hot: false })] : [sveltekit()],
	resolve: isTest
		? {
			conditions: ['browser'],
			alias: {
				$lib: fileURLToPath(new URL('./src/lib', import.meta.url)),
			},
		}
		: undefined,
	test: {
		environment: 'jsdom',
		setupFiles: ['./tests/setup.js'],
	},
})
