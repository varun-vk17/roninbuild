import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(options?: {
    threshold?: number;
    rootMargin?: string;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const hasTriggered = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Respect reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setIsVisible(true);
            hasTriggered.current = true;
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTriggered.current) {
                    // Trigger animation
                    setIsVisible(true);
                    hasTriggered.current = true;
                    // Disconnect after triggering once
                    observer.disconnect();
                }
            },
            {
                threshold: options?.threshold ?? 0.1,
                rootMargin: options?.rootMargin ?? '0px 0px -50px 0px', // Trigger slightly before element is fully in view
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [options?.threshold, options?.rootMargin]);

    // Base utility classes for the "premium feel"
    // opacity-0 translate-y-2 (8px) -> opacity-100 translate-y-0
    const transitionClasses = `transition-all duration-500 ease-out will-change-[opacity,transform]`;

    // Calculate delay class if needed, or inline style
    const style = options?.delay ? { transitionDelay: `${options.delay}ms` } : undefined;

    return {
        ref,
        isVisible,
        className: `${transitionClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`,
        style
    };
}
