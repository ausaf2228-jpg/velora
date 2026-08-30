import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Compass, 
  Users, 
  Building2, 
  Sparkles, 
  MessageSquare,
  Globe2,
  CheckCircle2,
  MapPin
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/971503784656?text=Hello%20Velora%20Heights,%20I%20would%20like%20to%20know%20more%20about%20your%20advisory%20services.";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#051411] text-slate-100 font-sans selection:bg-[#c8a45c] selection:text-[#051411] pb-24">
      {/* Top Header */}
      <div className="border-b border-[#c8a45c]/20 bg-[#030d0b] px-6 lg:px-12 py-4 flex items-center justify-between sticky top-0 z-40 backdrop-blur-md">
        <Link href="/" className="inline-flex items-center space-x-2 text-xs text-[#dfb975] hover:text-[#f7e7ce] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#c8a45c]">About Velora Heights</span>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 lg:px-16 py-20 lg:py-28 max-w-7xl mx-auto border-b border-[#c8a45c]/15">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#0a221d]/80 border border-[#c8a45c]/30 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a45c]" />
            <span className="text-xs text-[#f7e7ce] tracking-wide font-light">Bespoke Real Estate Advisory</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif text-slate-100 leading-[1.15]">
            Curating Dubai's finest assets with <span className="gold-gradient-text italic font-normal">institutional rigor.</span>
          </h1>
          <p className="text-sm lg:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
            Velora Heights bridges high-net-worth global investors and Dubai’s premier developers. We deliver objective market intelligence, off-market allocation, and end-to-end transaction security.
          </p>
        </div>
      </section>

      {/* Metric Highlights */}
      <section className="border-b border-[#c8a45c]/15 bg-[#071c18]/60">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#c8a45c]/15 text-center">
          {[
            { label: "Client Capital Guided", value: "$450M+" },
            { label: "Prime Master Developers", value: "Tier 1 Only" },
            { label: "Golden Visa Consultations", value: "100% Success" },
            { label: "Investor Global Reach", value: "32+ Countries" }
          ].map((stat, i) => (
            <div key={i} className="p-8 space-y-1">
              <span className="font-serif text-2xl lg:text-3xl font-bold text-[#f7e7ce]">{stat.value}</span>
              <p className="text-[11px] uppercase tracking-wider text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Mission & Strategic Pillars */}
      <section className="px-6 lg:px-16 py-20 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a45c]">Our Philosophy</p>
              <h2 className="text-3xl lg:text-4xl font-serif text-slate-100">
                Beyond Brokerage. <br />
                <span className="gold-gradient-text">Fiduciary Advisory.</span>
              </h2>
            </div>
            <p className="text-xs lg:text-sm text-slate-300 font-light leading-relaxed">
              In a dynamic and fast-paced market like Dubai, typical real estate agency models prioritize transactional speed over portfolio resilience. Velora Heights was built on an investment-first ethos.
            </p>
            <p className="text-xs lg:text-sm text-slate-300 font-light leading-relaxed">
              We evaluate every villa, penthouse, and off-plan allocation through yield durability, developer credit risk, handover timelines, and long-term liquidity pathways before presenting opportunities to our private clients.
            </p>
            <div className="space-y-3 pt-2">
              {[
                "Independent due diligence on master developments",
                "Direct first-tier access to off-market inventory and launches",
                "Complete conveyancing, DLD escrow verification, and RERA compliance",
                "Integrated sister luxury tourism & lifestyle discovery arm"
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#c8a45c] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 font-light">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-sm overflow-hidden border border-[#c8a45c]/30 aspect-[4/3] bg-[#0a221d]">
            <img 
              src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200" 
              alt="Velora Heights Advisory" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051411] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-[#051411]/90 border border-[#c8a45c]/30 backdrop-blur-md">
              <span className="text-[10px] uppercase tracking-widest text-[#c8a45c] block mb-1">Headquarters</span>
              <span className="text-xs text-slate-200 font-medium">The Opus by Omniyat, Business Bay, Dubai, UAE</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          {[
            {
              icon: TrendingUp,
              title: "Data Analytics",
              desc: "Granular yield projections, square foot historical price trends, and infrastructure-linked appreciation vectors."
            },
            {
              icon: ShieldCheck,
              title: "Legal & RERA Clarity",
              desc: "Direct verification of escrow accounts, developer track records, and DLD regulatory documentation."
            },
            {
              icon: Globe2,
              title: "Golden Visa Protocol",
              desc: "Full assistance securing 10-year UAE residency status for qualifying real estate acquisitions."
            },
            {
              icon: Compass,
              title: "Lifestyle & Tourism",
              desc: "Seamless VIP property inspection tours, private chauffeur transport, and curated luxury stays."
            }
          ].map((pillar, i) => (
            <div 
              key={i} 
              className="bg-[#0a221d]/40 border border-[#c8a45c]/20 p-8 rounded-sm hover:border-[#c8a45c]/60 transition-all duration-300 group"
            >
              <div className="w-12 h-12 border border-[#c8a45c]/30 bg-[#051411] flex items-center justify-center mb-6 group-hover:border-[#c8a45c] transition-colors">
                <pillar.icon className="w-5 h-5 text-[#c8a45c]" />
              </div>
              <h3 className="font-serif text-base text-slate-100 mb-2.5 group-hover:text-[#f7e7ce] transition-colors">{pillar.title}</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory CTA Section */}
      <section className="px-6 lg:px-16 py-12 max-w-7xl mx-auto">
        <div className="bg-[#0a221d] border border-[#c8a45c]/40 p-8 lg:p-12 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_4px_30px_rgba(200,164,92,0.1)]">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-2xl font-serif text-slate-100">Schedule a Private Strategy Session</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Whether you are acquiring a family estate on Palm Jumeirah or building an off-plan portfolio, speak directly with a senior partner.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient-bg text-[#051411] font-semibold px-8 py-4 rounded-sm hover:brightness-110 transition-all text-xs tracking-widest uppercase flex items-center space-x-2 shrink-0 shadow-[0_4px_25px_rgba(200,164,92,0.25)]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}