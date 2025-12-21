import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FadeInUpProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    threshold?: number;
    rootMargin?: string;
}

export function FadeInUp({
    children,
    delay = 0,
    className = "",
    threshold = 0.1,
    rootMargin
}: FadeInUpProps) {
    const { ref, className: animationClasses, style } = useScrollAnimation({
        delay,
        threshold,
        rootMargin
    });

    return (
        <div
            ref={ref}
            className={`${animationClasses} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
}

// FadeIn component for elements that shouldn't move (just opacity)
export function FadeIn({
    children,
    delay = 0,
    className = "",
    threshold = 0.1,
    rootMargin
}: FadeInProps) {
    const { ref, isVisible, style } = useScrollAnimation({
        delay,
        threshold,
        rootMargin
    });

    // Override the default hook classes to remove translation
    const transitionClasses = `transition-opacity duration-700 ease-out will-change-opacity`;
    const visibleClass = isVisible ? 'opacity-100' : 'opacity-0';

    return (
        <div
            ref={ref}
            className={`${transitionClasses} ${visibleClass} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
}
