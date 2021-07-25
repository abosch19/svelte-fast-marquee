# Svelte Fast Marquee
A Marquee component for Svelte inspired by [react-fast-marquee](https://github.com/justin-chu/react-fast-marquee).

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

## Usage

To use the component, first import `Marquee` into your file:

```js
import Marquee from "svelte-fast-marquee";
```

Then wrap the `<Marquee>` tags around any component or text you'd like to slide.

```js
<Marquee>
  I can be a Svelte component, multiple Svelte components, or just some text.
</Marquee>
```

A sample file might look like this:

```js
<script>
    import MyComponent from "../components/MyComponent";
    import Marquee from "react-fast-marquee";
</script>
<Marquee>
    <MyComponent />
    <MyComponent />
    <MyComponent />
</Marquee>
```

## Props

| Property        | Type                        | Default           | Description                                              |
| :-------------- | :-------------------------- | :---------------- | :------------------------------------------------------- |
| `pauseOnHover`  | `boolean`                   | `false`           | Whether to pause the marquee when hovered                |
| `pauseOnClick`  | `boolean`                   | `false`           | Whether to pause the marquee when clicked                |
| `direction`     | `"left"` or `"right"`       | `"left"`          | The direction the marquee is sliding                     |
