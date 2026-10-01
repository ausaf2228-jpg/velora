"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  ArrowRight,
  User,
  ShieldCheck,
  X,
  Clock,
  Sparkles,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import LuxuryBackground from "@/components/LuxuryBackground";

const WHATSAPP_NUMBER = "971503784656";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    country: "United Kingdom",
    investmentBudget: "AED 1M - 2M (Golden Visa Entry)",
  });

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFormSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Direct call to your working Google Sheet API route
      const res = await fetch("/api/webinar-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
        investmentBudget: "AED 1M - 2M (Golden Visa Entry)",
      });
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Submission encountered an issue. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0D2B22] text-[#F1F5F9] font-sans antialiased selection:bg-[#C8A34A] selection:text-[#0D2B22]">
      {/* Background Ambience Layer */}
      <LuxuryBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* ================= TOP UTILITY BAR ================= */}
        <div className="bg-[#061813] border-b border-[#C8A34A]/25 py-2.5 px-4 sm:px-8 lg:px-14 text-xs text-slate-300 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-[11px] text-[#E5C578] hover:text-[#FFF] font-semibold uppercase tracking-wider"
            >
              Switch Experience
            </Link>
            <span className="tracking-widest uppercase text-[10px] text-[#C8A34A] border-l border-[#C8A34A]/30 pl-4 hidden sm:inline">
              Dubai Premier Investor Advisory & Desk
            </span>
          </div>
          <div className="flex items-center space-x-6 text-[11px]">
            <span className="flex items-center gap-1.5 text-slate-200 hidden md:flex">
              <MapPin className="w-3.5 h-3.5 text-[#C8A34A]" /> Downtown,Dubai,UAE
            </span>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="flex items-center gap-1.5 text-[#F7E7CE] hover:text-[#C8A34A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A34A]" />
              <span>+971585844656</span>
            </a>
          </div>
        </div>

        {/* ================= UNIVERSAL TOP HEADER ================= */}
        <header className="border-b border-[#C8A34A]/25 bg-[#061813]/95 sticky top-0 z-40 backdrop-blur-md px-4 sm:px-8 lg:px-14 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Replaced logo with logom.png */}
            <Link href="/" className="flex items-center cursor-pointer">
              <img
                src="/logom.png"
                alt="Velora Heights Logo"
                className="h-10 sm:h-12 w-auto object-contain brightness-110 drop-shadow-md"
              />
            </Link>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-bg text-[#0D2B22] font-bold px-4 py-2 rounded-sm text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </header>

        {/* ================= MAIN CONTACT CONTENT ================= */}
        <main className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-12 w-full flex-1">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#09211A] border border-[#C8A34A]/30 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A34A]" />
              <span className="text-xs text-[#F7E7CE] tracking-wider uppercase font-medium">
                VIP Advisory Concierge
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#FFF]">Contact Us</h1>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
              We are here to help you plan your Dubai investment journey, schedule property viewings, or arrange a private consultation.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#09211A] border border-[#C8A34A]/40 hover:border-[#E5C578] p-7 rounded-sm space-y-3 transition-all duration-300 shadow-xl group text-center"
            >
              <div className="w-12 h-12 rounded-full border border-[#C8A34A] bg-[#061813] flex items-center justify-center text-[#E5C578] mx-auto group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" />
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

            {/* Email */}
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

          {/* Quick Enquiry Action Button */}
          <div className="text-center pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="gold-gradient-bg text-[#0D2B22] font-bold text-xs tracking-wider uppercase px-9 py-4 rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-2xl"
            >
              Open Quick Enquiry
            </button>
          </div>

          {/* Office & Advisory Details Strip */}
          <div className="bg-[#09211A]/60 border border-[#C8A34A]/25 rounded-sm p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#C8A34A]/20">
            <div className="space-y-1.5 pt-4 md:pt-0">
              <MapPin className="w-5 h-5 text-[#E5C578] mx-auto" />
              <h4 className="text-xs uppercase tracking-wider text-[#F7E7CE] font-semibold">Location</h4>
              <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                Downtown,Dubai,UAE
              </p>
            </div>
            <div className="space-y-1.5 pt-4 md:pt-0">
              <Clock className="w-5 h-5 text-[#E5C578] mx-auto" />
              <h4 className="text-xs uppercase tracking-wider text-[#F7E7CE] font-semibold">Hours</h4>
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
        </main>

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
                <span>info@veloraheights.ae</span>
              </div>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="flex items-center gap-1.5 hover:text-[#E5C578] transition-colors text-[#F7E7CE]"
              >
                <Phone className="w-3.5 h-3.5 text-[#E5C578]" />
                <span>+971585844656</span>
              </a>
            </div>
            <p className="text-[10px] text-slate-400">
              © 2026 Velora Heights. All rights reserved.
            </p>
          </div>
        </footer>

        {/* ================= GOOGLE SHEET LOGGING ENQUIRY MODAL ================= */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
            <div className="relative w-full max-w-lg bg-[#081f18] border border-[#C8A34A]/60 rounded-sm p-6 sm:p-8 space-y-6 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
              {/* Close Button */}
              <button
                onClick={handleModalClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="text-center space-y-1.5 border-b border-[#C8A34A]/20 pb-4">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#E5C578] font-bold block">
                  QUICK ENQUIRY
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                  Connect with Advisory Desk
                </h2>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Submit your investment profile. A senior advisor will follow up directly.
                </p>
              </div>

              {/* Success Confirmation Card */}
              {formSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <CheckCircle2 className="w-14 h-14 text-[#C8A34A] mx-auto" />
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-2xl text-white">Enquiry Received</h3>
                    <p className="text-xs text-slate-300 font-light leading-relaxed max-w-sm mx-auto">
                      Thank you for contacting Velora Heights. Your details have been recorded, and our team will be in touch shortly.
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
                  {/* Full Name */}
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

                  {/* Email & WhatsApp Row */}
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

                  {/* Country & Target Investment Row */}
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

                  {/* Submit Action */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#DFC07B] hover:bg-[#ebd296] text-[#071713] font-bold py-3.5 rounded-sm uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_4px_20px_rgba(200,163,74,0.3)] cursor-pointer mt-2 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Details...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Privacy Guarantee */}
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