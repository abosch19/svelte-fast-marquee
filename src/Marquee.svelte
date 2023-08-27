<script>
	/**
	 * Pause on hover
	 * @type {boolean}
	 */
	export let pauseOnHover = false;
	/**
	 * Pause on click
	 * @type {boolean}
	 */
	export let pauseOnClick = false;
	/**
	 * Animation direction
	 * @type {"left" | "right"}
	 */
	export let direction = "left";

	/**
	 * Animation speed calculated as pixels/second
	 * @type {number}
	 */
	export let speed = 100;

	/**
	 * Animation state
	 * @type {boolean}
	 */
	export let play = true;

	let containerWidth;
	let marqueeWidth;
	$: duration = marqueeWidth < containerWidth ? containerWidth / speed: marqueeWidth / speed;
	$: console.log(containerWidth + "  px");
	$: console.log(duration + "  s");

	$: _style = `
		--pause-on-hover: ${pauseOnHover ? "paused" : "running"};
		--pause-on-click: ${pauseOnClick ? "paused" : "running"};
	`;

	$: _marqueeStyle = `
		--play: ${play ? "running" : "paused"};
		--direction: ${direction === "left" ? "normal" : "reverse"};
		--duration: ${duration}s;
	`;
</script>

<div class={`marquee-container ${$$restProps.class ?? ''}`} style={_style} bind:clientWidth={containerWidth}>
	<div class="marquee" style={_marqueeStyle} bind:clientWidth={marqueeWidth}>
		<slot />
	</div>
	<div class="marquee" style={_marqueeStyle}>
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

	.marquee-container:hover .marquee {
		animation-play-state: var(--pause-on-hover);
	}

	.marquee-container:active .marquee {
		animation-play-state: var(--pause-on-click);
	}

	.marquee {
		display: flex;
		width: 100%;
		flex: 0 0 auto;
		z-index: 1;
		flex-direction: row;
		align-items: center;
		animation: scroll var(--duration) linear infinite;
		animation-play-state: var(--play);
		animation-direction: normal;
		animation-direction: var(--direction);
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
