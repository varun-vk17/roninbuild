import svgPaths from "./svg-j5pvkaq6wj";

function Ronin() {
  return (
    <div className="h-[28px] relative shrink-0 w-[78px]" data-name="Ronin 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 28">
        <g id="Ronin 1">
          <path d={svgPaths.p2e3cc40} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.pbfbd400} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-center justify-center leading-[0] relative shrink-0 text-center w-full">
      <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[80px] text-white w-[1200px]">
        <p className="mb-0">{`Websites built to `}</p>
        <p>produce revenue.</p>
      </div>
      <div className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.8)] w-[1200px]">
        <p className="mb-0">{`We help businesses make more revenue by designing websites `}</p>
        <p>that support how people actually buy.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-[50px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[inherit]">
        <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center w-[104px]">Get Started</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-center justify-center relative shrink-0 w-[1300px]">
      <Frame3 />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[130px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[961px] items-center overflow-clip px-[24px] py-[15px] relative rounded-[50px] shrink-0 w-[1200px]">
        <Ronin />
        <div className="bg-white relative rounded-[50px] shrink-0">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[inherit]">
            <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center w-[104px]">Get Started</p>
          </div>
          <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[50px]" />
        </div>
      </div>
      <Frame />
    </div>
  );
}

function Hero() {
  return (
    <div className="h-[700px] relative shrink-0 w-full" data-name="hero">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center p-[10px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-0 py-[19px] relative shrink-0 w-full" data-name="main">
      <Hero />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[10px] items-center relative size-full" data-name="desktop">
      <div className="absolute h-[513px] left-[-207px] top-[-327px] w-[1755px]">
        <div className="absolute inset-[-19.49%_-5.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1955 713">
            <g filter="url(#filter0_nf_2_7)" id="Ellipse 1">
              <ellipse cx="977.5" cy="356.5" fill="url(#paint0_linear_2_7)" rx="877.5" ry="256.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="713" id="filter0_nf_2_7" width="1955" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feTurbulence baseFrequency="1 1" numOctaves="3" result="noise" seed="4600" stitchTiles="stitch" type="fractalNoise" />
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
                <stop stopColor="#1D2CF3" />
                <stop offset="0.980769" stopColor="#111A8D" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Main />
    </div>
  );
}