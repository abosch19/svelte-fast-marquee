<script>
	export let pauseOnHover = true

	$: _style = `
		--pause-on-hover: ${pauseOnHover ? 'paused' : 'running'}
	`
</script>

<div class="marquee-container" style={_style}>
	<div class="marquee">
		<slot />
	</div>
	<div class="marquee">
		<slot />
	</div>
</div>
<style>
.marquee-container {
	display: flex;
	width: 100%;
	overflow-x: hidden;
	flex-direction: row;
	position: relative;
}

.marquee-container:hover .marquee{
	animation-play-state: var(--pause-on-hover);
}

.marquee {
	flex: 0 0 auto;
	min-width: 100%;
	z-index: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
	animation: scroll 10s linear 0s infinite;
	animation-play-state: running;
	animation-direction: normal;
}

@keyframes scroll {
	0% {
		transform: translateX(0%);
	}
	100% {
		transform: translateX(-100%);
	}
}
</style>
