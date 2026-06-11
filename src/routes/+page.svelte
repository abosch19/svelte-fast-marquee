<script> 
	import Marquee from "../lib/Marquee.svelte";
	let play = $state(true)

	function togglePlay() {
		play = !play
	}
</script>

<Marquee pauseOnHover={true} speed={20} play={play}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" alt="Svelte Logo" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" alt="NPM"/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github"/>
		<h1>Hover me!</h1>
</Marquee>
<Marquee pauseOnClick={true} direction='right' play={play}>
	<h1 class="text">Welcome</h1>
	<h2 class="text">to</h2>
	<h1 class="text">svelte-fast-marquee!</h1>
	<h1 class="text">[click me to pause]</h1>
</Marquee>

<Marquee autoFill pauseOnHover speed={35} gap="2rem" play={play}>
	<span class="badge">autoFill</span>
	<span class="badge">repeats short content</span>
	<span class="badge">no manual duplicates</span>
</Marquee>

<button onclick={togglePlay}>{play ? 'Pause' : 'Resume'} animations</button>
<style>
	img {
		height: 100px;
		width: 100px;
		margin: 50px;
	}
	
	.text {
		margin: 30px;
	}

	.badge {
		border: 1px solid #ff3e00;
		border-radius: 999px;
		color: #ff3e00;
		font-family: system-ui, sans-serif;
		font-size: 18px;
		font-weight: 700;
		padding: 12px 18px;
		white-space: nowrap;
	}
</style>
