import React, { useState } from "react";
import {
  Building2,
  Plus,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Search,
  Bed,
  Bath,
  Maximize,
  Eye,
  Pencil,
  Trash2,
  MapPin,
  CheckCircle2,
  Upload,
  ArrowLeft,
  Navigation,
} from "lucide-react";

// Initial Dummy Data
const initialProperties = [
  {
    id: 1,
    title: "Serenity height villas",
    address: "15 s aurora ave, miami",
    city: "Joliet",
    status: "For Rent",
    price: "$2,500/mo",
    numericPrice: 2500,
    bedrooms: 4,
    bathrooms: 3,
    area: "120ft²",
    numericArea: 120,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 2,
    title: "4708 Periwinkle Place",
    address: "Rocky Mount, NC 27804",
    city: "Naperville",
    status: "For Rent",
    price: "$2,500/mo",
    numericPrice: 2500,
    bedrooms: 3,
    bathrooms: 3,
    area: "1,200ft²",
    numericArea: 1200,
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 3,
    title: "4705 Matt Dr",
    address: "Raleigh, NC 27604",
    city: "Rockford",
    status: "For Rent",
    price: "$2,500/mo",
    numericPrice: 2500,
    bedrooms: 4,
    bathrooms: 3,
    area: "120ft²",
    numericArea: 120,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 4,
    title: "4204 Tain Burgh Ct",
    address: "Wake Forest, NC 27587",
    city: "Naperville",
    status: "For Sale",
    price: "$570,000",
    numericPrice: 570000,
    bedrooms: 4,
    bathrooms: 3,
    area: "120ft²",
    numericArea: 120,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 5,
    title: "4641 Timbermill Ct APT 305",
    address: "Raleigh, NC 27612",
    city: "Aurora",
    status: "For Sale",
    price: "$570,000",
    numericPrice: 570000,
    bedrooms: 4,
    bathrooms: 3,
    area: "120ft²",
    numericArea: 120,
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 6,
    title: "314 Park Avenue W",
    address: "Wilson, NC 27893",
    city: "Rockford",
    status: "For Rent",
    price: "$2,500/mo",
    numericPrice: 2500,
    bedrooms: 4,
    bathrooms: 3,
    area: "120ft²",
    numericArea: 120,
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    ],
  },
];

const availableFeatures = [
  "Emergency Exit",
  "CCTV",
  "Free Wi-Fi",
  "Free Parking in The Area",
  "Air Conditioning",
  "Security Guard",
  "Terrace",
  "Elevator Lift",
  "Laundry Service",
  "Balcony",
];

