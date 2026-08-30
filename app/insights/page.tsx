"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Sparkles, TrendingUp, Filter } from "lucide-react";
import { INSIGHTS_DATA } from "../data/insights";

export default function InsightsListingPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", "Market Report", "Neighborhood Spotlight", "Macro Economics"];

  const filtered = activeCategory === "ALL" 
    ? INSIGHTS_DATA 
    : INSIGHTS_DATA.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#051411] text-slate-100 font-sans selection:bg-[#c8a45c] selection:text-[#051411] pb-24">
      {/* Top Bar */}
      <div className="border-b border-[#c8a45c]/20 bg-[#030d0b] px-6 lg:px-12 py-4 flex items-center justify-between sticky top-0 z-40 backdrop-blur-md">
        <Link href="/" className="inline-flex items-center space-x-2 text-xs text-[#dfb975] hover:text-[#f7e7ce] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#c8a45c]">Velora Research & Intelligence</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 space-y-12">
        {/* Banner */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-[#0a221d]/80 border border-[#c8a45c]/30 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a45c]" />
            <span className="text-xs text-[#f7e7ce] tracking-wide font-light">Advisory & Analysis</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif text-slate-100">
            Market <span className="gold-gradient-text">Insights</span>
          </h1>
          <p className="text-xs lg:text-sm text-slate-300 font-light leading-relaxed">
            Data-driven intelligence on Dubai master developments, yield shifts, and foreign investor policies.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-2 pt-2 border-b border-[#c8a45c]/15 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-4 py-2 rounded-sm border transition-all ${
                activeCategory === cat
                  ? "border-[#c8a45c] bg-[#c8a45c]/20 text-[#f7e7ce] font-medium shadow-[0_0_15px_rgba(200,164,92,0.15)]"
                  : "border-[#c8a45c]/20 bg-[#0a221d]/40 text-slate-400 hover:text-slate-200"
              }`}
            >
              {cat === "ALL" ? "All Briefs" : cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="bg-[#0a221d]/40 border border-[#c8a45c]/20 hover:border-[#c8a45c]/60 rounded-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_4px_25px_rgba(200,164,92,0.15)]"
            >
              <div>
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a221d] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 bg-[#051411]/90 border border-[#c8a45c]/30 text-[#f7e7ce] text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-sm backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#c8a45c]">{post.date} • {post.readTime}</span>
                  <h3 className="font-serif text-lg text-slate-100 group-hover:text-[#f7e7ce] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center text-xs text-[#c8a45c] font-medium gap-1">
                <span>Explore Full Insight</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}