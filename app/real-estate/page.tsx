import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  Key, 
  Compass, 
  ChevronRight,
  Sparkles,
  MapPin,
  Phone,
  BarChart3,
  Home as HomeIcon,
  BadgeDollarSign
} from 'lucide-react';
import Link from 'next/link';
import { INSIGHTS_DATA } from '../data/insights';
import LuxuryBackground from "@/components/LuxuryBackground";

const whatsappUrl = "https://wa.me/971503784656?text=Hello%20Velora%20Heights,%20I%20would%20like%20to%20inquire%20about%20property%20investment%20opportunities.";

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-[#0D2B22] text-slate-100 font-sans selection:bg-[#C8A34A] selection:text-[#0D2B22]">
      {/* Top Utility Bar */}
      <LuxuryBackground />
      <div className="bg-[#091e18] border-b border-[#C8A34A]/20 py-2 px-8 text-xs text-slate-400 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-[10px] text-[#C8A34A] hover:underline uppercase tracking-wider">
            ← Switch Experience
          </Link>
          <span className="tracking-widest uppercase text-[10px] text-[#C8A34A]/80 border-l border-[#C8A34A]/20 pl-4">
            Dubai Premier Real Estate Advisory
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-[#C8A34A]" /> The Opus, Business Bay, Dubai</span>
          <a 
            href="tel:+971503784656" 
            className="flex items-center gap-1.5 hover:text-[#C8A34A] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#C8A34A]" />
            <span>+971 50 378 4656</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 glass-panel border-b border-[#C8A34A]/20 px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center cursor-pointer">
          <img 
            src="/logo.png" 
            alt="Velora Heights Logo" 
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-9 text-xs tracking-wider uppercase font-medium text-slate-300">
          <Link href="/real-estate" className="text-[#C8A34A] border-b border-[#C8A34A] pb-1 font-semibold">Home</Link>
          <Link href="/ai-matches" className="hover:text-[#C8A34A] transition-colors duration-200">View Properties</Link>
          <Link href="/insights" className="hover:text-[#C8A34A] transition-colors duration-200">Market Insights</Link>
          <Link href="/about" className="hover:text-[#C8A34A] transition-colors duration-200">About</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/tourism"
            className="gold-gradient-bg text-[#0D2B22] font-semibold px-4 py-2.5 rounded-sm hover:brightness-110 transition-all duration-300 text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-[0_0_15px_rgba(200,163,74,0.35)] cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5 text-[#0D2B22]" />
            <span>Tourism</span>
          </Link>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 border border-[#C8A34A]/60 text-[#f7e7ce] hover:bg-[#C8A34A] hover:text-[#0D2B22] px-4 py-2.5 rounded-sm transition-all duration-300 text-xs font-medium tracking-wide shadow-[0_0_15px_rgba(200,163,74,0.15)]"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center px-8 lg:px-16 border-b border-[#C8A34A]/20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 scale-105"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(13,43,34,0.88) 10%, rgba(13,43,34,0.45) 50%, rgba(13,43,34,0.2)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B22] via-transparent to-transparent opacity-80" />

        <div className="relative z-10 max-w-3xl space-y-8 my-16">
          <div className="inline-flex items-center space-x-2 bg-[#0D2B22]/80 border border-[#C8A34A]/30 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A34A]" />
            <span className="text-xs text-[#f7e7ce] tracking-wide font-light">AI-Powered Portfolio Matching</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-serif leading-[1.15] text-slate-100 tracking-tight">
            Invest in Dubai <br />
            with <span className="gold-gradient-text italic font-normal">clarity.</span>
          </h1>

          <p className="text-slate-300 text-base lg:text-lg font-light leading-relaxed max-w-xl">
            Tell us your budget and goals. Velora helps you discover the right off-plan or secondary opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link href="/ai-matches">
              <button className="w-full sm:w-auto gold-gradient-bg text-[#0D2B22] font-semibold px-8 py-4 rounded-sm hover:brightness-110 transition-all duration-300 flex items-center justify-center space-x-3 shadow-[0_4px_25px_rgba(200,163,74,0.25)] cursor-pointer">
                <Sparkles className="w-4 h-4" />
                <span className="tracking-wide text-sm">View Properties</span>
              </button>
            </Link>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-[#C8A34A]/40 text-[#f7e7ce] px-8 py-4 rounded-sm hover:bg-[#C8A34A]/10 transition-all duration-300 flex items-center justify-center space-x-3 text-sm tracking-wide backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#C8A34A]" />
              <span>Speak on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Velora Heights Grid */}
      <section className="px-8 lg:px-16 py-24 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C8A34A]">Excellence Defined</p>
          <h2 className="text-3xl lg:text-4xl font-serif text-slate-100">
            Why Choose <span className="gold-gradient-text">Velora Heights</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#C8A34A] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: BarChart3, 
              title: "Property Trends", 
              desc: "Latest market insights to help you invest smarter." 
            },
            { 
              icon: HomeIcon, 
              title: "Mansions & Villa Projects", 
              desc: "Exclusive luxury homes in Dubai's top communities." 
            },
            { 
              icon: Key, 
              title: "Property Management", 
              desc: "Hassle-free management for your investment." 
            },
            { 
              icon: BadgeDollarSign, 
              title: "Mortgage Support", 
              desc: "Assistance with mortgage options through trusted partners." 
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#0D2B22]/60 border border-[#C8A34A]/25 p-8 rounded-sm hover:border-[#C8A34A]/60 hover:bg-[#0D2B22] transition-all duration-300 group relative"
            >
              <div className="w-12 h-12 border border-[#C8A34A]/30 bg-[#091e18] flex items-center justify-center mb-6 group-hover:border-[#C8A34A] transition-colors rounded-sm">
                <item.icon className="w-5 h-5 text-[#C8A34A]" />
              </div>
              <h3 className="font-serif text-lg text-slate-100 mb-3 group-hover:text-[#f7e7ce] transition-colors">{item.title}</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tourism Sister Banner */}
      <section className="px-8 lg:px-16 py-6 max-w-7xl mx-auto">
        <div className="relative rounded-sm border border-[#C8A34A]/30 overflow-hidden bg-cover bg-center p-8 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" style={{ backgroundImage: `linear-gradient(to right, rgba(13,43,34,0.95), rgba(13,43,34,0.6)), url('https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200')` }}>
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center space-x-2">
              <Compass className="w-4 h-4 text-[#C8A34A]" />
              <span className="text-xs uppercase tracking-widest text-[#C8A34A]">Velora Heights Tourism</span>
            </div>
            <h3 className="text-2xl font-serif text-slate-100">Experience Dubai before you invest.</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Our hospitality sister company curated bespoke property discovery tours, luxury stays, and lifestyle experiences.
            </p>
          </div>

          <Link href="/tourism">
            <button className="border border-[#C8A34A] text-[#f7e7ce] hover:bg-[#C8A34A] hover:text-[#0D2B22] px-6 py-3 rounded-sm transition-all duration-300 text-xs tracking-wider flex items-center space-x-2 shrink-0 cursor-pointer">
              <span>Explore Tourism</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="px-8 lg:px-16 py-24 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C8A34A]">Intelligence</p>
            <h2 className="text-3xl font-serif text-slate-100">Market Insights</h2>
          </div>
          <Link href="/insights" className="text-xs text-[#C8A34A] hover:underline flex items-center gap-1 group">
            <span>View all insights</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS_DATA.map((post) => (
            <Link 
              key={post.slug} 
              href={`/insights/${post.slug}`}
              className="bg-[#0D2B22]/50 border border-[#C8A34A]/20 rounded-sm overflow-hidden group hover:border-[#C8A34A]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-52 overflow-hidden relative bg-[#091e18]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B22] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 bg-[#0D2B22]/90 border border-[#C8A34A]/30 text-[#f7e7ce] text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-sm backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#C8A34A]">{post.date} • {post.readTime}</span>
                  <h3 className="font-serif text-base text-slate-100 group-hover:text-[#f7e7ce] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 flex items-center text-xs text-[#C8A34A] font-medium gap-1">
                <span>Read Analysis</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="border-t border-[#C8A34A]/20 bg-[#091e18] px-8 lg:px-16 py-12 text-xs text-slate-400 space-y-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <img 
              src="/logo.png" 
              alt="Velora Heights Logo" 
              className="h-12 w-auto object-contain"
            />
            <p className="font-light text-slate-400">Curating extraordinary real estate opportunities across Dubai's most coveted destinations.</p>
          </div>
          <div>
            <h4 className="text-slate-200 font-medium uppercase tracking-wider mb-3 text-[11px]">Office</h4>
            <p className="font-light">The Opus by Omniyat, Business Bay, Dubai, UAE</p>
          </div>
          <div>
            <h4 className="text-slate-200 font-medium uppercase tracking-wider mb-3 text-[11px]">Direct Contact</h4>
            <p className="font-light">muhammedhuzaif1@gmail.com</p>
            <p className="font-light">+971 50 378 4656</p>
          </div>
          <div>
            <h4 className="text-slate-200 font-medium uppercase tracking-wider mb-3 text-[11px]">Legal</h4>
            <div className="space-y-1 flex flex-col font-light">
              <a href="#" className="hover:text-[#C8A34A]">Privacy Policy</a>
              <a href="#" className="hover:text-[#C8A34A]">Terms & Conditions</a>
              <a href="#" className="hover:text-[#C8A34A]">RERA Licensing</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-[#C8A34A]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px]">
          <p>© 2026 Velora Heights Real Estate. All rights reserved.</p>
          <div className="flex space-x-6 text-[#C8A34A]">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}