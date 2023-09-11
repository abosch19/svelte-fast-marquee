import DefaultExport, { Marquee as NamedExport } from '../src/lib/index.js';
import Marquee from '../src/lib/Marquee.svelte'
import { describe, expect, test } from 'vitest'


describe('index export', () => {
	test(`index.ts default export is component`, () => {
		expect(DefaultExport).toBe(Marquee)
		expect(NamedExport).toBe(Marquee)
	})
})