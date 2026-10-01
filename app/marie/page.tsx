"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Building2,
  Users,
  Laptop,
  Clock,
  BarChart3,
  MessagesSquare,
  ArrowRight,
  X,
  User,
  Mail,
  Phone,
  Globe,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  Loader2,
  Briefcase,
  Compass,
  FileCheck,
  Plane,
  HeartPulse,
  GraduationCap,
  Sparkles,
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import LuxuryBackground from "@/components/LuxuryBackground";

const WHATSAPP_NUMBER = "971503784656";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  imagePosition: string;
  pillars: { icon: React.ElementType; label: string }[];
  languages: string[];
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Marie Shermila",
    role: "BUSINESS STRATEGY & OPERATIONS",
    bio: "Marie brings international leadership and business strategy experience across the UAE, Qatar, Sri Lanka, and the UK. With background spanning aviation leadership, real estate operations, and corporate capability development, she drives institutional rigor, high-performance sales training, and client excellence.",
    image: "/team/marie.jpg",
    imagePosition: "object-[50%_20%]",
    pillars: [
      { icon: Briefcase, label: "Business Strategy" },
      { icon: Users, label: "Team Development" },
      { icon: ShieldCheck, label: "Operational Excellence" },
    ],
    languages: ["English", "Tamil", "Sinhala", "Italian"],
  },
  {
    name: "Niclon Francis",
    role: "INTERNATIONAL PROPERTY INVESTMENT",
    bio: "Niclon specialises in helping international clients understand and navigate Dubai's real estate market. With direct experience at Sobha Realty, one of Dubai's leading property developers, he supports clients in identifying premium off-plan opportunities, building investment portfolios, and managing the buying process from anywhere in the world.",
    image: "/team/nick.jpg",
    imagePosition: "object-[50%_15%]",
    pillars: [
      { icon: TrendingUp, label: "Investment Strategy" },
      { icon: Building2, label: "Dubai Market Expertise" },
      { icon: ShieldCheck, label: "Client Support" },
    ],
    languages: ["English", "Tamil", "Sinhala"],
  },
  {
    name: "Vivek Sundaralingam",
    role: "SALES & CLIENT RELATIONS",
    bio: "Vivek is a results-driven sales and marketing professional with over 7 years of experience across the UAE and Gulf region. He focuses on client relationship management, lead generation, and sales transaction coordination, ensuring a smooth and transparent property acquisition journey.",
    image: "/team/vivek.jpg",
    imagePosition: "object-[50%_18%]",
    pillars: [
      { icon: Users, label: "Client Relations" },
      { icon: TrendingUp, label: "Sales & Marketing" },
      { icon: FileCheck, label: "Process Coordination" },
    ],
    languages: ["English", "Tamil", "Sinhala"],
  },
  {
    name: "Daniel Labrooy",
    role: "CLIENT EXPERIENCE & SUPPORT",
    bio: "Daniel brings strong customer service and luxury hospitality experience, with a background in guest relations and administrative coordination. He is known for clear communication, proactive problem-solving, and a client-first approach across every transaction touchpoint.",
    image: "/team/daniel.jpg",
    imagePosition: "object-[50%_12%]",
    pillars: [
      { icon: Users, label: "Client Support" },
      { icon: Compass, label: "Guest Relations & Hospitality" },
      { icon: FileCheck, label: "Administrative Coordination" },
    ],
    languages: ["English", "Tamil", "Sinhala", "Chinese"],
  },
];

