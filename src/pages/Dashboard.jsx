import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  User,
  Plus,
  Building2,
  CalendarCheck,
  Bed,
  Bath,
  MessageCircle,
} from "lucide-react";

export default function Dashboard({ isDark = false, onNavigate = () => {} }) {
  // Filters state
  const [dashboardFilter, setDashboardFilter] = useState("Last 30 days");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [chartFilter, setChartFilter] = useState("All time");
  const [isChartFilterOpen, setIsChartFilterOpen] = useState(false);

  // Property Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const propertyImages = [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  ];

  // Dynamic Chart Data
  const chartData =
    chartFilter === "All time"
      ? [
          { label: "2021", sold: 25, rented: 75 },
          { label: "2022", sold: 50, rented: 50 },
          { label: "2023", sold: 25, rented: 75 },
          { label: "2024", sold: 50, rented: 50 },
          { label: "2025", sold: 25, rented: 75 },
        ]
      : [
          { label: "Jan", sold: 2, rented: 6 },
          { label: "Feb", sold: 2, rented: 6 },
          { label: "Mar", sold: 2, rented: 6 },
          { label: "Apr", sold: 2, rented: 6 },
          { label: "May", sold: 2, rented: 6 },
          { label: "Jun", sold: 2, rented: 6 },
        ];

  // Dynamic theme classes
  const cardBg = isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200";
  const textTitle = isDark ? "text-white" : "text-slate-900";
  const textMuted = isDark ? "text-slate-400" : "text-slate-500";
  const trackBg = isDark ? "bg-slate-800" : "bg-slate-100";

  return (
    <div className="space-y-6 pb-8">
      {/* ---------------- 1. HEADER ---------------- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className={`text-2xl font-bold tracking-tight ${textTitle}`}>
            Welcom back, Admin!
          </h1>
          <p className={`text-sm mt-0.5 ${textMuted}`}>
            Here's a summary of your platform's activity.
          </p>
        </div>

        {/* Top Time Filter Dropdown */}
        <div className="relative w-fit">
          <button
            type="button"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`inline-flex items-center gap-2 px-3.5 py-2 border rounded-xl text-sm font-medium shadow-sm transition-colors ${
              isDark
                ? "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            <span>{dashboardFilter}</span>
            <span className="text-xs text-slate-400">▼</span>
          </button>

          {isFilterOpen && (
            <div
              className={`absolute right-0 mt-2 w-36 border rounded-xl shadow-xl z-30 overflow-hidden ${
                isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
              }`}
            >
              {["Last 7 days", "Last 30 days", "Last 6 months", "All time"].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setDashboardFilter(opt);
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors ${
                    dashboardFilter === opt
                      ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold"
                      : `${textMuted} hover:bg-slate-50 dark:hover:bg-slate-800`
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ---------------- 2. TOP METRIC CARDS ---------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className={`border rounded-2xl p-5 md:p-6 shadow-sm ${cardBg}`}>
          <p className={`text-sm font-medium ${textMuted}`}>Total Listings</p>
          <h2 className={`text-3xl font-bold mt-2 ${textTitle}`}>40</h2>
        </div>

        <div className={`border rounded-2xl p-5 md:p-6 shadow-sm ${cardBg}`}>
          <p className={`text-sm font-medium ${textMuted}`}>New Inquiries</p>
          <h2 className={`text-3xl font-bold mt-2 ${textTitle}`}>25</h2>
        </div>

        <div className={`border rounded-2xl p-5 md:p-6 shadow-sm ${cardBg}`}>
          <p className={`text-sm font-medium ${textMuted}`}>New Tour Requests</p>
          <h2 className={`text-3xl font-bold mt-2 ${textTitle}`}>12</h2>
        </div>
      </div>

      {/* ---------------- 3. LISTINGS OVERVIEW ---------------- */}
      <div className="space-y-4">
        <h2 className={`text-lg font-bold ${textTitle}`}>Listings Overview</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Card Left: Progress Bars & Circular Pie Chart (5 cols) */}
          <div className={`border rounded-2xl p-6 shadow-sm lg:col-span-5 flex flex-col justify-between ${cardBg}`}>
            <div>
              <p className={`text-sm font-medium ${textMuted}`}>Total Listings</p>
              <h3 className={`text-3xl font-bold mt-1 ${textTitle}`}>40</h3>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 my-4">
              {/* Progress Bars */}
              <div className="flex-1 w-full space-y-4">
                {/* Available */}
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className={textMuted}>Available</span>
                    <span className={textTitle}>32</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${trackBg}`}>
                    <div className="h-full bg-emerald-600 rounded-full" style={{ width: "80%" }} />
                  </div>
                </div>

                {/* Rented */}
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className={textMuted}>Rented</span>
                    <span className={textTitle}>6</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${trackBg}`}>
                    <div className="h-full bg-teal-500 rounded-full" style={{ width: "15%" }} />
                  </div>
                </div>

                {/* Sold */}
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className={textMuted}>Sold</span>
                    <span className={textTitle}>2</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${trackBg}`}>
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: "5%" }} />
                  </div>
                </div>
              </div>

              {/* 🟢 100% TRUE CIRCULAR PIE GRAPH */}
              <div className="relative w-36 h-36 shrink-0 flex items-center justify-center">
                <div
                  className="w-full h-full rounded-full shadow-xs"
                  style={{
                    background: "conic-gradient(#059669 0% 80%, #0D9488 80% 95%, #2563EB 95% 100%)",
                  }}
                />

                {/* Exact Percentage Badges on Slices */}
                <span className="absolute top-1/2 left-5 -translate-y-1/2 text-xs font-bold text-white select-none">
                  80%
                </span>
                <span className="absolute top-6 right-7 text-[11px] font-bold text-white select-none">
                  15%
                </span>
                <span className="absolute bottom-8 right-6 text-[10px] font-bold text-white select-none">
                  5%
                </span>
              </div>
            </div>
          </div>

          {/* Card Right: Capsule Bar Chart (7 cols) */}
          <div className={`border rounded-2xl p-6 shadow-sm lg:col-span-7 flex flex-col justify-between ${cardBg}`}>
            {/* Header with Legend & Period Selector */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <h4 className={`text-sm font-semibold ${textTitle}`}>Listings Over Time</h4>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span>Sold</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-teal-500" />
                    <span>Rented</span>
                  </div>
                </div>
              </div>

              {/* Chart Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsChartFilterOpen(!isChartFilterOpen)}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 border rounded-lg text-xs font-medium transition-colors ${
                    isDark
                      ? "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{chartFilter}</span>
                  <span className="text-[10px] text-slate-400">▼</span>
                </button>

                {isChartFilterOpen && (
                  <div
                    className={`absolute right-0 mt-2 w-32 border rounded-xl shadow-xl z-30 overflow-hidden ${
                      isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                    }`}
                  >
                    {["Last 6 months", "All time"].map((period) => (
                      <button
                        key={period}
                        type="button"
                        onClick={() => {
                          setChartFilter(period);
                          setIsChartFilterOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs font-medium transition-colors ${
                          chartFilter === period
                            ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold"
                            : `${textMuted} hover:bg-slate-50 dark:hover:bg-slate-800`
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 💊 TRUE CAPSULE DESIGN BARS */}
            <div className="flex items-end justify-between gap-3 pt-2 px-2">
              {chartData.map((item) => {
                const total = item.sold + item.rented;
                const isAllTime = chartFilter === "All time";
                const soldHeight = (item.sold / (isAllTime ? 100 : 10)) * 100;
                const rentedHeight = (item.rented / (isAllTime ? 100 : 10)) * 100;

                return (
                  <div key={item.label} className="flex-1 flex flex-col items-center gap-2">
                    {/* Capsule Pill Container with rounded full caps */}
                    <div
                      className={`w-10 sm:w-11 h-44 rounded-full overflow-hidden flex flex-col justify-end relative shadow-inner ${trackBg}`}
                    >
                      {/* Rented (Teal Top Capsule Segment) */}
                      <div
                        style={{ height: `${rentedHeight}%` }}
                        className="w-full bg-teal-500 flex items-center justify-center transition-all duration-300"
                      >
                        <span className="text-[11px] font-bold text-white drop-shadow-xs">
                          {item.rented}
                        </span>
                      </div>

                      {/* Sold (Blue Bottom Capsule Segment) */}
                      <div
                        style={{ height: `${soldHeight}%` }}
                        className="w-full bg-blue-600 flex items-center justify-center transition-all duration-300"
                      >
                        <span className="text-[11px] font-bold text-white drop-shadow-xs">
                          {item.sold}
                        </span>
                      </div>
                    </div>

                    {/* Year / Month Label */}
                    <span className={`text-xs font-semibold ${textMuted}`}>
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- 4. BOTTOM 3 COLUMNS ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Column 1: Quick Accesss */}
        <div className="space-y-4">
          <h3 className={`text-base font-bold ${textTitle}`}>Quick Accesss</h3>

          <div className="space-y-3">
            {/* Add Property */}
            <div
              onClick={() => onNavigate("listings")}
              className={`border rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:border-blue-400 dark:hover:border-blue-600 transition-colors shadow-sm ${cardBg}`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-950/70 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Plus className="w-5 h-5 stroke-[2.5]" />
                </div>
                <span className={`text-sm font-semibold ${textTitle}`}>Add New Property</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>

            {/* View Listings */}
            <div
              onClick={() => onNavigate("listings")}
              className={`border rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:border-blue-400 dark:hover:border-blue-600 transition-colors shadow-sm ${cardBg}`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-950/70 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className={`text-sm font-semibold ${textTitle}`}>View Listings</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>

            {/* View Tour Requests */}
            <div
              onClick={() => onNavigate("tour-requests")}
              className={`border rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:border-blue-400 dark:hover:border-blue-600 transition-colors shadow-sm ${cardBg}`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-950/70 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <span className={`text-sm font-semibold ${textTitle}`}>View Tour Requests</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Column 2: Recent Inquiries */}
        <div className="space-y-4">
          <h3 className={`text-base font-bold ${textTitle}`}>Recent Inquiries</h3>

          <div className={`border rounded-2xl p-4 space-y-4 shadow-sm ${cardBg}`}>
            {/* Inquiry 1 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                <User className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h5 className={`text-xs font-bold ${textTitle}`}>Downtown Loft</h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                  John M. - "Hi, is this still available..."
                </p>
                <span className="text-[10px] text-slate-400">1h ago</span>
              </div>
            </div>

            <hr className={isDark ? "border-slate-800" : "border-slate-100"} />

            {/* Inquiry 2 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                <User className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h5 className={`text-xs font-bold ${textTitle}`}>Marina Beach</h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                  Sarah K. - "Does the apartment allow pets?"
                </p>
                <span className="text-[10px] text-slate-400">2h ago</span>
              </div>
            </div>

            <hr className={isDark ? "border-slate-800" : "border-slate-100"} />

            {/* Inquiry 3 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                <User className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h5 className={`text-xs font-bold ${textTitle}`}>Garden View Apt</h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                  David L. - "I would like to schedule a tour for..."
                </p>
                <span className="text-[10px] text-slate-400">2h ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Recent Property */}
        <div className="space-y-4">
          <h3 className={`text-base font-bold ${textTitle}`}>Recent Property</h3>

          <div className={`border rounded-2xl p-3.5 space-y-3 relative shadow-sm ${cardBg}`}>
            {/* Carousel */}
            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={propertyImages[currentImageIndex]}
                alt="Recent Property"
                className="w-full h-full object-cover"
              />

              <button
                type="button"
                onClick={() =>
                  setCurrentImageIndex((prev) =>
                    prev === 0 ? propertyImages.length - 1 : prev - 1
                  )
                }
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setCurrentImageIndex((prev) =>
                    prev === propertyImages.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Address */}
            <p className={`text-xs font-semibold ${textTitle}`}>
              4708 Periwinkle Place, Rocky Mount, NC 27804
            </p>

            {/* Features & Chat Badge */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-4 text-xs font-semibold text-blue-600 dark:text-blue-400">
                <div className="flex items-center gap-1.5">
                  <Bed className="w-4 h-4" />
                  <span>3</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Bath className="w-4 h-4" />
                  <span>3</span>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shadow-md">
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}