"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);

  // Respect reduced motion — collapse durations and disable ScrollTriggers.
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReduced) {
    gsap.globalTimeline.timeScale(100);
  }

  gsap.defaults({
    ease: "power3.out",
    duration: 0.8,
  });

  registered = true;
}

export { gsap, ScrollTrigger };
