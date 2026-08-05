

# Componente Marquee para Svelte — svelte-fast-marquee

Un **componente marquesina para Svelte** rápido y ligero, inspirado en [react-fast-marquee](https://github.com/justin-chu/react-fast-marquee). Si usaste react-fast-marquee en React, esta es la versión para Svelte: un equivalente directo para Svelte y SvelteKit.

[![npm](https://img.shields.io/npm/v/svelte-fast-marquee)](https://www.npmjs.com/package/svelte-fast-marquee)
[![npm downloads](https://img.shields.io/npm/dm/svelte-fast-marquee)](https://www.npmjs.com/package/svelte-fast-marquee)
[![npm license](https://img.shields.io/npm/l/svelte-fast-marquee)](https://www.npmjs.com/package/svelte-fast-marquee)
[![npm bundle size](https://img.shields.io/bundlejs/size/svelte-fast-marquee)](https://bundlejs.com/?q=svelte-fast-marquee)
[![npm type definitions](https://img.shields.io/npm/types/svelte-fast-marquee)](https://www.npmjs.com/package/svelte-fast-marquee)

- ⚡ **Animación basada en CSS** — sin JavaScript ejecutándose por frame, cero dependencias
- 🧩 **API lista para usar** modelada a partir de react-fast-marquee
- 🟠 Compatible con **Svelte 3, 4 y 5**
- 🌐 **Amigable con SSR / SvelteKit** — sin APIs exclusivas del navegador
- 🦾 **Definiciones de TypeScript** incluidas
- 🖱 **Pausa al pasar el cursor / hacer clic** (`pauseOnHover`, `pauseOnClick`)
- 🌈 **Desvanecimiento degradado** en los bordes (`gradientColor`, `gradientWidth`)
- 🎛 Controla **velocidad, dirección, espacio, estado de reproducción y relleno automático**

[![demogif](https://media.giphy.com/media/eKiQ1t5UuSj76KFNqg/giphy.gif)](https://media.giphy.com/media/eKiQ1t5UuSj76KFNqg/giphy.gif)


## Demo
Consulta la demostración [aquí](https://svelte.dev/playground/77064782be93415ab6370a4025778fb0) y experimenta con algunos ejemplos de marquesinas.

## Instalación
Si usas npm, ejecuta en la terminal:

```sh
npm install svelte-fast-marquee --save
```

Si usas yarn, ejecuta:

```sh
yarn add svelte-fast-marquee
```

Si usas bun, ejecuta:

```sh
bun add svelte-fast-marquee
```

## Compatibilidad

Este paquete es compatible con Svelte 3, 4 y 5.

`svelte-fast-marquee` declara `svelte` como una dependencia par (`peer dependency`), por lo que tu aplicación debe proporcionar su propia versión compatible de `svelte`.

## Documentación

Puedes encontrar la documentación [aquí](https://svelte-fast-marquee-website.vercel.app/).

## Uso

Para usar el componente, primero importa `Marquee` en tu archivo:

```js
import Marquee from "svelte-fast-marquee";
```

Luego, envuelve las etiquetas `<Marquee>` alrededor de cualquier componente o texto que desees hacer desplazar.

```svelte
<Marquee>
  I can be a Svelte component, multiple Svelte components, or just some text.
</Marquee>
```

Un archivo de ejemplo podría verse así:

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

## Ejemplos

### Muro de logos

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

### Cinta de noticias con desvanecimiento degradado

```svelte
<Marquee direction="right" gradientColor="white" gradientWidth="15%">
  Breaking news · Product launch · New update ·
</Marquee>
```

### Control de reproducción / pausa

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

## Propiedades

| Prop | Tipo | Predeterminado | Descripción |
| --- | --- | --- | --- |
| `play` | `boolean` | `true` | Indica si la marquesina está animándose. |
| `autoFill` | `boolean` | `false` | Indica si repetir los elementos hijos suficientes veces para llenar el espacio vacío en la marquesina. |
| `speed` | `number` | `100` | Velocidad de la animación en píxeles por segundo. |
| `direction` | `"left" \| "right"` | `"left"` | Dirección del desplazamiento. |
| `pauseOnHover` | `boolean` | `false` | Pausa la animación al pasar el cursor. |
| `pauseOnClick` | `boolean` | `false` | Pausa la animación mientras se mantiene presionado. |
| `gap` | `string` | `"0px"` | Espacio entre elementos (cualquier longitud CSS). |
| `gradientColor` | `string` | `""` | Color del desvanecimiento en los bordes. Establecerlo habilita el degradado. |
| `gradientWidth` | `string` | `""` | Ancho del desvanecimiento en los bordes (cualquier longitud CSS, por defecto `10%`). |
| `class` | `string` | `""` | Clase personalizada para el contenedor. |
| `style` | `string` | `""` | Estilos en línea para el contenedor. |
