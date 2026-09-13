import React from "react";

export default function LuxuryBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Deep Atmospheric Radial Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#C8A34A]/10 rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] bg-[#C8A34A]/8 rounded-full blur-[160px]" />
      <div className="absolute -bottom-40 left-1/3 w-[700px] h-[700px] bg-[#091e18] rounded-full blur-[120px]" />

      {/* 2. Flowing Golden Waves & Curve Geometry */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M-100,200 C300,50 600,350 1100,100 C1300,0 1500,80 1600,120"
          fill="none"
          stroke="url(#goldGradient1)"
          strokeWidth="1.2"
        />
        <path
          d="M-50,260 C350,110 650,400 1150,160 C1350,60 1480,130 1600,170"
          fill="none"
          stroke="url(#goldGradient1)"
          strokeWidth="0.8"
          strokeDasharray="4 8"
        />
        <path
          d="M-100,750 C400,600 800,880 1200,680 C1400,580 1550,720 1650,700"
          fill="none"
          stroke="url(#goldGradient2)"
          strokeWidth="1.2"
        />
        <path
          d="M-50,810 C450,660 850,940 1250,740 C1430,640 1520,760 1650,750"
          fill="none"
          stroke="url(#goldGradient2)"
          strokeWidth="0.6"
        />
        <defs>
          <linearGradient id="goldGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C8A34A" stopOpacity="0" />
            <stop offset="40%" stopColor="#dfb975" stopOpacity="0.8" />
            <stop offset="80%" stopColor="#C8A34A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C8A34A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C8A34A" stopOpacity="0" />
            <stop offset="50%" stopColor="#C8A34A" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C8A34A" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* 3. Luxury Palm Fronds / Foliage Outlines (Top Left & Top Right) */}
      <svg
        className="absolute top-0 left-0 w-80 sm:w-96 h-80 sm:h-96 opacity-15 text-[#C8A34A] -translate-x-12 -translate-y-12 rotate-12"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20,180 Q100,90 190,20 M100,90 Q120,40 150,30 M100,90 Q70,50 60,20 M120,110 Q160,80 175,60 M80,120 Q50,90 30,70 M140,130 Q170,115 190,105 M60,140 Q30,130 15,115"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <svg
        className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 opacity-15 text-[#C8A34A] translate-x-12 -translate-y-12 -scale-x-100 -rotate-12"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20,180 Q100,90 190,20 M100,90 Q120,40 150,30 M100,90 Q70,50 60,20 M120,110 Q160,80 175,60 M80,120 Q50,90 30,70 M140,130 Q170,115 190,105 M60,140 Q30,130 15,115"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* 4. Foliage Silhouettes on Bottom Flanks */}
      <svg
        className="absolute bottom-0 right-0 w-96 h-96 opacity-10 text-[#C8A34A] translate-x-16 translate-y-16 rotate-45"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10,190 Q90,100 190,10 M90,100 Q130,60 170,40 M90,100 Q60,60 40,30 M110,120 Q160,95 185,80 M70,130 Q40,110 20,90"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* 5. Gold Dust Floating Particles */}
      <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-[#C8A34A] rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#dfb975] rounded-full opacity-40 animate-pulse delay-700" />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#C8A34A] rounded-full opacity-50 animate-pulse delay-1000" />
      <div className="absolute bottom-1/3 right-1/6 w-1 h-1 bg-[#dfb975] rounded-full opacity-60 animate-pulse delay-500" />
    </div>
  );
}