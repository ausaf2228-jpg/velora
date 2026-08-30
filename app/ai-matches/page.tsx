"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  MapPin, 
  Building2, 
  Bed, 
  Bath, 
  Maximize2, 
  TrendingUp, 
  Sparkles, 
  Search, 
  Calendar,
  MessageSquare,
  Loader2
} from "lucide-react";
import { useRouter } from "next/navigation";
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

export default function AIMatchesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
const router = useRouter();
  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("ALL");
  const [selectedStatus, setSelectedStatus] = useState("ALL");
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://65.0.139.121:8080";
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/api/properties`);
      if (!res.ok) {
        throw new Error("Failed to fetch property portfolio.");
      }
      const data = await res.json();
      setProperties(data);
    } catch (err: any) {
      setError(err.message || "Failed to load properties.");
    } finally {
      setLoading(false);
    }
  };

  const filteredProperties = properties.filter((item) => {
    const matchesSearch = 
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.developer?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation = selectedLocation === "ALL" || item.location === selectedLocation;
    const matchesStatus = selectedStatus === "ALL" || item.status === selectedStatus;

    return matchesSearch && matchesLocation && matchesStatus;
  });

  const locationsList = Array.from(new Set(properties.map(p => p.location).filter(Boolean)));

  return (
    <div className="min-h-screen bg-[#051411] text-slate-100 font-sans selection:bg-[#c8a45c] selection:text-[#051411] pb-24">
      {/* Top Header */}
      <div className="border-b border-[#c8a45c]/20 bg-[#030d0b] px-6 lg:px-12 py-4 flex items-center justify-between sticky top-0 z-40 backdrop-blur-md">
        <Link href="/" className="inline-flex items-center space-x-2 text-xs text-[#dfb975] hover:text-[#f7e7ce] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link 
            href="/admin/properties/add" 
            className="text-[10px] uppercase tracking-wider text-[#c8a45c] border border-[#c8a45c]/30 px-3 py-1.5 rounded-sm hover:bg-[#c8a45c]/10 transition-colors"
          >
            + Add Listing
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 space-y-10">
        {/* Page Banner */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#0a221d]/80 border border-[#c8a45c]/30 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a45c]" />
            <span className="text-xs text-[#f7e7ce] tracking-wide font-light">Curated Dubai Collection</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-serif text-slate-100">
            Available <span className="gold-gradient-text">Properties</span>
          </h1>
          <p className="text-xs lg:text-sm text-slate-300 font-light max-w-2xl">
            Explore verified high-yield off-plan launches and ready primary assets across Dubai's most coveted destinations.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#0a221d]/60 border border-[#c8a45c]/20 p-4 rounded-sm space-y-4 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {/* Search Input */}
            <div className="relative md:col-span-2">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="text"
                placeholder="Search by tower, developer, or area..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#051411] border border-[#c8a45c]/30 rounded-sm pl-9 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#c8a45c]"
              />
            </div>

            {/* Location Filter */}
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-[#051411] border border-[#c8a45c]/30 rounded-sm px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-[#c8a45c]"
              >
                <option value="ALL">All Locations</option>
                {locationsList.map((loc) => (
                  <option key={loc} value={loc} className="bg-[#051411] text-slate-200">{loc}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full bg-[#051411] border border-[#c8a45c]/30 rounded-sm px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-[#c8a45c]"
              >
                <option value="ALL">All Statuses</option>
                <option value="Off-Plan">Off-Plan</option>
                <option value="Under Construction">Under Construction</option>
                <option value="Ready / Secondary">Ready / Secondary</option>
              </select>
            </div>
          </div>
        </div>

        {/* Loading / Error States */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 space-y-3 text-slate-400">
            <Loader2 className="w-8 h-8 text-[#c8a45c] animate-spin" />
            <span className="text-xs uppercase tracking-widest">Loading Portfolio...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-950/30 border border-red-500/40 p-6 rounded-sm text-center space-y-2">
            <p className="text-sm text-red-200">{error}</p>
            <button
              onClick={fetchProperties}
              className="text-xs text-[#c8a45c] hover:underline"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Properties Grid */}
        {!loading && !error && filteredProperties.length === 0 && (
          <div className="text-center py-20 border border-[#c8a45c]/10 rounded-sm bg-[#0a221d]/20 space-y-3">
            <Building2 className="w-10 h-10 text-slate-600 mx-auto" />
            <h3 className="font-serif text-lg text-slate-300">No properties found</h3>
            <p className="text-xs text-slate-500">Try adjusting your search criteria or add new properties.</p>
          </div>
        )}

        {!loading && !error && filteredProperties.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {filteredProperties.map((property) => {
  const coverImage = property.imageUrls && property.imageUrls.length > 0 
    ? property.imageUrls[0] 
    : "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600";

  const whatsappInquiryUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Velora Heights, I am interested in inquiring about ${property.title} in ${property.location} (AED ${property.priceAed.toLocaleString()}).`
  )}`;

  return (
    <div
      key={property.id}
      onClick={() => router.push(`/ai-matches/${property.id}`)}
      className="bg-[#0a221d]/40 border border-[#c8a45c]/20 hover:border-[#c8a45c]/60 rounded-sm overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-[0_4px_25px_rgba(200,164,92,0.15)] cursor-pointer"
    >
      {/* Card Image */}
      <div className="relative h-56 w-full overflow-hidden bg-black">
        <img 
          src={coverImage} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051411] via-transparent to-transparent opacity-80" />
        
        {/* Status Badge */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-[#051411]/90 border border-[#c8a45c]/30 text-[#f7e7ce] text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-sm backdrop-blur-sm">
            {property.status}
          </span>
          {property.isFeatured && (
            <span className="bg-[#c8a45c] text-[#051411] font-semibold text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm">
              Featured
            </span>
          )}
        </div>

        {/* ROI Badge */}
        {property.roiPercentage && property.roiPercentage > 0 && (
          <div className="absolute top-3 right-3 bg-[#0a221d]/90 border border-[#c8a45c] text-[#c8a45c] text-[10px] font-medium px-2 py-1 rounded-sm flex items-center gap-1 backdrop-blur-sm">
            <TrendingUp className="w-3 h-3" />
            <span>{property.roiPercentage}% ROI</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span className="uppercase tracking-widest text-[#c8a45c]/80">{property.developer}</span>
            <span>{property.propertyType}</span>
          </div>

          <h3 className="font-serif text-lg text-slate-100 group-hover:text-[#f7e7ce] transition-colors leading-snug">
            {property.title}
          </h3>

          <div className="flex items-center text-xs text-slate-400 gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#c8a45c] shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>
        </div>

        {/* Key Specs Row */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#c8a45c]/10 text-slate-300 text-xs text-center">
          <div className="flex items-center justify-center gap-1.5">
            <Bed className="w-3.5 h-3.5 text-[#c8a45c]" />
            <span>{property.bedrooms} Bed</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 border-x border-[#c8a45c]/10">
            <Bath className="w-3.5 h-3.5 text-[#c8a45c]" />
            <span>{property.bathrooms || 1} Bath</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <Maximize2 className="w-3.5 h-3.5 text-[#c8a45c]" />
            <span>{property.areaSqFt} sq.ft</span>
          </div>
        </div>

        {/* Features Badges */}
        {property.features && property.features.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {property.features.slice(0, 3).map((feature, i) => (
              <span key={i} className="text-[10px] bg-[#051411] border border-[#c8a45c]/20 px-2 py-0.5 rounded-sm text-slate-300">
                {feature}
              </span>
            ))}
            {property.features.length > 3 && (
              <span className="text-[10px] bg-[#051411] border border-[#c8a45c]/20 px-1.5 py-0.5 rounded-sm text-[#c8a45c]">
                +{property.features.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Handover Date */}
        {property.handoverDate && (
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#c8a45c]" /> Handover:
            </span>
            <span className="text-slate-200 font-medium">{property.handoverDate}</span>
          </div>
        )}

        {/* Price & Action */}
        <div className="pt-2 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Starting From</span>
            <span className="font-serif text-lg font-bold text-[#f7e7ce]">
              AED {property.priceAed.toLocaleString()}
            </span>
          </div>
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="gold-gradient-bg text-[#051411] font-medium p-2.5 rounded-sm hover:brightness-110 transition-all flex items-center justify-center shadow-[0_2px_15px_rgba(200,164,92,0.2)] z-10"
            title="Inquire via WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
})}
          </div>
        )}
      </div>
    </div>
  );
}