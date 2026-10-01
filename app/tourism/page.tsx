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
  CheckCircle2,
  Loader2,
} from "lucide-react";
import LuxuryBackground from "@/components/LuxuryBackground";

const WHATSAPP_NUMBER = "971585844656";
const CONTACT_EMAIL = "info@veloraheights.ae";

export default function TourismPage() {
  const [activeTab, setActiveTab] = useState<"home" | "itinerary" | "investor" | "about" | "contact">("home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
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

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFormSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/webinar-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          whatsapp: formData.whatsapp,
          country: formData.country,
          investmentBudget: `${formData.budget} (${formData.intent}${formData.date ? `, Date: ${formData.date}` : ""}${formData.message ? `, Note: ${formData.message}` : ""})`,
          source: "tourism",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to record enquiry");
      }

      setFormSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        whatsapp: "",
        country: "United Kingdom",
        intent: "Luxury Villa / Penthouse",
        budget: "£500k - £1M",
        date: "",
        message: "",
      });
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Submission encountered an issue. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#071713] text-[#F1F5F9] font-sans antialiased selection:bg-[#C8A34A] selection:text-[#071713]">
      <LuxuryBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* ================= TOP UTILITY BAR ================= */}
        <div className="bg-[#040e0b]/90 border-b border-[#C8A34A]/20 py-2.5 px-6 sm:px-10 lg:px-16 text-xs text-slate-300 flex justify-between items-center relative z-50">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-[11px] text-[#E5C578] hover:text-white font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <span>←</span>
              <span>Switch Experience</span>
            </Link>
            <span className="text-[#C8A34A]/40 font-light hidden sm:inline">|</span>
            <span className="tracking-widest uppercase text-[10px] text-[#C8A34A] hidden sm:inline">
              Dubai Premier Investor Tourism & Lifestyle
            </span>
          </div>

          <div className="flex items-center space-x-6 text-[11px]">
            <span className="flex items-center gap-1.5 text-slate-300 hidden md:flex font-light">
              <MapPin className="w-3.5 h-3.5 text-[#C8A34A]" /> The Opus, Business Bay, Dubai
            </span>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="flex items-center gap-1.5 text-[#F7E7CE] hover:text-[#E5C578] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A34A]" />
              <span>+971 58 584 4656</span>
            </a>
          </div>
        </div>

        {/* ================= TOP HEADER (PINNED TO LEFT EDGE LIKE REAL ESTATE) ================= */}
        <header className="border-b border-[#C8A34A]/20 bg-[#061813]/90 sticky top-0 z-40 backdrop-blur-md px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between">
          <button
            onClick={() => navigateTo("home")}
            className="flex items-center cursor-pointer shrink-0"
          >
            <img
              src="/logot.png"
              alt="Velora Heights Tourism"
              className="h-11 sm:h-12 w-auto object-contain brightness-110 drop-shadow-md"
            />
          </button>

          <nav className="flex items-center gap-6 sm:gap-8 text-xs tracking-[0.18em] uppercase font-medium">
            {[
              { key: "home", label: "Home" },
              { key: "itinerary", label: "Itinerary" },
              { key: "investor", label: "Investor Experience" },
              { key: "about", label: "About Dubai" },
              { key: "contact", label: "Contact" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => navigateTo(key as any)}
                className={`whitespace-nowrap pb-1 transition-all cursor-pointer ${
                  activeTab === key
                    ? "text-[#E5C578] border-b-2 border-[#C8A34A]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </header>

        {/* ================= TAB 1: HOME (FULL-BLEED PANORAMIC BACKDROP) ================= */}
        {activeTab === "home" && (
          <main className="w-full flex-1">
            <div className="relative min-h-[85vh] flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-20">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=85&w=2600&auto=format&fit=crop"
                  alt="Dubai Skyline Panorama"
                  className="w-full h-full object-cover object-center brightness-[0.68] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#071713]/95 via-[#071713]/75 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#061813]/90 via-transparent to-[#071713]" />
              </div>

              <div className="relative z-10 max-w-2xl space-y-6">
                <div className="inline-flex items-center gap-2 text-xs text-[#E5C578] font-bold uppercase tracking-widest bg-[#061813]/80 border border-[#C8A34A]/40 px-3 py-1.5 rounded-full backdrop-blur-md">
                  <span>🇬🇧</span>
                  <span>Exclusively for UK Investors</span>
                </div>

                <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white font-normal leading-[1.05] tracking-tight">
                  Experience Dubai <br />
                  <span className="italic text-[#E5C578]">before you invest.</span>
                </h1>

                <p className="text-xs sm:text-base text-slate-200/90 font-light leading-relaxed max-w-xl">
                  A curated 4-day private journey combining Dubai landmarks, Abu Dhabi discovery, and an exclusive real estate investment day.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <button
                    onClick={() => navigateTo("itinerary")}
                    className="gold-gradient-bg text-[#071713] font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-sm flex items-center gap-2.5 hover:brightness-110 transition-all cursor-pointer shadow-[0_6px_30px_rgba(200,163,74,0.35)]"
                  >
                    <span>View 4-Day Experience</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#C8A34A]/80 text-[#F7E7CE] bg-[#061813]/80 hover:bg-[#C8A34A] hover:text-[#071713] text-xs font-semibold px-6 py-4 rounded-sm transition-all flex items-center gap-2 backdrop-blur-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-[#E5C578]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Links Strip */}
            <div className="bg-[#030d0a] border-y border-[#C8A34A]/25 py-12 px-6 sm:px-10 lg:px-16">
              <div className="max-w-7xl mx-auto space-y-6">
                <div className="flex items-center justify-between border-b border-[#C8A34A]/20 pb-3">
                  <h2 className="font-serif text-xl sm:text-2xl text-white font-normal">
                    Explore Experience Sections
                  </h2>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#E5C578] font-bold">
                    DIRECT LINKS
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {[
                    { tab: "itinerary", icon: Compass, title: "4-Day Itinerary", desc: "Complete day-by-day tour" },
                    { tab: "investor", icon: TrendingUp, title: "Investor Experience", desc: "UK advisory & tax guidance" },
                    { tab: "about", icon: Award, title: "About Dubai", desc: "0% tax & Golden Visa info" },
                    { tab: "contact", icon: Phone, title: "Contact & Enquiry", desc: "WhatsApp & VIP desk" },
                  ].map((item) => (
                    <button
                      key={item.tab}
                      onClick={() => navigateTo(item.tab as any)}
                      className="bg-[#081f18] border border-[#C8A34A]/35 hover:border-[#E5C578] p-5 rounded-sm flex items-center justify-between text-left transition-all group cursor-pointer shadow-xl hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-full bg-[#051410] border border-[#C8A34A] flex items-center justify-center text-[#E5C578] group-hover:scale-105 transition-transform shrink-0 shadow-md">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-xs font-bold text-[#F7E7CE] uppercase tracking-wider group-hover:text-white">
                            {item.title}
                          </h3>
                          <p className="text-[11px] text-slate-300 font-light mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#E5C578] group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Why UK Investors Strip */}
            <div className="py-20 px-6 sm:px-10 lg:px-16 text-center max-w-7xl mx-auto space-y-12">
              <div className="space-y-1">
                <h2 className="font-serif text-3xl sm:text-5xl text-[#F7E7CE] font-normal leading-tight">
                  Why UK Investors
                </h2>
                <p className="font-serif italic text-3xl sm:text-5xl text-[#E5C578] font-normal">
                  Choose This Experience
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4">
                <div className="flex flex-col items-center space-y-4 group">
                  <div className="w-16 h-16 rounded-full border border-[#C8A34A] bg-[#081f18] flex items-center justify-center text-[#E5C578] shadow-[0_0_15px_rgba(200,163,74,0.15)] group-hover:scale-105 group-hover:border-[#E5C578] transition-all">
                    <Plane className="w-7 h-7 -rotate-45" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium text-[#F7E7CE]">Experience Dubai</p>
                    <p className="text-sm font-medium text-[#F7E7CE]">First-Hand</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-4 group">
                  <div className="w-16 h-16 rounded-full border border-[#C8A34A] bg-[#081f18] flex items-center justify-center text-[#E5C578] shadow-[0_0_15px_rgba(200,163,74,0.15)] group-hover:scale-105 group-hover:border-[#E5C578] transition-all">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium text-[#F7E7CE]">Explore Opportunities</p>
                    <p className="text-sm font-medium text-[#F7E7CE]">in Person</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-4 group">
                  <div className="w-16 h-16 rounded-full border border-[#C8A34A] bg-[#081f18] flex items-center justify-center text-[#E5C578] shadow-[0_0_15px_rgba(200,163,74,0.15)] group-hover:scale-105 group-hover:border-[#E5C578] transition-all">
                    <BarChart3 className="w-7 h-7" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium text-[#F7E7CE]">Understand</p>
                    <p className="text-sm font-medium text-[#F7E7CE]">the Market</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-4 group">
                  <div className="w-16 h-16 rounded-full border border-[#C8A34A] bg-[#081f18] flex items-center justify-center text-[#E5C578] shadow-[0_0_15px_rgba(200,163,74,0.15)] group-hover:scale-105 group-hover:border-[#E5C578] transition-all">
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
        {/* ================= TAB 2: ITINERARY ================= */}
        {activeTab === "itinerary" && (
          <main className="w-full py-8 sm:py-10 space-y-8 flex-1">
            {/* Left-Aligned Back Button Strip */}
            <div className="px-6 sm:px-10 lg:px-16 w-full flex justify-start">
              <button
                onClick={() => navigateTo("home")}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071713] gold-gradient-bg px-4 py-2 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-md"
              >
                <ArrowLeft className="w-4 h-4 text-[#071713]" />
                <span>Back to Tourism Overview</span>
              </button>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
              <div className="space-y-1 border-b border-[#C8A34A]/25 pb-4">
                <h1 className="font-serif text-4xl sm:text-5xl text-white">4-Day Itinerary</h1>
                <p className="text-xs text-[#E5C578] font-bold uppercase tracking-widest flex items-center gap-1.5 pt-1">
                  <span>🇬🇧</span> Exclusively for UK Investors
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { day: "DAY 1", icon: Plane, title: "Arrival in Dubai", items: ["Airport VIP pickup", "Hotel check-in", "Evening welcome dinner"] },
                  { day: "DAY 2", icon: Landmark, title: "Dubai City Tour", items: ["Burj Khalifa observation", "Dubai Mall", "Dubai Marina & JBR", "Palm Jumeirah tour"] },
                  { day: "DAY 3", icon: Building2, title: "Abu Dhabi Tour", items: ["Sheikh Zayed Grand Mosque", "Yas Island highlights", "Scenic coastline drive", "Emirates Palace"] },
                  { day: "DAY 4", icon: TrendingUp, title: "Investment Day", items: ["Off-plan portfolio presentation", "Direct developer meetings", "1-to-1 tax structuring advice", "VIP unit reservation"] },
                ].map((dayItem, idx) => (
                  <div key={idx} className="bg-[#081f18] border border-[#C8A34A]/40 p-6 rounded-sm space-y-4 shadow-xl">
                    <div className="w-10 h-10 rounded-full border border-[#C8A34A] bg-[#051410] flex items-center justify-center text-[#E5C578]">
                      <dayItem.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#E5C578] tracking-widest uppercase font-bold">{dayItem.day}</span>
                      <h3 className="font-serif text-lg text-[#F7E7CE] font-semibold">{dayItem.title}</h3>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-[#C8A34A]/20 font-light">
                      {dayItem.items.map((pt, pIdx) => (
                        <li key={pIdx}>• {pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-[#C8A34A]/25 space-y-6">
                <h2 className="text-center font-serif text-xl text-[#E5C578] font-semibold">
                  What's Included in Your Package
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Hotel, title: "Luxury Stay 4*/5* Hotels" },
                    { icon: Coffee, title: "Daily Breakfast Included" },
                    { icon: Car, title: "Premium Chauffeur Transport" },
                    { icon: Headphones, title: "Dedicated Advisory Concierge" },
                  ].map((inc, i) => (
                    <div key={i} className="flex flex-col items-center text-center space-y-2 bg-[#081f18] border border-[#C8A34A]/30 p-5 rounded-sm shadow-md">
                      <div className="w-10 h-10 rounded-full border border-[#C8A34A] bg-[#051410] flex items-center justify-center text-[#E5C578]">
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
                  className="gold-gradient-bg text-[#071713] font-bold text-xs tracking-wider uppercase px-9 py-4 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-xl"
                >
                  Book Your 4-Day Journey
                </button>
              </div>
            </div>
          </main>
        )}

        {/* ================= TAB 3: INVESTOR EXPERIENCE ================= */}
        {activeTab === "investor" && (
          <main className="w-full py-8 sm:py-10 space-y-8 flex-1">
            {/* Left-Aligned Back Button Strip */}
            <div className="px-6 sm:px-10 lg:px-16 w-full flex justify-start">
              <button
                onClick={() => navigateTo("home")}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071713] gold-gradient-bg px-4 py-2 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-md"
              >
                <ArrowLeft className="w-4 h-4 text-[#071713]" />
                <span>Back to Tourism Overview</span>
              </button>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <h1 className="font-serif text-4xl sm:text-5xl text-white leading-tight">
                    A Smarter Way for <br />
                    <span className="text-[#E5C578]">UK Investors to Invest in Dubai</span>
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    We combine luxury hospitality with private real estate expertise to give UK investors clarity, confidence, and high-yield opportunities.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="gold-gradient-bg text-[#071713] font-bold text-xs tracking-wider uppercase px-7 py-3.5 rounded-sm flex items-center gap-2 hover:brightness-110 transition-all cursor-pointer shadow-lg"
                  >
                    <span>Discover Opportunities</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="lg:col-span-6 rounded-sm overflow-hidden border border-[#C8A34A]/40 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1600&auto=format&fit=crop"
                    alt="Dubai Skyline"
                    className="w-full h-[320px] object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { icon: Building2, title: "Curated Property Selections", desc: "Handpicked real estate opportunities in Dubai's most desirable locations." },
                  { icon: Users, title: "Market Insights & Guidance", desc: "Data-driven insights to help UK investors make informed decisions." },
                  { icon: TrendingUp, title: "High-Growth Areas", desc: "Access prime areas with strong capital appreciation and rental yield." },
                  { icon: Handshake, title: "End-to-End Support", desc: "From selection to title deed transfer, our team is with you every step." },
                ].map((card, i) => (
                  <div key={i} className="bg-[#081f18] border border-[#C8A34A]/30 p-6 rounded-sm space-y-2 shadow-md">
                    <div className="w-10 h-10 rounded-full border border-[#C8A34A] bg-[#051410] flex items-center justify-center text-[#E5C578]">
                      <card.icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-sm text-[#F7E7CE] font-semibold">{card.title}</h3>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </main>
        )}

        {/* ================= TAB 4: ABOUT DUBAI ================= */}
        {activeTab === "about" && (
          <main className="w-full py-8 sm:py-10 space-y-8 flex-1">
            {/* Left-Aligned Back Button Strip */}
            <div className="px-6 sm:px-10 lg:px-16 w-full flex justify-start">
              <button
                onClick={() => navigateTo("home")}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071713] gold-gradient-bg px-4 py-2 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-md"
              >
                <ArrowLeft className="w-4 h-4 text-[#071713]" />
                <span>Back to Tourism Overview</span>
              </button>
            </div>

            <div className="max-w-4xl mx-auto px-6 sm:px-10 space-y-8 text-center">
              <h1 className="font-serif text-4xl sm:text-5xl text-white">The World's #1 Investment Destination</h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Dubai provides 0% tax on capital gains and rental income, 10-year Golden Visa eligibility for property investors, and world-class safety.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
                <div className="bg-[#081f18] border border-[#C8A34A]/30 p-6 rounded-sm space-y-1 shadow-lg">
                  <span className="font-serif text-4xl text-[#E5C578] font-bold">0%</span>
                  <h4 className="text-xs uppercase tracking-wider text-[#F7E7CE] font-semibold">Tax on Gains & Rent</h4>
                </div>
                <div className="bg-[#081f18] border border-[#C8A34A]/30 p-6 rounded-sm space-y-1 shadow-lg">
                  <span className="font-serif text-4xl text-[#E5C578] font-bold">10-Year</span>
                  <h4 className="text-xs uppercase tracking-wider text-[#F7E7CE] font-semibold">Golden Visa Eligibility</h4>
                </div>
                <div className="bg-[#081f18] border border-[#C8A34A]/30 p-6 rounded-sm space-y-1 shadow-lg">
                  <span className="font-serif text-4xl text-[#E5C578] font-bold">7 - 9%</span>
                  <h4 className="text-xs uppercase tracking-wider text-[#F7E7CE] font-semibold">High Rental Yields</h4>
                </div>
              </div>
            </div>
          </main>
        )}

        {/* ================= TAB 5: CONTACT ================= */}
        {activeTab === "contact" && (
          <main className="w-full py-8 sm:py-10 space-y-8 flex-1">
            {/* Left-Aligned Back Button Strip */}
            <div className="px-6 sm:px-10 lg:px-16 w-full flex justify-start">
              <button
                onClick={() => navigateTo("home")}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071713] gold-gradient-bg px-4 py-2 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-md"
              >
                <ArrowLeft className="w-4 h-4 text-[#071713]" />
                <span>Back to Tourism Overview</span>
              </button>
            </div>

            <div className="max-w-4xl mx-auto px-6 sm:px-10 space-y-8 text-center">
              <div className="space-y-2">
                <h1 className="font-serif text-4xl sm:text-5xl text-white">Contact Us</h1>
                <p className="text-xs text-slate-300 font-light">We are here to help you plan your Dubai investment journey.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#081f18] border border-[#C8A34A]/40 hover:border-[#E5C578] p-6 rounded-sm space-y-2 transition-all shadow-xl group"
                >
                  <MessageSquare className="w-6 h-6 text-[#E5C578] mx-auto group-hover:scale-105 transition-transform" />
                  <h3 className="font-serif text-base text-[#F7E7CE] font-semibold">Chat on WhatsApp</h3>
                  <p className="text-[11px] text-slate-300 font-mono">+971 58 584 4656</p>
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="bg-[#081f18] border border-[#C8A34A]/40 hover:border-[#E5C578] p-6 rounded-sm space-y-2 transition-all shadow-xl group"
                >
                  <Mail className="w-6 h-6 text-[#E5C578] mx-auto group-hover:scale-105 transition-transform" />
                  <h3 className="font-serif text-base text-[#F7E7CE] font-semibold">Email Us</h3>
                  <p className="text-[11px] text-slate-300 font-mono">{CONTACT_EMAIL}</p>
                </a>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="gold-gradient-bg text-[#071713] font-bold text-xs tracking-wider uppercase px-9 py-4 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-xl"
              >
                Open Quick Enquiry
              </button>
            </div>
          </main>
        )}

        {/* ================= PARTNERSHIP BANNER ================= */}
        <section className="px-6 sm:px-10 lg:px-16 pb-10 pt-6 w-full max-w-7xl mx-auto">
          <div className="bg-[#081f18] border border-[#C8A34A]/40 rounded-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
            <div className="flex items-center gap-4">
              <img
                src="/logom.png"
                alt="Velora Heights Logo"
                className="h-10 sm:h-12 w-auto object-contain brightness-110"
              />
              <div className="space-y-0.5 border-l border-[#C8A34A]/30 pl-4">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Powered in partnership with</p>
                <h3 className="font-serif text-base sm:text-lg text-[#F7E7CE]">Velora Heights Real Estate</h3>
              </div>
            </div>
            <Link
              href="/LandingPage1"
              className="w-full sm:w-auto text-center border border-[#C8A34A] bg-[#051410] text-[#F7E7CE] hover:bg-[#C8A34A] hover:text-[#071713] text-xs px-6 py-3 rounded-sm transition-all flex items-center justify-center gap-2 font-semibold shadow-md"
            >
              <span>Explore Real Estate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-[#C8A34A]/25 bg-[#040e0b] py-6 text-xs text-slate-300 px-6 sm:px-10 lg:px-16 mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 text-[11px]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E5C578]" />
                <span>Business Bay, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#E5C578]" />
                <span>{CONTACT_EMAIL}</span>
              </div>
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-1.5 hover:text-[#E5C578] transition-colors text-[#F7E7CE]">
                <Phone className="w-3.5 h-3.5 text-[#E5C578]" />
                <span>+971 58 584 4656</span>
              </a>
            </div>
            <p className="text-[10px] text-slate-400">
              © 2026 Velora Heights Tourism. All rights reserved.
            </p>
          </div>
        </footer>

        {/* ================= MODAL WITH GOOGLE SHEET LOGGING ================= */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
            <div className="relative w-full max-w-lg bg-[#081f18] border border-[#C8A34A]/60 rounded-sm p-6 sm:p-8 space-y-6 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
              <button
                onClick={handleModalClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-1.5 border-b border-[#C8A34A]/20 pb-4">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#E5C578] font-bold block">
                  RESERVE YOUR SEAT
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                  Dubai Opportunities Closer to Home
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Exclusive VIP advisory. Confirmation details will be delivered via Email.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <CheckCircle2 className="w-14 h-14 text-[#C8A34A] mx-auto" />
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-2xl text-white">Registration Confirmed</h4>
                    <p className="text-xs text-slate-300 font-light leading-relaxed max-w-sm mx-auto">
                      Thank you for submitting your details. Your registration has been saved to our sheet, and our advisory team will follow up directly.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleModalClose}
                    className="bg-[#DFC07B] hover:bg-[#ebd296] text-[#071713] font-bold text-xs uppercase tracking-[0.2em] px-8 py-3 rounded-sm transition-all shadow-md cursor-pointer mt-2"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <label className="text-slate-200 font-medium tracking-wide">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#C8A34A] absolute left-3 top-3 pointer-events-none" />
                      <input
                        required
                        type="text"
                        placeholder="Enter your name"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full bg-[#051410] border border-[#C8A34A]/30 rounded-sm pl-9 pr-3.5 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#E5C578] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-slate-200 font-medium tracking-wide">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#C8A34A] absolute left-3 top-3 pointer-events-none" />
                        <input
                          required
                          type="email"
                          placeholder="you@domain.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-[#051410] border border-[#C8A34A]/30 rounded-sm pl-9 pr-3.5 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#E5C578] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-slate-200 font-medium tracking-wide">
                        WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#C8A34A] absolute left-3 top-3 pointer-events-none" />
                        <input
                          required
                          type="tel"
                          placeholder="+44 7123 456789"
                          value={formData.whatsapp}
                          onChange={(e) =>
                            setFormData({ ...formData, whatsapp: e.target.value })
                          }
                          className="w-full bg-[#051410] border border-[#C8A34A]/30 rounded-sm pl-9 pr-3.5 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#E5C578] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-slate-200 font-medium tracking-wide">
                        Country of Residence
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        className="w-full bg-[#051410] border border-[#C8A34A]/30 rounded-sm px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-[#E5C578] transition-colors"
                      >
                        <option>United Kingdom</option>
                        <option>United Arab Emirates</option>
                        <option>India</option>
                        <option>United States</option>
                        <option>Europe</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-slate-200 font-medium tracking-wide">
                        Target Investment
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            budget: e.target.value,
                          })
                        }
                        className="w-full bg-[#051410] border border-[#C8A34A]/30 rounded-sm px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-[#E5C578] transition-colors"
                      >
                        <option>Under AED 1,000,000</option>
                        <option>AED 1M - 2M (Golden Visa Entry)</option>
                        <option>AED 2M - 5M</option>
                        <option>AED 5M+</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#DFC07B] hover:bg-[#ebd296] text-[#071713] font-bold py-3.5 rounded-sm uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_4px_20px_rgba(200,163,74,0.3)] cursor-pointer mt-2 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#071713]" />
                        <span>Securing Your Seat...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm Registration</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1.5 pt-1 font-light">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#E5C578]" />
                    <span>Your contact information is strictly confidential.</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}