"use client";

import React, { useState } from "react";
import {
  X,
  User,
  Mail,
  Phone,
  Globe,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  Loader2,
  ArrowRight,
} from "lucide-react";

interface WebinarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WebinarModal({ isOpen, onClose }: WebinarModalProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    country: "United Kingdom",
    investmentBudget: "AED 1M - 2M (Golden Visa Entry)",
  });

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/webinar-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to record entry");
      }

      // Show the on-screen confirmation card
      setSubmitted(true);

      // Reset form values for next time
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-[#081f18] border border-[#C8A34A]/60 rounded-sm p-6 sm:p-8 space-y-6 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1.5 border-b border-[#C8A34A]/20 pb-4">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#E5C578] font-bold block">
            RESERVE YOUR SEAT
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
            Dubai Opportunities Closer to Home
          </h2>
          <p className="text-xs text-slate-300 font-light leading-relaxed">
            Exclusive online session. Access credentials & schedule will be sent via Email.
          </p>
        </div>

        {/* Success Confirmation Card */}
        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <CheckCircle2 className="w-14 h-14 text-[#C8A34A] mx-auto" />
            <div className="space-y-1.5">
              <h3 className="font-serif text-2xl text-white">Registration Confirmed</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed max-w-sm mx-auto">
                Thank you for reserving your seat. Your registration details have been saved, and our team will send your private webinar access link shortly.
              </p>
            </div>
            <button
              type="button"
              onClick={handleClose}
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
                <div className="relative">
                  <Globe className="w-4 h-4 text-[#C8A34A] absolute left-3 top-3 pointer-events-none" />
                  <select
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    className="w-full bg-[#051410] border border-[#C8A34A]/30 rounded-sm pl-9 pr-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-[#E5C578] transition-colors"
                  >
                    <option>United Kingdom</option>
                    <option>United Arab Emirates</option>
                    <option>India</option>
                    <option>United States</option>
                    <option>Europe</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-200 font-medium tracking-wide">
                  Target Investment
                </label>
                <div className="relative">
                  <DollarSign className="w-4 h-4 text-[#C8A34A] absolute left-3 top-3 pointer-events-none" />
                  <select
                    value={formData.investmentBudget}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        investmentBudget: e.target.value,
                      })
                    }
                    className="w-full bg-[#051410] border border-[#C8A34A]/30 rounded-sm pl-9 pr-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-[#E5C578] transition-colors"
                  >
                    <option>Under AED 1,000,000</option>
                    <option>AED 1M - 2M (Golden Visa Entry)</option>
                    <option>AED 2M - 5M</option>
                    <option>AED 5M+</option>
                  </select>
                </div>
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
                  <span>Securing Your Seat...</span>
                </>
              ) : (
                <>
                  <span>Confirm Registration</span>
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
  );
}