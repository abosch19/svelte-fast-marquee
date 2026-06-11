import { describe, expect, test, afterEach, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/svelte'
import Marquee from '$lib/Marquee.svelte'
import AutoFillMarquee from './fixtures/AutoFillMarquee.svelte'

describe('Marquee', () => {
	afterEach(() => {
		vi.restoreAllMocks()
		cleanup()
	})

	test('renders correctly', () => {
		render(Marquee)

		expect(screen.getAllByTestId("marquee-slot")).toHaveLength(2)
		expect(screen.queryByTestId("marquee-gradient")).not.toBeInTheDocument()
	})


	test('renders gradient in px', () => {
		render(Marquee, { props: { gradientWidth: "10px" }})

		expect(screen.getByTestId("marquee-gradient")).toBeInTheDocument()
	})

	test('renders gradient in %', () => {
		render(Marquee, { props: { gradientWidth: "10%" }})

		expect(screen.getByTestId("marquee-gradient")).toBeInTheDocument()
	})

	test('autoFill repeats children enough to fill the container', async () => {
		vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockImplementation(function () {
			if (this.classList.contains('marquee-container')) return 300
			if (this.classList.contains('marquee-content')) return 100
			return 0
		})

		render(AutoFillMarquee)

		expect(await screen.findAllByText('Logo')).toHaveLength(6)
	})
})
