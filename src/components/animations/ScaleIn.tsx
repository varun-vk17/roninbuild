
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScaleInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    scale?: number;
}

export const ScaleIn = ({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
    scale = 0.95,
}: ScaleInProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: scale }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: scale }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.2, 0, 0, 1], // Custom heavy ease out
            }}
            className={className}
            style={{ willChange: "transform, opacity" }}
        >
            {children}
        </motion.div>
    );
};
