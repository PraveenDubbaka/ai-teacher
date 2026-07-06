"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.985, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
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
    <motion.div className={cn(className)} variants={fadeUpVariants} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} {...props}>
      {children}
    </motion.div>
  );
}

interface NeonFrameRevealProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "children"> {
  once?: boolean;
  children?: React.ReactNode;
}

export function NeonFrameReveal({ className, once = true, children, ...props }: NeonFrameRevealProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-cyan-300/45 bg-white/75 p-4 shadow-[0_28px_64px_-40px_rgba(14,165,233,0.6)] dark:border-cyan-400/35 dark:bg-slate-900/70",
        className,
      )}
      initial={{ opacity: 0, y: 20, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -left-28 top-0 h-full w-24 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"
        animate={{ x: [0, 540] }}
        transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
      />
      {children}
    </motion.div>
  );
}
