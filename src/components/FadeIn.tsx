import React from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  instant?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className, instant = false }) => (
  <motion.div
    initial={instant ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
    whileInView={instant ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    transition={instant ? { duration: 0 } : { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);
