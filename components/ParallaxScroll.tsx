"use client";

import { useEffect, useRef } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

interface ParallaxScrollProps {
  children: React.ReactNode;
  offset?: number;
}

export function ParallaxScroll({ children, offset = 50 }: ParallaxScrollProps) {
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 1000], [0, offset]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}
