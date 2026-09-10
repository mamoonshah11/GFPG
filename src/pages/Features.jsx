import React, { useState } from "react";
import {
  SlidersHorizontal,
  Pencil,
  Trash2,
  PlusCircle,
  Check,
  X,
} from "lucide-react";

const initialFeatures = [
  { id: 1, name: "Emergency Exit" },
  { id: 2, name: "CCTV" },
  { id: 3, name: "Free Wi-Fi" },
  { id: 4, name: "Free Parking in The Area" },
  { id: 5, name: "Air Conditioning" },
  { id: 6, name: "Security Guard" },
  { id: 7, name: "Terrace" },
  { id: 8, name: "Elevator Lift" },
  { id: 9, name: "Balcony" },
  { id: 10, name: "Laundry Service" },
];

export default function Features({ isDark = false }) {
  const [features, setFeatures] = useState(initialFeatures);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [newFeatureName, setNewFeatureName] = useState("");

  // Start editing a feature
  const handleStartEdit = (feature) => {
    setEditingId(feature.id);
    setEditName(feature.name);
  };

  // Save edited feature
  const handleSaveEdit = (id) => {
    if (!editName.trim()) return;
    setFeatures((prev) =>
      prev.map((f) => (f.id === id ? { ...f, name: editName.trim() } : f))
    );
    setEditingId(null);
    setEditName("");
  };

  // Delete a feature
  const handleDelete = (id) => {
    setFeatures((prev) => prev.filter((f) => f.id !== id));
  };

  // Add new feature
  const handleAddNew = (e) => {
    e.preventDefault();
    if (!newFeatureName.trim()) return;
    const newEntry = {
      id: Date.now(),
      name: newFeatureName.trim(),
    };
    setFeatures([...features, newEntry]);
    setNewFeatureName("");
    setIsAdding(false);
  };

  // Theme Helpers
  const cardBg = isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200";
  const textTitle = isDark ? "text-white" : "text-slate-900";
  const textMuted = isDark ? "text-slate-400" : "text-slate-500";
  const headerBg = isDark ? "bg-slate-800/50 text-slate-400" : "bg-slate-50/70 text-slate-500";
  const inputBg = isDark
    ? "bg-slate-800 border-slate-700 text-slate-100"
    : "bg-slate-50 border-slate-200 text-slate-800";

  return (
    <div className="space-y-6 pb-12">
      {/* ---------------- 1. PAGE HEADER ---------------- */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-950/70 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
          <SlidersHorizontal className="w-5 h-5 stroke-[2.2]" />
        </div>
        <div>
          <h1 className={`text-2xl font-bold tracking-tight ${textTitle}`}>
            Features
          </h1>
          <p className={`text-sm mt-0.5 ${textMuted}`}>Manage all features</p>
        </div>
      </div>

      {/* ---------------- 2. FEATURES TABLE CARD ---------------- */}
      <div className={`w-full max-w-4xl border rounded-2xl overflow-hidden shadow-sm ${cardBg}`}>
        {/* Table Header */}
        <div
          className={`grid grid-cols-12 px-6 py-3.5 text-xs font-bold uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 ${headerBg}`}
        >
          <div className="col-span-9">FEATURE NAME</div>
          <div className="col-span-3 text-right">ACTIONS</div>
        </div>

        {/* Feature Rows */}
        <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="grid grid-cols-12 items-center px-6 py-3.5 hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors text-sm"
            >
              {/* Feature Name (or Inline Edit Input) */}
              <div className="col-span-9">
                {editingId === feature.id ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={editName}
                      autoFocus
                      onChange={(e) => setEditName(e.target.value)}
                      className={`px-3 py-1.5 border rounded-lg text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg}`}
                    />
                    <button
                      type="button"
                      onClick={() => handleSaveEdit(feature.id)}
                      className="p-1 rounded bg-emerald-600 text-white hover:bg-emerald-700"
                      aria-label="Save edit"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingId(null)}
                      className="p-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                      aria-label="Cancel edit"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <span className={`font-medium ${textTitle}`}>
                    {feature.name}
                  </span>
                )}
              </div>

              {/* Action Buttons: Pencil & Trash */}
              <div className="col-span-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => handleStartEdit(feature)}
                  className="p-1 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                  aria-label="Edit feature"
                >
                  <Pencil className="w-4 h-4 stroke-" />
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(feature.id)}
                  className="p-1 text-red-500 hover:text-red-600 transition-colors"
                  aria-label="Delete feature"
                >
                  <Trash2 className="w-4 h-4 stroke-" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ---------------- 3. ADD NEW FEATURE BUTTON / INPUT ---------------- */}
        <div className="p-3 border-t border-slate-100 dark:border-slate-800">
          {isAdding ? (
            <form onSubmit={handleAddNew} className="flex items-center gap-3 px-3 py-1">
              <input
                type="text"
                placeholder="Enter new feature name (e.g. Swimming Pool)"
                autoFocus
                value={newFeatureName}
                onChange={(e) => setNewFeatureName(e.target.value)}
                className={`flex-1 px-3.5 py-2 border rounded-xl text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg}`}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsAdding(false);
                  setNewFeatureName("");
                }}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl text-xs font-semibold transition-colors"
              >
                Cancel
              </button>
            </form>
          ) : (
            <button
              type="button"
              onClick={() => setIsAdding(true)}
              className={`w-full py-2.5 flex items-center justify-center gap-2 text-xs font-semibold rounded-xl transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 ${textTitle}`}
            >
              <PlusCircle className="w-4 h-4 text-slate-900 dark:text-white" />
              <span>Add New</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}