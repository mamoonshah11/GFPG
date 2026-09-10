import React, { useState } from "react";
import {
  CalendarCheck,
  Eye,
  Trash2,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// 10 Unique Customers with realistic Tour Request data
const initialTourRequests = [
  {
    id: "#001",
    customer: "James Hawkins",
    phone: "+1-212-555-1234",
    date: "26/04/2025",
    time: "12:42 AM",
    appointmentDate: "26/04/2025, 12:42 AM",
    plannedMoveInDate: "30/04/2025",
    propertyLink:
      "https://www.figma.com/design/3iqvNuaUV5Ro5anlycswrC/GFPG-Frontend?node-id=261-647&t=dT9dzJSgEbPTipus-0",
    propertyAddress: "4708 Periwinkle Place, Rocky Mount, NC 27804",
    status: "Approved",
    inquiryMessage:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra ligula non nunc mattis, scelerisque viverra nisi ullamcorper. Donec pellentesque, turpis vel pharetra laoreet.",
  },
  {
    id: "#002",
    customer: "Sophia Martinez",
    phone: "+1-305-555-8765",
    date: "26/04/2025",
    time: "12:42 AM",
    appointmentDate: "28/04/2025, 03:00 PM",
    plannedMoveInDate: "05/05/2025",
    propertyLink:
      "https://www.figma.com/design/3iqvNuaUV5Ro5anlycswrC/GFPG-Frontend?node-id=261-648",
    propertyAddress: "15 s aurora ave, Miami, FL 33101",
    status: "Pending",
    inquiryMessage:
      "I am relocating next week and would like to inspect the living room and kitchen areas during this tour.",
  },
  {
    id: "#003",
    customer: "David Liam",
    phone: "+1-773-555-4321",
    date: "26/04/2025",
    time: "12:42 AM",
    appointmentDate: "27/04/2025, 11:30 AM",
    plannedMoveInDate: "01/05/2025",
    propertyLink:
      "https://www.figma.com/design/3iqvNuaUV5Ro5anlycswrC/GFPG-Frontend?node-id=261-649",
    propertyAddress: "4705 Matt Dr, Raleigh, NC 27604",
    status: "Declined",
    inquiryMessage:
      "Looking for a 12-month lease. Can an agent guide me through the parking garage facilities as well?",
  },
  {
    id: "#004",
    customer: "Emily Watson",
    phone: "+1-415-555-9876",
    date: "26/04/2025",
    time: "12:42 AM",
    appointmentDate: "30/04/2025, 02:00 PM",
    plannedMoveInDate: "10/05/2025",
    propertyLink:
      "https://www.figma.com/design/3iqvNuaUV5Ro5anlycswrC/GFPG-Frontend?node-id=261-650",
    propertyAddress: "4204 Tain Burgh Ct, Wake Forest, NC 27587",
    status: "Pending",
    inquiryMessage:
      "We want to check if the neighborhood is quiet for remote work during the afternoon visit.",
  },
  {
    id: "#005",
    customer: "Michael Chang",
    phone: "+1-206-555-3456",
    date: "26/04/2025",
    time: "12:42 AM",
    appointmentDate: "02/05/2025, 04:30 PM",
    plannedMoveInDate: "15/05/2025",
    propertyLink:
      "https://www.figma.com/design/3iqvNuaUV5Ro5anlycswrC/GFPG-Frontend?node-id=261-651",
    propertyAddress: "4641 Timbermill Ct APT 305, Raleigh, NC 27612",
    status: "Pending",
    inquiryMessage:
      "Please confirm if the listed appointment time works for the property manager.",
  },
  {
    id: "#006",
    customer: "Sarah Jenkins",
    phone: "+1-617-555-7890",
    date: "25/04/2025",
    time: "06:15 PM",
    appointmentDate: "03/05/2025, 01:00 PM",
    plannedMoveInDate: "20/05/2025",
    propertyLink:
      "https://www.figma.com/design/3iqvNuaUV5Ro5anlycswrC/GFPG-Frontend?node-id=261-652",
    propertyAddress: "314 Park Avenue W, Wilson, NC 27893",
    status: "Approved",
    inquiryMessage:
      "My family and I are excited to view this home. We will arrive 10 minutes early.",
  },
  {
    id: "#007",
    customer: "Robert Taylor",
    phone: "+1-312-555-6543",
    date: "24/04/2025",
    time: "03:20 PM",
    appointmentDate: "04/05/2025, 11:00 AM",
    plannedMoveInDate: "25/05/2025",
    propertyLink:
      "https://www.figma.com/design/3iqvNuaUV5Ro5anlycswrC/GFPG-Frontend?node-id=261-653",
    propertyAddress: "1204 Grand Oaks Way, Joliet, IL 60431",
    status: "Pending",
    inquiryMessage:
      "Would it be possible to tour the clubhouse and fitness center as well?",
  },
  {
    id: "#008",
    customer: "Jessica Alba",
    phone: "+1-702-555-2109",
    date: "24/04/2025",
    time: "10:45 AM",
    appointmentDate: "05/05/2025, 02:30 PM",
    plannedMoveInDate: "01/06/2025",
    propertyLink:
      "https://www.figma.com/design/3iqvNuaUV5Ro5anlycswrC/GFPG-Frontend?node-id=261-654",
    propertyAddress: "882 Westview Boulevard, Naperville, IL 60540",
    status: "Declined",
    inquiryMessage:
      "Requesting a virtual video walkthrough tour before committing to an in-person flight.",
  },
  {
    id: "#009",
    customer: "Daniel Craig",
    phone: "+1-512-555-8833",
    date: "23/04/2025",
    time: "09:10 AM",
    appointmentDate: "06/05/2025, 05:00 PM",
    plannedMoveInDate: "01/06/2025",
    propertyLink:
      "https://www.figma.com/design/3iqvNuaUV5Ro5anlycswrC/GFPG-Frontend?node-id=261-655",
    propertyAddress: "550 North Highland St, Rockford, IL 61107",
    status: "Approved",
    inquiryMessage:
      "Ready to submit background check documents immediately after the tour.",
  },
  {
    id: "#010",
    customer: "Olivia Brown",
    phone: "+1-404-555-4422",
    date: "22/04/2025",
    time: "08:30 PM",
    appointmentDate: "07/05/2025, 12:00 PM",
    plannedMoveInDate: "10/06/2025",
    propertyLink:
      "https://www.figma.com/design/3iqvNuaUV5Ro5anlycswrC/GFPG-Frontend?node-id=261-656",
    propertyAddress: "920 Sunset Terrace, Aurora, IL 60505",
    status: "Pending",
    inquiryMessage:
      "Can we discuss pet deposit terms during our scheduled appointment?",
  },
];

export default function TourRequests({ isDark = false }) {
  const [requests, setRequests] = useState(initialTourRequests);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [replyText, setReplyText] = useState("");

  // Filter States
  const [filterId, setFilterId] = useState("All");
  const [filterDate, setFilterDate] = useState("Any");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortBy, setSortBy] = useState("Date Added");

  // Pagination (5 per page)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter & Sort Logic
  const filteredRequests = requests
    .filter((item) => {
      if (filterId !== "All" && item.id !== filterId) return false;
      if (filterStatus !== "All" && item.status !== filterStatus) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "Customer") return a.customer.localeCompare(b.customer);
      if (sortBy === "Request ID") return a.id.localeCompare(b.id);
      return 0; // Default: Date Added
    });

  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredRequests.slice(startIndex, startIndex + itemsPerPage);

  // Status Change Handlers
  const handleUpdateStatus = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const handleDelete = (id) => {
    setRequests((prev) => prev.filter((item) => item.id !== id));
  };

  // Submit Reply inside Modal
  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!selectedRequest) return;
    handleUpdateStatus(selectedRequest.id, "Approved");
    setSelectedRequest(null);
    setReplyText("");
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
        <div className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-950/70 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
          <CalendarCheck className="w-5 h-5 stroke-[2.2]" />
        </div>
        <div>
          <h1 className={`text-2xl font-bold tracking-tight ${textTitle}`}>
            Tour Requests
          </h1>
          <p className={`text-sm mt-0.5 ${textMuted}`}>Manage all tour requests</p>
        </div>
      </div>

      {/* ---------------- 2. FILTERS & SORT BAR ---------------- */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left Filters */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Request ID Filter */}
          <select
            value={filterId}
            onChange={(e) => setFilterId(e.target.value)}
            className={`px-3.5 py-2 border rounded-xl text-xs font-medium outline-none shadow-sm cursor-pointer ${selectBg}`}
          >
            <option value="All">Request ID: All</option>
            {requests.map((item) => (
              <option key={item.id} value={item.id}>
                {item.id}
              </option>
            ))}
          </select>

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

          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className={`px-3.5 py-2 border rounded-xl text-xs font-medium outline-none shadow-sm cursor-pointer ${selectBg}`}
          >
            <option value="All">Status: All</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Declined">Declined</option>
          </select>
        </div>

        {/* Right Sort By */}
        <div className="flex items-center gap-2">
          <span className={`text-xs font-medium ${textMuted}`}>Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={`px-3.5 py-2 border rounded-xl text-xs font-medium outline-none shadow-sm cursor-pointer ${selectBg}`}
          >
            <option value="Date Added">Date Added</option>
            <option value="Customer">Customer Name</option>
            <option value="Request ID">Request ID</option>
          </select>
        </div>
      </div>

      {/* ---------------- 3. DATA TABLE ---------------- */}
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
                <th className="px-6 py-4">REQUEST ID</th>
                <th className="px-6 py-4">CUSTOMER</th>
                <th className="px-6 py-4">DATE</th>
                <th className="px-6 py-4">PROPERTY LINK</th>
                <th className="px-6 py-4">STATUS</th>
                <th className="px-6 py-4 text-center">ACTIONS</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
              {currentItems.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                >
                  {/* Request ID */}
                  <td className={`px-6 py-4 font-semibold ${textTitle}`}>{item.id}</td>

                  {/* Customer Name (Clickable to open modal) */}
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      onClick={() => setSelectedRequest(item)}
                      className={`font-semibold hover:text-blue-600 dark:hover:text-blue-400 text-left transition-colors ${textTitle}`}
                    >
                      {item.customer}
                    </button>
                  </td>

                  {/* Date & Time */}
                  <td className="px-6 py-4">
                    <div className="space-y-0.5">
                      <p className={`font-medium ${textTitle}`}>{item.date},</p>
                      <p className={`text-[11px] ${textMuted}`}>{item.time}</p>
                    </div>
                  </td>

                  {/* Property Link */}
                  <td className="px-6 py-4 max-w-50">
                    <a
                      href={item.propertyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline truncate block"
                    >
                      {item.propertyLink.substring(0, 32)}...
                    </a>
                  </td>

                  {/* Status Badge */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === "Approved"
                          ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50"
                          : item.status === "Declined"
                          ? "bg-red-100 dark:bg-red-950/80 text-red-600 dark:text-red-400 border border-red-200/50"
                          : "bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 border border-amber-200/50"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Action Icons matching the design */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2.5">
                      {/* View Details Icon */}
                      <button
                        type="button"
                        onClick={() => setSelectedRequest(item)}
                        className="p-1 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                        aria-label="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      {/* If Pending: Show Accept (Green) and Decline (Red) */}
                      {item.status === "Pending" && (
                        <>
                          <button
                            type="button"
                            onClick={() => handleUpdateStatus(item.id, "Approved")}
                            className="w-5 h-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors shadow-xs"
                            aria-label="Approve Request"
                          >
                            <Check className="w-3 h-3 stroke-" />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleUpdateStatus(item.id, "Declined")}
                            className="w-5 h-5 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-colors shadow-xs"
                            aria-label="Decline Request"
                          >
                            <X className="w-3 h-3 stroke-" />
                          </button>
                        </>
                      )}

                      {/* If Approved or Declined: Show Trash Delete Button */}
                      {(item.status === "Approved" || item.status === "Declined") && (
                        <button
                          type="button"
                          onClick={() => handleDelete(item.id)}
                          className="p-1 text-red-500 hover:text-red-600 transition-colors"
                          aria-label="Delete Request"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ---------------- 4. PAGINATION FOOTER ---------------- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
        <p className={textMuted}>
          Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredRequests.length)} of{" "}
          {filteredRequests.length}
        </p>

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

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. TOUR REQUEST DETAILS POPUP MODAL (image_c3364c.png) */}
      {/* ========================================================================= */}
      {selectedRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div
            className={`w-full max-w-xl border rounded-3xl p-6 md:p-8 space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto ${cardBg}`}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <h3 className={`text-base font-bold ${textTitle}`}>Tour Request Details</h3>
              <button
                type="button"
                onClick={() => setSelectedRequest(null)}
                className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Grid 1: ID, Name, Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <p className={`text-xs ${textMuted}`}>Inquiry ID</p>
                <p className={`text-sm font-bold mt-1 ${textTitle}`}>
                  {selectedRequest.id}
                </p>
              </div>
              <div>
                <p className={`text-xs ${textMuted}`}>Customer Name</p>
                <p className={`text-sm font-bold mt-1 ${textTitle}`}>
                  {selectedRequest.customer}
                </p>
              </div>
              <div>
                <p className={`text-xs ${textMuted}`}>Contact Number</p>
                <p className={`text-sm font-bold mt-1 ${textTitle}`}>
                  {selectedRequest.phone}
                </p>
              </div>
            </div>

            {/* Grid 2: Inquiry Date & Appointment Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className={`text-xs ${textMuted}`}>Inquiry Date</p>
                <p className={`text-sm font-bold mt-1 ${textTitle}`}>
                  {selectedRequest.date}, {selectedRequest.time}
                </p>
              </div>
              <div>
                <p className={`text-xs ${textMuted}`}>Appointment date</p>
                <p className={`text-sm font-bold mt-1 ${textTitle}`}>
                  {selectedRequest.appointmentDate}
                </p>
              </div>
            </div>

            {/* Planned Move-in Date */}
            <div>
              <p className={`text-xs ${textMuted}`}>Planned Move-in Date</p>
              <p className={`text-sm font-bold mt-1 ${textTitle}`}>
                {selectedRequest.plannedMoveInDate}
              </p>
            </div>

            {/* Property Link */}
            <div>
              <p className={`text-xs ${textMuted}`}>Property Link</p>
              <a
                href={selectedRequest.propertyLink}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline break-all mt-1 inline-block"
              >
                {selectedRequest.propertyLink}
              </a>
            </div>

            {/* Property Address */}
            <div>
              <p className={`text-xs ${textMuted}`}>Property Address</p>
              <p className={`text-sm font-bold mt-1 ${textTitle}`}>
                {selectedRequest.propertyAddress}
              </p>
            </div>

            {/* Status */}
            <div>
              <p className={`text-xs mb-1.5 ${textMuted}`}>Status</p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  selectedRequest.status === "Approved"
                    ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400"
                    : selectedRequest.status === "Declined"
                    ? "bg-red-100 dark:bg-red-950/80 text-red-600 dark:text-red-400"
                    : "bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400"
                }`}
              >
                {selectedRequest.status}
              </span>
            </div>

            <hr className={isDark ? "border-slate-800" : "border-slate-100"} />

            {/* Inquiry Message */}
            <div className="space-y-1.5">
              <p className={`text-xs font-semibold ${textTitle}`}>Inquiry</p>
              <p className={`text-xs leading-relaxed ${textMuted}`}>
                {selectedRequest.inquiryMessage}
              </p>
            </div>

            {/* Reply Form */}
            <form onSubmit={handleModalSubmit} className="space-y-4 pt-2">
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${textTitle}`}>
                  Your Reply
                </label>
                <textarea
                  rows={3}
                  required
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Your reply"
                  className={`w-full p-3 border rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500/20 resize-none ${
                    isDark
                      ? "bg-slate-800 border-slate-700 text-slate-200"
                      : "bg-white border-slate-200 text-slate-800"
                  }`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}