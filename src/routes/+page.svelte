<script>
	import Marquee from "../lib/Marquee.svelte";

	let play = $state(true);
</script>

<button onclick={() => (play = !play)}>
	{play ? "Pause" : "Play"}
</button>

<Marquee gap="5rem" {play} pauseOnHover>
	<h1>Selvet FAST Marquee</h1>
	<h1>Selvet FAST Marquee</h1>
	<h1>Selvet FAST Marquee</h1>
	<h1>Selvet FAST Marquee</h1>
</Marquee>
