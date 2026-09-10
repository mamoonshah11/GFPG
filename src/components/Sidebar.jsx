import React, { useState, useEffect } from "react";
import {
  Building2,
  Home,
  Building,
  MessageSquare,
  CalendarCheck,
  SlidersHorizontal,
  Users,
  MessageCircleMore,
  Mail, // 👈 1. Import Mail icon for Contact Us
  Sun,
  Moon,
  LogOut,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", id: "dashboard", icon: Home },
  { name: "Listings", id: "listings", icon: Building },
  { name: "Inquiries", id: "inquiries", icon: MessageSquare },
  { name: "Tour Requests", id: "tour-requests", icon: CalendarCheck },
  { name: "Features", id: "features", icon: SlidersHorizontal },
  { name: "Users", id: "users", icon: Users },
  { name: "Messages", id: "messages", icon: MessageCircleMore },
  { name: "Contact Us", id: "contact-us", icon: Mail }, // 👈 2. Added Contact Us
];

export default function Sidebar({
  activeTab = "dashboard",
  onTabChange,
  isDark,
  onToggleTheme,
  onOpenMessages,
  onLogout,
}) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  // Keep internal tab in sync with App's activeTab
  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  const handleSelect = (id) => {
    // When Messages is clicked, open the message popup without navigating away
    if (id === "messages") {
      if (onOpenMessages) onOpenMessages();
      return;
    }

    setCurrentTab(id);
    if (onTabChange) onTabChange(id);
  };

  return (
    <aside
      className={`w-64 min-h-screen border-r flex flex-col justify-between select-none shrink-0 transition-colors duration-200 ${
        isDark
          ? "bg-slate-900 border-slate-800 text-slate-200"
          : "bg-white border-slate-200 text-slate-800"
      }`}
    >
      <div>
        {/* Brand Logo Header */}
        <div
          className={`flex items-center gap-2.5 px-6 h-16 border-b ${
            isDark ? "border-slate-800" : "border-slate-200"
          }`}
        >
          <Building2
            className={`w-7 h-7 ${
              isDark ? "text-blue-400 fill-blue-600/20" : "text-blue-600 fill-blue-600/10"
            }`}
          />
          <span
            className={`text-xl font-bold tracking-tight ${
              isDark ? "text-white" : "text-slate-800"
            }`}
          >
            GFPG
          </span>
        </div>

        {/* Navigation Section */}
        <div className="pt-5 px-3">
          <p
            className={`px-3 mb-3 text-sm font-semibold tracking-wide ${
              isDark ? "text-slate-400" : "text-slate-700"
            }`}
          >
            Admin Panel
          </p>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                    isActive
                      ? isDark
                        ? "bg-blue-950/70 text-blue-400 font-semibold"
                        : "bg-blue-100/70 text-blue-600 font-semibold"
                      : isDark
                      ? "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 shrink-0 ${
                      isActive
                        ? isDark
                          ? "text-blue-400 fill-blue-400"
                          : "text-blue-600 fill-blue-600"
                        : isDark
                        ? "text-slate-400 stroke-[1.8]"
                        : "text-slate-600 stroke-[1.8]"
                    }`}
                  />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="p-6 space-y-4">
        {/* Sun / Moon Switch */}
        <div
          className={`inline-flex items-center p-1 rounded-full border ${
            isDark
              ? "bg-slate-800 border-slate-700"
              : "bg-sky-100/70 border-sky-200/50"
          }`}
        >
          {/* Light Mode Button */}
          <button
            type="button"
            onClick={() => onToggleTheme(false)}
            className={`p-1.5 rounded-full transition-all ${
              !isDark
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
            aria-label="Light mode"
          >
            <Sun className="w-4 h-4" />
          </button>

          {/* Dark Mode Button */}
          <button
            type="button"
            onClick={() => onToggleTheme(true)}
            className={`p-1.5 rounded-full transition-all ${
              isDark
                ? "bg-slate-700 text-blue-400 shadow-sm"
                : "text-slate-400 hover:text-slate-600"
            }`}
            aria-label="Dark mode"
          >
            <Moon className="w-4 h-4" />
          </button>
        </div>

        {/* Logout Button */}
        <button
          type="button"
          onClick={() => (onLogout ? onLogout() : console.log("Logout"))}
          className="flex items-center gap-3 text-red-500 hover:text-red-600 text-sm font-semibold transition-colors w-full px-1"
        >
          <LogOut className="w-5 h-5 stroke-" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}