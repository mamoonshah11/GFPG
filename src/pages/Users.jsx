import React, { useState } from "react";
import {
  Users as UsersIcon,
  Search,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

// 10 Detailed Users with realistic directory data
const initialUsers = [
  {
    id: 1,
    name: "James Hawkins",
    phone: "+1-202-555-0185",
    email: "jameshawkins@gmail.com",
    state: "North Carolina",
    address: "4708 Periwinkle Place, Rocky Mount, NC 27804",
  },
  {
    id: 2,
    name: "Sophia Martinez",
    phone: "+1-305-555-0192",
    email: "sophia.martinez@gmail.com",
    state: "Florida",
    address: "15 s aurora ave, Miami, FL 33101",
  },
  {
    id: 3,
    name: "David Liam",
    phone: "+1-773-555-0144",
    email: "david.liam@gmail.com",
    state: "North Carolina",
    address: "4705 Matt Dr, Raleigh, NC 27604",
  },
  {
    id: 4,
    name: "Emily Watson",
    phone: "+1-415-555-0163",
    email: "emily.watson@gmail.com",
    state: "North Carolina",
    address: "4204 Tain Burgh Ct, Wake Forest, NC 27587",
  },
  {
    id: 5,
    name: "Michael Chang",
    phone: "+1-206-555-0118",
    email: "michael.chang@gmail.com",
    state: "North Carolina",
    address: "4641 Timbermill Ct APT 305, Raleigh, NC 27612",
  },
  {
    id: 6,
    name: "Sarah Jenkins",
    phone: "+1-617-555-0129",
    email: "sarah.jenkins@gmail.com",
    state: "North Carolina",
    address: "314 Park Avenue W, Wilson, NC 27893",
  },
  {
    id: 7,
    name: "Robert Taylor",
    phone: "+1-312-555-0177",
    email: "robert.taylor@gmail.com",
    state: "Illinois",
    address: "1204 Grand Oaks Way, Joliet, IL 60431",
  },
  {
    id: 8,
    name: "Jessica Alba",
    phone: "+1-702-555-0156",
    email: "jessica.alba@gmail.com",
    state: "Illinois",
    address: "882 Westview Boulevard, Naperville, IL 60540",
  },
  {
    id: 9,
    name: "Daniel Craig",
    phone: "+1-512-555-0131",
    email: "daniel.craig@gmail.com",
    state: "Illinois",
    address: "550 North Highland St, Rockford, IL 61107",
  },
  {
    id: 10,
    name: "Olivia Brown",
    phone: "+1-404-555-0199",
    email: "olivia.brown@gmail.com",
    state: "Illinois",
    address: "920 Sunset Terrace, Aurora, IL 60505",
  },
];

export default function Users({ isDark = false }) {
  const [users] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Date Added");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter & Sort Logic
  const filteredUsers = users
    .filter(
      (u) =>
        u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "Name") return a.name.localeCompare(b.name);
      if (sortBy === "State") return a.state.localeCompare(b.state);
      return 0; // Default Date Added
    });

  // Pagination calculation
  const startIndex = (currentPage - 1) * itemsPerPage;
  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / itemsPerPage));
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const currentItems = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  // Theme Helpers
  const cardBg = isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200";
  const textTitle = isDark ? "text-white" : "text-slate-900";
  const textMuted = isDark ? "text-slate-400" : "text-slate-500";
  const inputBg = isDark
    ? "bg-slate-800 border-slate-700 text-slate-200"
    : "bg-white border-slate-200 text-slate-700";

  return (
    <div className="space-y-6 pb-12">
      {/* ---------------- 1. PAGE HEADER ---------------- */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          className={`p-2 rounded-xl border ${cardBg} hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors`}
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4 text-slate-600 dark:text-slate-300" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-950/70 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
            <UsersIcon className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <h1 className={`text-2xl font-bold tracking-tight ${textTitle}`}>
              Users
            </h1>
            <p className={`text-sm mt-0.5 ${textMuted}`}>Manage all users</p>
          </div>
        </div>
      </div>

      {/* ---------------- 2. SEARCH & SORT CONTROLS ---------------- */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Search Input */}
        <div
          className={`flex items-center gap-2.5 px-3.5 py-2 border rounded-xl w-72 shadow-sm ${inputBg}`}
        >
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full text-xs bg-transparent outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Sort By Dropdown */}
        <div className="flex items-center gap-2">
          <span className={`text-xs font-medium ${textMuted}`}>Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={`px-3.5 py-2 border rounded-xl text-xs font-medium outline-none shadow-sm cursor-pointer ${inputBg}`}
          >
            <option value="Date Added">Date Added</option>
            <option value="Name">Name</option>
            <option value="State">State</option>
          </select>
        </div>
      </div>

      {/* ---------------- 3. USERS DATA TABLE ---------------- */}
      <div className={`border rounded-2xl overflow-hidden shadow-sm ${cardBg}`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            {/* Table Head */}
            <thead
              className={`border-b text-[11px] font-bold uppercase tracking-wider ${
                isDark
                  ? "bg-slate-800/60 border-slate-800 text-slate-400"
                  : "bg-slate-50/70 border-slate-100 text-slate-500"
              }`}
            >
              <tr>
                <th className="px-6 py-4">FULL NAME</th>
                <th className="px-6 py-4">PHONE NUMBER</th>
                <th className="px-6 py-4">EMAIL</th>
                <th className="px-6 py-4">STATE</th>
                <th className="px-6 py-4">ADDRESS</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
              {currentItems.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                >
                  {/* Full Name */}
                  <td className={`px-6 py-4 font-semibold ${textTitle}`}>
                    {user.name}
                  </td>

                  {/* Phone Number */}
                  <td className={`px-6 py-4 font-medium ${textMuted}`}>
                    {user.phone}
                  </td>

                  {/* Email */}
                  <td className={`px-6 py-4 font-medium ${textMuted}`}>
                    {user.email}
                  </td>

                  {/* State */}
                  <td className={`px-6 py-4 font-medium ${textTitle}`}>
                    {user.state}
                  </td>

                  {/* Address */}
                  <td className={`px-6 py-4 max-w-70 font-medium leading-snug ${textMuted}`}>
                    {user.address}
                  </td>
                </tr>
              ))}

              {currentItems.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-xs text-slate-400"
                  >
                    No users found matching "{searchQuery}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ---------------- 4. PAGINATION FOOTER ---------------- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
        <p className={textMuted}>
          Showing {filteredUsers.length > 0 ? startIndex + 1 : 0}-
          {Math.min(startIndex + itemsPerPage, filteredUsers.length)} of 1423
        </p>

        {/* Numbered Pagination Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {pageNumbers.map((page) => (
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
            disabled={currentPage === 8}
            onClick={() => setCurrentPage((p) => Math.min(8, p + 1))}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}