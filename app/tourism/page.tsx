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
    <div className="min-h-screen bg-[#0D2B22] text-[#f4efe6] font-sans antialiased selection:bg-[#C8A34A] selection:text-[#0D2B22]">
      {/* ================= UNIVERSAL TOP HEADER ================= */}
      <LuxuryBackground />
      <header className="border-b border-[#C8A34A]/20 bg-[#091e18]/95 sticky top-0 z-40 backdrop-blur-md px-4 sm:px-8 lg:px-14 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center justify-between gap-4">
            {/* Header Logo */}
            <button onClick={() => navigateTo("home")} className="flex items-center cursor-pointer">
              <img 
                src="/logo.png" 
                alt="Velora Heights Tourism" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </button>

            {/* Real Estate Link & WhatsApp CTA */}
            <div className="flex items-center gap-2">
              <Link
                href="/real-estate"
                className="gold-gradient-bg text-[#0D2B22] font-semibold px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-sm text-[11px] sm:text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(200,163,74,0.35)] cursor-pointer"
              >
                <Building className="w-3.5 h-3.5" />
                <span>Real Estate</span>
              </Link>
              <a
                href="https://wa.me/971503784656"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex border border-[#C8A34A]/60 text-[#f7e7ce] hover:bg-[#C8A34A]/10 text-xs px-3.5 py-2.5 rounded-sm transition-all items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C8A34A]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <nav className="hidden sm:flex items-center gap-5 sm:gap-7 text-xs tracking-wider uppercase overflow-x-auto pb-1 sm:pb-0 scrollbar-none border-t border-[#C8A34A]/10 md:border-t-0 pt-2 md:pt-0">
            {(["home", "itinerary", "investor", "about", "contact"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => navigateTo(tab)}
                className={`whitespace-nowrap pb-1 transition-all cursor-pointer ${
                  activeTab === tab
                    ? "text-[#C8A34A] border-b-2 border-[#C8A34A] font-semibold"
                    : "text-slate-300 hover:text-[#f7e7ce]"
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
        <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-8 sm:py-12 space-y-12 sm:space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f7e7ce] leading-[1.15]">
                Experience Dubai <br />
                <span className="italic font-light text-[#C8A34A]">before you invest.</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                A curated 4-day journey combining Dubai highlights, Abu Dhabi discovery, and a private real estate investment day.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#C8A34A]">
                <span>🇬🇧</span>
                <span className="uppercase tracking-widest text-[11px] font-medium">Exclusively for UK Investors</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => navigateTo("itinerary")}
                  className="gold-gradient-bg text-[#0D2B22] font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded-sm flex items-center gap-2 hover:brightness-110 transition-all cursor-pointer shadow-[0_4px_20px_rgba(200,163,74,0.25)]"
                >
                  <span>View 4-Day Experience</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://wa.me/971503784656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#C8A34A]/40 text-[#f7e7ce] hover:bg-[#C8A34A]/10 text-xs px-4 py-3 rounded-sm transition-all flex items-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4 text-[#C8A34A]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 relative rounded-lg overflow-hidden border border-[#C8A34A]/30 shadow-2xl bg-[#091e18]">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop"
                alt="Dubai Luxury Tourism"
                className="w-full h-[260px] sm:h-[350px] lg:h-[380px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B22] via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Navigation Cards */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#C8A34A]/20 pb-2">
              <h2 className="font-serif text-base sm:text-lg text-[#f7e7ce]">Explore Experience Sections</h2>
              <span className="text-[10px] uppercase tracking-widest text-[#C8A34A]">Direct Links</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { tab: "itinerary", icon: Compass, title: "4-Day Itinerary", desc: "Complete day-by-day tour" },
                { tab: "investor", icon: TrendingUp, title: "Investor Experience", desc: "UK advisory & tax guidance" },
                { tab: "about", icon: Award, title: "About Dubai", desc: "0% tax & Golden Visa info" },
                { tab: "contact", icon: Phone, title: "Contact & Enquiry", desc: "WhatsApp & VIP desk" }
              ].map((item) => (
                <button
                  key={item.tab}
                  onClick={() => navigateTo(item.tab as any)}
                  className="bg-[#0D2B22]/80 border border-[#C8A34A]/30 hover:border-[#C8A34A] p-4 rounded-sm flex items-center justify-between text-left transition-all group cursor-pointer shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#091e18] border border-[#C8A34A]/50 flex items-center justify-center text-[#C8A34A] group-hover:scale-105 transition-transform">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-[#f7e7ce] uppercase tracking-wider">{item.title}</h3>
                      <p className="text-[11px] text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#C8A34A] group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>

          {/* Value Props */}
          <div className="space-y-6 text-center pt-4 border-t border-[#C8A34A]/15">
            <h2 className="font-serif text-lg text-[#C8A34A] tracking-wide">Why UK Investors Choose This Experience</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-2">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-full border border-[#C8A34A]/40 flex items-center justify-center text-[#C8A34A]">
                  <Eye className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-[#f7e7ce]">See before you invest</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-full border border-[#C8A34A]/40 flex items-center justify-center text-[#C8A34A]">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-[#f7e7ce]">Save time</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-full border border-[#C8A34A]/40 flex items-center justify-center text-[#C8A34A]">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-[#f7e7ce]">Market clarity</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-full border border-[#C8A34A]/40 flex items-center justify-center text-[#C8A34A]">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-[#f7e7ce]">Direct expert access</span>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ================= TAB 2: ITINERARY ================= */}
      {activeTab === "itinerary" && (
        <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-8 sm:py-10 space-y-8">
          <div>
            <button
              onClick={() => navigateTo("home")}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0D2B22] gold-gradient-bg px-4 py-2 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-[0_0_15px_rgba(200,163,74,0.35)]"
            >
              <ArrowLeft className="w-4 h-4 text-[#0D2B22]" />
              <span>Back to Tourism Overview</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#C8A34A]/15 pb-4">
            <div className="space-y-1">
              <h1 className="font-serif text-3xl sm:text-4xl text-[#f7e7ce]">4-Day Itinerary</h1>
              <p className="text-xs text-[#C8A34A] uppercase tracking-widest flex items-center gap-1.5">
                <span>🇬🇧</span> Exclusively for UK Investors
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#091e18]/80 border border-[#C8A34A]/30 p-6 rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-full border border-[#C8A34A] flex items-center justify-center text-[#C8A34A]">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-[#C8A34A] tracking-widest uppercase">DAY 1</span>
                <h3 className="font-serif text-base text-[#f7e7ce]">Arrival in Dubai</h3>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-[#C8A34A]/20">
                <li>• Airport VIP pickup</li>
                <li>• Hotel check-in</li>
                <li>• Evening welcome dinner</li>
              </ul>
            </div>

            <div className="bg-[#091e18]/80 border border-[#C8A34A]/30 p-6 rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-full border border-[#C8A34A] flex items-center justify-center text-[#C8A34A]">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-[#C8A34A] tracking-widest uppercase">DAY 2</span>
                <h3 className="font-serif text-base text-[#f7e7ce]">Dubai City Tour</h3>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-[#C8A34A]/20">
                <li>• Burj Khalifa observation</li>
                <li>• Dubai Mall</li>
                <li>• Dubai Marina & JBR</li>
                <li>• Palm Jumeirah tour</li>
              </ul>
            </div>

            <div className="bg-[#091e18]/80 border border-[#C8A34A]/30 p-6 rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-full border border-[#C8A34A] flex items-center justify-center text-[#C8A34A]">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-[#C8A34A] tracking-widest uppercase">DAY 3</span>
                <h3 className="font-serif text-base text-[#f7e7ce]">Abu Dhabi Tour</h3>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-[#C8A34A]/20">
                <li>• Sheikh Zayed Grand Mosque</li>
                <li>• Yas Island highlights</li>
                <li>• Scenic coastline drive</li>
                <li>• Emirates Palace</li>
              </ul>
            </div>

            <div className="bg-[#091e18]/80 border border-[#C8A34A]/30 p-6 rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-full border border-[#C8A34A] flex items-center justify-center text-[#C8A34A]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-[#C8A34A] tracking-widest uppercase">DAY 4</span>
                <h3 className="font-serif text-base text-[#f7e7ce]">Investment Day</h3>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-[#C8A34A]/20">
                <li>• Off-plan portfolio presentation</li>
                <li>• Direct developer meetings</li>
                <li>• 1-to-1 tax structuring advice</li>
                <li>• VIP unit reservation</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-[#C8A34A]/20 space-y-6">
            <h2 className="text-center font-serif text-base text-[#C8A34A]">What's Included in Your Package</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 rounded-full border border-[#C8A34A]/40 flex items-center justify-center text-[#C8A34A]">
                  <Hotel className="w-4 h-4" />
                </div>
                <span className="text-xs text-[#f7e7ce]">Luxury Stay 4*/5* Hotels</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 rounded-full border border-[#C8A34A]/40 flex items-center justify-center text-[#C8A34A]">
                  <Coffee className="w-4 h-4" />
                </div>
                <span className="text-xs text-[#f7e7ce]">Daily Breakfast Included</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 rounded-full border border-[#C8A34A]/40 flex items-center justify-center text-[#C8A34A]">
                  <Car className="w-4 h-4" />
                </div>
                <span className="text-xs text-[#f7e7ce]">Premium Chauffeur Transport</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 rounded-full border border-[#C8A34A]/40 flex items-center justify-center text-[#C8A34A]">
                  <Headphones className="w-4 h-4" />
                </div>
                <span className="text-xs text-[#f7e7ce]">Dedicated Advisory Concierge</span>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="gold-gradient-bg text-[#0D2B22] font-semibold text-xs tracking-wider uppercase px-8 py-3 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-[0_4px_20px_rgba(200,163,74,0.25)]"
            >
              Book Your 4-Day Journey
            </button>
          </div>
        </main>
      )}

      {/* ================= TAB 3: INVESTOR EXPERIENCE ================= */}
      {activeTab === "investor" && (
        <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-8 sm:py-10 space-y-8">
          <div>
            <button
              onClick={() => navigateTo("home")}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0D2B22] gold-gradient-bg px-4 py-2 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-[0_0_15px_rgba(200,163,74,0.35)]"
            >
              <ArrowLeft className="w-4 h-4 text-[#0D2B22]" />
              <span>Back to Tourism Overview</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f7e7ce] leading-tight">
                A Smarter Way for <br />
                <span className="text-[#C8A34A]">UK Investors to Invest in Dubai</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                We combine luxury hospitality with private real estate expertise to give UK investors clarity, confidence, and high-yield opportunities.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="gold-gradient-bg text-[#0D2B22] font-semibold text-xs tracking-wider uppercase px-6 py-3 rounded-sm flex items-center gap-2 hover:brightness-110 transition-all cursor-pointer shadow-[0_4px_20px_rgba(200,163,74,0.25)]"
              >
                <span>Discover Opportunities</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="lg:col-span-6 rounded-lg overflow-hidden border border-[#C8A34A]/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1600&auto=format&fit=crop"
                alt="Dubai Skyline"
                className="w-full h-[280px] sm:h-[320px] object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-[#091e18]/80 border border-[#C8A34A]/25 p-5 rounded-sm space-y-2">
              <div className="w-9 h-9 rounded-full border border-[#C8A34A] flex items-center justify-center text-[#C8A34A]">
                <Building2 className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-sm text-[#f7e7ce]">Curated Property Selections</h3>
              <p className="text-xs text-slate-400">Handpicked real estate opportunities in Dubai's most desirable locations.</p>
            </div>
            <div className="bg-[#091e18]/80 border border-[#C8A34A]/25 p-5 rounded-sm space-y-2">
              <div className="w-9 h-9 rounded-full border border-[#C8A34A] flex items-center justify-center text-[#C8A34A]">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-sm text-[#f7e7ce]">Market Insights & Guidance</h3>
              <p className="text-xs text-slate-400">Data-driven insights to help UK investors make informed decisions.</p>
            </div>
            <div className="bg-[#091e18]/80 border border-[#C8A34A]/25 p-5 rounded-sm space-y-2">
              <div className="w-9 h-9 rounded-full border border-[#C8A34A] flex items-center justify-center text-[#C8A34A]">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-sm text-[#f7e7ce]">High-Growth Areas</h3>
              <p className="text-xs text-slate-400">Access prime areas with strong capital appreciation and rental yield.</p>
            </div>
            <div className="bg-[#091e18]/80 border border-[#C8A34A]/25 p-5 rounded-sm space-y-2">
              <div className="w-9 h-9 rounded-full border border-[#C8A34A] flex items-center justify-center text-[#C8A34A]">
                <Handshake className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-sm text-[#f7e7ce]">End-to-End Support</h3>
              <p className="text-xs text-slate-400">From selection to title deed transfer our team is with you every step.</p>
            </div>
          </div>
        </main>
      )}

      {/* ================= TAB 4: ABOUT DUBAI ================= */}
      {activeTab === "about" && (
        <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-10 space-y-8 text-center">
          <div className="text-left">
            <button
              onClick={() => navigateTo("home")}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0D2B22] gold-gradient-bg px-4 py-2 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-[0_0_15px_rgba(200,163,74,0.35)]"
            >
              <ArrowLeft className="w-4 h-4 text-[#0D2B22]" />
              <span>Back to Tourism Overview</span>
            </button>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl text-[#f7e7ce]">The World's #1 Investment Destination</h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Dubai provides 0% tax on capital gains and rental income, 10-year Golden Visa eligibility for property investors, and world-class safety.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-[#091e18]/80 border border-[#C8A34A]/20 p-5 rounded-sm space-y-1">
              <span className="font-serif text-2xl text-[#C8A34A] font-bold">0%</span>
              <h4 className="text-xs uppercase tracking-wider text-slate-200">Tax on Gains & Rent</h4>
            </div>
            <div className="bg-[#091e18]/80 border border-[#C8A34A]/20 p-5 rounded-sm space-y-1">
              <span className="font-serif text-2xl text-[#C8A34A] font-bold">10-Year</span>
              <h4 className="text-xs uppercase tracking-wider text-slate-200">Golden Visa Eligibility</h4>
            </div>
            <div className="bg-[#091e18]/80 border border-[#C8A34A]/20 p-5 rounded-sm space-y-1">
              <span className="font-serif text-2xl text-[#C8A34A] font-bold">7 - 9%</span>
              <h4 className="text-xs uppercase tracking-wider text-slate-200">High Rental Yields</h4>
            </div>
          </div>
        </main>
      )}

      {/* ================= TAB 5: CONTACT ================= */}
      {activeTab === "contact" && (
        <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-10 space-y-8 text-center">
          <div className="text-left">
            <button
              onClick={() => navigateTo("home")}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0D2B22] gold-gradient-bg px-4 py-2 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-[0_0_15px_rgba(200,163,74,0.35)]"
            >
              <ArrowLeft className="w-4 h-4 text-[#0D2B22]" />
              <span>Back to Tourism Overview</span>
            </button>
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-3xl sm:text-4xl text-[#f7e7ce]">Contact Us</h1>
            <p className="text-xs text-slate-400">We are here to help you plan your Dubai investment journey.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href="https://wa.me/971503784656"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#091e18]/80 border border-[#C8A34A]/30 hover:border-[#C8A34A] p-6 rounded-sm space-y-2 transition-all"
            >
              <MessageSquare className="w-6 h-6 text-[#C8A34A] mx-auto" />
              <h3 className="font-serif text-base text-[#f7e7ce]">Chat on WhatsApp</h3>
              <p className="text-[11px] text-slate-400">Get quick direct answers</p>
            </a>
            <a
              href="mailto:info@veloraheightstourism.com"
              className="bg-[#091e18]/80 border border-[#C8A34A]/30 hover:border-[#C8A34A] p-6 rounded-sm space-y-2 transition-all"
            >
              <Mail className="w-6 h-6 text-[#C8A34A] mx-auto" />
              <h3 className="font-serif text-base text-[#f7e7ce]">Email Us</h3>
              <p className="text-[11px] text-slate-400">info@veloraheightstourism.com</p>
            </a>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="gold-gradient-bg text-[#0D2B22] font-semibold text-xs tracking-wider uppercase px-8 py-3 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-[0_4px_20px_rgba(200,163,74,0.2)]"
          >
            Open Quick Enquiry
          </button>
        </main>
      )}

      {/* ================= PARTNERSHIP FOOTER BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 pb-8 pt-6">
        <div className="bg-[#091e18] border border-[#C8A34A]/30 rounded-sm p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img 
              src="/logo.png" 
              alt="Velora Heights Logo" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <div className="space-y-0.5 border-l border-[#C8A34A]/30 pl-4">
              <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest">Powered in partnership with</p>
              <h3 className="font-serif text-base sm:text-lg text-[#f7e7ce]">Velora Heights Real Estate</h3>
            </div>
          </div>
          <Link
            href="/real-estate"
            className="w-full sm:w-auto text-center border border-[#C8A34A]/60 text-[#f7e7ce] hover:bg-[#C8A34A]/10 text-xs px-5 py-2.5 rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Real Estate</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C8A34A]" />
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#C8A34A]/20 bg-[#091e18] py-6 text-xs text-slate-400 px-4 sm:px-8 lg:px-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 text-[11px]">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C8A34A]" />
              <span>Business Bay, Dubai, UAE</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#C8A34A]" />
              <span>info@veloraheightstourism.com</span>
            </div>
            <a href="tel:+971503784656" className="flex items-center gap-1.5 hover:text-[#C8A34A] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#C8A34A]" />
              <span>+971 50 378 4656</span>
            </a>
          </div>
          <p className="text-[10px] text-slate-500">
            © 2026 Velora Heights Tourism. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ================= POPUP MODAL ENQUIRY FORM ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-lg bg-[#0D2B22] border border-[#C8A34A]/40 rounded-lg p-6 space-y-4 shadow-2xl my-8">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#f7e7ce] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center space-y-1">
              <h2 className="font-serif text-xl sm:text-2xl text-[#f7e7ce]">Tell us a little about you</h2>
              <p className="text-[11px] text-slate-400">We will help you plan the perfect Dubai investment experience.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="text-slate-300">Full Name</label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
                  <input
                    required
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#091e18] border border-[#C8A34A]/25 rounded px-3 py-2 pl-8 text-slate-200 focus:outline-none focus:border-[#C8A34A]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-300">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#091e18] border border-[#C8A34A]/25 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-[#C8A34A]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-300">WhatsApp Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="+44 7123 456789"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-[#091e18] border border-[#C8A34A]/25 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-[#C8A34A]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-300">Country of Residence</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-[#091e18] border border-[#C8A34A]/25 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-[#C8A34A]"
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
                  <label className="text-slate-300">Budget Range (GBP)</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#091e18] border border-[#C8A34A]/25 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-[#C8A34A]"
                  >
                    <option>£250k - £500k</option>
                    <option>£500k - £1M</option>
                    <option>£1M - £3M</option>
                    <option>£3M+</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-slate-300">Preferred Travel Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#091e18] border border-[#C8A34A]/25 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-[#C8A34A]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-300">Optional Message</label>
                <textarea
                  rows={2}
                  placeholder="Tell us what you'd like to achieve on your trip..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#091e18] border border-[#C8A34A]/25 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-[#C8A34A]"
                />
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 gold-gradient-bg text-[#0D2B22] font-semibold py-2.5 rounded-sm hover:brightness-110 transition-all cursor-pointer"
                >
                  Send Enquiry
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C8A34A]" />
                Your information is confidential and secure.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}