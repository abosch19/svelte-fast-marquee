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

	/**
	 * Show lateral gradient
	 * @type {boolean}
	 */
	export let gradient = false;

	let containerWidth;
	let marqueeWidth;

	$: duration =
		marqueeWidth < containerWidth
			? containerWidth / speed
			: marqueeWidth / speed;

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

<div
	class={`marquee-container ${$$restProps.class ?? ""}`}
	style={_style}
	bind:clientWidth={containerWidth}
>
	{#if gradient}
		<div class="gradient" />
	{/if}
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
		flex: 0 0 auto;
		min-width: 100%;
		z-index: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		animation: scroll var(--duration) linear infinite;
		animation-play-state: var(--play);
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

	.initial-child-container {
		flex: 0 0 auto;
		display: flex;
		min-width: auto;
		flex-direction: row;
	}

	.gradient::after,
	.gradient::before {
		background: linear-gradient(to right, white, transparent);
		content: "";
		height: 100%;
		position: absolute;
		width: 10%;
		z-index: 2;
	}

	.gradient::before {
		left: 0;
		top: 0;
	}

	.gradient::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}
</style>
