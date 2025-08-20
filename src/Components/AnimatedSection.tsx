"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
  direction?: "up" | "left" | "right" | "down";
}

const getVariants = (direction: "up" | "left" | "right" | "down") => {
  const initial = { opacity: 0, y: 0, x: 0 };
  const animate = { opacity: 1, y: 0, x: 0 };

  switch (direction) {
    case "up":
      initial.y = 50;
      break;
    case "left":
      initial.x = -50;
      break;
    case "right":
      initial.x = 50;
      break;
    case "down":
      initial.y = -50;
      break;
  }
  return { hidden: initial, visible: animate };
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0.1,
  duration = 0.8,
  threshold = 0.1,
  direction = "up",
}) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold });

  const variants = getVariants(direction);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
