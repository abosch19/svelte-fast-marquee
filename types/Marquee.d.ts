/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MarqueeProps {
  /**
   * Pause on hover
   * @default false
   */
  pauseOnHover?: booleaan;

  /**
   * Pause on click
   * @default false
   */
  pauseOnClick?: boolean;

  /**
   * Specify the kind of button
   * @default 'left'
   */
  direction?: "left" | "right";
}

export default class Marquee extends SvelteComponentTyped<
  MarqueeProps,
  {},
  { default: {} }
> {}
