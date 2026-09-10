import React, { useState } from "react";
import {
  Mail,
  MessageSquare,
  Eye,
  Trash2,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

const initialComplaints = [
  {
    id: 1,
    name: "James Hawkins",
    date: "26/04/2025",
    time: "12:42 AM",
    email: "jameshawkins@gmail.com",
    phone: "+1-202-555-0185",
    message: "AC unit in master bedroom is leaking water since yesterday.",
  },
  {
    id: 2,
    name: "Sophia Martinez",
    date: "26/04/2025",
    time: "12:42 AM",
    email: "sophia.martinez@gmail.com",
    phone: "+1-202-555-0185",
    message: "Front entrance keycard scanner is not responding.",
  },
  {
    id: 3,
    name: "David Liam",
    date: "26/04/2025",
    time: "12:42 AM",
    email: "david.liam@gmail.com",
    phone: "+1-202-555-0185",
    message: "Requesting garbage disposal maintenance.",
  },
  {
    id: 4,
    name: "Emily Watson",
    date: "26/04/2025",
    time: "12:42 AM",
    email: "emily.watson@gmail.com",
    phone: "+1-202-555-0185",
    message: "Street parking spot assigned has another vehicle parked.",
  },
  {
    id: 5,
    name: "Michael Chang",
    date: "26/04/2025",
    time: "12:42 AM",
    email: "michael.chang@gmail.com",
    phone: "+1-202-555-0185",
    message: "Water heater pressure drops during early mornings.",
  },
];

export default function ContactUs({ isDark = false, onOpenChat }) {
  const [complaints, setComplaints] = useState(initialComplaints);
  const [filterDate, setFilterDate] = useState("Any");
  const [sortBy, setSortBy] = useState("Date Added");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleDelete = (id) => {
    setComplaints((prev) => prev.filter((item) => item.id !== id));
  };

  // Theme Helpers
  const cardBg = isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200";
  const textTitle = isDark ? "text-white" : "text-slate-900";
  const textMuted = isDark ? "text-slate-400" : "text-slate-500";
  const selectBg = isDark
    ? "bg-slate-800 border-slate-700 text-slate-200"
    : "bg-white border-slate-200 text-slate-700";

  return (
    <div className="space-y-6 pb-12">
      {/* ---------------- 1. PAGE HEADER ---------------- */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          className={`p-2 rounded-xl border ${cardBg} hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors`}
          aria-label="Back"
        >
          <ArrowLeft className="w-4 h-4 text-slate-600 dark:text-slate-300" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-sm">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h1 className={`text-2xl font-bold tracking-tight ${textTitle}`}>
              Contact Us
            </h1>
            <p className={`text-sm mt-0.5 ${textMuted}`}>Manage all complaints</p>
          </div>
        </div>
      </div>

      {/* ---------------- 2. FILTER & SORT BAR ---------------- */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Date Filter */}
        <select
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className={`px-3.5 py-2 border rounded-xl text-xs font-medium outline-none shadow-sm cursor-pointer ${selectBg}`}
        >
          <option value="Any">Date: Any</option>
          <option value="Today">Today</option>
          <option value="Last 7 days">Last 7 days</option>
        </select>

        {/* Sort By */}
        <div className="flex items-center gap-2">
          <span className={`text-xs font-medium ${textMuted}`}>Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={`px-3.5 py-2 border rounded-xl text-xs font-medium outline-none shadow-sm cursor-pointer ${selectBg}`}
          >
            <option value="Date Added">Date Added</option>
            <option value="Name">Name</option>
          </select>
        </div>
      </div>

      {/* ---------------- 3. COMPLAINTS DATA TABLE ---------------- */}
      <div className={`border rounded-2xl overflow-hidden shadow-sm ${cardBg}`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead
              className={`border-b text-[11px] font-bold uppercase tracking-wider ${
                isDark
                  ? "bg-slate-800/60 border-slate-800 text-slate-400"
                  : "bg-slate-50/70 border-slate-100 text-slate-500"
              }`}
            >
              <tr>
                <th className="px-6 py-4">FULL NAME</th>
                <th className="px-6 py-4">DATE</th>
                <th className="px-6 py-4">EMAIL</th>
                <th className="px-6 py-4">PHONE NUMBER</th>
                <th className="px-6 py-4 text-center">ACTIONS</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
              {complaints.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <td className={`px-6 py-4 font-semibold ${textTitle}`}>
                    {item.name}
                  </td>
                  <td className="px-6 py-4">
                    <p className={`font-medium ${textTitle}`}>{item.date},</p>
                    <p className={`text-[11px] ${textMuted}`}>{item.time}</p>
                  </td>
                  <td className={`px-6 py-4 font-medium ${textMuted}`}>
                    {item.email}
                  </td>
                  <td className={`px-6 py-4 font-medium ${textMuted}`}>
                    {item.phone}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      {/* Chat */}
                      <button
                        type="button"
                        onClick={() => onOpenChat && onOpenChat(item.name)}
                        className="p-1 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                        aria-label="Chat"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </button>

                      {/* View */}
                      <button
                        type="button"
                        onClick={() => alert(`Complaint from ${item.name}: "${item.message}"`)}
                        className="p-1 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                        aria-label="View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      {/* Delete */}
                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        className="p-1 text-red-500 hover:text-red-600 transition-colors"
                        aria-label="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ---------------- 4. TABLE PAGINATION ---------------- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
        <p className={textMuted}>Showing 1-5 of 40</p>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {[1, 2, 3, 4, 5, 6, 7, 8].map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`w-7 h-7 rounded-full text-xs font-semibold flex items-center justify-center transition-colors ${
                currentPage === page
                  ? "bg-blue-600 text-white shadow-sm"
                  : `${textMuted} hover:bg-slate-100 dark:hover:bg-slate-800`
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}