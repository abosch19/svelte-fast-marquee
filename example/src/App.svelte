<script>
  import logo from './assets/svelte.png'
  import Marquee from 'svelte-fast-marquee'
</script>

<main>
  <h1>svelte-fast-marquee</h1>

  <Marquee class="firstMarquee" speed={10} gradient>
    <p>
      Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
      apps.
    </p>  
    <p>
      Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
      the officially supported framework, also powered by Vite!
    </p>
  </Marquee>
  <Marquee speed={10} gradient --gradientColor="rgba(255, 200, 200, 1)" --gradientWidth="50px" pauseOnHover>
    <p>
      Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
      apps.
    </p>  
    <p>
      Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
      the officially supported framework, also powered by Vite!
    </p>
  </Marquee>
  <Marquee direction='right' speed={500} play={false} pauseOnClick>
    <img src={logo} alt="Svelte Logo" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" alt="NPM"/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github"/>
  </Marquee>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
    margin: 0 50px;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
  }

  p {
    margin: 0 4rem;
    line-height: 1.35;
  }

  :global(.firstMarquee) {
    margin-bottom: 50px;
  }
</style>
