import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/svelte'
import Marquee from '$lib/Marquee.svelte'

describe('Marquee', () => {
	test('renders correctly', () => {
		render(Marquee)

		expect(screen.getAllByTestId("marquee-slot")).toHaveLength(2)
		expect(screen.queryByTestId("marquee-gradient")).not.toBeInTheDocument()
	})

	test('renders gradient', () => {
		render(Marquee, { props: { gradient: true }})

		expect(screen.getByTestId("marquee-gradient")).toBeInTheDocument()
	})
})