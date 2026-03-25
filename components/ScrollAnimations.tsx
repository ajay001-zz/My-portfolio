"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollAnimationsProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export function ScrollAnimation({
  children,
  delay = 0,
  direction = "up",
  distance = 30,
}: ScrollAnimationsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const directionVariants = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionVariants[direction],
      }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.8,
            delay,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function CounterAnimation({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!isInView) return;

    const numValue = parseInt(value.replace(/\D/g, ""));
    const duration = 2;
    const steps = 60;
    const stepValue = numValue / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.floor(stepValue * currentStep));

      if (currentStep >= steps) {
        setCount(numValue);
        clearInterval(timer);
      }
    }, (duration * 1000) / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.span ref={ref}>
      {count}
      {value.replace(/\d/g, "")}
    </motion.span>
  );
}

interface TextRevealProps {
  text: string;
  delay?: number;
}

export function TextReveal({ text, delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const words = text.split(" ");

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className="flex flex-wrap gap-2"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: delay + index * 0.05,
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
