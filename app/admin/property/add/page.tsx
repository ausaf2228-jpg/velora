"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Building2, 
  DollarSign, 
  Layers, 
  Sparkles, 
  Upload, 
  X,
  CheckCircle2, 
  AlertCircle,
  Loader2,
  Calendar,
  Percent,
  Check,
  Star
} from "lucide-react";

interface PropertyFormData {
  title: string;
  developer: string;
  location: string;
  propertyType: string;
  status: string;
  handoverDate: string;
  priceAED: string;
  bedrooms: string;
  bathrooms: string;
  areaSqFt: string;
  roiPercentage: string;
  reraPermitNo: string;
  paymentPlan: string;
  features: string[];
  description: string;
  isFeatured: boolean;
}

const INITIAL_FORM_STATE: PropertyFormData = {
  title: "",
  developer: "",
  location: "Downtown Dubai",
  propertyType: "Apartment",
  status: "Off-Plan",
  handoverDate: "",
  priceAED: "",
  bedrooms: "1",
  bathrooms: "2",
  areaSqFt: "",
  roiPercentage: "",
  reraPermitNo: "",
  paymentPlan: "",
  features: [],
  description: "",
  isFeatured: false,
};
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://65.0.139.121:8080";
const DUBAI_LOCATIONS = [
  "Downtown Dubai",
  "Business Bay",
  "Dubai Marina",
  "Palm Jumeirah",
  "Dubai Hills Estate",
  "Dubai Creek Harbour",
  "Jumeirah Village Circle (JVC)",
  "MBR City / Meydan",
  "Emaar Beachfront",
  "DIFC",
  "Bluewaters Island",
  "Palm Jebel Ali"
];

const AMENITIES_LIST = [
  "Burj Khalifa View",
  "Private Beach Access",
  "Infinity Pool",
  "Marina / Sea View",
  "Valet Parking",
  "Smart Home Automation",
  "Private Elevator",
  "Concierge & Spa",
  "State-of-the-art Gym",
  "Private Balcony / Terrace"
];

const PAYMENT_PLAN_PRESETS = [
  "60/40 (20% Down, 40% Construction, 40% Handover)",
  "70/30 (10% Down, 60% Construction, 30% Handover)",
  "80/20 (20% Down, 60% Construction, 20% Handover)",
  "50/50 with 2-Year Post-Handover",
  "1% Monthly Payment Plan"
];

