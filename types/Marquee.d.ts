/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MarqueeProps {
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
   * @default 'left'
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
}

export default class Marquee extends SvelteComponentTyped<
  MarqueeProps,
  {},
  { default: {} }
> {}
