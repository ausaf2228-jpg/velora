"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles, 
  MessageSquare, 
  Phone,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Loader2
} from "lucide-react";

interface Property {
  id: number;
  title: string;
  developer: string;
  location: string;
  propertyType: string;
  status: string;
  handoverDate?: string;
  priceAed: number;
  bedrooms: string;
  bathrooms?: number;
  areaSqFt: number;
  roiPercentage?: number;
  reraPermitNo?: string;
  paymentPlan?: string;
  description?: string;
  isFeatured?: boolean;
  features: string[];
  imageUrls: string[];
}

const WHATSAPP_NUMBER = "918073547234";

export default function PropertyDetailPage() {
  const params = useParams();
  const rawId = params?.id;
  const propertyId = Array.isArray(rawId) ? rawId[0] : rawId;

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!propertyId) return;

    const fetchProperty = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`http://localhost:8080/api/properties/${propertyId}`);
        if (!res.ok) {
          throw new Error(`Server returned status ${res.status}`);
        }
        const data = await res.json();
        setProperty(data);
      } catch (err: any) {
        console.error("Fetch error for property ID:", propertyId, err);
        setError(err.message || "Failed to load property details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [propertyId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#051411] text-slate-100 flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-8 h-8 text-[#c8a45c] animate-spin" />
        <span className="text-xs uppercase tracking-widest text-slate-400">Loading Property #{propertyId}...</span>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen bg-[#051411] text-slate-100 flex flex-col items-center justify-center p-6 space-y-4">
        <h1 className="text-2xl font-serif text-slate-100">Listing Not Found</h1>
        <p className="text-xs text-slate-400">
          Could not load ID <code className="text-[#c8a45c] bg-[#0a221d] px-2 py-1 rounded">{String(propertyId)}</code>: {error}
        </p>
        <Link 
          href="/ai-matches" 
          className="gold-gradient-bg text-[#051411] font-semibold px-6 py-2.5 rounded-sm text-xs uppercase tracking-wider"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  const images = property.imageUrls && property.imageUrls.length > 0 
    ? property.imageUrls 
    : ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200"];

  const usdPrice = (property.priceAed / 3.6725).toLocaleString(undefined, { maximumFractionDigits: 0 });

  const whatsappInquiryUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Velora Heights, I am requesting full investment information & private tour availability for "${property.title}" in ${property.location} (AED ${property.priceAed.toLocaleString()}).`
  )}`;

  return (
    <div className="min-h-screen bg-[#051411] text-slate-100 font-sans selection:bg-[#c8a45c] selection:text-[#051411] pb-24">
      
      {/* Top Bar */}
      <div className="border-b border-[#c8a45c]/20 bg-[#030d0b] px-6 lg:px-12 py-4 flex items-center justify-between sticky top-0 z-40 backdrop-blur-md">
        <Link href="/ai-matches" className="inline-flex items-center space-x-2 text-xs text-[#dfb975] hover:text-[#f7e7ce] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Properties</span>
        </Link>
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#c8a45c]">Property Ref #{property.id}</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 space-y-10">
        
        {/* Title & Price Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#c8a45c]/15">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="bg-[#0a221d] border border-[#c8a45c]/30 text-[#f7e7ce] px-2.5 py-1 rounded-sm uppercase tracking-wider text-[10px] font-medium">
                {property.developer}
              </span>
              <span className="bg-[#c8a45c]/10 text-[#c8a45c] border border-[#c8a45c]/20 px-2.5 py-1 rounded-sm text-[10px] uppercase tracking-wider">
                {property.status}
              </span>
              {property.isFeatured && (
                <span className="bg-[#c8a45c] text-[#051411] font-semibold px-2 py-1 rounded-sm text-[10px] uppercase tracking-wider">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-3xl lg:text-5xl font-serif text-slate-100 leading-tight">
              {property.title}
            </h1>

            <div className="flex items-center text-xs text-slate-300 gap-2">
              <MapPin className="w-4 h-4 text-[#c8a45c] shrink-0" />
              <span>{property.location}, Dubai, United Arab Emirates</span>
            </div>
          </div>

          <div className="bg-[#0a221d]/80 border border-[#c8a45c]/30 p-5 rounded-sm lg:text-right min-w-[260px] space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 block">Starting Acquisition Price</span>
            <div className="font-serif text-2xl lg:text-3xl font-bold text-[#f7e7ce]">
              AED {property.priceAed.toLocaleString()}
            </div>
            <span className="text-xs text-slate-400 block font-mono">
              ≈ ${usdPrice} USD
            </span>
          </div>
        </div>

        {/* Main Image Carousel */}
        {/* Gallery Section */}
<div className="space-y-3">
  {/* Main Image Frame with Controlled Height */}
  <div className="relative w-full max-h-[420px] h-[340px] md:h-[400px] rounded-sm overflow-hidden border border-[#c8a45c]/25 bg-[#030d0b]">
    {/* Blurred Backdrop to gracefully fill any non-standard image aspect ratios */}
    <img
      src={images[activeImageIndex]}
      alt="Backdrop blur"
      className="absolute inset-0 w-full h-full object-cover blur-lg opacity-25 scale-110"
    />

    {/* Primary Crisp Center Image */}
    <img
      src={images[activeImageIndex]}
      alt={`${property.title} - view ${activeImageIndex + 1}`}
      className="relative z-10 w-full h-full object-contain md:object-cover transition-all duration-300 mx-auto"
    />
    
    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#051411]/70 via-transparent to-transparent pointer-events-none" />

    {/* Carousel Arrows */}
    {images.length > 1 && (
      <>
        <button
          onClick={() => setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-[#051411]/85 hover:bg-[#0a221d] border border-[#c8a45c]/40 text-[#f7e7ce] transition-all"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-[#051411]/85 hover:bg-[#0a221d] border border-[#c8a45c]/40 text-[#f7e7ce] transition-all"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
        <span className="absolute bottom-3 right-3 z-20 bg-[#051411]/90 border border-[#c8a45c]/30 text-slate-300 text-[11px] px-2.5 py-0.5 rounded-sm">
          {activeImageIndex + 1} / {images.length}
        </span>
      </>
    )}
  </div>

  {/* Compact Thumbnail Strip */}
  {images.length > 1 && (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
      {images.map((img, idx) => (
        <button
          key={idx}
          onClick={() => setActiveImageIndex(idx)}
          className={`relative shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-sm overflow-hidden border transition-all ${
            activeImageIndex === idx
              ? "border-[#c8a45c] opacity-100 scale-100 shadow-[0_0_10px_rgba(200,164,92,0.3)]"
              : "border-transparent opacity-40 hover:opacity-75"
          }`}
        >
          <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
        </button>
      ))}
    </div>
  )}
</div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#0a221d]/50 border border-[#c8a45c]/20 p-6 rounded-sm text-center">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Bedrooms</span>
                <div className="flex items-center justify-center gap-1.5 text-slate-100 font-serif text-lg">
                  <Bed className="w-4 h-4 text-[#c8a45c]" />
                  <span>{property.bedrooms}</span>
                </div>
              </div>

              <div className="space-y-1 border-l border-[#c8a45c]/15">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Bathrooms</span>
                <div className="flex items-center justify-center gap-1.5 text-slate-100 font-serif text-lg">
                  <Bath className="w-4 h-4 text-[#c8a45c]" />
                  <span>{property.bathrooms || 1}</span>
                </div>
              </div>

              <div className="space-y-1 border-l border-[#c8a45c]/15">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Area</span>
                <div className="flex items-center justify-center gap-1.5 text-slate-100 font-serif text-lg">
                  <Maximize2 className="w-4 h-4 text-[#c8a45c]" />
                  <span>{property.areaSqFt.toLocaleString()} sq.ft</span>
                </div>
              </div>

              <div className="space-y-1 border-l border-[#c8a45c]/15">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Yield</span>
                <div className="flex items-center justify-center gap-1.5 text-[#f7e7ce] font-serif text-lg font-bold">
                  <TrendingUp className="w-4 h-4 text-[#c8a45c]" />
                  <span>{property.roiPercentage ? `${property.roiPercentage}%` : "7.5%+"}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-serif text-[#f7e7ce] border-b border-[#c8a45c]/15 pb-2">
                Executive Overview
              </h2>
              <p className="text-xs lg:text-sm text-slate-300 font-light leading-relaxed whitespace-pre-line">
                {property.description || `${property.title} in ${property.location} by ${property.developer}.`}
              </p>
            </div>

            {/* Amenities */}
            {property.features && property.features.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-serif text-[#f7e7ce] border-b border-[#c8a45c]/15 pb-2">
                  Amenities & Exclusive Features
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="bg-[#0a221d]/40 border border-[#c8a45c]/20 p-3.5 rounded-sm flex items-center gap-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#c8a45c] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Payment & Compliance */}
            <div className="space-y-4">
              <h2 className="text-xl font-serif text-[#f7e7ce] border-b border-[#c8a45c]/15 pb-2">
                Payment Plan & Regulatory Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-[#0a221d]/30 border border-[#c8a45c]/15 p-4 rounded-sm space-y-1">
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Payment Plan</span>
                  <span className="text-slate-200 font-medium">{property.paymentPlan || "Milestone Linked"}</span>
                </div>
                <div className="bg-[#0a221d]/30 border border-[#c8a45c]/15 p-4 rounded-sm space-y-1">
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Estimated Handover</span>
                  <span className="text-slate-200 font-medium">{property.handoverDate || "Immediate"}</span>
                </div>
                <div className="bg-[#0a221d]/30 border border-[#c8a45c]/15 p-4 rounded-sm space-y-1">
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">RERA Permit Number</span>
                  <span className="text-slate-200 font-medium">{property.reraPermitNo || "Verified"}</span>
                </div>
                <div className="bg-[#0a221d]/30 border border-[#c8a45c]/15 p-4 rounded-sm space-y-1">
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Ownership Type</span>
                  <span className="text-slate-200 font-medium">100% Freehold Title</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar */}
          <div className="space-y-6">
            <div className="bg-[#0a221d] border border-[#c8a45c]/40 p-6 lg:p-8 rounded-sm space-y-6 sticky top-24 shadow-[0_4px_30px_rgba(200,164,92,0.1)]">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c8a45c] font-medium block">
                  Private Client Advisory
                </span>
                <h3 className="font-serif text-xl text-slate-100">Inquire About This Asset</h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Connect with a licensed property specialist for floor plans and VIP unit allocation.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full gold-gradient-bg text-[#051411] font-semibold py-3.5 px-4 rounded-sm hover:brightness-110 transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(200,164,92,0.25)]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <a
                  href="tel:+918073547234"
                  className="w-full border border-[#c8a45c]/40 text-[#f7e7ce] hover:bg-[#c8a45c]/10 font-medium py-3 px-4 rounded-sm transition-all text-xs tracking-wider flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c8a45c]" />
                  <span>Call +91 8073547234</span>
                </a>
              </div>

              <div className="pt-4 border-t border-[#c8a45c]/15 space-y-2 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c8a45c]" />
                  <span>Direct developer pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#c8a45c]" />
                  <span>0% Agency commission on off-plan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}