export default function Listings({ isDark = false }) {
  // Navigation subviews: 'list' | 'add' | 'details'
  const [viewMode, setViewMode] = useState("list");
  const [selectedProperty, setSelectedProperty] = useState(initialProperties);
  const [properties, setProperties] = useState(initialProperties);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // Filter Drawer State
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedBedrooms, setSelectedBedrooms] = useState("");
  const [selectedBathrooms, setSelectedBathrooms] = useState("");
  const [maxPrice, setMaxPrice] = useState(600000);
  const [maxArea, setMaxArea] = useState(1200);

  // Add Property Form State
  const [newProperty, setNewProperty] = useState({
    title: "",
    status: "For Rent",
    price: "$3,200/mo",
    city: "Joliet",
    bedrooms: "3",
    bathrooms: "2",
    area: "1,800",
    description: "",
    address: "",
    zipCode: "",
    videoLink: "",
    features: ["Emergency Exit", "Free Wi-Fi"],
  });

  // Execute Filter Search
  const handleSearch = () => {
    let filtered = initialProperties.filter((p) => {
      if (selectedCity && p.city !== selectedCity) return false;
      if (selectedStatus && p.status !== selectedStatus) return false;
      if (selectedBedrooms && p.bedrooms !== Number(selectedBedrooms)) return false;
      if (selectedBathrooms && p.bathrooms !== Number(selectedBathrooms)) return false;
      if (p.numericPrice > maxPrice) return false;
      return true;
    });
    setProperties(filtered);
  };

  // Submit New Property
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const created = {
      id: Date.now(),
      title: newProperty.title || "Modern Family Residence",
      address: newProperty.address || "123 New Ave",
      city: newProperty.city,
      status: newProperty.status,
      price: newProperty.price,
      numericPrice: parseInt(newProperty.price.replace(/\D/g, "")) || 3200,
      bedrooms: Number(newProperty.bedrooms),
      bathrooms: Number(newProperty.bathrooms),
      area: `${newProperty.area}ft²`,
      numericArea: Number(newProperty.area),
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      ],
    };
    setProperties([created, ...properties]);
    setViewMode("list");
  };

  // Delete Property
  const handleDelete = (id) => {
    setProperties((prev) => prev.filter((p) => p.id !== id));
  };

  // Toggle Feature Checkbox
  const toggleFeature = (feature) => {
    setNewProperty((prev) => {
      const exists = prev.features.includes(feature);
      return {
        ...prev,
        features: exists
          ? prev.features.filter((f) => f !== feature)
          : [...prev.features, feature],
      };
    });
  };

  // Theme Helpers
  const cardBg = isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200";
  const textTitle = isDark ? "text-white" : "text-slate-900";
  const textMuted = isDark ? "text-slate-400" : "text-slate-500";
  const inputBg = isDark
    ? "bg-slate-800 border-slate-700 text-slate-200"
    : "bg-white border-slate-200 text-slate-800";

  // =========================================================================
  // VIEW 2: ADD NEW PROPERTY (image_b935ad.png)
  // =========================================================================
  if (viewMode === "add") {
    return (
      <div className="space-y-6 pb-12">
        {/* Header */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-xl border ${cardBg} hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors`}
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </button>
          <div>
            <h1 className={`text-2xl font-bold tracking-tight ${textTitle}`}>
              Add New Property
            </h1>
          </div>
        </div>

        {/* Main Form Card */}
        <form
          onSubmit={handleAddSubmit}
          className={`border rounded-2xl p-6 md:p-8 space-y-6 shadow-sm ${cardBg}`}
        >
          <h2 className={`text-base font-bold ${textTitle}`}>Basic Information</h2>

          {/* Row 1: Status, Price, City */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className={`block text-xs font-semibold mb-2 ${textTitle}`}>
                Property Status
              </label>
              <select
                value={newProperty.status}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, status: e.target.value })
                }
                className={`w-full px-4 py-3 border rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg}`}
              >
                <option value="For Rent">For Rent</option>
                <option value="For Sale">For Sale</option>
              </select>
            </div>

            <div>
              <label className={`block text-xs font-semibold mb-2 ${textTitle}`}>
                Property Price
              </label>
              <input
                type="text"
                placeholder="$3,200/mo"
                value={newProperty.price}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, price: e.target.value })
                }
                className={`w-full px-4 py-3 border rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg}`}
              />
            </div>

            <div>
              <label className={`block text-xs font-semibold mb-2 ${textTitle}`}>
                City
              </label>
              <select
                value={newProperty.city}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, city: e.target.value })
                }
                className={`w-full px-4 py-3 border rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg}`}
              >
                <option value="Joliet">Joliet</option>
                <option value="Naperville">Naperville</option>
                <option value="Rockford">Rockford</option>
                <option value="Aurora">Aurora</option>
              </select>
            </div>
          </div>

          {/* Row 2: Bedrooms, Bathrooms, Area */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className={`block text-xs font-semibold mb-2 ${textTitle}`}>
                Bedrooms
              </label>
              <input
                type="number"
                placeholder="3"
                value={newProperty.bedrooms}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, bedrooms: e.target.value })
                }
                className={`w-full px-4 py-3 border rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg}`}
              />
            </div>

            <div>
              <label className={`block text-xs font-semibold mb-2 ${textTitle}`}>
                Bathrooms
              </label>
              <input
                type="number"
                placeholder="2"
                value={newProperty.bathrooms}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, bathrooms: e.target.value })
                }
                className={`w-full px-4 py-3 border rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg}`}
              />
            </div>

            <div>
              <label className={`block text-xs font-semibold mb-2 ${textTitle}`}>
                Area (sqft)
              </label>
              <input
                type="text"
                placeholder="1,800"
                value={newProperty.area}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, area: e.target.value })
                }
                className={`w-full px-4 py-3 border rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg}`}
              />
            </div>
          </div>

          {/* Row 3: Description */}
          <div>
            <label className={`block text-xs font-semibold mb-2 ${textTitle}`}>
              Description
            </label>
            <textarea
              rows={3}
              placeholder="Write a brief property description..."
              value={newProperty.description}
              onChange={(e) =>
                setNewProperty({ ...newProperty, description: e.target.value })
              }
              className={`w-full px-4 py-3 border rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 resize-none ${inputBg}`}
            />
          </div>

          {/* Row 4: Address, Zip Code & Map Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={`block text-xs font-semibold mb-2 ${textTitle}`}>
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Enter property address"
                  value={newProperty.address}
                  onChange={(e) =>
                    setNewProperty({ ...newProperty, address: e.target.value })
                  }
                  className={`w-full px-4 py-3 border rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg}`}
                />
              </div>
              <div>
                <label className={`block text-xs font-semibold mb-2 ${textTitle}`}>
                  Zip Code
                </label>
                <input
                  type="text"
                  placeholder="e.g. 27804"
                  value={newProperty.zipCode}
                  onChange={(e) =>
                    setNewProperty({ ...newProperty, zipCode: e.target.value })
                  }
                  className={`w-full px-4 py-3 border rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg}`}
                />
              </div>
            </div>

            {/* Google Map Mockup */}
            <div className="lg:col-span-4 h-24 rounded-2xl overflow-hidden relative border border-slate-200 dark:border-slate-700 bg-sky-50 dark:bg-slate-800 flex items-center justify-center">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] bg-size-[12px_12px]" />
              <div className="flex items-center gap-2 z-10 text-teal-600 dark:text-teal-400 font-semibold text-xs">
                <MapPin className="w-5 h-5 fill-teal-600 text-white animate-bounce" />
                <span>Map Pin Selected</span>
              </div>
            </div>
          </div>

          {/* Row 5: Media Upload Area */}
          <div>
            <label className={`block text-xs font-semibold mb-2 ${textTitle}`}>
              Media
            </label>
            <div
              className={`border-2 border-dashed rounded-2xl p-10 text-center flex flex-col items-center justify-center cursor-pointer transition-colors ${
                isDark
                  ? "border-slate-700 bg-slate-800/40 hover:bg-slate-800/80"
                  : "border-slate-200 bg-slate-50/60 hover:bg-slate-50"
              }`}
            >
              <Upload className="w-6 h-6 text-slate-400 mb-2" />
              <p className={`text-xs font-medium ${textMuted}`}>
                Drop files here or click to upload
              </p>
            </div>
          </div>

          {/* Row 6: Video (.mp4) */}
          <div>
            <label className={`block text-xs font-semibold mb-2 ${textTitle}`}>
              Video (.mp4)
            </label>
            <input
              type="text"
              placeholder="Enter video link"
              value={newProperty.videoLink}
              onChange={(e) =>
                setNewProperty({ ...newProperty, videoLink: e.target.value })
              }
              className={`w-full px-4 py-3 border rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg}`}
            />
          </div>

          {/* Row 7: Additional Features Checkboxes */}
          <div>
            <label className={`block text-xs font-semibold mb-3 ${textTitle}`}>
              Additional features
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {availableFeatures.map((feat) => {
                const isChecked = newProperty.features.includes(feat);
                return (
                  <label
                    key={feat}
                    onClick={() => toggleFeature(feat)}
                    className="flex items-center gap-2.5 cursor-pointer text-xs font-medium select-none"
                  >
                    <div
                      className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                        isChecked
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "border-slate-300 dark:border-slate-700 bg-transparent"
                      }`}
                    >
                      {isChecked && <span className="text-[10px] font-bold">✓</span>}
                    </div>
                    <span className={textMuted}>{feat}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Row 8: Action Buttons */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="submit"
              className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setViewMode("list")}
              className="px-8 py-2.5 bg-red-50 hover:bg-red-100 dark:bg-red-950/40 text-red-500 hover:text-red-600 rounded-xl text-sm font-semibold transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  // =========================================================================
  // VIEW 3: PROPERTY DETAILS (image_b935eb.jpg)
  // =========================================================================
  if (viewMode === "details" && selectedProperty) {
    return (
      <div className="space-y-6 pb-12">
        {/* Header with Back Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-xl border ${cardBg} hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors`}
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </button>
          <div>
            <h1 className={`text-2xl font-bold tracking-tight ${textTitle}`}>
              Property Details
            </h1>
            <p className={`text-sm mt-0.5 ${textMuted}`}>{selectedProperty.title}</p>
          </div>
        </div>

        {/* Details Card */}
        <div className={`border rounded-2xl p-6 md:p-8 space-y-6 shadow-sm ${cardBg}`}>
          {/* Top Gallery & Map Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Gallery (6 cols) */}
            <div className="lg:col-span-6 space-y-3">
              <div className="relative w-full h-72 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={selectedProperty.images[activeGalleryIndex]}
                  alt="Property"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2.5">
                {selectedProperty.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveGalleryIndex(idx)}
                    className={`h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      activeGalleryIndex === idx
                        ? "border-blue-600 scale-95"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Map (6 cols) */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col justify-between bg-slate-100 dark:bg-slate-800 relative">
              <div className="p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs flex items-center justify-between border-b border-slate-200 dark:border-slate-800 z-10">
                <div>
                  <h4 className={`text-xs font-bold ${textTitle}`}>WESLEYAN COL, NC 27804</h4>
                  <p className="text-[10px] text-slate-400">USA</p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 text-white rounded-lg text-xs font-medium"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Directions</span>
                </button>
              </div>

              {/* Map Canvas Background */}
              <div className="flex-1 min-h-55 bg-sky-100/70 dark:bg-slate-800 flex items-center justify-center relative">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center shadow-lg animate-bounce">
                    <MapPin className="w-5 h-5 fill-current stroke-none" />
                  </div>
                  <span className="px-2.5 py-0.5 bg-white dark:bg-slate-900 text-slate-800 dark:text-white rounded-full text-[10px] font-bold shadow-xs">
                    4708 Periwinkle Place
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Title, Address & Badges */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div>
              <h2 className={`text-2xl font-bold ${textTitle}`}>
                {selectedProperty.title}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedProperty.address}</span>
              </div>

              {/* Amenities Pills */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl text-xs font-semibold">
                  <Bed className="w-4 h-4" />
                  <span>{selectedProperty.bedrooms} Bedrooms</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl text-xs font-semibold">
                  <Bath className="w-4 h-4" />
                  <span>{selectedProperty.bathrooms} Bathrooms</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl text-xs font-semibold">
                  <Maximize className="w-4 h-4" />
                  <span>{selectedProperty.area}</span>
                </div>
              </div>
            </div>

            {/* Price & Status */}
            <div className="sm:text-right space-y-1">
              <p className="text-xs font-medium text-slate-400">Price</p>
              <h3 className={`text-2xl font-bold ${textTitle}`}>
                {selectedProperty.price}
              </h3>
              <span className="inline-block px-4 py-1 bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 font-semibold text-xs rounded-full border border-teal-200/50">
                {selectedProperty.status}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h4 className={`text-sm font-bold ${textTitle}`}>Description</h4>
            <p className={`text-xs leading-relaxed ${textMuted}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra ligula
              non nunc mattis, scelerisque viverra nisi ullamcorper. Donec pellentesque,
              turpis vel pharetra laoreet, neque justo viverra est, nec consectetur purus
              lorem id purus.
            </p>
            <p className={`text-xs leading-relaxed ${textMuted}`}>
              Nulla non purus et est sagittis sodales ut sit amet est. Nullam ornare,
              mauris in ultricies tempus, mauris eros varius massa, sit amet congue mi est
              quis elit.
            </p>
          </div>

          {/* Additional Features (Checked) */}
          <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h4 className={`text-sm font-bold ${textTitle}`}>Additional features</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {availableFeatures.map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className={textMuted}>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 1: DEFAULT LISTINGS GRID (image_b92ae1.jpg)
  // =========================================================================
  return (
    <div className="space-y-6 pb-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Building2 className="w-8 h-8 text-blue-600 fill-blue-600/10 shrink-0 mt-0.5" />
          <div>
            <h1 className={`text-2xl font-bold tracking-tight ${textTitle}`}>Listings</h1>
            <p className={`text-sm mt-0.5 ${textMuted}`}>Manage all property listings</p>
          </div>
        </div>

        {/* Add Property Button */}
        <button
          type="button"
          onClick={() => setViewMode("add")}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors w-fit"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Add Property</span>
        </button>
      </div>

      {/* Expandable Filter Drawer */}
      <div className={`border rounded-2xl shadow-sm transition-colors ${cardBg}`}>
        <button
          type="button"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full flex items-center justify-between px-6 py-4 text-left select-none"
        >
          <div className="flex items-center gap-2.5">
            <SlidersHorizontal className="w-4 h-4 text-slate-700 dark:text-slate-300" />
            <span className={`text-sm font-semibold ${textTitle}`}>Filter</span>
          </div>
          {isFilterOpen ? (
            <ChevronUp className="w-4 h-4 text-slate-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-400" />
          )}
        </button>

        {isFilterOpen && (
          <div className="px-6 pb-6 pt-2 space-y-5 border-t border-slate-100 dark:border-slate-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className={`w-full px-3.5 py-2.5 border rounded-xl text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg}`}
              >
                <option value="">Select City</option>
                <option value="Joliet">Joliet</option>
                <option value="Naperville">Naperville</option>
                <option value="Rockford">Rockford</option>
                <option value="Aurora">Aurora</option>
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className={`w-full px-3.5 py-2.5 border rounded-xl text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg}`}
              >
                <option value="">Select Status</option>
                <option value="For Rent">For Rent</option>
                <option value="For Sale">For Sale</option>
              </select>

              <select
                value={selectedBedrooms}
                onChange={(e) => setSelectedBedrooms(e.target.value)}
                className={`w-full px-3.5 py-2.5 border rounded-xl text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg}`}
              >
                <option value="">Number of bedrooms</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
              </select>

              <select
                value={selectedBathrooms}
                onChange={(e) => setSelectedBathrooms(e.target.value)}
                className={`w-full px-3.5 py-2.5 border rounded-xl text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg}`}
              >
                <option value="">Number of bathrooms</option>
                <option value="2">2 Bathrooms</option>
                <option value="3">3 Bathrooms</option>
                <option value="4">4 Bathrooms</option>
              </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-5 space-y-2">
                <p className={`text-xs font-medium ${textMuted}`}>Price Range</p>
                <input
                  type="range"
                  min="50000"
                  max="600000"
                  step="10000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-blue-600 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-xs font-medium text-slate-500">
                  <span>$50,000</span>
                  <span className="text-blue-600 font-semibold">
                    ${maxPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-2">
                <p className={`text-xs font-medium ${textMuted}`}>Area Range</p>
                <input
                  type="range"
                  min="500"
                  max="1200"
                  step="50"
                  value={maxArea}
                  onChange={(e) => setMaxArea(Number(e.target.value))}
                  className="w-full accent-blue-600 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-xs font-medium text-slate-500">
                  <span>500ft²</span>
                  <span className="text-blue-600 font-semibold">{maxArea}ft²</span>
                </div>
              </div>

              <div className="lg:col-span-3">
                <button
                  type="button"
                  onClick={handleSearch}
                  className="w-full h-10 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className={`border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${cardBg}`}
          >
            <div className="relative w-full h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />

              <span className="absolute top-3.5 left-3.5 px-3 py-1 bg-black/40 backdrop-blur-xs text-white rounded-full text-xs font-medium">
                {property.city}
              </span>

              <span
                className={`absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  property.status === "For Rent"
                    ? "bg-teal-100/90 dark:bg-teal-950 text-teal-600 dark:text-teal-400 border border-teal-300/40"
                    : "bg-sky-100/90 dark:bg-sky-950 text-sky-600 dark:text-sky-400 border border-sky-300/40"
                }`}
              >
                {property.status}
              </span>
            </div>

            <div className="p-4 space-y-3.5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className={`text-sm font-bold truncate ${textTitle}`}>
                    {property.title}
                  </h3>
                  <span className="shrink-0 px-2.5 py-1 bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 rounded-lg text-xs font-bold">
                    {property.price}
                  </span>
                </div>
                <p className={`text-xs mt-1 ${textMuted}`}>{property.address}</p>
              </div>

              <hr className={isDark ? "border-slate-800" : "border-slate-100"} />

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="flex flex-col items-center gap-1">
                  <Bed className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className={`text-[11px] font-medium ${textMuted}`}>
                    {property.bedrooms} Bedrooms
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Bath className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className={`text-[11px] font-medium ${textMuted}`}>
                    {property.bathrooms} Bathrooms
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Maximize className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className={`text-[11px] font-medium ${textMuted}`}>
                    {property.area}
                  </span>
                </div>
              </div>

              <hr className={isDark ? "border-slate-800" : "border-slate-100"} />

              {/* Action Buttons: View, Edit, Delete */}
              <div className="flex items-center justify-around pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProperty(property);
                    setActiveGalleryIndex(0);
                    setViewMode("details");
                  }}
                  className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                  aria-label="View Details"
                >
                  <Eye className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedProperty(property);
                    setViewMode("add");
                  }}
                  className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                  aria-label="Edit"
                >
                  <Pencil className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(property.id)}
                  className="p-1.5 text-red-500 hover:text-red-600 transition-colors"
                  aria-label="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}