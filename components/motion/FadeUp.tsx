"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

type Props = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
};

export function FadeUp({
  children,
  delay = 0,
  y = 32,
  duration = 0.8,
  once = true,
  className,
  ...rest
}: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration: reduced ? 0 : duration,
        ease: [0.22, 1, 0.36, 1],
        delay: reduced ? 0 : delay,
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
