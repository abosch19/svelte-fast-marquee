import type { SvelteComponentTyped } from "svelte";

export interface MarqueeProps {
  /**
   * Custom style
   * @default {}
   */
  style?: string;

  /**
   * Pause on hover
   * @default false
   */
  pauseOnHover?: boolean;

  /**
   * Pause on click
   * @default false
   */
  pauseOnClick?: boolean;

  /**
   * Animation direction
   * @default "left"
   */
  direction?: "left" | "right";

  /**
   * Animation speed calculated as pixels/second
   * @default 100
   */
  speed?: number;

  /**
   * Animation state
   * @default true
   */
  play?: boolean;

  /**
   * Show lateral gradient
   * @default false
   */
  gradient?: boolean;

  /**
   * Custom class
   * @default ""
   */
  class?: string;
}

export default class Marquee extends SvelteComponentTyped<
  MarqueeProps,
  Record<string, any>,
  { default: {} }
> {}
