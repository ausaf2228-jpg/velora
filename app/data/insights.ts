export interface InsightPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: "Market Report" | "Neighborhood Spotlight" | "Macro Economics" | "Off-Plan Guide";
  image: string;
  excerpt: string;
  keyMetrics?: { label: string; value: string }[];
  content: {
    heading: string;
    paragraphs: string[];
  }[];
}

export const INSIGHTS_DATA: InsightPost[] = [
  {
    slug: "dubai-off-plan-market-update-2026",
    title: "Dubai Off-Plan Market Update: High-Yield Outlook",
    subtitle: "Analyzing off-plan transaction volumes, prime developer launches, and capital appreciation trajectories.",
    date: "Aug 2026",
    readTime: "5 min read",
    category: "Market Report",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200",
    excerpt: "Key trends shaping master communities, buyer demand, and 60/40 payment plan dynamics across prime districts.",
    keyMetrics: [
      { label: "Avg. Capital Gain", value: "+14.2% YoY" },
      { label: "Off-Plan Volume", value: "62% of Total Sales" },
      { label: "Top Inflow", value: "EU & APAC High-Net-Worth" }
    ],
    content: [
      {
        heading: "Sustained Demand for Tier-1 Developers",
        paragraphs: [
          "Demand for master-planned communities by developers such as Emaar, Sobha, and Omniyat continues to outpace completions. Investors are locking in early phase allocations to capitalize on structured 60/40 and 70/30 post-handover payment plans.",
          "Prime sectors like Business Bay and Dubai Creek Harbour have recorded steady double-digit capital gains, supported by sustained infrastructure development and direct Metro connectivity."
        ]
      },
      {
        heading: "Yield Compression vs. Total Return",
        paragraphs: [
          "While pure rental yields have normalized near 7.5% - 9.2% due to price appreciation, total investor return (capital gains + short-term yield) remains among the most competitive globally."
        ]
      }
    ]
  },
  {
    slug: "prime-waterfronts-watch-dubai",
    title: "Areas to Watch: Prime Waterfront Communities",
    subtitle: "Why waterfront assets in Palm Jumeirah, Emaar Beachfront, and Dubai Islands command peak premiums.",
    date: "Aug 2026",
    readTime: "4 min read",
    category: "Neighborhood Spotlight",
    image: "https://aigentsrealty.b-cdn.net/blogs_images/emaar-beachfront-review-2026-dubai-harbour-off-plan.png", // Fixed working image
    excerpt: "Scarcity of coastline real estate is driving ultra-luxury transactions and long-term capital preservation.",
    keyMetrics: [
      { label: "Waterfront Premium", value: "+38% vs Inland" },
      { label: "Occupancy Rate", value: "91% Annual Avg" },
      { label: "Secondary Demand", value: "All-Time High" }
    ],
    content: [
      {
        heading: "The Scarcity Factor of Coastal Living",
        paragraphs: [
          "Coastline inventory in Dubai is finite. As global ultra-high-net-worth individuals establish primary and secondary residences, branded waterfront residences along Emaar Beachfront and Dubai Islands continue to see record absorption within hours of launch.",
          "Private beaches, private yacht moorings, and panoramic Arabian Gulf vistas create a natural barrier to entry that insulates waterfront investments from broad market cycles."
        ]
      }
    ]
  },
  {
    slug: "why-dubai-real-estate-outperforms",
    title: "Why Dubai Real Estate Continues to Outperform",
    subtitle: "Macro fundamentals, 0% capital gains tax, Golden Visa residency, and political stability.",
    date: "Jul 2026",
    readTime: "6 min read",
    category: "Macro Economics",
    image: "https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=1200",
    excerpt: "Zero property and capital taxes paired with 10-year Golden Visa incentives ensure sustained foreign capital inflows.",
    keyMetrics: [
      { label: "Property Tax", value: "0%" },
      { label: "Golden Visa Entry", value: "AED 2,000,000" },
      { label: "Currency Peg", value: "USD (Fixed 3.6725)" }
    ],
    content: [
      {
        heading: "Tax Efficiency & Regulatory Modernization",
        paragraphs: [
          "With zero personal income tax, zero capital gains tax, and zero property tax, Dubai offers institutional and private investors unmatched cash flow retention.",
          "The UAE Golden Visa program (granted on freehold property investments of AED 2M and above) provides 10-year renewable residency, cementing Dubai's transition from a transitory hub to a long-term global wealth capital."
        ]
      }
    ]
  }
];