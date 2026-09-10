import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MessagesDrawer from "./pages/MessagesDrawer";

// Pages
import Dashboard from "./pages/Dashboard";
import Listings from "./pages/Listings";
import Inquiries from "./pages/Inquiries";
import TourRequests from "./pages/TourRequests";
import Features from "./pages/Features";
import Users from "./pages/Users";
import ContactUs from "./pages/ContactUs"; // 👈 Added missing import

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMessagesOpen, setIsMessagesOpen] = useState(false); // Controls message popup visibility

  // Default to light mode (false)
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("app_theme") === "dark";
  });

  const handleToggleTheme = (darkValue) => {
    setIsDark(darkValue);
    localStorage.setItem("app_theme", darkValue ? "dark" : "light");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard isDark={isDark} onNavigate={setActiveTab} />;
      case "listings":
        return <Listings isDark={isDark} />;
      case "inquiries":
        return <Inquiries isDark={isDark} />;
      case "tour-requests":
        return <TourRequests isDark={isDark} />;
      case "features":
        return <Features isDark={isDark} />;
      case "users":
        return <Users isDark={isDark} />;
      case "contact-us":
        return (
          <ContactUs
            isDark={isDark}
            onOpenChat={() => setIsMessagesOpen(true)}
          />
        );
      default:
        return <Dashboard isDark={isDark} onNavigate={setActiveTab} />;
    }
  };

  return (
    <div
      className={`min-h-screen flex transition-colors duration-200 relative ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* 1. Sidebar */}
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onOpenMessages={() => setIsMessagesOpen((prev) => !prev)}
        onLogout={() => console.log("Logged out")}
      />

      {/* 2. Main Page Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar
          isDark={isDark}
          onNavigate={setActiveTab}
          onNotificationClick={() => console.log("Bell clicked")}
        />

        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          {renderContent()}
        </main>
      </div>

      {/* 3. Global Floating Messages Popup */}
      <MessagesDrawer
        isOpen={isMessagesOpen}
        onClose={() => setIsMessagesOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}