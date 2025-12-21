import svgPaths from "./imports/svg-j5pvkaq6wj";
import { TechStackSection, FAQSection, BookingSection, FinalCTASection, Footer } from './components/NewSections';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { FloatingParticles, AnimatedGradientOrbs, GridPattern, Spotlight, GlowingLine, AnimatedBorderCard, PulseDot, ScrollReveal, ShimmerText, MagneticButton } from './components/EnhancedVisuals';
import { Routes, Route, Link } from 'react-router-dom';
import { OurWork } from './pages/OurWork';

function Logo() {
  return (
    <Link
      to="/"
      className="h-[28px] relative shrink-0 w-[78px] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 rounded-sm transition-opacity hover:opacity-80"
      aria-label="Ronin - Home"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 28" role="img" aria-hidden="true">
        <g>
          <path d={svgPaths.p2e3cc40} fill="currentColor" className="text-white" />
          <path d={svgPaths.pbfbd400} fill="currentColor" className="text-white" />
        </g>
      </svg>
    </Link>
  );
}

function CTAButton({ className = "", variant = "filled" }: { className?: string; variant?: "filled" | "outlined" }) {
  if (variant === "outlined") {
    return (
      <button
        className={`bg-transparent relative rounded-[50px] shrink-0 min-h-[44px] px-[30px] border-2 border-white/40 hover:border-white/60 transition-all duration-200 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 ${className}`}
        aria-label="Get Started"
      >
        <span className="font-['Poppins',sans-serif] font-semibold leading-[normal] not-italic text-[15px] text-white text-center">
          Get Started
        </span>
      </button>
    );
  }

  return (
    <button
      className={`bg-white relative rounded-[50px] shrink-0 min-h-[44px] min-w-[124px] transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 ${className}`}
      aria-label="Get Started"
    >
      <div className="content-stretch flex items-center justify-center overflow-clip px-[30px] py-[12px] relative rounded-[inherit]">
        <span className="font-['Poppins',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center">
          Get Started
        </span>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[50px]" />
    </button>
  );
}

