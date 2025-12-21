import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/utils";

interface StaggerTextProps {
    text: string;
    className?: string;
    delay?: number;
    staggerDelay?: number;
    once?: boolean;
}

export function StaggerText({
    text,
    className,
    delay = 0,
    staggerDelay = 0.02,
    once = true
}: StaggerTextProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-50px" });
    const letters = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: staggerDelay, delayChildren: delay * i },
        }),
    } as const; // Added 'as const' for stricter typing

    const child = {
        hidden: {
            opacity: 0,
            y: 10,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    } as const; // Added 'as const' for stricter typing

    return (
        <motion.span
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={cn("inline-block", className)}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index} className="inline-block relative">
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.span>
    );
}
