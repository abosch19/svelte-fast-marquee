import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'

import Marquee from '../src/'



test('shows marquee-container and two marquees', () => {
  const { container } = render(Marquee)

  expect(container.getElementsByClassName('marquee-container').length).toBe(1)
  expect(container.getElementsByClassName('marquee').length).toBe(2)
})

// // Note: This is as an async test as we are using `fireEvent`
// test('changes button text on click', async () => {
//   const {getByText} = render(Comp, {name: 'World'})
//   const button = getByText('Button')

//   // Using await when firing events is unique to the svelte testing library because
//   // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
//   await fireEvent.click(button)

//   expect(button).toHaveTextContent('Button Clicked')
// })