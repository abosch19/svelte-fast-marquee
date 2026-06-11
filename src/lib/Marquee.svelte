<script>
	/**
	 * Custom style
	 * @type {string}
	 */
	export let style = "";

	/**
	 * Pause on hover
	 * @type {boolean}
	 */
	export let pauseOnHover = false;

	/**
	 * Automatically repeat children to fill empty space in the marquee
	 * @type {boolean}
	 */
	export let autoFill = false;
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
	 * Gradient color
	 * @type {string}
	 */
	export let gradientColor = "";

	/**
	 * Gradient width
	 * @type {string}
	 */
	export let gradientWidth = "";

	let className = "";
	/**
	 * Custom class
	 * @type {string}
	 */
	export { className as class };

	/**
	 * Gap between elements
	 * @type {string}
	 */
	export let gap = "0px";

	let containerWidth;
	let marqueeWidth;
	let gradient = !!gradientColor || !!gradientWidth;

	$: multiplier =
		autoFill && containerWidth && marqueeWidth
			? Math.max(1, Math.ceil(containerWidth / marqueeWidth))
			: 1;

	$: duration =
		marqueeWidth < containerWidth
			? containerWidth / speed
			: marqueeWidth / speed;
</script>

<div
	style={style}
	class="marquee-container {className}"
	bind:clientWidth={containerWidth}
	style:--gap={gap}
	style:--play={play ? "running" : "paused"}
	style:--gradientColor={gradientColor}
	style:--gradientWidth={gradientWidth}
	style:--direction={direction === "left" ? "normal" : "reverse"}
	style:--duration={duration + "s"}
	style:--pause-on-hover={pauseOnHover || !play ? "paused" : "running"}
	style:--pause-on-click={pauseOnClick || !play ? "paused" : "running"}
>
	{#if gradient}
		<div class="gradient" data-testid="marquee-gradient"></div>
	{/if}
	<div class="marquee" data-testid="marquee-slot">
		<div class="marquee-content" bind:clientWidth={marqueeWidth}>
			<slot />
		</div>
		{#each Array(multiplier - 1) as _}
			<div class="marquee-content">
				<slot />
			</div>
		{/each}
	</div>
	<div class="marquee" data-testid="marquee-slot">
		{#each Array(multiplier) as _}
			<div class="marquee-content">
				<slot />
			</div>
		{/each}
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
		gap: var(--gap, 0);
		animation: scroll var(--duration) linear infinite;
		animation-play-state: var(--play);
		animation-direction: var(--direction);
		padding-right: var(--gap, 0);
	}

	.marquee-content {
		flex: 0 0 auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--gap, 0);
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
		background: linear-gradient(
			to right,
			var(--gradientColor, white),
			transparent
		);
		content: "";
		height: 100%;
		position: absolute;
		width: var(--gradientWidth, 10%);
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
