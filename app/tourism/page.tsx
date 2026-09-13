"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Plane,
  Building2,
  Landmark,
  TrendingUp,
  Clock,
  Eye,
  BarChart3,
  Users,
  Hotel,
  Coffee,
  Car,
  Headphones,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  X,
  User,
  ShieldCheck,
  Building,
  ChevronRight,
  Compass,
  Award,
  Handshake,
} from "lucide-react";
import LuxuryBackground from "@/components/LuxuryBackground";

export default function TourismPage() {
  const [activeTab, setActiveTab] = useState<"home" | "itinerary" | "investor" | "about" | "contact">("home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    country: "United Kingdom",
    intent: "Luxury Villa / Penthouse",
    budget: "£500k - £1M",
    date: "",
    message: "",
  });

  const navigateTo = (tab: "home" | "itinerary" | "investor" | "about" | "contact") => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*New Tourism & Investment Enquiry*\nName: ${formData.fullName}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nCountry: ${formData.country}\nLooking for: ${formData.intent}\nBudget: ${formData.budget}\nDate: ${formData.date}\nNote: ${formData.message}`;
    window.open(`https://wa.me/971503784656?text=${encodeURIComponent(msg)}`, "_blank");
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#0D2B22] text-[#F1F5F9] font-sans antialiased selection:bg-[#C8A34A] selection:text-[#0D2B22]">
      {/* Background layer */}
      <LuxuryBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* ================= TOP UTILITY BAR ================= */}
        <div className="bg-[#061813] border-b border-[#C8A34A]/25 py-2.5 px-4 sm:px-8 lg:px-14 text-xs text-slate-300 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-[11px] text-[#E5C578] hover:text-[#FFF] font-semibold uppercase tracking-wider">
              ← Switch Experience
            </Link>
            <span className="tracking-widest uppercase text-[10px] text-[#C8A34A] border-l border-[#C8A34A]/30 pl-4 hidden sm:inline">
              Dubai Premier Investor Tourism & Lifestyle
            </span>
          </div>
          <div className="flex items-center space-x-6 text-[11px]">
            <span className="flex items-center gap-1.5 text-slate-200 hidden md:flex">
              <MapPin className="w-3.5 h-3.5 text-[#C8A34A]" /> The Opus, Business Bay, Dubai
            </span>
            <a 
              href="tel:+971503784656" 
              className="flex items-center gap-1.5 text-[#F7E7CE] hover:text-[#C8A34A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A34A]" />
              <span>+971 50 378 4656</span>
            </a>
          </div>
        </div>

        {/* ================= UNIVERSAL TOP HEADER ================= */}
        <header className="border-b border-[#C8A34A]/25 bg-[#061813]/95 sticky top-0 z-40 backdrop-blur-md px-4 sm:px-8 lg:px-14 py-3">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center justify-between gap-4">
              <button onClick={() => navigateTo("home")} className="flex items-center cursor-pointer">
                <img 
                  src="/logot.png" 
                  alt="Velora Heights Tourism" 
                  className="h-10 sm:h-12 w-auto object-contain brightness-110"
                />
              </button>

              <div className="flex items-center gap-2">
                <Link
                  href="/real-estate"
                  className="gold-gradient-bg text-[#0D2B22] font-bold px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-sm text-[11px] sm:text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <Building className="w-3.5 h-3.5" />
                  <span>Real Estate</span>
                </Link>
                <a
                  href="https://wa.me/971503784656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex border border-[#C8A34A]/70 text-[#F7E7CE] bg-[#061813] hover:bg-[#C8A34A] hover:text-[#0D2B22] text-xs px-3.5 py-2.5 rounded-sm transition-all items-center gap-1.5 font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#E5C578]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <nav className="hidden sm:flex items-center gap-5 sm:gap-7 text-xs tracking-wider uppercase overflow-x-auto pb-1 sm:pb-0 scrollbar-none font-bold">
              {(["home", "itinerary", "investor", "about", "contact"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => navigateTo(tab)}
                  className={`whitespace-nowrap pb-1 transition-all cursor-pointer ${
                    activeTab === tab
                      ? "text-[#E5C578] border-b-2 border-[#C8A34A]"
                      : "text-slate-300 hover:text-[#FFF]"
                  }`}
                >
                  {tab === "home" ? "Home" : tab === "investor" ? "Investor Experience" : tab === "about" ? "About Dubai" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* ================= TAB 1: HOME ================= */}
        {activeTab === "home" && (
          <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-8 sm:py-12 space-y-12 sm:space-y-16 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4 sm:space-y-5">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFF] leading-[1.15]">
                  Experience Dubai <br />
                  <span className="italic font-normal text-[#E5C578]">before you invest.</span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  A curated 4-day journey combining Dubai highlights, Abu Dhabi discovery, and a private real estate investment day.
                </p>
                <div className="flex items-center gap-2 text-xs text-[#E5C578] font-bold">
                  <span>🇬🇧</span>
                  <span className="uppercase tracking-widest text-[11px]">Exclusively for UK Investors</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => navigateTo("itinerary")}
                    className="gold-gradient-bg text-[#0D2B22] font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-sm flex items-center gap-2 hover:brightness-110 transition-all cursor-pointer shadow-lg"
                  >
                    <span>View 4-Day Experience</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="https://wa.me/971503784656"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#C8A34A]/80 text-[#F7E7CE] bg-[#061813]/80 hover:bg-[#C8A34A] hover:text-[#0D2B22] text-xs font-semibold px-4 py-3 rounded-sm transition-all flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4 text-[#E5C578]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-7 relative rounded-lg overflow-hidden border border-[#C8A34A]/40 shadow-2xl bg-[#061813]">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop"
                  alt="Dubai Luxury Tourism"
                  className="w-full h-[260px] sm:h-[350px] lg:h-[380px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09211A] via-transparent to-transparent opacity-80" />
              </div>
            </div>

            {/* Direct Section Link Cards */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#C8A34A]/30 pb-2">
                <h2 className="font-serif text-lg sm:text-xl text-[#FFF] font-medium">Explore Experience Sections</h2>
                <span className="text-[11px] uppercase tracking-widest text-[#E5C578] font-bold">Direct Links</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { tab: "itinerary", icon: Compass, title: "4-Day Itinerary", desc: "Complete day-by-day tour" },
                  { tab: "investor", icon: TrendingUp, title: "Investor Experience", desc: "UK advisory & tax guidance" },
                  { tab: "about", icon: Award, title: "About Dubai", desc: "0% tax & Golden Visa info" },
                  { tab: "contact", icon: Phone, title: "Contact & Enquiry", desc: "WhatsApp & VIP desk" }
                ].map((item) => (
                  <button
                    key={item.tab}
                    onClick={() => navigateTo(item.tab as any)}
                    className="bg-[#09211A] border border-[#C8A34A]/40 hover:border-[#E5C578] p-4 rounded-sm flex items-center justify-between text-left transition-all group cursor-pointer shadow-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#061813] border border-[#C8A34A] flex items-center justify-center text-[#E5C578] group-hover:scale-105 transition-transform shrink-0 shadow-md">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-[#F7E7CE] uppercase tracking-wider group-hover:text-[#FFF]">{item.title}</h3>
                        <p className="text-[11px] text-slate-300 font-normal">{item.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#E5C578] group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>

            {/* ================= WHY UK INVESTORS CHOOSE THIS EXPERIENCE ================= */}
            <div className="space-y-10 text-center pt-10 border-t border-[#C8A34A]/25">
              <div className="space-y-1">
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F7E7CE] font-normal leading-tight">
                  Why UK Investors
                </h2>
                <p className="font-serif italic text-3xl sm:text-4xl text-[#E5C578] font-normal">
                  Choose This Experience
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto pt-4">
                {/* 1. Experience Dubai First-Hand */}
                <div className="flex flex-col items-center space-y-4 group">
                  <div className="w-16 h-16 rounded-full border border-[#C8A34A] bg-[#0D2B22] flex items-center justify-center text-[#E5C578] shadow-[0_0_15px_rgba(200,163,74,0.15)] group-hover:scale-105 group-hover:border-[#E5C578] transition-all">
                    <Plane className="w-7 h-7 -rotate-45" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium text-[#F7E7CE]">Experience Dubai</p>
                    <p className="text-sm font-medium text-[#F7E7CE]">First-Hand</p>
                  </div>
                </div>

                {/* 2. Explore Opportunities in Person */}
                <div className="flex flex-col items-center space-y-4 group">
                  <div className="w-16 h-16 rounded-full border border-[#C8A34A] bg-[#0D2B22] flex items-center justify-center text-[#E5C578] shadow-[0_0_15px_rgba(200,163,74,0.15)] group-hover:scale-105 group-hover:border-[#E5C578] transition-all">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium text-[#F7E7CE]">Explore Opportunities</p>
                    <p className="text-sm font-medium text-[#F7E7CE]">in Person</p>
                  </div>
                </div>

                {/* 3. Understand the Market */}
                <div className="flex flex-col items-center space-y-4 group">
                  <div className="w-16 h-16 rounded-full border border-[#C8A34A] bg-[#0D2B22] flex items-center justify-center text-[#E5C578] shadow-[0_0_15px_rgba(200,163,74,0.15)] group-hover:scale-105 group-hover:border-[#E5C578] transition-all">
                    <BarChart3 className="w-7 h-7" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium text-[#F7E7CE]">Understand</p>
                    <p className="text-sm font-medium text-[#F7E7CE]">the Market</p>
                  </div>
                </div>

                {/* 4. Private Investment Guidance */}
                <div className="flex flex-col items-center space-y-4 group">
                  <div className="w-16 h-16 rounded-full border border-[#C8A34A] bg-[#0D2B22] flex items-center justify-center text-[#E5C578] shadow-[0_0_15px_rgba(200,163,74,0.15)] group-hover:scale-105 group-hover:border-[#E5C578] transition-all">
                    <User className="w-7 h-7" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium text-[#F7E7CE]">Private Investment</p>
                    <p className="text-sm font-medium text-[#F7E7CE]">Guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}

        {/* ================= TAB 2: ITINERARY ================= */}
        {activeTab === "itinerary" && (
          <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-8 sm:py-10 space-y-8 w-full">
            <div>
              <button
                onClick={() => navigateTo("home")}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D2B22] gold-gradient-bg px-4 py-2 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-md"
              >
                <ArrowLeft className="w-4 h-4 text-[#0D2B22]" />
                <span>Back to Tourism Overview</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#C8A34A]/25 pb-4">
              <div className="space-y-1">
                <h1 className="font-serif text-3xl sm:text-4xl text-[#FFF]">4-Day Itinerary</h1>
                <p className="text-xs text-[#E5C578] font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <span>🇬🇧</span> Exclusively for UK Investors
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { day: "DAY 1", icon: Plane, title: "Arrival in Dubai", items: ["Airport VIP pickup", "Hotel check-in", "Evening welcome dinner"] },
                { day: "DAY 2", icon: Landmark, title: "Dubai City Tour", items: ["Burj Khalifa observation", "Dubai Mall", "Dubai Marina & JBR", "Palm Jumeirah tour"] },
                { day: "DAY 3", icon: Building2, title: "Abu Dhabi Tour", items: ["Sheikh Zayed Grand Mosque", "Yas Island highlights", "Scenic coastline drive", "Emirates Palace"] },
                { day: "DAY 4", icon: TrendingUp, title: "Investment Day", items: ["Off-plan portfolio presentation", "Direct developer meetings", "1-to-1 tax structuring advice", "VIP unit reservation"] }
              ].map((dayItem, idx) => (
                <div key={idx} className="bg-[#09211A] border border-[#C8A34A]/40 p-6 rounded-sm space-y-3 shadow-xl">
                  <div className="w-10 h-10 rounded-full border border-[#C8A34A] bg-[#061813] flex items-center justify-center text-[#E5C578]">
                    <dayItem.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#E5C578] tracking-widest uppercase font-bold">{dayItem.day}</span>
                    <h3 className="font-serif text-base text-[#F7E7CE] font-semibold">{dayItem.title}</h3>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-[#C8A34A]/20 font-normal">
                    {dayItem.items.map((pt, pIdx) => (
                      <li key={pIdx}>• {pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Inclusions */}
            <div className="pt-6 border-t border-[#C8A34A]/25 space-y-6">
              <h2 className="text-center font-serif text-lg text-[#E5C578] font-semibold">What's Included in Your Package</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Hotel, title: "Luxury Stay 4*/5* Hotels" },
                  { icon: Coffee, title: "Daily Breakfast Included" },
                  { icon: Car, title: "Premium Chauffeur Transport" },
                  { icon: Headphones, title: "Dedicated Advisory Concierge" }
                ].map((inc, i) => (
                  <div key={i} className="flex flex-col items-center text-center space-y-2 bg-[#09211A] border border-[#C8A34A]/30 p-4 rounded-sm shadow-md">
                    <div className="w-10 h-10 rounded-full border border-[#C8A34A] bg-[#061813] flex items-center justify-center text-[#E5C578]">
                      <inc.icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-[#F7E7CE]">{inc.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="gold-gradient-bg text-[#0D2B22] font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-xl"
              >
                Book Your 4-Day Journey
              </button>
            </div>
          </main>
        )}

        {/* ================= TAB 3: INVESTOR EXPERIENCE ================= */}
        {activeTab === "investor" && (
          <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-8 sm:py-10 space-y-8 w-full">
            <div>
              <button
                onClick={() => navigateTo("home")}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D2B22] gold-gradient-bg px-4 py-2 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-md"
              >
                <ArrowLeft className="w-4 h-4 text-[#0D2B22]" />
                <span>Back to Tourism Overview</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFF] leading-tight">
                  A Smarter Way for <br />
                  <span className="text-[#E5C578]">UK Investors to Invest in Dubai</span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  We combine luxury hospitality with private real estate expertise to give UK investors clarity, confidence, and high-yield opportunities.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="gold-gradient-bg text-[#0D2B22] font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-sm flex items-center gap-2 hover:brightness-110 transition-all cursor-pointer shadow-lg"
                >
                  <span>Discover Opportunities</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="lg:col-span-6 rounded-lg overflow-hidden border border-[#C8A34A]/40 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1600&auto=format&fit=crop"
                  alt="Dubai Skyline"
                  className="w-full h-[280px] sm:h-[320px] object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: Building2, title: "Curated Property Selections", desc: "Handpicked real estate opportunities in Dubai's most desirable locations." },
                { icon: Users, title: "Market Insights & Guidance", desc: "Data-driven insights to help UK investors make informed decisions." },
                { icon: TrendingUp, title: "High-Growth Areas", desc: "Access prime areas with strong capital appreciation and rental yield." },
                { icon: Handshake, title: "End-to-End Support", desc: "From selection to title deed transfer our team is with you every step." }
              ].map((card, i) => (
                <div key={i} className="bg-[#09211A] border border-[#C8A34A]/30 p-5 rounded-sm space-y-2 shadow-md">
                  <div className="w-9 h-9 rounded-full border border-[#C8A34A] bg-[#061813] flex items-center justify-center text-[#E5C578]">
                    <card.icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-sm text-[#F7E7CE] font-semibold">{card.title}</h3>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </main>
        )}

        {/* ================= TAB 4: ABOUT DUBAI ================= */}
        {activeTab === "about" && (
          <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-10 space-y-8 text-center w-full">
            <div className="text-left">
              <button
                onClick={() => navigateTo("home")}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D2B22] gold-gradient-bg px-4 py-2 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-md"
              >
                <ArrowLeft className="w-4 h-4 text-[#0D2B22]" />
                <span>Back to Tourism Overview</span>
              </button>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-[#FFF]">The World's #1 Investment Destination</h1>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              Dubai provides 0% tax on capital gains and rental income, 10-year Golden Visa eligibility for property investors, and world-class safety.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-[#09211A] border border-[#C8A34A]/30 p-6 rounded-sm space-y-1 shadow-lg">
                <span className="font-serif text-3xl text-[#E5C578] font-bold">0%</span>
                <h4 className="text-xs uppercase tracking-wider text-[#F7E7CE] font-semibold">Tax on Gains & Rent</h4>
              </div>
              <div className="bg-[#09211A] border border-[#C8A34A]/30 p-6 rounded-sm space-y-1 shadow-lg">
                <span className="font-serif text-3xl text-[#E5C578] font-bold">10-Year</span>
                <h4 className="text-xs uppercase tracking-wider text-[#F7E7CE] font-semibold">Golden Visa Eligibility</h4>
              </div>
              <div className="bg-[#09211A] border border-[#C8A34A]/30 p-6 rounded-sm space-y-1 shadow-lg">
                <span className="font-serif text-3xl text-[#E5C578] font-bold">7 - 9%</span>
                <h4 className="text-xs uppercase tracking-wider text-[#F7E7CE] font-semibold">High Rental Yields</h4>
              </div>
            </div>
          </main>
        )}

        {/* ================= TAB 5: CONTACT ================= */}
        {activeTab === "contact" && (
          <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-10 space-y-8 text-center w-full">
            <div className="text-left">
              <button
                onClick={() => navigateTo("home")}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D2B22] gold-gradient-bg px-4 py-2 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-md"
              >
                <ArrowLeft className="w-4 h-4 text-[#0D2B22]" />
                <span>Back to Tourism Overview</span>
              </button>
            </div>

            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl text-[#FFF]">Contact Us</h1>
              <p className="text-xs text-slate-300 font-normal">We are here to help you plan your Dubai investment journey.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <a
                href="https://wa.me/971503784656"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#09211A] border border-[#C8A34A]/40 hover:border-[#E5C578] p-6 rounded-sm space-y-2 transition-all shadow-xl"
              >
                <MessageSquare className="w-6 h-6 text-[#E5C578] mx-auto" />
                <h3 className="font-serif text-base text-[#F7E7CE] font-semibold">Chat on WhatsApp</h3>
                <p className="text-[11px] text-slate-300">+971 50 378 4656</p>
              </a>
              <a
                href="mailto:info@veloraheightstourism.com"
                className="bg-[#09211A] border border-[#C8A34A]/40 hover:border-[#E5C578] p-6 rounded-sm space-y-2 transition-all shadow-xl"
              >
                <Mail className="w-6 h-6 text-[#E5C578] mx-auto" />
                <h3 className="font-serif text-base text-[#F7E7CE] font-semibold">Email Us</h3>
                <p className="text-[11px] text-slate-300">info@veloraheightstourism.com</p>
              </a>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="gold-gradient-bg text-[#0D2B22] font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-xl"
            >
              Open Quick Enquiry
            </button>
          </main>
        )}

        {/* ================= PARTNERSHIP BANNER ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 pb-8 pt-6 w-full">
          <div className="bg-[#09211A] border border-[#C8A34A]/40 rounded-sm p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
            <div className="flex items-center gap-4">
              <img 
                src="/logo.png" 
                alt="Velora Heights Logo" 
                className="h-10 sm:h-12 w-auto object-contain brightness-110"
              />
              <div className="space-y-0.5 border-l border-[#C8A34A]/30 pl-4">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Powered in partnership with</p>
                <h3 className="font-serif text-base sm:text-lg text-[#F7E7CE]">Velora Heights Real Estate</h3>
              </div>
            </div>
            <Link
              href="/real-estate"
              className="w-full sm:w-auto text-center border border-[#C8A34A] bg-[#061813] text-[#F7E7CE] hover:bg-[#C8A34A] hover:text-[#0D2B22] text-xs px-5 py-2.5 rounded-sm transition-all flex items-center justify-center gap-2 font-semibold shadow-md"
            >
              <span>Explore Real Estate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-[#C8A34A]/25 bg-[#061813] py-6 text-xs text-slate-300 px-4 sm:px-8 lg:px-14 mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 text-[11px]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E5C578]" />
                <span>Business Bay, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#E5C578]" />
                <span>info@veloraheightstourism.com</span>
              </div>
              <a href="tel:+971503784656" className="flex items-center gap-1.5 hover:text-[#E5C578] transition-colors text-[#F7E7CE]">
                <Phone className="w-3.5 h-3.5 text-[#E5C578]" />
                <span>+971 50 378 4656</span>
              </a>
            </div>
            <p className="text-[10px] text-slate-400">
              © 2026 Velora Heights Tourism. All rights reserved.
            </p>
          </div>
        </footer>

        {/* ================= MODAL ================= */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <div className="relative w-full max-w-lg bg-[#09211A] border border-[#C8A34A]/50 rounded-lg p-6 space-y-4 shadow-2xl my-8">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-[#FFF] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-center space-y-1">
                <h2 className="font-serif text-xl sm:text-2xl text-[#FFF]">Tell us a little about you</h2>
                <p className="text-xs text-slate-300">We will help you plan the perfect Dubai investment experience.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div className="space-y-1">
                  <label className="text-slate-200 font-medium">Full Name</label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                    <input
                      required
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#061813] border border-[#C8A34A]/40 rounded px-3 py-2 pl-8 text-slate-100 focus:outline-none focus:border-[#E5C578]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-slate-200 font-medium">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#061813] border border-[#C8A34A]/40 rounded px-3 py-2 text-slate-100 focus:outline-none focus:border-[#E5C578]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-200 font-medium">WhatsApp Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="+44 7123 456789"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-[#061813] border border-[#C8A34A]/40 rounded px-3 py-2 text-slate-100 focus:outline-none focus:border-[#E5C578]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-slate-200 font-medium">Country of Residence</label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-[#061813] border border-[#C8A34A]/40 rounded px-3 py-2 text-slate-100 focus:outline-none focus:border-[#E5C578]"
                    >
                      <option>United Kingdom</option>
                      <option>United Arab Emirates</option>
                      <option>United States</option>
                      <option>India</option>
                      <option>Europe</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-200 font-medium">Budget Range (GBP)</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#061813] border border-[#C8A34A]/40 rounded px-3 py-2 text-slate-100 focus:outline-none focus:border-[#E5C578]"
                    >
                      <option>£250k - £500k</option>
                      <option>£500k - £1M</option>
                      <option>£1M - £3M</option>
                      <option>£3M+</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-slate-200 font-medium">Preferred Travel Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#061813] border border-[#C8A34A]/40 rounded px-3 py-2 text-slate-100 focus:outline-none focus:border-[#E5C578]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-200 font-medium">Optional Message</label>
                  <textarea
                    rows={2}
                    placeholder="Tell us what you'd like to achieve on your trip..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#061813] border border-[#C8A34A]/40 rounded px-3 py-2 text-slate-100 focus:outline-none focus:border-[#E5C578]"
                  />
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    type="submit"
                    className="flex-1 gold-gradient-bg text-[#0D2B22] font-bold py-2.5 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-lg"
                  >
                    Send Enquiry
                  </button>
                </div>
                <p className="text-[10px] text-center text-slate-300 flex items-center justify-center gap-1 pt-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E5C578]" />
                  Your information is confidential and secure.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}