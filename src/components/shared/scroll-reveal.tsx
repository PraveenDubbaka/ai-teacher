"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.03,
    },
  },
};

interface ScrollRevealProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "variants"> {
  delay?: number;
  once?: boolean;
}

export function ScrollReveal({ className, delay = 0, once = true, children, ...props }: ScrollRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={fadeUpVariants}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerRevealProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "variants"> {
  once?: boolean;
}

export function StaggerReveal({ className, once = true, children, ...props }: StaggerRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={staggerVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ className, children, ...props }: Omit<HTMLMotionProps<"div">, "variants">) {
  return (
    <motion.div className={cn(className)} variants={fadeUpVariants} transition={{ duration: 0.45, ease: "easeOut" }} {...props}>
      {children}
    </motion.div>
  );
}
