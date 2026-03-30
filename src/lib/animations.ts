import type { Variants, Transition } from "framer-motion";

export const springConfig: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

export const snappySpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const smoothEase = [0.32, 0.72, 0, 1] as const;

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      ...springConfig,
      duration: 0.8,
    },
  },
};

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.32, 0.72, 0, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springConfig,
  },
};

export const slideInLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      ...springConfig,
      duration: 0.8,
    },
  },
};

export const slideInRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      ...springConfig,
      duration: 0.8,
    },
  },
};

export const expandVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: [0.32, 0.72, 0, 1] },
      opacity: { duration: 0.2 },
    },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
      opacity: { duration: 0.3, delay: 0.1 },
    },
  },
};
