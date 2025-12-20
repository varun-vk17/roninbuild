import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

// Floating Particles Background
export function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-[#6B5FFF]/30 to-[#1D2CF3]/20 blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated Gradient Orbs
export function AnimatedGradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-radial from-[#6B5FFF]/25 via-[#1D2CF3]/15 to-transparent blur-3xl"
        style={{ top: '10%', left: '10%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#1D2CF3]/20 via-[#6B5FFF]/10 to-transparent blur-3xl"
        style={{ bottom: '20%', right: '15%' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#6B5FFF]/15 to-transparent blur-3xl"
        style={{ top: '50%', right: '30%' }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.45, 0.25],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      />
    </div>
  );
}

// Grid Pattern Overlay
export function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

// Spotlight Effect
export function Spotlight({ position = 'top' }: { position?: 'top' | 'bottom' | 'center' }) {
  const positionStyles = {
    top: 'top-0',
    bottom: 'bottom-0',
    center: 'top-1/2 -translate-y-1/2',
  };

  return (
    <motion.div
      className={`absolute left-1/2 -translate-x-1/2 w-[1200px] h-[600px] pointer-events-none ${positionStyles[position]}`}
      aria-hidden="true"
      animate={{
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="w-full h-full bg-gradient-to-b from-[#6B5FFF]/20 via-transparent to-transparent blur-3xl rounded-full" />
    </motion.div>
  );
}

// Glowing Line Separator
export function GlowingLine() {
  return (
    <div className="relative w-full h-px my-12" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6B5FFF] to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

// Animated Border Card Wrapper
export function AnimatedBorderCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative group ${className}`}>
      <motion.div
        className="absolute -inset-[1px] bg-gradient-to-r from-[#6B5FFF] via-[#1D2CF3] to-[#6B5FFF] rounded-[inherit] opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {children}
    </div>
  );
}

// Pulse Dot Indicator
export function PulseDot({ size = 'md', color = 'purple' }: { size?: 'sm' | 'md' | 'lg'; color?: 'purple' | 'blue' }) {
  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  const colors = {
    purple: 'bg-[#6B5FFF]',
    blue: 'bg-[#1D2CF3]',
  };

  return (
    <div className="relative inline-flex">
      <div className={`${sizes[size]} ${colors[color]} rounded-full`} />
      <motion.div
        className={`absolute inset-0 ${colors[color]} rounded-full`}
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.8, 0, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </div>
  );
}

// Scroll Reveal Wrapper
export function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`[data-scroll-reveal="${delay}"]`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay]);

  return (
    <motion.div
      data-scroll-reveal={delay}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Shimmer Effect
export function ShimmerText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{
          x: ['-200%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        }}
      />
      {children}
    </div>
  );
}

// Magnetic Button Effect
export function MagneticButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      {children}
      {isHovered && (
        <motion.div
          className="absolute -inset-4 bg-[#6B5FFF]/10 rounded-full blur-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}
