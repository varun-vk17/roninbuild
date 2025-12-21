
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
    blur?: string;
}

export const BlurFade = ({
    children,
    className = "",
    delay = 0,
    duration = 0.8,
    yOffset = 20,
    blur = "10px",
}: BlurFadeProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: yOffset, filter: `blur(${blur})`, scale: 0.98 }}
            animate={
                isInView
                    ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }
                    : { opacity: 0, y: yOffset, filter: `blur(${blur})`, scale: 0.98 }
            }
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.25, 0.4, 0.25, 1], // Cubic bezier for "Apple-like" easing
            }}
            className={className}
            style={{ willChange: "transform, opacity, filter" }}
        >
            {children}
        </motion.div>
    );
};
