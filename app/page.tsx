import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LuxuryBackground from "@/components/LuxuryBackground";

export default function RootLandingPage() {
  return (
    <main className="relative min-h-screen bg-[#0D2B22] text-[#f4efe6] font-sans selection:bg-[#C8A34A] selection:text-[#0D2B22] flex flex-col justify-between p-4 sm:p-6 lg:p-8 overflow-x-hidden">
      {/* Dynamic Gold Backdrop */}
      <LuxuryBackground />

      {/* Top Header Information */}
      <div className="relative z-10 flex justify-between items-center text-[9px] sm:text-[11px] tracking-[0.25em] text-slate-400 uppercase font-light border-b border-[#C8A34A]/20 pb-3">
        <div className="space-x-2">
          <span>PEOPLE</span>
          <span className="text-[#C8A34A]/60">|</span>
          <span>PLACES</span>
          <span className="text-[#C8A34A]/60">|</span>
          <span>POSSIBILITIES</span>
        </div>
        <div className="tracking-[0.25em] text-[#C8A34A]">
          DUBAI, UAE
        </div>
      </div>

      {/* Center Branding / Logo */}
      <div className="relative z-10 text-center space-y-2 py-4 my-auto flex flex-col items-center">
        <img
          src="/logom.png"
          alt="Velora Heights Logo"
          className="h-24 sm:h-32 md:h-40 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
        />
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#f7e7ce] font-medium pt-1 drop-shadow-sm">
          Two Experiences. A Brighter Tomorrow.
        </p>
        <div className="flex items-center justify-center gap-3 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-slate-300 font-light pt-1">
          <span>Invest</span>
          <span className="text-[#C8A34A]/60">|</span>
          <span>Explore</span>
          <span className="text-[#C8A34A]/60">|</span>
          <span>Experience</span>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        {/* Real Estate Card */}
        <div className="relative rounded-sm overflow-hidden border border-[#C8A34A]/40 shadow-[0_10px_40px_rgba(0,0,0,0.6)] group transition-all duration-500 hover:border-[#C8A34A] flex flex-col justify-end aspect-[16/11] bg-[#091e18]">
          <img
            src="/real-estate-card.png"
            alt="Velora Heights Real Estate"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B22]/90 via-transparent to-transparent" />

          <div className="relative z-10 p-6 sm:p-8">
            <Link
              href="/real-estate"
              className="inline-flex items-center gap-3 bg-[#0D2B22]/90 hover:bg-[#C8A34A] text-[#f7e7ce] hover:text-[#0D2B22] border border-[#C8A34A]/70 hover:border-[#C8A34A] px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl backdrop-blur-sm cursor-pointer"
            >
              <span>Enter Real Estate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Tourism Card */}
        <div className="relative rounded-sm overflow-hidden border border-[#C8A34A]/40 shadow-[0_10px_40px_rgba(0,0,0,0.6)] group transition-all duration-500 hover:border-[#C8A34A] flex flex-col justify-end aspect-[16/11] bg-[#091e18]">
          <img
            src="/tourism-card.png"
            alt="Velora Heights Tourism"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B22]/90 via-transparent to-transparent" />

          <div className="relative z-10 p-6 sm:p-8">
            <Link
              href="/tourism"
              className="inline-flex items-center gap-3 bg-[#0D2B22]/90 hover:bg-[#C8A34A] text-[#f7e7ce] hover:text-[#0D2B22] border border-[#C8A34A]/70 hover:border-[#C8A34A] px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl backdrop-blur-sm cursor-pointer"
            >
              <span>Enter Tourism</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Branding Bar */}
      <div className="relative z-10 pt-6 my-auto text-center space-y-3">
        <p className="font-serif italic text-xs sm:text-sm text-[#C8A34A] tracking-widest drop-shadow-sm">
          More than destinations. A higher perspective.
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-[9px] sm:text-[10px] tracking-[0.25em] text-slate-400 uppercase pt-3 border-t border-[#C8A34A]/20">
          <div className="space-x-2">
            <span>DUBAI</span>
            <span className="text-[#C8A34A]/60">|</span>
            <span>ABU DHABI</span>
            <span className="text-[#C8A34A]/60">|</span>
            <span>BEYOND</span>
          </div>
          <div>
            <span>EXPERIENCE A BRIGHTER TOMORROW</span>
          </div>
        </div>
      </div>
    </main>
  );
}