export default function AddPropertyPage() {
  const [formData, setFormData] = useState<PropertyFormData>(INITIAL_FORM_STATE);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

const DEFAULT_AMENITIES = [
  "Burj Khalifa View",
  "Private Beach Access",
  "Infinity Pool",
  "Marina / Sea View",
  "Valet Parking",
  "Smart Home Automation",
  "Private Elevator",
  "Concierge & Spa",
  "State-of-the-art Gym",
  "Private Balcony / Terrace"
];

// Inside AddPropertyPage():
const [amenitiesList, setAmenitiesList] = useState<string[]>(DEFAULT_AMENITIES);
const [customAmenityInput, setCustomAmenityInput] = useState("");

const handleAddCustomAmenity = () => {
  const trimmed = customAmenityInput.trim();
  if (!trimmed) return;

  // Add to master list if not already present
  if (!amenitiesList.includes(trimmed)) {
    setAmenitiesList(prev => [...prev, trimmed]);
  }

  // Automatically select it in formData
  if (!formData.features.includes(trimmed)) {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, trimmed]
    }));
  }

  setCustomAmenityInput("");
};


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAmenityToggle = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(amenity)
        ? prev.features.filter(f => f !== amenity)
        : [...prev.features, amenity]
    }));
  };

  const processFiles = (files: File[]) => {
    const validFiles = files.filter(file => file.type.startsWith("image/"));
    if (validFiles.length < files.length) {
      setStatusMessage({ type: "error", text: "Some files were skipped because they are not valid images." });
    }

    const newPreviews = validFiles.map(file => URL.createObjectURL(file));
    setSelectedFiles(prev => [...prev, ...validFiles]);
    setPreviewUrls(prev => [...prev, ...newPreviews]);
  };

  const handleFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      processFiles(Array.from(e.target.files));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      processFiles(Array.from(e.dataTransfer.files));
    }
  };

  const removeFile = (index: number) => {
    URL.revokeObjectURL(previewUrls[index]);
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  const formattedPrice = formData.priceAED 
    ? Number(formData.priceAED).toLocaleString() 
    : "";
  const usdApprox = formData.priceAED 
    ? (Number(formData.priceAED) / 3.6725).toLocaleString(undefined, { maximumFractionDigits: 0 }) 
    : "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const formPayload = new FormData();

      Object.entries(formData).forEach(([key, val]) => {
        if (key === "features") {
          formPayload.append(key, JSON.stringify(val));
        } else {
          formPayload.append(key, String(val ?? ""));
        }
      });

      selectedFiles.forEach((file) => {
        formPayload.append("images", file);
      });

      // Point directly to Spring Boot backend
      const response = await fetch(`/api/properties`, {
  method: "POST",
  body: formPayload,
});

      // Safe error parsing to avoid raw JSON crashes
      if (!response.ok) {
        const textResponse = await response.text();
        let errorMessage = "Failed to save property.";
        try {
          const jsonResponse = JSON.parse(textResponse);
          errorMessage = jsonResponse.message || jsonResponse.error || errorMessage;
        } catch {
          if (textResponse.trim()) errorMessage = textResponse;
        }
        throw new Error(errorMessage);
      }

      setStatusMessage({ type: "success", text: "Listing published successfully to Dubai portfolio!" });
      setFormData(INITIAL_FORM_STATE);
      setSelectedFiles([]);
      setPreviewUrls([]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      setStatusMessage({ 
        type: "error", 
        text: err.message === "Failed to fetch" 
          ? `Cannot connect to Spring Boot server. Make sure it is running on ${API_BASE}.` 
          : err.message 
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#051411] text-slate-100 font-sans selection:bg-[#c8a45c] selection:text-[#051411] pb-24">
      {/* Top Header */}
      <div className="border-b border-[#c8a45c]/20 bg-[#030d0b] px-6 lg:px-12 py-4 flex items-center justify-between sticky top-0 z-40 backdrop-blur-md">
        <Link href="/" className="inline-flex items-center space-x-2 text-xs text-[#dfb975] hover:text-[#f7e7ce] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portal</span>
        </Link>
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#c8a45c]/80 font-medium">Dubai Asset Management</span>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-10">
        
        {/* Page Heading */}
        <div className="mb-8 space-y-1 text-center md:text-left">
          <h1 className="text-3xl lg:text-4xl font-serif text-slate-100">
            Publish Dubai <span className="gold-gradient-text">Listing</span>
          </h1>
          <p className="text-xs text-slate-400 font-light">
            Upload property attributes, RERA certificates, and media directly into your PostgreSQL database.
          </p>
        </div>

        {/* User-friendly Alert Banners */}
        {statusMessage && (
          <div className={`p-4 mb-8 rounded-sm border flex items-start gap-3 transition-all ${
            statusMessage.type === "success" 
              ? "bg-[#0a221d] border-[#c8a45c] text-[#f7e7ce] shadow-[0_0_20px_rgba(200,164,92,0.15)]" 
              : "bg-red-950/40 border-red-500/50 text-red-200"
          }`}>
            {statusMessage.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-[#c8a45c] shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            )}
            <div className="text-xs leading-relaxed flex-1">
              <span className="font-semibold block mb-0.5">
                {statusMessage.type === "success" ? "Success" : "Action Required"}
              </span>
              {statusMessage.text}
            </div>
            <button onClick={() => setStatusMessage(null)} className="text-slate-400 hover:text-white text-xs">
              ✕
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Card 1: Project Overview */}
          <div className="bg-[#0a221d]/50 border border-[#c8a45c]/20 p-6 lg:p-8 rounded-sm space-y-6 backdrop-blur-sm">
            <div className="flex items-center space-x-2.5 border-b border-[#c8a45c]/15 pb-4">
              <Building2 className="w-4 h-4 text-[#c8a45c]" />
              <h2 className="text-sm font-serif uppercase tracking-wider text-[#f7e7ce]">1. Project & Overview</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5 font-medium">Property / Tower Title *</label>
                <input
                  required
                  type="text"
                  name="title"
                  placeholder="e.g. Marina Cove Residence"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full bg-[#051411] border border-[#c8a45c]/30 rounded-sm px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#c8a45c]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5 font-medium">Developer *</label>
                <input
                  required
                  type="text"
                  name="developer"
                  placeholder="e.g. Emaar, Sobha, Omniyat, DAMAC"
                  value={formData.developer}
                  onChange={handleInputChange}
                  className="w-full bg-[#051411] border border-[#c8a45c]/30 rounded-sm px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#c8a45c]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5 font-medium">Location / Area *</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full bg-[#051411] border border-[#c8a45c]/30 rounded-sm px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-[#c8a45c]"
                >
                  {DUBAI_LOCATIONS.map(loc => (
                    <option key={loc} value={loc} className="bg-[#051411] text-slate-200">{loc}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5 font-medium">Type</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full bg-[#051411] border border-[#c8a45c]/30 rounded-sm px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-[#c8a45c]"
                  >
                    <option value="Apartment">Apartment</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Villa">Villa</option>
                    <option value="Townhouse">Townhouse</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5 font-medium">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full bg-[#051411] border border-[#c8a45c]/30 rounded-sm px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-[#c8a45c]"
                  >
                    <option value="Off-Plan">Off-Plan</option>
                    <option value="Under Construction">Under Construction</option>
                    <option value="Ready / Secondary">Ready / Secondary</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Financials & Legal */}
          <div className="bg-[#0a221d]/50 border border-[#c8a45c]/20 p-6 lg:p-8 rounded-sm space-y-6 backdrop-blur-sm">
            <div className="flex items-center space-x-2.5 border-b border-[#c8a45c]/15 pb-4">
              <DollarSign className="w-4 h-4 text-[#c8a45c]" />
              <h2 className="text-sm font-serif uppercase tracking-wider text-[#f7e7ce]">2. Financials & Compliance</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5 font-medium">Starting Price (AED) *</label>
                <input
                  required
                  type="number"
                  name="priceAED"
                  placeholder="e.g. 2500000"
                  value={formData.priceAED}
                  onChange={handleInputChange}
                  className="w-full bg-[#051411] border border-[#c8a45c]/30 rounded-sm px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#c8a45c]"
                />
                {formattedPrice && (
                  <p className="text-[10px] text-[#c8a45c] mt-1.5 font-mono">
                    AED {formattedPrice} <span className="text-slate-400">(~${usdApprox} USD)</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5 font-medium">Target Rental ROI (%)</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    name="roiPercentage"
                    placeholder="e.g. 8.5"
                    value={formData.roiPercentage}
                    onChange={handleInputChange}
                    className="w-full bg-[#051411] border border-[#c8a45c]/30 rounded-sm px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#c8a45c]"
                  />
                  <Percent className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5 font-medium">RERA Permit No.</label>
                <input
                  type="text"
                  name="reraPermitNo"
                  placeholder="e.g. 0239481230"
                  value={formData.reraPermitNo}
                  onChange={handleInputChange}
                  className="w-full bg-[#051411] border border-[#c8a45c]/30 rounded-sm px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#c8a45c]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5 font-medium">Handover Date</label>
                <div className="relative">
                  <input
                    type="text"
                    name="handoverDate"
                    placeholder="e.g. Q4 2027"
                    value={formData.handoverDate}
                    onChange={handleInputChange}
                    className="w-full bg-[#051411] border border-[#c8a45c]/30 rounded-sm px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#c8a45c]"
                  />
                  <Calendar className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-3" />
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="block text-[11px] uppercase tracking-wider text-slate-300 font-medium">Payment Plan Structure</label>
                <input
                  type="text"
                  name="paymentPlan"
                  placeholder="Select a preset below or type custom structure"
                  value={formData.paymentPlan}
                  onChange={handleInputChange}
                  className="w-full bg-[#051411] border border-[#c8a45c]/30 rounded-sm px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#c8a45c]"
                />
                
                {/* 1-Click Payment Plan Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {PAYMENT_PLAN_PRESETS.map((preset) => (
                    <button
                      type="button"
                      key={preset}
                      onClick={() => setFormData(p => ({ ...p, paymentPlan: preset }))}
                      className={`text-[10px] px-2.5 py-1 rounded-sm border transition-all ${
                        formData.paymentPlan === preset
                          ? "border-[#c8a45c] bg-[#c8a45c]/20 text-[#f7e7ce]"
                          : "border-[#c8a45c]/20 bg-[#051411] text-slate-400 hover:border-[#c8a45c]/50 hover:text-slate-300"
                      }`}
                    >
                      {preset.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Specs & Amenities */}
          <div className="bg-[#0a221d]/50 border border-[#c8a45c]/20 p-6 lg:p-8 rounded-sm space-y-6 backdrop-blur-sm">
            <div className="flex items-center space-x-2.5 border-b border-[#c8a45c]/15 pb-4">
              <Layers className="w-4 h-4 text-[#c8a45c]" />
              <h2 className="text-sm font-serif uppercase tracking-wider text-[#f7e7ce]">3. Specifications & Highlights</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5 font-medium">Bedrooms</label>
                <select
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleInputChange}
                  className="w-full bg-[#051411] border border-[#c8a45c]/30 rounded-sm px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-[#c8a45c]"
                >
                  <option value="Studio">Studio</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4 Bedrooms</option>
                  <option value="5+">5+ Bedrooms / Penthouse</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5 font-medium">Bathrooms</label>
                <input
                  type="number"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleInputChange}
                  className="w-full bg-[#051411] border border-[#c8a45c]/30 rounded-sm px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-[#c8a45c]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5 font-medium">Built-up Area (Sq. Ft) *</label>
                <input
                  required
                  type="number"
                  name="areaSqFt"
                  placeholder="e.g. 1150"
                  value={formData.areaSqFt}
                  onChange={handleInputChange}
                  className="w-full bg-[#051411] border border-[#c8a45c]/30 rounded-sm px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#c8a45c]"
                />
              </div>
            </div>

           <div>
  <div className="flex items-center justify-between mb-2.5">
    <label className="block text-[11px] uppercase tracking-wider text-slate-300 font-medium">
      Luxury Amenities & Views <span className="text-slate-500 font-normal">({formData.features.length} selected)</span>
    </label>
  </div>

  {/* Custom Amenity Input Field */}
  <div className="flex gap-2 mb-3">
    <input
      type="text"
      placeholder="Type custom amenity (e.g. Helipad, Private Cinema, Wine Cellar)..."
      value={customAmenityInput}
      onChange={(e) => setCustomAmenityInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleAddCustomAmenity();
        }
      }}
      className="flex-1 bg-[#051411] border border-[#c8a45c]/30 rounded-sm px-3.5 py-2 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#c8a45c]"
    />
    <button
      type="button"
      onClick={handleAddCustomAmenity}
      className="border border-[#c8a45c] text-[#f7e7ce] hover:bg-[#c8a45c] hover:text-[#051411] px-4 py-2 rounded-sm text-xs font-medium tracking-wide transition-all duration-200"
    >
      + Add
    </button>
  </div>

  {/* Selectable Chips Grid */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
    {amenitiesList.map((amenity) => {
      const isChecked = formData.features.includes(amenity);
      return (
        <button
          type="button"
          key={amenity}
          onClick={() => handleAmenityToggle(amenity)}
          className={`text-left text-xs px-3 py-2 rounded-sm border transition-all flex items-center justify-between ${
            isChecked 
              ? "border-[#c8a45c] bg-[#c8a45c]/15 text-[#f7e7ce]" 
              : "border-[#c8a45c]/20 bg-[#051411]/50 text-slate-400 hover:border-[#c8a45c]/40"
          }`}
        >
          <span className="truncate">{amenity}</span>
          {isChecked && <Check className="w-3.5 h-3.5 text-[#c8a45c] shrink-0" />}
        </button>
      );
    })}
  </div>
</div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5 font-medium">Executive Description</label>
              <textarea
                rows={3}
                name="description"
                placeholder="Highlight architectural excellence, finishings, and unique investment vantage points..."
                value={formData.description}
                onChange={handleInputChange}
                className="w-full bg-[#051411] border border-[#c8a45c]/30 rounded-sm p-3 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#c8a45c]"
              />
            </div>
          </div>

          {/* Card 4: Drag & Drop Image Uploader */}
          <div className="bg-[#0a221d]/50 border border-[#c8a45c]/20 p-6 lg:p-8 rounded-sm space-y-5 backdrop-blur-sm">
            <div className="flex items-center space-x-2.5 border-b border-[#c8a45c]/15 pb-4">
              <Upload className="w-4 h-4 text-[#c8a45c]" />
              <h2 className="text-sm font-serif uppercase tracking-wider text-[#f7e7ce]">4. Media & Gallery</h2>
            </div>

            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-sm p-8 text-center cursor-pointer transition-all ${
                isDragging 
                  ? "border-[#c8a45c] bg-[#c8a45c]/10" 
                  : "border-[#c8a45c]/30 hover:border-[#c8a45c]/60 bg-[#051411]/50"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelection}
                className="hidden"
              />
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="w-10 h-10 rounded-full border border-[#c8a45c]/40 bg-[#0a221d] flex items-center justify-center text-[#c8a45c]">
                  <Upload className="w-4 h-4" />
                </div>
                <span className="text-xs text-[#f7e7ce] font-medium">Click to upload or drag & drop property photos</span>
                <span className="text-[10px] text-slate-400">PNG, JPG, WEBP formats supported</span>
              </div>
            </div>

            {/* Thumbnail Previews with Cover Badge */}
            {previewUrls.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
                {previewUrls.map((url, idx) => (
                  <div key={idx} className="relative group border border-[#c8a45c]/30 rounded-sm overflow-hidden aspect-[4/3] bg-black">
                    <img
                      src={url}
                      alt={`Upload ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(idx);
                      }}
                      className="absolute top-1.5 right-1.5 p-1 bg-red-950/90 hover:bg-red-900 border border-red-500/50 rounded text-red-200"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                    {idx === 0 ? (
                      <span className="absolute bottom-1.5 left-1.5 bg-[#c8a45c] text-[#051411] px-1.5 py-0.5 text-[9px] font-semibold rounded-sm flex items-center gap-1">
                        <Star className="w-2.5 h-2.5 fill-[#051411]" /> Cover
                      </span>
                    ) : (
                      <span className="absolute bottom-1.5 left-1.5 bg-[#051411]/80 px-1.5 py-0.5 text-[9px] rounded text-[#c8a45c]">
                        Photo {idx + 1}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center space-x-3 pt-2">
              <input
                type="checkbox"
                id="isFeatured"
                name="isFeatured"
                checked={formData.isFeatured}
                onChange={handleInputChange}
                className="accent-[#c8a45c] h-4 w-4 rounded cursor-pointer"
              />
              <label htmlFor="isFeatured" className="text-xs text-slate-300 font-medium cursor-pointer">
                Highlight as Featured Opportunity on Velora Homepage
              </label>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-4 pt-4">
            <Link
              href="/"
              className="border border-[#c8a45c]/30 text-slate-300 hover:text-white px-6 py-3 rounded-sm text-xs uppercase tracking-wider transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="gold-gradient-bg text-[#051411] font-semibold px-8 py-3 rounded-sm hover:brightness-110 transition-all text-xs uppercase tracking-widest disabled:opacity-50 shadow-[0_4px_25px_rgba(200,164,92,0.25)] flex items-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Publishing Listing...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Publish Property</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}