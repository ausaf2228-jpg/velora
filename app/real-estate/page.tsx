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
import LuxuryBackground from '@/components/LuxuryBackground';
import { INSIGHTS_DATA } from '../data/insights';

const whatsappUrl = "https://wa.me/971503784656?text=Hello%20Velora%20Heights,%20I%20would%20like%20to%20inquire%20about%20property%20investment%20opportunities.";

export default function RealEstatePage() {
  return (
    <div className="relative min-h-screen bg-[#0D2B22] text-[#F1F5F9] font-sans selection:bg-[#C8A34A] selection:text-[#0D2B22]">
      {/* Background layer */}
      <LuxuryBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Utility Bar */}
        <div className="bg-[#061813] border-b border-[#C8A34A]/25 py-2.5 px-6 lg:px-12 text-xs text-slate-300 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-[11px] text-[#E5C578] hover:text-[#FFF] font-semibold uppercase tracking-wider">
              ← Switch Experience
            </Link>
            <span className="tracking-widest uppercase text-[10px] text-[#C8A34A] border-l border-[#C8A34A]/30 pl-4 hidden sm:inline">
              Dubai Premier Real Estate Advisory
            </span>
          </div>
          <div className="flex items-center space-x-6 text-[11px]">
            <span className="flex items-center gap-1.5 text-slate-200">
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

        {/* Main Navigation */}
        <nav className="sticky top-0 z-50 glass-panel border-b border-[#C8A34A]/25 px-6 lg:px-12 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center cursor-pointer">
            <img 
              src="/logo.png" 
              alt="Velora Heights Logo" 
              className="h-10 sm:h-12 w-auto object-contain brightness-110"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8 text-xs tracking-wider uppercase font-semibold text-slate-200">
            <Link href="/real-estate" className="text-[#E5C578] border-b-2 border-[#C8A34A] pb-1">Home</Link>
            <Link href="/ai-matches" className="hover:text-[#E5C578] transition-colors">View Properties</Link>
            <Link href="/insights" className="hover:text-[#E5C578] transition-colors">Market Insights</Link>
            <Link href="/about" className="hover:text-[#E5C578] transition-colors">About</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/tourism"
              className="gold-gradient-bg text-[#0D2B22] font-bold px-4 py-2 rounded-sm hover:brightness-110 transition-all text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-[0_0_15px_rgba(200,163,74,0.35)]"
            >
              <Compass className="w-3.5 h-3.5 text-[#0D2B22]" />
              <span>Tourism</span>
            </Link>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 border border-[#C8A34A]/70 text-[#F7E7CE] bg-[#061813]/60 hover:bg-[#C8A34A] hover:text-[#0D2B22] px-4 py-2 rounded-sm transition-all text-xs font-semibold tracking-wide shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C8A34A] group-hover:text-[#0D2B22]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center px-6 lg:px-16 border-b border-[#C8A34A]/25 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `linear-gradient(to right, rgba(6,24,19,0.92) 15%, rgba(6,24,19,0.6) 55%, rgba(6,24,19,0.3)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000')` 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B22] via-transparent to-transparent opacity-90" />

          <div className="relative z-10 max-w-3xl space-y-7 my-16">
            <div className="inline-flex items-center space-x-2 bg-[#061813]/90 border border-[#C8A34A]/50 px-3.5 py-1.5 rounded-full shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#E5C578]" />
              <span className="text-xs text-[#F7E7CE] tracking-wide font-medium">AI-Powered Portfolio Matching</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif leading-[1.15] text-[#FFF] tracking-tight">
              Invest in Dubai <br />
              with <span className="text-[#E5C578] italic font-normal">clarity.</span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-xl">
              Tell us your budget and goals. Velora helps you discover the right off-plan or secondary opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link href="/ai-matches">
                <button className="w-full sm:w-auto gold-gradient-bg text-[#0D2B22] font-bold px-8 py-3.5 rounded-sm hover:brightness-110 transition-all flex items-center justify-center space-x-3 shadow-[0_4px_25px_rgba(200,163,74,0.35)] cursor-pointer text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>View Properties</span>
                </button>
              </Link>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-[#C8A34A]/80 text-[#F7E7CE] bg-[#061813]/80 hover:bg-[#C8A34A] hover:text-[#0D2B22] px-8 py-3.5 rounded-sm transition-all flex items-center justify-center space-x-3 text-xs uppercase tracking-wider font-semibold shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Speak on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Velora Heights Grid (High Contrast Fix) */}
        <section className="px-6 lg:px-16 py-20 max-w-7xl mx-auto space-y-12 w-full">
          <div className="text-center space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[#E5C578] font-bold">Excellence Defined</p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#FFF]">
              Why Choose <span className="text-[#E5C578]">Velora Heights</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#C8A34A] mx-auto mt-4" />
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
                className="bg-[#09211A] border border-[#C8A34A]/40 p-7 rounded-sm hover:border-[#E5C578] transition-all duration-300 shadow-xl group"
              >
                <div className="w-12 h-12 border border-[#C8A34A] bg-[#061813] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform rounded-sm shadow-md">
                  <item.icon className="w-5 h-5 text-[#E5C578]" />
                </div>
                <h3 className="font-serif text-lg text-[#F7E7CE] mb-2 font-semibold group-hover:text-[#FFF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tourism Sister Banner */}
        <section className="px-6 lg:px-16 py-6 max-w-7xl mx-auto w-full">
          <div 
            className="relative rounded-sm border border-[#C8A34A]/40 overflow-hidden bg-cover bg-center p-8 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl" 
            style={{ backgroundImage: `linear-gradient(to right, rgba(6,24,19,0.95), rgba(6,24,19,0.65)), url('https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200')` }}
          >
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center space-x-2">
                <Compass className="w-4 h-4 text-[#E5C578]" />
                <span className="text-xs uppercase tracking-widest text-[#E5C578] font-bold">Velora Heights Tourism</span>
              </div>
              <h3 className="text-2xl font-serif text-[#FFF]">Experience Dubai before you invest.</h3>
              <p className="text-xs text-slate-200 font-light leading-relaxed">
                Our hospitality sister company curates bespoke property discovery tours, luxury stays, and lifestyle experiences.
              </p>
            </div>

            <Link href="/tourism">
              <button className="gold-gradient-bg text-[#0D2B22] font-bold px-6 py-3 rounded-sm transition-all duration-300 text-xs tracking-wider uppercase flex items-center space-x-2 shrink-0 cursor-pointer shadow-lg hover:brightness-110">
                <span>Explore Tourism</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </section>

        {/* Market Insights Section */}
        <section className="px-6 lg:px-16 py-20 max-w-7xl mx-auto space-y-12 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-[#E5C578] font-bold">Intelligence</p>
              <h2 className="text-3xl lg:text-4xl font-serif text-[#FFF]">Market Insights</h2>
            </div>
            <Link href="/insights" className="text-xs text-[#E5C578] hover:text-[#FFF] font-bold flex items-center gap-1 group">
              <span>View all insights</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSIGHTS_DATA.map((post) => (
              <Link 
                key={post.slug} 
                href={`/insights/${post.slug}`}
                className="bg-[#09211A] border border-[#C8A34A]/35 hover:border-[#E5C578] rounded-sm overflow-hidden group transition-all duration-300 flex flex-col justify-between shadow-2xl"
              >
                <div>
                  <div className="h-52 overflow-hidden relative bg-[#061813]">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09211A] via-transparent to-transparent opacity-90" />
                    <span className="absolute top-3 left-3 bg-[#061813]/90 border border-[#C8A34A]/50 text-[#F7E7CE] text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-md font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#E5C578] font-bold block">{post.date} • {post.readTime}</span>
                    <h3 className="font-serif text-lg text-[#F7E7CE] group-hover:text-[#FFF] transition-colors leading-snug font-semibold">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-light leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2 flex items-center text-xs text-[#E5C578] font-bold gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Analysis</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#C8A34A]/25 bg-[#061813] px-6 lg:px-16 py-12 text-xs text-slate-300 space-y-8 mt-auto">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <img 
                src="/logo.png" 
                alt="Velora Heights Logo" 
                className="h-12 w-auto object-contain brightness-110"
              />
              <p className="font-light text-slate-400">Curating extraordinary real estate opportunities across Dubai's most coveted destinations.</p>
            </div>
            <div>
              <h4 className="text-[#F7E7CE] font-bold uppercase tracking-wider mb-3 text-[11px]">Office</h4>
              <p className="font-light">The Opus by Omniyat, Business Bay, Dubai, UAE</p>
            </div>
            <div>
              <h4 className="text-[#F7E7CE] font-bold uppercase tracking-wider mb-3 text-[11px]">Direct Contact</h4>
              <p className="font-light">muhammedhuzaif1@gmail.com</p>
              <p className="font-light text-[#E5C578]">+971 50 378 4656</p>
            </div>
            <div>
              <h4 className="text-[#F7E7CE] font-bold uppercase tracking-wider mb-3 text-[11px]">Legal</h4>
              <div className="space-y-1 flex flex-col font-light">
                <a href="#" className="hover:text-[#E5C578]">Privacy Policy</a>
                <a href="#" className="hover:text-[#E5C578]">Terms & Conditions</a>
                <a href="#" className="hover:text-[#E5C578]">RERA Licensing</a>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto pt-8 border-t border-[#C8A34A]/15 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px]">
            <p>© 2026 Velora Heights Real Estate. All rights reserved.</p>
            <div className="flex space-x-6 text-[#E5C578]">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}