function HeroContent() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start sm:items-center justify-center relative shrink-0 text-left sm:text-center w-full max-w-[1100px] px-4 sm:px-6 z-10">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="bg-[#1e3a8a]/40 backdrop-blur-sm border border-[#3b82f6]/30 rounded-[50px] px-5 py-2 inline-flex items-center gap-2 shadow-lg shadow-[#3b82f6]/10">
          <PulseDot size="sm" color="blue" />
          <span className="font-['Poppins',sans-serif] font-medium text-[11px] tracking-[0.15em] uppercase text-[#93c5fd]">
            Revenue-Focused Website Engineering
          </span>
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        id="hero-heading"
        className="font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-[1.1] text-[clamp(48px,8vw,92px)] text-white tracking-tight relative max-w-[95%] sm:max-w-none"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        We build websites that generate revenue.
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        className="font-['Poppins',sans-serif] font-normal leading-[1.65] text-[clamp(16px,1.8vw,19px)] text-white/70 max-w-[750px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        Clear, high-performing websites for startups and growing companies. No fluff. No awards. Just a system built to turn your visitors into customers.
      </motion.p>

      {/* CTA with check */}
      <motion.div
        className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-4 w-full sm:w-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <button
          onClick={() => {
            const bookingSection = document.getElementById('booking');
            if (bookingSection) {
              bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="bg-white hover:bg-white/95 text-black rounded-[50px] px-8 py-4 font-['Poppins',sans-serif] font-semibold text-[15px] transition-all hover:scale-105 flex items-center gap-2 group shadow-[0_20px_70px_rgba(107,95,255,0.3)] hover:shadow-[0_20px_90px_rgba(107,95,255,0.5)] w-full sm:w-auto justify-center relative overflow-hidden cursor-pointer"
        >
          <span className="relative z-10">Book Free Strategy Call</span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#6B5FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-['Poppins',sans-serif] text-[14px] text-white/60">
            Built for results.
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full px-4 sm:px-6 py-20 sm:py-28"
      aria-labelledby="hero-heading"
    >
      <HeroContent />
    </section>
  );
}

function Navigation() {
  return (
    <nav
      className="content-stretch flex gap-4 items-center justify-between overflow-visible px-[24px] sm:px-[48px] py-[20px] relative shrink-0 w-full max-w-[1400px] mx-auto z-20"
      aria-label="Main navigation"
    >
      <Logo />
      <div className="flex items-center gap-6 sm:gap-8">
        <Link
          to="/our-work"
          className="font-['Poppins',sans-serif] font-medium text-[18px] sm:text-[18px] text-white/80 hover:text-white transition-colors duration-200"
        >
          Our Work
        </Link>
        <button
          onClick={() => {
            const bookingSection = document.getElementById('booking');
            if (bookingSection) {
              bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="bg-white hover:bg-white/95 text-black rounded-[50px] px-5 sm:px-6 py-2 sm:py-2.5 font-['Poppins',sans-serif] font-semibold text-[13px] sm:text-[14px] transition-all hover:scale-105 flex items-center gap-2 group shadow-lg cursor-pointer"
        >
          <span className="hidden sm:inline">Book Free Strategy Call</span>
          <span className="sm:hidden">Book Call</span>
          <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <header className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <HeroSection />
    </header>
  );
}

function GradientBackground() {
  return (
    <div
      className="absolute h-[513px] top-[-327px] left-[-207px] w-[1755px] pointer-events-none select-none will-change-transform"
      aria-hidden="true"
      role="presentation"
    >
      <div className="absolute inset-[-19.49%_-5.7%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1955 713">
          <g filter="url(#filter0_nf_2_7)">
            <ellipse
              cx="977.5"
              cy="356.5"
              fill="url(#paint0_linear_2_7)"
              rx="877.5"
              ry="256.5"
            />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="713" id="filter0_nf_2_7" width="1955" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="0.6 0.6" numOctaves="1" result="noise" seed="4600" stitchTiles="stitch" type="fractalNoise" />
              <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
              <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                <feFuncA type="discrete" />
              </feComponentTransfer>
              <feComposite in="coloredNoise1" in2="shape" operator="in" result="noise1Clipped" />
              <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
              <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
              <feMerge result="effect1_noise_2_7">
                <feMergeNode in="shape" />
                <feMergeNode in="color1" />
              </feMerge>
              <feGaussianBlur result="effect2_foregroundBlur_2_7" stdDeviation="50" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_7" x1="977.5" x2="977.5" y1="100" y2="613">
              <stop stopColor="#6B5FFF" />
              <stop offset="0.980769" stopColor="#1D2CF3" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-white focus:text-black focus:rounded-lg focus:outline-2 focus:outline-white focus:outline-offset-2"
    >
      Skip to main content
    </a>
  );
}

function ProblemSection() {
  return (
    <section
      className="bg-white/[0.015] sm:bg-black w-full py-28 sm:py-28 lg:py-35 px-4 sm:px-6 relative overflow-hidden border-t border-white/[0.03] sm:border-t-0"
      aria-labelledby="problem-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-[#6B5FFF]/25 to-transparent blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto relative">
        {/* Main content card */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-[40px] p-8 sm:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Bottom glow effect */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6B5FFF] to-transparent" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[#6B5FFF]/20 via-[#6B5FFF]/5 to-transparent blur-xl" aria-hidden="true" />

          <div className="text-center max-w-[900px] mx-auto relative z-10">
            <h2
              id="problem-heading"
              className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[clamp(36px,5.5vw,64px)] text-white leading-[1.15] mb-6 tracking-tight"
            >
              Most websites are built to{" "}
              <span className="text-white/60">impress</span> — not to{" "}
              <span className="bg-gradient-to-r from-[#6B5FFF] to-[#1D2CF3] bg-clip-text text-transparent">
                sell.
              </span>
            </h2>

            <p className="font-['Poppins',sans-serif] font-medium text-[clamp(18px,2.2vw,24px)] text-white/80 leading-[1.6] mb-4">
              They look polished, but leave users unsure what to do next.
            </p>

            <div className="w-16 h-1 bg-gradient-to-r from-[#6B5FFF] to-[#1D2CF3] mx-auto mb-6 rounded-full" aria-hidden="true" />

            <p className="font-['Poppins',sans-serif] font-medium text-[clamp(16px,1.8vw,18px)] text-white/60 leading-[1.7] max-w-[700px] mx-auto">
              Confusion is the enemy of revenue. If visitors hesitate, they leave.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}

function RealitySection() {
  return (
    <section
      className="bg-black w-full py-28 sm:py-28 lg:py-35 px-6 sm:px-8 lg:px-12 relative border-t border-white/[0.03] sm:border-t-0"
      aria-labelledby="reality-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#6B5FFF]/30 to-transparent blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        <div className="text-center mb-8 sm:mb-16">
          <div className="relative inline-block">
            <div className="inline-block bg-white/5 backdrop-blur-sm rounded-[20px] px-6 py-2 border border-white/10 relative mt-20 mb-4 sm:mt-8">
              {/* Bottom glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6B5FFF] to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-[#6B5FFF]/25 via-[#6B5FFF]/10 to-transparent blur-lg" aria-hidden="true" />

              <p className="font-['Poppins',sans-serif] font-semibold text-[11px] tracking-[0.2em] uppercase text-white/60 relative z-10">
                REVENUE-FIRST ENGINEERING
              </p>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-[18px] bg-[#6B5FFF]/15 blur-lg opacity-50" aria-hidden="true" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left side - Main content */}
          <div className="space-y-6 text-center sm:text-left">


            <h2
              id="reality-heading"
              className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[clamp(32px,4.5vw,50px)] text-white leading-[1.15] tracking-tight"
            >
              We don't design pages. We engineer decisions that lead to revenue.
            </h2>

            <div className="space-y-6">
              <p className="font-['Poppins',sans-serif] font-medium text-[clamp(14px,1.6vw,16px)] text-white/80 leading-[1.7]">
                One page. One action. No confusion.
              </p>

              <p className="font-['Poppins',sans-serif] font-medium text-[clamp(14px,1.6vw,16px)] text-white/80 leading-[1.7]">
                If trust isn't established in seconds, revenue dies.
              </p>
            </div>

            {/* Quote card */}
            <div className="bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-md rounded-[27px] p-[29px] border border-white/20 shadow-xl mt-8 sm:mt-12 relative overflow-hidden">
              {/* Bottom glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6B5FFF] to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[#6B5FFF]/20 via-[#6B5FFF]/5 to-transparent blur-xl" aria-hidden="true" />

              <p className="font-['Poppins',sans-serif] italic font-medium text-[clamp(14px,1.6vw,18px)] text-white leading-[1.6] relative z-10">
                "We prioritize the customer's decision. If a pixel doesn't help them buy, it doesn't belong — period."
              </p>
            </div>
          </div>

          {/* Right side - Focus card */}
          <div className="lg:pl-8">
            <div className="bg-gradient-to-br from-white/8 to-white/[0.02] backdrop-blur-lg rounded-[36px] p-[36px] sm:p-[43px] border border-white/15 shadow-2xl relative overflow-hidden">
              {/* Bottom glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6B5FFF] to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[#6B5FFF]/20 via-[#6B5FFF]/5 to-transparent blur-xl" aria-hidden="true" />

              {/* Badge */}
              <div className="inline-block bg-white/5 backdrop-blur-sm rounded-[20px] px-6 py-2 border border-white/10 mb-6 relative mt-0 sm:mt-8">
                {/* Bottom glow effect */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6B5FFF] to-transparent" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-[#6B5FFF]/25 via-[#6B5FFF]/10 to-transparent blur-lg" aria-hidden="true" />

                <p className="font-['Poppins',sans-serif] font-semibold text-[11px] tracking-[0.2em] uppercase text-white/60 relative z-10">
                  OUR CORE FOCUS
                </p>
              </div>

              {/* Main message */}
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[clamp(29px,3.6vw,43px)] leading-[1.2] tracking-tight mb-5 relative z-10 max-w-[95%] sm:max-w-none">
                <span className="text-white">Most websites look good</span>
                <br />
                <span className="bg-gradient-to-r from-[#6B5FFF] to-[#1D2CF3] bg-clip-text text-transparent">
                  and still lose you money.
                </span>
              </h3>

              <p className="font-['Poppins',sans-serif] font-medium text-[clamp(14px,1.4vw,16px)] text-white/70 leading-[1.7] mb-6 relative z-10">
                They confuse visitors, hide the offer, and never ask for the sale.
              </p>

              <p className="font-['Poppins',sans-serif] font-semibold text-[clamp(15px,1.5vw,17px)] text-white leading-[1.6] mb-8 relative z-10">
                We design sites with one goal: Turn visitors into customers.
              </p>

              {/* Protocol badge */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/10 relative z-10">
                <div className="w-9 h-9 rounded-[11px] bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <svg className="w-[18px] h-[18px] text-[#6B5FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="font-['Poppins',sans-serif] font-semibold text-[10px] tracking-[0.12em] uppercase text-[#6B5FFF]">
                  REVENUE-FIRST PROTOCOL
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  const steps = [
    {
      day: "DAY 1-2",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Strategy & Positioning",
      description: "We analyze your offer and competitors so your value is instantly clear to visitors."
    },
    {
      day: "DAY 3-5",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Wireframes",
      description: "We design a path that guides visitors to action. Every step is intentional and zero-friction."
    },
    {
      day: "DAY 6-8",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Copy & Build",
      description: "Copy that sells without sounding salesy. Built for extreme speed and mobile reliability."
    },
    {
      day: "DAY 9-10",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Launch & Track",
      description: "Launch with tracking so you know what converts. We verify every lead and sale is captured."
    }
  ];

  return (
    <section
      className="bg-white/[0.02] sm:bg-black w-full py-28 sm:py-28 lg:py-35 px-6 sm:px-8 lg:px-12 relative overflow-hidden border-t border-white/[0.03] sm:border-t-0"
      aria-labelledby="roadmap-heading"
    >
      <div className="max-w-[1400px] mx-auto relative">
        {/* Header - Left Aligned */}
        <div className="mb-8 sm:mb-16 text-center sm:text-left">
          <div className="relative inline-block mb-6">
            <div className="inline-block bg-white/5 backdrop-blur-sm rounded-[20px] px-6 py-2 border border-white/10 relative mt-20 mb-4 sm:mt-8">
              {/* Bottom glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6B5FFF] to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-[#6B5FFF]/25 via-[#6B5FFF]/10 to-transparent blur-lg" aria-hidden="true" />

              <p className="font-['Poppins',sans-serif] font-semibold text-[11px] tracking-[0.2em] uppercase text-white/60 relative z-10">
                WHY DIFFERENT
              </p>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-[18px] bg-[#6B5FFF]/15 blur-lg opacity-50" aria-hidden="true" />
          </div>

          <h2
            id="roadmap-heading"
            className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[clamp(36px,5.5vw,64px)] text-white leading-[1.15] mb-6 tracking-tight"
          >
            A systematic 10-day process.
          </h2>

          <p className="font-['Poppins',sans-serif] font-normal text-[clamp(15px,1.6vw,17px)] text-white/60 leading-[1.6] max-w-[700px]">
            We follow a high-velocity engineering protocol to get you live and making sales fast.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/8 to-white/[0.02] backdrop-blur-lg rounded-[24px] p-10 border border-white/10 hover:border-[#6B5FFF]/40 transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden cursor-pointer"
            >
              {/* Bottom glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6B5FFF] to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[#6B5FFF]/20 via-[#6B5FFF]/5 to-transparent blur-xl group-hover:from-[#6B5FFF]/30 transition-colors duration-300" aria-hidden="true" />

              {/* Icon and Day Badge */}
              <div className="flex items-start justify-between mb-10 relative z-10">
                <div className="w-[56px] h-[56px] rounded-[16px] bg-gradient-to-br from-[#6B5FFF] to-[#1D2CF3] flex items-center justify-center text-white shadow-lg shadow-[#6B5FFF]/30 group-hover:shadow-[#6B5FFF]/60 transition-all duration-300 group-hover:scale-110">
                  {step.icon}
                </div>
                <p className="font-['Poppins',sans-serif] font-medium text-[11px] tracking-[0.05em] uppercase text-[#6B5FFF] group-hover:text-[#8B7FFF] transition-colors">
                  {step.day}
                </p>
              </div>

              {/* Content */}
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[20px] text-white leading-[1.3] mb-4 tracking-tight relative z-10 group-hover:text-[#E0DDFF] transition-colors">
                {step.title}
              </h3>

              <p className="font-['Poppins',sans-serif] font-normal text-[15px] text-white/60 leading-[1.6] relative z-10 group-hover:text-white/70 transition-colors">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  const outcomes = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "More visitors turning into booked calls."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Visitors understand your offer in 5 seconds."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Track what converts so you can double down."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Remove the confusion that kills sales."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "A message that speaks directly to your ideal buyer."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Rock-solid infrastructure that never crashes."
    }
  ];

  return (
    <section
      className="bg-black w-full py-28 sm:py-28 lg:py-35 px-4 sm:px-6 relative overflow-hidden border-t border-white/[0.03] sm:border-t-0"
      aria-labelledby="outcomes-heading"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-[#6B5FFF]/25 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-gradient-radial from-[#1D2CF3]/20 to-transparent blur-3xl" />
      </div>

      <div className="max-w-[1300px] mx-auto relative">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-20">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-[20px] px-6 py-2 border border-white/10 mb-8 relative mt-20 mb-6 sm:mt-8">
            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6B5FFF] to-transparent" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-[#6B5FFF]/25 via-[#6B5FFF]/10 to-transparent blur-lg" aria-hidden="true" />

            <p className="font-['Poppins',sans-serif] font-semibold text-[11px] tracking-[0.2em] uppercase text-white/60 relative z-10">
              EXPECTED RESULTS
            </p>
          </div>

          <h2
            id="outcomes-heading"
            className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[clamp(36px,5.5vw,64px)] text-white leading-[1.15] mb-6 tracking-tight"
          >
            What your business gains.
          </h2>

          <p className="font-['Poppins',sans-serif] font-medium text-[clamp(16px,1.8vw,18px)] text-white/70 leading-[1.7] max-w-[700px] mx-auto">
            We focus on the metrics that actually matter to your bottom line.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/8 to-white/[0.02] backdrop-blur-lg rounded-[30px] p-8 border border-white/10 hover:border-[#6B5FFF]/40 shadow-xl transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden cursor-pointer"
            >
              {/* Bottom glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6B5FFF] to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[#6B5FFF]/20 via-[#6B5FFF]/5 to-transparent blur-xl group-hover:from-[#6B5FFF]/30 transition-colors duration-300" aria-hidden="true" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-[18px] bg-gradient-to-br from-[#6B5FFF] to-[#1D2CF3] flex items-center justify-center shadow-lg shadow-[#6B5FFF]/30 group-hover:shadow-[#6B5FFF]/60 text-white mb-6 transition-all duration-300 group-hover:scale-110 relative z-10">
                {outcome.icon}
              </div>

              {/* Content */}
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[clamp(18px,2vw,20px)] text-white leading-[1.3] tracking-tight relative z-10 group-hover:text-[#E0DDFF] transition-colors">
                {outcome.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const packages = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      price: "$500",
      title: "Validating a New Offer Fast",
      features: [
        "Strategy & discovery session",
        "Conversion copywriting",
        "Mobile-optimized design",
        "Unlimited revisions",
        "Analytics setup",
        "48-hour response time"
      ],
      featured: false
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      price: "$800",
      title: "Scaling Existing Sales and Leads",
      badge: "3 SPOTS LEFT THIS MONTH",
      features: [
        "Strategy & discovery session",
        "Up to 5-10 pages",
        "Conversion copywriting",
        "Development (Framer, Next.js, Shopify)",
        "Mobile-optimized & fast loading",
        "48-hour response time"
      ],
      featured: true
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      price: "Custom",
      title: "Ready to 10x Your Digital Revenue",
      features: [
        "Full funnel engineering",
        "Strategic consulting",
        "Priority support",
        "Market-leading scale"
      ],
      featured: false
    }
  ];

  return (
    <section
      className="bg-white/[0.015] sm:bg-black w-full py-28 sm:py-28 lg:py-35 px-4 sm:px-6 relative overflow-hidden border-t border-white/[0.03] sm:border-t-0"
      aria-labelledby="pricing-heading"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#6B5FFF]/25 to-transparent blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-20">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-[20px] px-6 py-2 border border-white/10 mb-8 relative mt-20 mb-4 sm:mt-8">
            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6B5FFF] to-transparent" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-[#6B5FFF]/25 via-[#6B5FFF]/10 to-transparent blur-lg" aria-hidden="true" />

            <p className="font-['Poppins',sans-serif] font-semibold text-[11px] tracking-[0.2em] uppercase text-white/60 relative z-10">
              FOCUSED EXECUTION
            </p>
          </div>

          <h2
            id="pricing-heading"
            className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[clamp(36px,5.5vw,64px)] text-white leading-[1.15] mb-6 tracking-tight"
          >
            Clear paths to growth.
          </h2>

          <p className="font-['Poppins',sans-serif] font-medium text-[clamp(16px,1.8vw,18px)] text-white/70 leading-[1.7] max-w-[800px] mx-auto mb-4">
            We only take on 2 new projects per month to stay focused on your results. Every project is founder-led.
          </p>

          <p className="font-['Poppins',sans-serif] font-semibold text-[clamp(15px,1.6vw,17px)] text-white/90 leading-[1.6] max-w-[700px] mx-auto">
            Most clients make back their investment within their first few conversions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-6 mb-10 sm:mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br backdrop-blur-lg rounded-[40px] p-8 sm:p-10 shadow-xl transition-all duration-300 hover:scale-[1.02] group overflow-visible ${pkg.featured
                ? 'from-white/12 to-white/[0.04] border-2 border-[#6B5FFF]/50 hover:border-[#6B5FFF]/70'
                : 'from-white/8 to-white/[0.02] border border-white/10 hover:border-white/20'
                }`}
            >
              {/* Bottom glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6B5FFF] to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[#6B5FFF]/20 via-[#6B5FFF]/5 to-transparent blur-xl" aria-hidden="true" />

              {/* Badge for featured */}
              {pkg.badge && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-[#6B5FFF] to-[#1D2CF3] rounded-[20px] px-4 py-1.5 shadow-lg shadow-[#6B5FFF]/40">
                    <p className="font-['Poppins',sans-serif] font-semibold text-[10px] tracking-[0.12em] uppercase text-white">
                      {pkg.badge}
                    </p>
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-[#6B5FFF] to-[#1D2CF3] flex items-center justify-center shadow-lg shadow-[#6B5FFF]/30 text-white mb-6 group-hover:shadow-[#6B5FFF]/50 transition-shadow relative z-10">
                {pkg.icon}
              </div>

              {/* Price */}
              <div className="mb-4 relative z-10">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[clamp(42px,5vw,56px)] text-white leading-[1.1] tracking-tight">
                  {pkg.price}
                </h3>
              </div>

              {/* Title */}
              <div className="inline-block bg-white/5 backdrop-blur-sm rounded-[20px] px-6 py-2 border border-white/10 mb-8 relative mt-12 sm:mt-8">
                {/* Bottom glow effect */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6B5FFF] to-transparent" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-[#6B5FFF]/25 via-[#6B5FFF]/10 to-transparent blur-lg" aria-hidden="true" />

                <p className="font-['Poppins',sans-serif] font-semibold text-[11px] tracking-[0.2em] uppercase text-white/60 relative z-10">
                  {pkg.title}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 relative z-10">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#6B5FFF] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-['Poppins',sans-serif] font-medium text-[15px] text-white/80 leading-[1.5]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="max-w-[900px] mx-auto">
          <div className="bg-gradient-to-br from-[#6B5FFF]/15 to-[#1D2CF3]/10 backdrop-blur-lg rounded-[40px] p-10 sm:p-12 border border-[#6B5FFF]/30 shadow-2xl relative overflow-hidden">
            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6B5FFF] to-transparent" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-[#6B5FFF]/30 via-[#6B5FFF]/10 to-transparent blur-xl" aria-hidden="true" />

            {/* Shield icon */}
            <div className="absolute top-8 right-8 opacity-10" aria-hidden="true">
              <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <div className="relative z-10 text-center">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[clamp(28px,4vw,36px)] text-white leading-[1.2] mb-6 tracking-tight">
                Our Guarantee
              </h3>

              <p className="font-['Poppins',sans-serif] font-medium text-[clamp(16px,1.8vw,18px)] text-white/80 leading-[1.7] mb-6">
                If your new site doesn't show measurable growth within 90 days, we'll continue optimizing it for free until it does. We only win when you win.
              </p>

              <p className="font-['Poppins',sans-serif] font-medium text-[12px] text-white/50 leading-[1.6] tracking-[0.02em] uppercase">
                * Measurable growth = more leads or sales tracked via analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function HomePage() {
  return (
    <>
      <ProblemSection />
      <RealitySection />
      <RoadmapSection />
      <OutcomesSection />
      <PricingSection />
      <TechStackSection />
      <FAQSection />
      <BookingSection />
      <FinalCTASection />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      {/* Global styles and fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Poppins:wght@500;600&display=swap" rel="stylesheet" />

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
        
        /* Better focus visibility */
        *:focus-visible {
          outline: 2px solid white;
          outline-offset: 4px;
        }
      `}</style>

      <SkipLink />

      <div className="bg-black content-stretch flex flex-col items-center relative min-h-screen w-full overflow-hidden antialiased">
        <GradientBackground />
        <FloatingParticles />
        <AnimatedGradientOrbs />
        <GridPattern />
        <Navigation />

        <Routes>
          <Route path="/" element={
            <>
              <main
                id="main-content"
                className="content-stretch flex flex-col items-center justify-center flex-1 relative w-full z-10 px-4 sm:px-6"
                role="main"
              >
                <Header />
              </main>
              <HomePage />
            </>
          } />
          <Route path="/our-work" element={<OurWork />} />
        </Routes>
      </div>
    </>
  );
}