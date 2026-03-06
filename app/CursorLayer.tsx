'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValue } from 'motion/react';

export function CursorLayer() {
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const ringX = useSpring(mouseX, { stiffness: 60, damping: 25, mass: 0.5 });
    const ringY = useSpring(mouseY, { stiffness: 60, damping: 25, mass: 0.5 });

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, .mcard, .vitem, .sw, .ccard, .theme-toggle')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Cursor dot */}
            <motion.div className="cursor-dot" style={{ x: mouseX, y: mouseY }} />
            {/* Cursor ring */}
            <motion.div
                className={`cursor-ring${isHovering ? ' hov' : ''}`}
                style={{ x: ringX, y: ringY }}
            />
            {/* Scroll progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-ink z-[200] origin-left"
                style={{ scaleX }}
            />
        </>
    );
}