export default function LandingPage1() {
  const [activeNav, setActiveNav] = useState<"webinar" | "about" | "contact">("webinar");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showTrainingPrograms, setShowTrainingPrograms] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    country: "United Kingdom",
    investmentBudget: "AED 1M - 2M (Golden Visa Entry)",
  });

  const scrollToSection = (id: string, navKey: "webinar" | "about" | "contact") => {
    setActiveNav(navKey);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalLoading(true);

    try {
      const res = await fetch("/api/webinar-register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    ...formData,
    source: "webinar",
  }),
});

      if (!res.ok) {
        throw new Error("Failed to record entry");
      }

      setFormSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        whatsapp: "",
        country: "United Kingdom",
        investmentBudget: "AED 1M - 2M (Golden Visa Entry)",
      });
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Submission encountered an issue. Please try again.");
    } finally {
      setModalLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#071713] text-[#f4efe6] font-sans selection:bg-[#C8A34A] selection:text-[#071713] flex flex-col justify-between overflow-x-hidden scroll-smooth">
      {/* Background Ambience Layer */}
      <LuxuryBackground />

      {/* ========================================================================= */}
      {/* GLOBAL STICKY HEADER                                                      */}
      {/* ========================================================================= */}
      <header className="fixed top-0 inset-x-0 z-50 px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between border-b border-[#C8A34A]/20 bg-[#061813]/90 backdrop-blur-md transition-all">
        <Link href="/" className="flex items-center cursor-pointer shrink-0">
  <img
    src="/logom.png"
    alt="Velora Heights Logo"
    className="h-11 sm:h-12 w-auto max-h-12 object-contain brightness-110 drop-shadow-md"
  />
</Link>

        {/* Dynamic Nav: Home Link + Smooth Scroll Buttons */}
        <nav className="flex items-center space-x-6 sm:space-x-8 text-[11px] uppercase tracking-[0.22em] text-slate-300 font-medium">
          {/* Home Button linking to / (localhost:3000) */}
          <Link
            href="/"
            className="hover:text-[#E9C377] transition-colors cursor-pointer pb-1"
          >
            Home
          </Link>

          <button
            onClick={() => scrollToSection("webinar-section", "webinar")}
            className={`transition-colors cursor-pointer pb-1 ${
              activeNav === "webinar"
                ? "text-[#E9C377] border-b-2 border-[#C8A34A]"
                : "hover:text-[#E9C377]"
            }`}
          >
            The Webinar
          </button>
          <button
            onClick={() => scrollToSection("about-section", "about")}
            className={`transition-colors cursor-pointer pb-1 ${
              activeNav === "about"
                ? "text-[#E9C377] border-b-2 border-[#C8A34A]"
                : "hover:text-[#E9C377]"
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact-section", "contact")}
            className={`transition-colors cursor-pointer pb-1 ${
              activeNav === "contact"
                ? "text-[#E9C377] border-b-2 border-[#C8A34A]"
                : "hover:text-[#E9C377]"
            }`}
          >
            Contact
          </button>
        </nav>

        {/* WhatsApp Fast Action */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex gold-gradient-bg text-[#071713] font-bold px-3.5 py-1.5 rounded-sm text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md items-center gap-1.5 cursor-pointer"
          >
            <MessagesSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* SECTION 1: THE WEBINAR (HERO + PANORAMA + 4 VALUE CARDS + CITY OF OPP)    */}
      {/* ========================================================================= */}
      <section id="webinar-section" className="relative pt-20">
        {/* Full-bleed Skyline & Balcony Backdrop */}
        <div className="relative min-h-[92vh] flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=85&w=2600&auto=format&fit=crop"
              alt="Dubai Skyline and Terrace Balcony"
              className="w-full h-full object-cover object-[78%_center] lg:object-center brightness-[0.72] contrast-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071713]/95 via-[#071713]/70 to-[#071713]/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#051310]/80 via-transparent to-[#040e0b]" />
          </div>

          <div className="relative z-20 px-6 sm:px-10 lg:px-16 py-16 max-w-7xl mx-auto w-full my-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Headline Area */}
              <div className="lg:col-span-8 space-y-7 max-w-2xl">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.38em] text-[#C8A34A] font-semibold block">
                  EXCLUSIVE ONLINE REAL ESTATE WEBINAR
                </span>

                <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white font-normal leading-[1.04] tracking-tight">
                  Dubai <br />
                  Opportunities <br />
                  <span className="italic text-[#E5C578]">
                    Closer to Home.
                  </span>
                </h1>

                <p className="text-xs sm:text-sm text-slate-200/90 font-light leading-relaxed max-w-lg">
                  Join Velora Heights Real Estate for an exclusive online session. Discover prime investment
                  opportunities in Dubai with expert insights from the comfort of your home.
                </p>

                {/* 3 Outlined Feature Columns with vertical dividers */}
                <div className="grid grid-cols-3 max-w-md pt-2">
                  <div className="flex flex-col items-center sm:items-start space-y-2 border-r border-[#C8A34A]/30 pr-4">
                    <TrendingUp className="w-5 h-5 text-[#E5C578] stroke-[1.4]" />
                    <span className="text-[11px] uppercase tracking-wider text-[#F7E7CE] font-light leading-snug">
                      Market <br /> Insights
                    </span>
                  </div>

                  <div className="flex flex-col items-center sm:items-start space-y-2 border-r border-[#C8A34A]/30 px-4">
                    <Building2 className="w-5 h-5 text-[#E5C578] stroke-[1.4]" />
                    <span className="text-[11px] uppercase tracking-wider text-[#F7E7CE] font-light leading-snug">
                      Exclusive <br /> Projects
                    </span>
                  </div>

                  <div className="flex flex-col items-center sm:items-start space-y-2 pl-4">
                    <Users className="w-5 h-5 text-[#E5C578] stroke-[1.4]" />
                    <span className="text-[11px] uppercase tracking-wider text-[#F7E7CE] font-light leading-snug">
                      Expert <br /> Guidance
                    </span>
                  </div>
                </div>

                {/* Action Button & Live Tags */}
                <div className="pt-4 space-y-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#DFC07B] hover:bg-[#ebd296] text-[#071713] font-semibold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-sm transition-all duration-300 flex items-center gap-3 shadow-[0_6px_30px_rgba(200,163,74,0.35)] cursor-pointer"
                  >
                    <span>Register for the Webinar</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-[10px] tracking-[0.3em] uppercase text-slate-300 font-light flex items-center gap-3 pt-1">
                    <span>LIVE</span>
                    <span className="text-[#C8A34A]/60">|</span>
                    <span>INTERACTIVE</span>
                    <span className="text-[#C8A34A]/60">|</span>
                    <span>EXPERT-LED</span>
                  </div>
                </div>
              </div>

              {/* Right Vision Statement */}
              <div className="lg:col-span-4 lg:text-right hidden lg:flex flex-col items-end pt-12 space-y-2">
                <div className="w-10 h-[1px] bg-[#C8A34A]/60 mb-2" />
                <p className="font-serif italic text-2xl text-[#E5C578] leading-tight drop-shadow-md">
                  Same <br /> Vision
                </p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-200 font-light drop-shadow-md">
                  A Brighter <br /> Tomorrow
                </p>
              </div>
            </div>
          </div>

          <div className="h-10 relative z-10" />
        </div>

        {/* 4 Feature Value Pillars Strip */}
        <div className="bg-[#030d0a] border-y border-[#C8A34A]/25 py-12 px-6 lg:px-14 relative z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-3 group border-b sm:border-b-0 sm:border-r border-[#C8A34A]/15 pb-6 sm:pb-0">
              <div className="w-12 h-12 rounded-full border border-[#C8A34A]/60 bg-[#071914] flex items-center justify-center text-[#E5C578] shadow-md group-hover:scale-105 transition-transform">
                <Laptop className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-base text-[#F7E7CE]">Join from Anywhere</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed max-w-[210px]">
                Attend online, from the comfort of your home
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 group border-b sm:border-b-0 lg:border-r border-[#C8A34A]/15 pb-6 sm:pb-0">
              <div className="w-12 h-12 rounded-full border border-[#C8A34A]/60 bg-[#071914] flex items-center justify-center text-[#E5C578] shadow-md group-hover:scale-105 transition-transform">
                <Clock className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-base text-[#F7E7CE]">Save Time</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed max-w-[210px]">
                Get key insights in one session
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 group border-b sm:border-b-0 sm:border-r border-[#C8A34A]/15 pb-6 sm:pb-0">
              <div className="w-12 h-12 rounded-full border border-[#C8A34A]/60 bg-[#071914] flex items-center justify-center text-[#E5C578] shadow-md group-hover:scale-105 transition-transform">
                <BarChart3 className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-base text-[#F7E7CE]">Market Clarity</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed max-w-[210px]">
                Understand opportunities with expert analysis
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 group">
              <div className="w-12 h-12 rounded-full border border-[#C8A34A]/60 bg-[#071914] flex items-center justify-center text-[#E5C578] shadow-md group-hover:scale-105 transition-transform">
                <MessagesSquare className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-base text-[#F7E7CE]">Direct Expert Access</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed max-w-[210px]">
                Live Q&A with our team
              </p>
            </div>
          </div>
        </div>

        {/* City of Opportunities Architectural Sketch */}
        <div className="bg-[#051410] px-6 lg:px-14 py-20 max-w-7xl mx-auto w-full relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.32em] text-[#C8A34A] font-medium block">
                A GLOBAL CITY OF OPPORTUNITIES
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white leading-tight">
                Your Next Chapter <br />
                <span className="text-[#E5C578] italic font-normal">Starts Here.</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xl">
                From iconic developments to high-growth communities, Dubai continues to create opportunities for
                global investors. Let's explore what's possible — together.
              </p>
              <div className="w-16 h-[1.5px] bg-[#C8A34A]/60 pt-2" />
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end opacity-85">
              <svg
                viewBox="0 0 400 200"
                className="w-full max-w-md stroke-[#C8A34A] fill-none"
                strokeWidth="1.2"
              >
                <path d="M 230 190 L 230 40 L 232 40 L 232 10 L 233 10 L 233 40 L 235 40 L 235 190" />
                <path d="M 225 190 L 225 70 L 230 65 L 235 65 L 240 70 L 240 190" />
                <path d="M 220 190 L 220 100 L 225 95 L 240 95 L 245 100 L 245 190" />
                <path d="M 170 190 L 170 110 L 185 110 L 185 190" />
                <path d="M 190 190 L 190 85 L 205 75 L 212 85 L 212 190" />
                <path d="M 255 190 L 255 120 L 265 110 L 275 120 L 275 190" />
                <path d="M 285 190 L 285 140 L 300 140 L 300 190" />
                <line x1="20" y1="190" x2="380" y2="190" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: ABOUT US & MEET OUR TEAM                                       */}
      {/* ========================================================================= */}
      <section id="about-section" className="relative z-20 pt-16">
        {/* About Editorial Header */}
        <div className="bg-[#071d17] border-t border-[#C8A34A]/20 px-6 lg:px-16 py-16 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C8A34A] font-bold block">
              ABOUT US
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif text-[#FFF] leading-[1.12]">
              Real Estate, <br />
              Built Around <span className="text-[#E5C578] italic font-normal">Better Decisions.</span>
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light pt-2 max-w-2xl">
              Velora Heights Real Estate is a Dubai-based advisory firm helping local and international clients
              identify, evaluate, and invest in high-performing property opportunities[cite: 2]. We focus on off-plan
              investments, luxury residences, and selected secondary assets, supported by verified market
              intelligence, transparency, and fiduciary guidance[cite: 2].
            </p>
          </div>
        </div>

        {/* Light Warm-Stone Team Grid */}
        <div className="bg-[#FAF7F2] text-[#1E2922] py-20 px-6 lg:px-16 border-y border-[#EAE3D6]">
          <div className="max-w-7xl mx-auto space-y-14">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#A67C2E] font-bold block">
                OUR TEAM
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif text-[#162720]">Meet Our Team</h3>
              <p className="text-xs sm:text-sm text-[#4A5D53] max-w-2xl mx-auto font-light">
                Four professionals, one shared vision — helping you make smarter, higher-yield property decisions in Dubai[cite: 2].
              </p>
            </div>

            {/* 2x2 Grid of Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.name}
                  className="bg-[#FFFFFF] rounded-sm p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-[#E7DFD3] transition-all hover:shadow-[0_8px_30px_rgba(166,124,46,0.12)]"
                >
                  <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-[#D8C7A5] mb-5 shadow-inner bg-[#EDE6DC]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover ${member.imagePosition}`}
                    />
                  </div>

                  <h4 className="font-serif text-2xl text-[#162720] font-semibold">{member.name}</h4>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#A67C2E] font-bold mt-1 mb-4">
                    {member.role}
                  </span>

                  <p className="text-xs text-[#526259] leading-relaxed font-light mb-6">
                    {member.bio}
                  </p>

                  <div className="grid grid-cols-3 gap-2 w-full pt-4 border-t border-[#EAE3D6] mb-6">
                    {member.pillars.map((pillar, pIdx) => (
                      <div key={pIdx} className="flex flex-col items-center space-y-1.5 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#FAF5EB] border border-[#D8C7A5]/70 flex items-center justify-center text-[#A67C2E]">
                          <pillar.icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-medium text-[#2C3E35] leading-tight">
                          {pillar.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto w-full pt-3 border-t border-[#EAE3D6]/70 flex items-center justify-center gap-1.5 text-[11px] text-[#697A70]">
                    <Globe className="w-3.5 h-3.5 text-[#A67C2E]" />
                    <span className="font-semibold text-[#304239]">Languages:</span>
                    <span>{member.languages.join("  |  ")}</span>
                  </div>

                  {/* Marie Shermila Expandable Tray Trigger */}
                  {member.name === "Marie Shermila" && (
                    <button
                      onClick={() => setShowTrainingPrograms(!showTrainingPrograms)}
                      className="mt-4 text-[11px] text-[#A67C2E] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer pt-2"
                    >
                      <span>{showTrainingPrograms ? "Hide" : "View"} Executive & Training Portfolio</span>
                      {showTrainingPrograms ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Marie's Detailed Training Curriculum Drawer */}
            {showTrainingPrograms && (
              <div className="bg-[#FFFFFF] border-2 border-[#D8C7A5] rounded-sm p-8 sm:p-12 space-y-10 animate-in fade-in-50 duration-500 shadow-xl">
                <div className="space-y-3 border-b border-[#EAE3D6] pb-6">
                  <div className="inline-flex items-center gap-2 bg-[#FAF5EB] border border-[#D8C7A5] px-3 py-1 rounded-full text-xs text-[#A67C2E] font-medium">
                    <Award className="w-3.5 h-3.5" />
                    <span>Executive Profile</span>
                  </div>
                  <h4 className="font-serif text-3xl text-[#162720]">About Marie Shermila</h4>
                  <p className="text-xs uppercase tracking-widest text-[#A67C2E] font-bold">
                    Empowering Professionals. Elevating Organizations.
                  </p>
                  <p className="text-xs sm:text-sm text-[#4A5D53] leading-relaxed font-light">
                    Marie Shermila is an international corporate trainer, executive coach, and business strategist with a proven track record across the UAE, Qatar, Sri Lanka, and the UK. With leadership experience spanning high-end aviation, healthcare, real estate, and business development, she delivers high-impact training programs that bridge the gap between technical expertise and human performance.
                  </p>
                </div>

                <div className="space-y-4">
                  <h5 className="font-serif text-xl text-[#162720]">Training Sectors & Programs</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#FAF7F2] p-5 rounded-sm border border-[#E7DFD3] space-y-3">
                      <div className="flex items-center gap-2 text-[#A67C2E]">
                        <Building2 className="w-5 h-5" />
                        <h6 className="font-semibold text-xs uppercase tracking-wider text-[#162720]">
                          1. Dubai Real Estate Admin
                        </h6>
                      </div>
                      <p className="text-[11px] text-[#526259]">Specialized curriculum built for the fast-paced Dubai property market.</p>
                      <ul className="text-xs text-[#304239] space-y-1.5 list-disc pl-4 font-light">
                        <li>Legal & Compliance: RERA, DLD, Ejari & contracts</li>
                        <li>Operations: CRM workflow and pipeline tracking</li>
                        <li>Sales Enablement: Client protocol & negotiations</li>
                      </ul>
                    </div>

                    <div className="bg-[#FAF7F2] p-5 rounded-sm border border-[#E7DFD3] space-y-3">
                      <div className="flex items-center gap-2 text-[#A67C2E]">
                        <Plane className="w-5 h-5" />
                        <h6 className="font-semibold text-xs uppercase tracking-wider text-[#162720]">
                          2. Aviation & Hospitality
                        </h6>
                      </div>
                      <p className="text-[11px] text-[#526259]">Drawing on over a decade of senior international airline experience (former Cabin Services Director at Qatar Airways).</p>
                      <ul className="text-xs text-[#304239] space-y-1.5 list-disc pl-4 font-light">
                        <li>Cabin crew interview mastery and CV positioning</li>
                        <li>Premium grooming and diplomatic etiquette</li>
                        <li>Service recovery and crisis communication</li>
                      </ul>
                    </div>

                    <div className="bg-[#FAF7F2] p-5 rounded-sm border border-[#E7DFD3] space-y-3">
                      <div className="flex items-center gap-2 text-[#A67C2E]">
                        <HeartPulse className="w-5 h-5" />
                        <h6 className="font-semibold text-xs uppercase tracking-wider text-[#162720]">
                          3. Healthcare Excellence
                        </h6>
                      </div>
                      <p className="text-[11px] text-[#526259]">Tailored for premier clinics and clinical networks.</p>
                      <ul className="text-xs text-[#304239] space-y-1.5 list-disc pl-4 font-light">
                        <li>Patient-facing communication protocols</li>
                        <li>Executive reception desk streamlining</li>
                        <li>Operational harmony under high pressure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#EAE3D6] space-y-3">
                  <div className="flex items-center gap-2 text-[#A67C2E]">
                    <GraduationCap className="w-4 h-4" />
                    <h5 className="font-serif text-lg text-[#162720]">Credentials & Background</h5>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-[#3A4B42]">
                    <div className="p-3 bg-[#FAF7F2] rounded border border-[#E7DFD3]">
                      <strong>Doctor of Business Administration (Candidate)</strong>
                      <p className="text-[#697A70] text-[11px]">Lincoln University</p>
                    </div>
                    <div className="p-3 bg-[#FAF7F2] rounded border border-[#E7DFD3]">
                      <strong>Master of Business Administration (MBA)</strong>
                      <p className="text-[#697A70] text-[11px]">Australian Institute of Business</p>
                    </div>
                    <div className="p-3 bg-[#FAF7F2] rounded border border-[#E7DFD3]">
                      <strong>Former Cabin Services Director</strong>
                      <p className="text-[#697A70] text-[11px]">Qatar Airways</p>
                    </div>
                    <div className="p-3 bg-[#FAF7F2] rounded border border-[#E7DFD3]">
                      <strong>Former Head of HR & Quality Control</strong>
                      <p className="text-[#697A70] text-[11px]">Elite Bricks Real Estate, Dubai</p>
                    </div>
                    <div className="p-3 bg-[#FAF7F2] rounded border border-[#E7DFD3]">
                      <strong>Former Head of Business Development</strong>
                      <p className="text-[#697A70] text-[11px]">Durdans Hospital</p>
                    </div>
                    <div className="p-3 bg-[#FAF7F2] rounded border border-[#E7DFD3]">
                      <strong>Member (MABE)</strong>
                      <p className="text-[#697A70] text-[11px]">Association of Business Executives, UK</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: CONTACT & QUICK ENQUIRY                                        */}
      {/* ========================================================================= */}
      <section id="contact-section" className="relative z-20 bg-[#061813] py-20 px-6 lg:px-16 border-t border-[#C8A34A]/25">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#09211A] border border-[#C8A34A]/30 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A34A]" />
              <span className="text-xs text-[#F7E7CE] tracking-wider uppercase font-medium">
                VIP Advisory Concierge
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#FFF]">Contact Us</h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
              We are here to help you plan your Dubai investment journey, schedule property viewings, or arrange a private consultation.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#09211A] border border-[#C8A34A]/40 hover:border-[#E5C578] p-7 rounded-sm space-y-3 transition-all duration-300 shadow-xl group text-center"
            >
              <div className="w-12 h-12 rounded-full border border-[#C8A34A] bg-[#061813] flex items-center justify-center text-[#E5C578] mx-auto group-hover:scale-105 transition-transform">
                <MessagesSquare className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg text-[#F7E7CE] font-semibold group-hover:text-white transition-colors">
                Chat on WhatsApp
              </h3>
              <p className="text-xs text-slate-300 font-mono">+971585844656</p>
              <span className="inline-flex items-center gap-1 text-[11px] text-[#E5C578] font-semibold pt-1">
                <span>Instant Response</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="mailto:info@veloraheights.ae"
              className="bg-[#09211A] border border-[#C8A34A]/40 hover:border-[#E5C578] p-7 rounded-sm space-y-3 transition-all duration-300 shadow-xl group text-center"
            >
              <div className="w-12 h-12 rounded-full border border-[#C8A34A] bg-[#061813] flex items-center justify-center text-[#E5C578] mx-auto group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg text-[#F7E7CE] font-semibold group-hover:text-white transition-colors">
                Email Us
              </h3>
              <p className="text-xs text-slate-300 font-mono">info@veloraheights.ae</p>
              <span className="inline-flex items-center gap-1 text-[11px] text-[#E5C578] font-semibold pt-1">
                <span>Send Brief</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          {/* Quick Enquiry Trigger Button */}
          <div className="text-center pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="gold-gradient-bg text-[#0D2B22] font-bold text-xs tracking-wider uppercase px-9 py-4 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-2xl"
            >
              Open Quick Enquiry
            </button>
          </div>

          {/* Office Details Bar */}
          <div className="bg-[#09211A]/60 border border-[#C8A34A]/25 rounded-sm p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#C8A34A]/20">
            <div className="space-y-1.5 pt-4 md:pt-0">
              <span className="text-xs uppercase tracking-wider text-[#F7E7CE] font-semibold block">Location</span>
              <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                Downtown,Dubai
              </p>
            </div>
            <div className="space-y-1.5 pt-4 md:pt-0">
              <span className="text-xs uppercase tracking-wider text-[#F7E7CE] font-semibold block">Hours</span>
              <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                Mon – Sat: 9:00 AM – 7:00 PM GST
              </p>
            </div>
            <div className="space-y-2 pt-4 md:pt-0 flex flex-col items-center justify-center">
              <img
                src="/logom.png"
                alt="Velora Heights"
                className="h-8 w-auto object-contain brightness-110"
              />
              <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                Two Experiences. A Brighter Tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* GLOBAL FOOTER                                                             */}
      {/* ========================================================================= */}
      <footer className="border-t border-[#C8A34A]/25 bg-[#040e0b] px-6 lg:px-14 py-8 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <span className="font-serif italic text-xl text-[#E5C578]">Velora Heights</span>
            <div className="border-l border-[#C8A34A]/30 pl-4 text-[9px] uppercase tracking-[0.25em] text-slate-400">
              <p>MORE THAN REAL ESTATE.</p>
              <p>A BRIGHTER TOMORROW.</p>
            </div>
          </div>

          <div className="text-[9px] uppercase tracking-[0.3em] text-slate-400 flex flex-wrap items-center gap-3 font-light">
            <span>DUBAI</span>
            <span className="text-[#C8A34A]/60">|</span>
            <span>GLOBAL INVESTORS</span>
            <span className="text-[#C8A34A]/60">|</span>
            <span>STRONGER TOMORROWS</span>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* GOOGLE SHEET LOGGING ENQUIRY / WEBINAR MODAL                              */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg bg-[#081f18] border border-[#C8A34A]/60 rounded-sm p-6 sm:p-8 space-y-6 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setFormSubmitted(false);
              }}
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
                Connect with our senior advisory desk. Live credentials will be confirmed via Email.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <CheckCircle2 className="w-14 h-14 text-[#C8A34A] mx-auto" />
                <div className="space-y-1.5">
                  <h4 className="font-serif text-2xl text-white">Registration Confirmed</h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed max-w-sm mx-auto">
                    Thank you for submitting your details. Your registration has been saved, and our team will follow up directly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setFormSubmitted(false);
                  }}
                  className="bg-[#DFC07B] hover:bg-[#ebd296] text-[#071713] font-bold text-xs uppercase tracking-[0.2em] px-8 py-3 rounded-sm transition-all shadow-md cursor-pointer mt-2"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-4 text-xs">
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
                      value={formData.investmentBudget}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          investmentBudget: e.target.value,
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
                  disabled={modalLoading}
                  className="w-full bg-[#DFC07B] hover:bg-[#ebd296] text-[#071713] font-bold py-3.5 rounded-sm uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_4px_20px_rgba(200,163,74,0.3)] cursor-pointer mt-2 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {modalLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
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
  );
}