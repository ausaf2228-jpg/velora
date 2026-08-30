import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  TrendingUp, 
  Key, 
  UserCheck, 
  ShieldCheck, 
  Compass, 
  ChevronRight,
  Sparkles,
  Building2,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import Link from 'next/link';
import { INSIGHTS_DATA } from './data/insights';

const whatsappUrl = "https://wa.me/971503784656?text=Hello%20Velora%20Heights,%20I%20would%20like%20to%20inquire%20about%20property%20investment%20opportunities.";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#051411] text-slate-100 font-sans selection:bg-[#c8a45c] selection:text-[#051411]">
      {/* Top Utility Bar */}
      <div className="bg-[#030d0b] border-b border-[#c8a45c]/10 py-2 px-8 text-xs text-slate-400 flex justify-between items-center">
        <span className="tracking-widest uppercase text-[10px] text-[#c8a45c]/80">Dubai Premier Real Estate Advisory</span>
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-[#c8a45c]" /> The Opus, Business Bay, Dubai</span>
          <a 
  href="tel:+971503784656" 
  className="flex items-center gap-1.5 hover:text-[#c8a45c] transition-colors"
>
  <Phone className="w-3 h-3 text-[#c8a45c]" />
  <span>+971 50 378 4656</span>
</a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 glass-panel border-b border-[#c8a45c]/15 px-8 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="w-10 h-10 border border-[#c8a45c] rounded-sm flex items-center justify-center bg-[#071c18]">
            <span className="font-serif text-xl font-bold gold-gradient-text">VH</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.25em] text-sm text-[#f7e7ce] font-semibold">VELORA HEIGHTS</span>
            <span className="text-[9px] tracking-[0.3em] text-[#c8a45c]/70 uppercase">Real Estate</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-9 text-xs tracking-wider uppercase font-medium text-slate-300">
          <Link href="/" className="text-[#c8a45c] border-b border-[#c8a45c] pb-1 font-semibold">Home</Link>
          <Link href="/ai-matches" className="hover:text-[#c8a45c] transition-colors duration-200">View Properties</Link>
          <a href="/insights" className="hover:text-[#c8a45c] transition-colors duration-200">Market Insights</a>
          <a href="/tourism" className="hover:text-[#c8a45c] transition-colors duration-200">Tourism</a>
<Link href="/about" className="hover:text-[#c8a45c] transition-colors duration-200">
  About
</Link>        </div>

        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-2.5 border border-[#c8a45c]/60 text-[#f7e7ce] px-5 py-2.5 rounded-sm hover:bg-[#c8a45c] hover:text-[#051411] transition-all duration-300 text-xs font-medium tracking-wide shadow-[0_0_15px_rgba(200,164,92,0.1)]"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center px-8 lg:px-16 border-b border-[#c8a45c]/15 overflow-hidden">
        {/* Vibrant Nightlife Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 scale-105"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(5,20,17,0.85) 10%, rgba(5,20,17,0.4) 50%, rgba(5,20,17,0.2)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000')` 
          }}
        />
        {/* Subtle bottom fade to blend with page */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#051411] via-transparent to-transparent opacity-80" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl space-y-8 my-16">
          <div className="inline-flex items-center space-x-2 bg-[#0a221d]/80 border border-[#c8a45c]/30 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a45c]" />
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
              <button className="w-full sm:w-auto gold-gradient-bg text-[#051411] font-semibold px-8 py-4 rounded-sm hover:brightness-110 transition-all duration-300 flex items-center justify-center space-x-3 shadow-[0_4px_25px_rgba(200,164,92,0.25)] cursor-pointer">
                <Sparkles className="w-4 h-4" />
                <span className="tracking-wide text-sm">View Properties</span>
              </button>
            </Link>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-[#c8a45c]/40 text-[#f7e7ce] px-8 py-4 rounded-sm hover:bg-[#c8a45c]/10 transition-all duration-300 flex items-center justify-center space-x-3 text-sm tracking-wide backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#c8a45c]" />
              <span>Speak on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Process Bar */}
      <section className="border-b border-[#c8a45c]/15 bg-[#071c18]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#c8a45c]/15">
          {[
            { step: "01", text: "Answer a few questions" },
            { step: "02", text: "See your top 4 matches" },
            { step: "03", text: "Connect with a Velora advisor" }
          ].map((item, index) => (
            <div key={index} className="py-6 px-8 flex items-center justify-center space-x-4 group hover:bg-[#0a221d]/50 transition-colors">
              <span className="font-serif text-sm font-bold text-[#c8a45c] border border-[#c8a45c]/30 rounded-full w-8 h-8 flex items-center justify-center bg-[#051411]">
                {item.step}
              </span>
              <span className="text-sm tracking-wide text-slate-200 font-medium group-hover:text-[#f7e7ce] transition-colors">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Velora Grid */}
      <section className="px-8 lg:px-16 py-24 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c8a45c]">Excellence Defined</p>
          <h2 className="text-3xl lg:text-4xl font-serif text-slate-100">
            Why Choose <span className="gold-gradient-text">Velora</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#c8a45c] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: TrendingUp, title: "Data-Led Advice", desc: "Proprietary market analytics guiding precision high-yield decisions." },
            { icon: Key, title: "Early Access", desc: "First-tier access to off-plan launches and off-market inventory." },
            { icon: UserCheck, title: "Investor-Focused", desc: "Tailored portfolio acquisition strategy built around your risk profile." },
            { icon: ShieldCheck, title: "End-To-End Support", desc: "Seamless acquisition, conveyancing, handover, and asset management." }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#0a221d]/40 border border-[#c8a45c]/20 p-8 rounded-sm hover:border-[#c8a45c]/60 hover:bg-[#0a221d] transition-all duration-300 group relative"
            >
              <div className="w-12 h-12 border border-[#c8a45c]/30 bg-[#051411] flex items-center justify-center mb-6 group-hover:border-[#c8a45c] transition-colors">
                <item.icon className="w-5 h-5 text-[#c8a45c]" />
              </div>
              <h3 className="font-serif text-lg text-slate-100 mb-3 group-hover:text-[#f7e7ce] transition-colors">{item.title}</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tourism Sister Banner */}
      <section className="px-8 lg:px-16 py-6 max-w-7xl mx-auto">
        <div className="relative rounded-sm border border-[#c8a45c]/30 overflow-hidden bg-cover bg-center p-8 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" style={{ backgroundImage: `linear-gradient(to right, rgba(5,20,17,0.95), rgba(5,20,17,0.6)), url('https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200')` }}>
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center space-x-2">
              <Compass className="w-4 h-4 text-[#c8a45c]" />
              <span className="text-xs uppercase tracking-widest text-[#c8a45c]">Velora Heights Tourism</span>
            </div>
            <h3 className="text-2xl font-serif text-slate-100">Experience Dubai before you invest.</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Our hospitality sister company curated bespoke property discovery tours, luxury stays, and lifestyle experiences.
            </p>
          </div>

          <button className="border border-[#c8a45c] text-[#f7e7ce] hover:bg-[#c8a45c] hover:text-[#051411] px-6 py-3 rounded-sm transition-all duration-300 text-xs tracking-wider flex items-center space-x-2 shrink-0">
            <span>Explore Tourism</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="px-8 lg:px-16 py-24 max-w-7xl mx-auto space-y-12">
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.3em] text-[#c8a45c]">Intelligence</p>
      <h2 className="text-3xl font-serif text-slate-100">Market Insights</h2>
    </div>
    <Link href="/insights" className="text-xs text-[#c8a45c] hover:underline flex items-center gap-1 group">
      <span>View all insights</span>
      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {INSIGHTS_DATA.map((post) => (
      <Link 
        key={post.slug} 
        href={`/insights/${post.slug}`}
        className="bg-[#0a221d]/30 border border-[#c8a45c]/15 rounded-sm overflow-hidden group hover:border-[#c8a45c]/50 transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          <div className="h-52 overflow-hidden relative bg-[#051411]">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a221d] via-transparent to-transparent opacity-80" />
            <span className="absolute top-3 left-3 bg-[#051411]/80 border border-[#c8a45c]/30 text-[#f7e7ce] text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-sm backdrop-blur-sm">
              {post.category}
            </span>
          </div>
          <div className="p-6 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#c8a45c]">{post.date} • {post.readTime}</span>
            <h3 className="font-serif text-base text-slate-100 group-hover:text-[#f7e7ce] transition-colors leading-snug">
              {post.title}
            </h3>
            <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          </div>
        </div>
        <div className="px-6 pb-6 pt-2 flex items-center text-xs text-[#c8a45c] font-medium gap-1">
          <span>Read Analysis</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    ))}
  </div>
</section>

      {/* Luxury Footer */}
      <footer className="border-t border-[#c8a45c]/20 bg-[#030d0b] px-8 lg:px-16 py-12 text-xs text-slate-400 space-y-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <span className="font-serif tracking-widest text-sm text-[#f7e7ce] block">VELORA HEIGHTS</span>
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
              <a href="#" className="hover:text-[#c8a45c]">Privacy Policy</a>
              <a href="#" className="hover:text-[#c8a45c]">Terms & Conditions</a>
              <a href="#" className="hover:text-[#c8a45c]">RERA Licensing</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-[#c8a45c]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px]">
          <p>© 2026 Velora Heights Real Estate. All rights reserved.</p>
          <div className="flex space-x-6 text-[#c8a45c]">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}