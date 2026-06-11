# Svelte Marquee Component — svelte-fast-marquee

A fast, lightweight **marquee component for Svelte**, inspired by [react-fast-marquee](https://github.com/justin-chu/react-fast-marquee). If you used react-fast-marquee in React, this is the Svelte version — a drop-in equivalent for Svelte and SvelteKit.

[![npm](https://img.shields.io/npm/v/svelte-fast-marquee)](https://www.npmjs.com/package/svelte-fast-marquee)
[![npm downloads](https://img.shields.io/npm/dm/svelte-fast-marquee)](https://www.npmjs.com/package/svelte-fast-marquee)
[![npm license](https://img.shields.io/npm/l/svelte-fast-marquee)](https://www.npmjs.com/package/svelte-fast-marquee)
[![npm bundle size](https://img.shields.io/bundlejs/size/svelte-fast-marquee)](https://bundlejs.com/?q=svelte-fast-marquee)
[![npm type definitions](https://img.shields.io/npm/types/svelte-fast-marquee)](https://www.npmjs.com/package/svelte-fast-marquee)

- ⚡ **CSS-driven animation** — no JavaScript running per frame, zero dependencies
- 🧩 **Drop-in API** modeled after react-fast-marquee
- 🟠 **Svelte 3, 4 and 5** compatible
- 🌐 **SSR / SvelteKit friendly** — no browser-only APIs
- 🦾 **TypeScript definitions** included
- 🖱 **Pause on hover / click** (`pauseOnHover`, `pauseOnClick`)
- 🌈 **Gradient fade** at the edges (`gradientColor`, `gradientWidth`)
- 🎛 Control **speed, direction, gap, play state and auto fill**

[![demogif](https://media.giphy.com/media/eKiQ1t5UuSj76KFNqg/giphy.gif)](https://media.giphy.com/media/eKiQ1t5UuSj76KFNqg/giphy.gif)


## Demo
Check out the demo [here](https://svelte.dev/playground/77064782be93415ab6370a4025778fb0) and play around with some sample marquees.

## Installation
If you're using npm, in the command prompt run:

```sh
npm install svelte-fast-marquee --save
```

If you're using yarn, run:

```sh
yarn add svelte-fast-marquee
```

If you're using bun, run:

```sh
bun add svelte-fast-marquee
```

## Compatibility

This package supports Svelte 3, 4, and 5.

`svelte-fast-marquee` declares `svelte` as a peer dependency, so your app should provide its own compatible `svelte` version.

## Documentation

You can find the documentation [here](https://svelte-fast-marquee-website.vercel.app/).

## Usage

To use the component, first import `Marquee` into your file:

```js
import Marquee from "svelte-fast-marquee";
```

Then wrap the `<Marquee>` tags around any component or text you'd like to slide.

```svelte
<Marquee>
  I can be a Svelte component, multiple Svelte components, or just some text.
</Marquee>
```

A sample file might look like this:

```svelte
<script>
    import MyComponent from '../components/MyComponent';
    import Marquee from 'svelte-fast-marquee';
</script>
<Marquee>
    <MyComponent />
    <MyComponent />
    <MyComponent />
</Marquee>
```

## Examples

### Logo wall

```svelte
<script>
  import Marquee from 'svelte-fast-marquee';
</script>

<Marquee speed={40} pauseOnHover autoFill gap="3rem">
  <img src="/logo1.svg" alt="Logo 1" />
  <img src="/logo2.svg" alt="Logo 2" />
  <img src="/logo3.svg" alt="Logo 3" />
</Marquee>
```

### News ticker with gradient fade

```svelte
<Marquee direction="right" gradientColor="white" gradientWidth="15%">
  Breaking news · Product launch · New update ·
</Marquee>
```

### Play / pause control

```svelte
<script>
  import Marquee from 'svelte-fast-marquee';
  let playing = true;
</script>

<button on:click={() => (playing = !playing)}>
  {playing ? 'Pause' : 'Play'}
</button>

<Marquee play={playing} speed={80}>
  Pause me with the button above.
</Marquee>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `play` | `boolean` | `true` | Whether the marquee is animating. |
| `autoFill` | `boolean` | `false` | Whether to repeat children enough times to fill empty space in the marquee. |
| `speed` | `number` | `100` | Animation speed in pixels/second. |
| `direction` | `"left" \| "right"` | `"left"` | Scroll direction. |
| `pauseOnHover` | `boolean` | `false` | Pause the animation on hover. |
| `pauseOnClick` | `boolean` | `false` | Pause the animation while pressed. |
| `gap` | `string` | `"0px"` | Gap between elements (any CSS length). |
| `gradientColor` | `string` | `""` | Color of the edge fade. Setting it enables the gradient. |
| `gradientWidth` | `string` | `""` | Width of the edge fade (any CSS length, defaults to `10%`). |
| `class` | `string` | `""` | Custom class for the container. |
| `style` | `string` | `""` | Inline styles for the container. |
