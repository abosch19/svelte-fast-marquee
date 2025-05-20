import { describe, expect, test, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/svelte'
import Marquee from '$lib/Marquee.svelte'

describe('Marquee', () => {
	afterEach(() => {
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
})