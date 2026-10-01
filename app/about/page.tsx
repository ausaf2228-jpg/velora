"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MessageSquare,
  ArrowRight,
  TrendingUp,
  Building2,
  Users,
  ShieldCheck,
  Award,
  Globe,
  Briefcase,
  Compass,
  FileCheck,
  Plane,
  HeartPulse,
  GraduationCap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import LuxuryBackground from "@/components/LuxuryBackground";

const WHATSAPP_URL =
  "https://wa.me/971503784656?text=Hello%20Velora%20Heights,%20I%20would%20like%20to%20speak%20with%20your%20advisory%20team.";

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

export default function AboutPage() {
  const [showTrainingPrograms, setShowTrainingPrograms] = useState(false);

  return (
    <div className="min-h-screen bg-[#061813] text-[#F1F5F9] font-sans selection:bg-[#C8A34A] selection:text-[#061813] flex flex-col">
      {/* Dynamic Luxury Background */}
      <LuxuryBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* ================= TOP NAVIGATION BAR ================= */}
        <header className="border-b border-[#C8A34A]/25 bg-[#061813]/95 sticky top-0 z-40 backdrop-blur-md px-6 lg:px-12 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/real-estate" className="flex items-center cursor-pointer">
              <img
                src="/logom.png"
                alt="Velora Heights Logo"
                className="h-9 sm:h-11 w-auto object-contain brightness-110"
              />
            </Link>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.25em] text-[#C8A34A] border-l border-[#C8A34A]/30 pl-4 font-medium">
              About Velora Heights
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/real-estate"
              className="inline-flex items-center space-x-1.5 text-xs text-[#E5C578] hover:text-[#FFF] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Real Estate</span>
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex gold-gradient-bg text-[#0D2B22] font-semibold text-xs px-4 py-2 rounded-sm items-center gap-1.5 shadow-md hover:brightness-110 transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </header>

        {/* ================= HERO SECTION ================= */}
        <section className="relative px-6 lg:px-16 pt-16 pb-20 max-w-7xl mx-auto w-full border-b border-[#C8A34A]/20">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C8A34A] font-bold block">
              ABOUT US
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#FFF] leading-[1.12]">
              Real Estate, <br />
              Built Around <span className="text-[#E5C578] italic font-normal">Better Decisions.</span>
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light pt-2 max-w-2xl">
              Velora Heights Real Estate is a Dubai-based real estate advisory firm helping local and
              international clients identify, evaluate, and invest in high-performing property opportunities. We
              focus on off-plan investments, luxury residences, and selected secondary assets, supported by verified
              market intelligence, transparency, and fiduciary guidance.
            </p>
          </div>
        </section>

        {/* ================= LIGHT TEAM SECTION ================= */}
        <section className="bg-[#FAF7F2] text-[#1E2922] py-20 px-6 lg:px-16">
          <div className="max-w-7xl mx-auto space-y-14">
            {/* Header */}
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#A67C2E] font-bold block">
                OUR TEAM
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#162720]">Meet Our Team</h2>
              <p className="text-xs sm:text-sm text-[#4A5D53] max-w-2xl mx-auto font-light">
                Four professionals, one shared vision — helping you make smarter, higher-yield property decisions in Dubai.
              </p>
            </div>

            {/* 2x2 Grid of Team Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.name}
                  className="bg-[#FFFFFF] rounded-sm p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-[#E7DFD3] transition-all hover:shadow-[0_8px_30px_rgba(166,124,46,0.12)]"
                >
                  {/* Circular Avatar */}
                  <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-[#D8C7A5] mb-5 shadow-inner bg-[#EDE6DC]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover ${member.imagePosition}`}
                    />
                  </div>

                  {/* Name & Role */}
                  <h3 className="font-serif text-2xl text-[#162720] font-semibold">{member.name}</h3>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#A67C2E] font-bold mt-1 mb-4">
                    {member.role}
                  </span>

                  {/* Bio */}
                  <p className="text-xs text-[#526259] leading-relaxed font-light mb-6">
                    {member.bio}
                  </p>

                  {/* Key Pillars */}
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

                  {/* Languages Row */}
                  <div className="mt-auto w-full pt-3 border-t border-[#EAE3D6]/70 flex items-center justify-center gap-1.5 text-[11px] text-[#697A70]">
                    <Globe className="w-3.5 h-3.5 text-[#A67C2E]" />
                    <span className="font-semibold text-[#304239]">Languages:</span>
                    <span>{member.languages.join("  |  ")}</span>
                  </div>

                  {/* Marie Shermila Expandable Corporate Profile Trigger */}
                  {member.name === "Marie Shermila" && (
                    <button
                      onClick={() => setShowTrainingPrograms(!showTrainingPrograms)}
                      className="mt-4 text-[11px] text-[#A67C2E] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer pt-2"
                    >
                      </button>
                  )}
                </div>
              ))}
            </div>

            {/* ================= MARIE'S EXPANDABLE EXECUTIVE PROFILE ================= */}
            {showTrainingPrograms && (
              <div className="bg-[#FFFFFF] border-2 border-[#D8C7A5] rounded-sm p-8 sm:p-12 space-y-10 animate-in fade-in-50 duration-500 shadow-xl">
                <div className="space-y-3 border-b border-[#EAE3D6] pb-6">
                  <div className="inline-flex items-center gap-2 bg-[#FAF5EB] border border-[#D8C7A5] px-3 py-1 rounded-full text-xs text-[#A67C2E] font-medium">
                    <Award className="w-3.5 h-3.5" />
                    <span>Executive Profile</span>
                  </div>
                  <h3 className="font-serif text-3xl text-[#162720]">About Marie Shermila</h3>
                  <p className="text-xs uppercase tracking-widest text-[#A67C2E] font-bold">
                    Empowering Professionals. Elevating Organizations.
                  </p>
                  <p className="text-xs sm:text-sm text-[#4A5D53] leading-relaxed font-light">
                    Marie Shermila is an international corporate trainer, executive coach, and business strategist with a proven track record across the UAE, Qatar, Sri Lanka, and the UK. With leadership experience spanning high-end aviation, healthcare, real estate, and business development, she delivers high-impact training programs that bridge the gap between technical expertise and human performance.
                  </p>
                </div>

                {/* Training Modules Grid */}
                <div className="space-y-4">
                  <h4 className="font-serif text-xl text-[#162720]">Training Sectors & Programs</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#FAF7F2] p-5 rounded-sm border border-[#E7DFD3] space-y-3">
                      <div className="flex items-center gap-2 text-[#A67C2E]">
                        <Building2 className="w-5 h-5" />
                        <h5 className="font-semibold text-xs uppercase tracking-wider text-[#162720]">
                          1. Dubai Real Estate Admin
                        </h5>
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
                        <h5 className="font-semibold text-xs uppercase tracking-wider text-[#162720]">
                          2. Aviation & Hospitality
                        </h5>
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
                        <h5 className="font-semibold text-xs uppercase tracking-wider text-[#162720]">
                          3. Healthcare Excellence
                        </h5>
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

                {/* Credentials */}
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
        </section>

        {/* ================= BOTTOM CTA BANNER ================= */}
        <section className="bg-gradient-to-r from-[#061813] via-[#09211A] to-[#061813] border-t border-[#C8A34A]/30 py-16 px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A34A] font-bold block">
              LET'S BUILD YOUR NEXT CHAPTER
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#FFF]">
              Looking to Invest in Dubai?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto pb-4">
              Speak directly with our team about your property requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto gold-gradient-bg text-[#0D2B22] font-bold px-7 py-3 rounded-sm text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-xl"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/tourism"
                className="w-full sm:w-auto border border-[#C8A34A]/70 text-[#F7E7CE] hover:bg-[#C8A34A] hover:text-[#0D2B22] px-7 py-3 rounded-sm text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}