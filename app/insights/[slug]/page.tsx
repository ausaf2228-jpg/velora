"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, Clock, MessageSquare, AlertCircle } from "lucide-react";
import { INSIGHTS_DATA } from "../../data/insights";

export default function InsightDetailPage() {
  const params = useParams();
  
  // Handle slug whether it comes as string or array
  const rawSlug = params?.slug || params?.slugs;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;

  const post = INSIGHTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#051411] text-slate-100 flex flex-col items-center justify-center p-6 space-y-4">
        <AlertCircle className="w-12 h-12 text-[#c8a45c]" />
        <h1 className="text-2xl font-serif text-slate-100">Insight Not Found</h1>
        <p className="text-xs text-slate-400">
          Looking for slug: <code className="text-[#c8a45c] bg-[#0a221d] px-2 py-1 rounded">{String(slug)}</code>
        </p>
        <Link 
          href="/insights" 
          className="gold-gradient-bg text-[#051411] font-medium px-6 py-2.5 rounded-sm text-xs"
        >
          Return to All Insights
        </Link>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/918073547234?text=${encodeURIComponent(
    `Hello Velora Heights, I read your insight on "${post.title}" and would like to discuss property advisory opportunities.`
  )}`;

  return (
    <div className="min-h-screen bg-[#051411] text-slate-100 font-sans selection:bg-[#c8a45c] selection:text-[#051411] pb-24">
      {/* Top Navigation */}
      <div className="border-b border-[#c8a45c]/20 bg-[#030d0b] px-6 lg:px-12 py-4 flex items-center justify-between sticky top-0 z-40 backdrop-blur-md">
        <Link href="/insights" className="inline-flex items-center space-x-2 text-xs text-[#dfb975] hover:text-[#f7e7ce] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Insights</span>
        </Link>
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#c8a45c]">Velora Research Report</span>
      </div>

      <article className="max-w-4xl mx-auto px-6 pt-12 space-y-10">
        
        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-[11px] text-[#c8a45c] uppercase tracking-widest font-medium">
            <span className="bg-[#0a221d] border border-[#c8a45c]/30 px-2.5 py-1 rounded-sm">{post.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-serif text-slate-100 leading-tight">
            {post.title}
          </h1>

          <p className="text-sm lg:text-base text-slate-300 font-light leading-relaxed">
            {post.subtitle}
          </p>
        </div>

        {/* Hero Image */}
        <div className="h-80 md:h-96 w-full rounded-sm overflow-hidden border border-[#c8a45c]/20 relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051411] via-transparent to-transparent opacity-60" />
        </div>

        {/* Highlight Metrics */}
        {post.keyMetrics && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#0a221d]/60 border border-[#c8a45c]/30 p-6 rounded-sm">
            {post.keyMetrics.map((metric, i) => (
              <div key={i} className="text-center space-y-1 md:border-r last:border-0 border-[#c8a45c]/20">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block">{metric.label}</span>
                <span className="font-serif text-xl lg:text-2xl font-bold text-[#f7e7ce]">{metric.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Article Body Content */}
        <div className="space-y-8 pt-4">
          {post.content.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xl lg:text-2xl font-serif text-[#f7e7ce]">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-xs lg:text-sm text-slate-300 font-light leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Advisor CTA Box */}
        <div className="mt-16 bg-[#0a221d] border border-[#c8a45c]/40 p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-xl text-slate-100">Discuss this strategy with a Senior Advisor</h3>
            <p className="text-xs text-slate-400 font-light">
              Receive confidential portfolio simulations tailored to your investment goals.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient-bg text-[#051411] font-semibold px-6 py-3 rounded-sm hover:brightness-110 transition-all text-xs tracking-wider flex items-center space-x-2 shrink-0 shadow-[0_4px_20px_rgba(200,164,92,0.25)]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </article>
    </div>
  );
}