
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

export const FadeIn = ({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
}: FadeInProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
                duration: duration,
                delay: delay,
                ease: "easeOut",
            }}
            className={className}
            style={{ willChange: "transform, opacity" }}
        >
            {children}
        </motion.div>
    );
};
