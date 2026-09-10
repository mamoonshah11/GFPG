import React, { useState } from "react";
import { Bell, X } from "lucide-react";

// Notifications Data
const initialNotifications = [
  {
    id: 1,
    type: "New Inquiry",
    tagColor: "bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400",
    time: "16:45",
    text: "John M has inquired about 'Downtown Loft'",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    targetTab: "inquiries",
  },
  {
    id: 2,
    type: "New Tour Request",
    tagColor: "bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400",
    time: "16:45",
    text: "Sarah K has requested to tour 'Marina Beach'",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
    targetTab: "tour-requests",
  },
  {
    id: 3,
    type: "Property Sold",
    tagColor: "bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400",
    time: "16:45",
    text: "'Marina Beach' property is sold",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80",
    targetTab: "listings",
  },
  {
    id: 4,
    type: "Property Rented",
    tagColor: "bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400",
    time: "16:45",
    text: "'Garden View Apt' property is rented out",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=400&q=80",
    targetTab: "listings",
  },
];

export default function Navbar({ isDark = false, onNavigate }) {
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  // Theme Helpers
  const cardBg = isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200";
  const itemBorder = isDark
    ? "border-slate-800 hover:bg-slate-800/60"
    : "border-slate-100 hover:bg-slate-50";
  const textTitle = isDark ? "text-white" : "text-slate-900";
  const textBody = isDark ? "text-slate-200" : "text-slate-700";

  return (
    <header
      className={`w-full border-b h-16 px-8 flex items-center justify-end select-none sticky top-0 z-30 transition-colors duration-200 ${
        isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
      }`}
    >
      {/* Container for Bell Button and Dropdown */}
      <div className="relative">
        {/* Bell Button */}
        <button
          type="button"
          onClick={() => setIsNotifOpen(!isNotifOpen)}
          className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-colors focus:outline-none ${
            isDark
              ? "bg-slate-800 hover:bg-slate-700 text-slate-200"
              : "bg-slate-100 hover:bg-slate-200 text-slate-700"
          }`}
          aria-label="Notifications"
        >
          <Bell
            className={`w-4 h-4 stroke-none ${
              isDark ? "fill-slate-200" : "fill-slate-800"
            }`}
          />
          {/* Red Unread Notification Dot */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-900" />
        </button>

        {/* Floating Notifications Dropdown */}
        {isNotifOpen && (
          <div
            className={`absolute right-0 top-12 w-80 sm:w-96 border rounded-3xl p-5 shadow-2xl z-50 select-none transition-all duration-200 ${cardBg}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-base font-bold ${textTitle}`}>Notifications</h3>
              <button
                type="button"
                onClick={() => setIsNotifOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close notifications"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Notifications List */}
            <div className="space-y-3 max-h-105 overflow-y-auto pr-1">
              {initialNotifications.map((notif) => (
                <div
                  key={notif.id}
                  onClick={() => {
                    if (onNavigate) onNavigate(notif.targetTab);
                    setIsNotifOpen(false);
                  }}
                  className={`border rounded-2xl p-3 flex items-start gap-3 cursor-pointer transition-colors ${itemBorder}`}
                >
                  <img
                    src={notif.image}
                    alt="Property"
                    className="w-12 h-12 rounded-xl object-cover shrink-0 mt-0.5"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${notif.tagColor}`}
                      >
                        {notif.type}
                      </span>
                      <span className="text-[10px] text-slate-400">{notif.time}</span>
                    </div>

                    <p className={`text-xs font-medium leading-snug line-clamp-2 ${textBody}`}>
                      {notif.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}