# Svelte Fast Marquee
A Marquee component for Svelte inspired by [react-fast-marquee](https://github.com/justin-chu/react-fast-marquee).

[![npm](https://img.shields.io/npm/v/svelte-fast-marquee)](https://www.npmjs.com/package/svelte-fast-marquee)
[![npm downloads](https://img.shields.io/npm/dm/svelte-fast-marquee)](https://www.npmjs.com/package/svelte-fast-marquee)
[![npm license](https://img.shields.io/npm/l/svelte-fast-marquee)](https://www.npmjs.com/package/svelte-fast-marquee)
[![npm bundle size](https://img.shields.io/bundlephobia/min/svelte-fast-marquee)](https://bundlephobia.com/result?p=svelte-fast-marquee)
[![npm type definitions](https://img.shields.io/npm/types/svelte-fast-marquee)](https://www.npmjs.com/package/svelte-fast-marquee)

[![demogif](https://media.giphy.com/media/eKiQ1t5UuSj76KFNqg/giphy.gif)](https://media.giphy.com/media/eKiQ1t5UuSj76KFNqg/giphy.gif)


## Demo
Check out the demo [here](https://svelte.dev/repl/77064782be93415ab6370a4025778fb0?version=3.40.2) and play around with some sample marquees.

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

## Documentation

You can find the documentation [here](https://svelte-fast-marquee-docs.vercel.app/).

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
