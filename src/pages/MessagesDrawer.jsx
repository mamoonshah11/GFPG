import React, { useState } from "react";
import {
  X,
  Search,
  User,
  Paperclip,
  Send,
  ArrowLeft,
  Maximize2,
  Minimize2,
  MessageSquare,
} from "lucide-react";

const initialConversations = [
  {
    id: 1,
    name: "Travis Baker",
    lastMessage: "Hi, yes. David have found it. ask our concierge",
    time: "16:45",
    unread: true,
    messages: [
      {
        id: 101,
        sender: "them",
        type: "property",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        link: "https://www.apartments.com/harbor-point-estates-chicago-il/7pn3xs/",
        text: "See you at office tomorrow!",
        time: "15:42",
      },
      {
        id: 102,
        sender: "them",
        type: "text",
        text: "Hello! Have you seen my backpack anywhere in office?",
        time: "15:42",
      },
      {
        id: 103,
        sender: "me",
        type: "text",
        text: "Hi, yes. David have found it. ask our concierge 👀",
        time: "15:42",
      },
    ],
  },
  {
    id: 2,
    name: "John Doe",
    lastMessage: "How are you doing?",
    time: "16:45",
    unread: false,
    messages: [
      {
        id: 201,
        sender: "them",
        type: "text",
        text: "How are you doing? Are we still meeting for the walkthrough?",
        time: "16:45",
      },
    ],
  },
  {
    id: 3,
    name: "Kate Rose",
    lastMessage: "you: See you tomorrow!",
    time: "16:45",
    unread: false,
    messages: [
      {
        id: 301,
        sender: "me",
        type: "text",
        text: "See you tomorrow! Thanks for the tour confirmation.",
        time: "16:45",
      },
    ],
  },
  {
    id: 4,
    name: "Robert Parker",
    lastMessage: "you: See you tomorrow!",
    time: "16:45",
    unread: false,
    messages: [
      {
        id: 401,
        sender: "me",
        type: "text",
        text: "See you tomorrow!",
        time: "16:45",
      },
    ],
  },
  {
    id: 5,
    name: "George Orwell",
    lastMessage: "you: See you tomorrow!",
    time: "16:45",
    unread: false,
    messages: [
      {
        id: 501,
        sender: "me",
        type: "text",
        text: "See you tomorrow!",
        time: "16:45",
      },
    ],
  },
  {
    id: 6,
    name: "Tom Hardy",
    lastMessage: "you: See you tomorrow!",
    time: "16:45",
    unread: false,
    messages: [
      {
        id: 601,
        sender: "me",
        type: "text",
        text: "See you tomorrow!",
        time: "16:45",
      },
    ],
  },
];

export default function MessagesDrawer({ isOpen, onClose, isDark = false }) {
  const [conversations, setConversations] = useState(initialConversations);
  const [activeChat, setActiveChat] = useState(initialConversations[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);

  if (!isOpen) return null;

  const filteredConversations = conversations.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !activeChat) return;

    const msg = {
      id: Date.now(),
      sender: "me",
      type: "text",
      text: newMessage.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const updated = {
      ...activeChat,
      messages: [...(activeChat.messages || []), msg],
      lastMessage: `you: ${newMessage.trim()}`,
    };

    setActiveChat(updated);
    setConversations((prev) =>
      prev.map((c) => (c.id === activeChat.id ? updated : c))
    );
    setNewMessage("");
  };

  // Safe Theme Helpers (all variables declared)
  const popupBg = isDark
    ? "bg-slate-900 border-slate-800 text-slate-100"
    : "bg-white border-slate-200 text-slate-900";
  const cardBg = isDark
    ? "bg-slate-800 border-slate-700 text-slate-200"
    : "bg-slate-50 border-slate-200 text-slate-800";
  const textTitle = isDark ? "text-white" : "text-slate-900";
  const textMuted = isDark ? "text-slate-400" : "text-slate-500";
  const borderDivider = isDark ? "border-slate-800" : "border-slate-100";
  const inputBg = isDark
    ? "bg-slate-800 border-slate-700 text-slate-100"
    : "bg-slate-50 border-slate-200 text-slate-800";

  // =========================================================================
  // 1. FULL SCREEN 2-COLUMN VIEW (Users Left | Chat Right)
  // =========================================================================
  if (isFullScreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-8 select-none">
        <div
          className={`w-full max-w-6xl h-[85vh] border rounded-3xl shadow-2xl flex flex-col overflow-hidden ${popupBg}`}
        >
          {/* Top Bar */}
          <div
            className={`px-6 py-4 border-b ${borderDivider} flex items-center justify-between shrink-0`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <MessageSquare className="w-4 h-4" />
              </div>
              <h2 className={`text-base font-bold ${textTitle}`}>Messages</h2>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setIsFullScreen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                title="Minimize window"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2-Column Split */}
          <div className="flex flex-1 overflow-hidden">
            {/* LEFT COLUMN: Users List */}
            <div
              className={`w-80 sm:w-96 border-r ${borderDivider} flex flex-col shrink-0 overflow-hidden`}
            >
              {/* Search */}
              <div className={`p-4 border-b ${borderDivider}`}>
                <div
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 border rounded-xl ${inputBg}`}
                >
                  <Search className="w-4 h-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-xs bg-transparent outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Users scrollable list */}
              <div className="flex-1 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/60">
                {filteredConversations.map((c) => {
                  const isSelected = activeChat?.id === c.id;
                  return (
                    <div
                      key={c.id}
                      onClick={() => setActiveChat(c)}
                      className={`px-5 py-3.5 flex items-center justify-between cursor-pointer transition-colors relative ${
                        isSelected
                          ? isDark
                            ? "bg-slate-800/80"
                            : "bg-blue-50/70"
                          : "hover:bg-slate-50 dark:hover:bg-slate-800/40"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 font-bold text-xs">
                          <User className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <h4 className={`text-xs font-bold truncate ${textTitle}`}>
                            {c.name}
                          </h4>
                          <p className={`text-[11px] truncate mt-0.5 ${textMuted}`}>
                            {c.lastMessage}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
                        <span className="text-[10px] text-slate-400">{c.time}</span>
                        {c.unread && (
                          <span className="w-2 h-2 rounded-full bg-blue-600" />
                        )}
                      </div>

                      {isSelected && (
                        <span className="absolute right-0 top-3 bottom-3 w-1 bg-blue-600 rounded-l-md" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: Chat Area */}
            <div className="flex-1 flex flex-col justify-between overflow-hidden">
              {activeChat ? (
                <>
                  {/* Chat User Bar */}
                  <div
                    className={`px-6 py-3.5 border-b ${borderDivider} flex items-center gap-3 bg-slate-50/40 dark:bg-slate-800/30 shrink-0`}
                  >
                    <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className={`text-sm font-bold ${textTitle}`}>
                        {activeChat.name}
                      </h3>
                      <p className="text-[10px] text-emerald-500 font-medium">
                        Online
                      </p>
                    </div>
                  </div>

                  {/* Message History */}
                  <div className="flex-1 p-6 overflow-y-auto space-y-4 text-xs">
                    {(activeChat.messages || []).map((m) => {
                      if (m.type === "property") {
                        return (
                          <div key={m.id} className="space-y-2 max-w-[65%]">
                            <div className={`rounded-2xl overflow-hidden border p-2 space-y-2 ${cardBg}`}>
                              <img
                                src={m.image}
                                alt="Property"
                                className="w-full h-40 object-cover rounded-xl"
                              />
                              <a
                                href={m.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline break-all block px-1"
                              >
                                {m.link}
                              </a>
                            </div>
                            <div className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-2xl rounded-tl-xs w-fit">
                              <p>{m.text}</p>
                              <span className="text-[10px] text-slate-400 block text-right mt-1">
                                {m.time}
                              </span>
                            </div>
                          </div>
                        );
                      }

                      if (m.sender === "me") {
                        return (
                          <div key={m.id} className="flex justify-end">
                            <div className="max-w-[65%] p-3.5 bg-blue-600 text-white rounded-2xl rounded-tr-xs shadow-xs">
                              <p className="leading-relaxed">{m.text}</p>
                              <span className="text-[10px] text-blue-200 block text-right mt-1">
                                {m.time}
                              </span>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div key={m.id} className="flex items-start gap-2.5 max-w-[65%]">
                          <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                            <User className="w-3.5 h-3.5" />
                          </div>
                          <div className="p-3.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-2xl rounded-tl-xs">
                            <p className="leading-relaxed">{m.text}</p>
                            <span className="text-[10px] text-slate-400 block text-right mt-1">
                              {m.time}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Message Input Box */}
                  <form
                    onSubmit={handleSendMessage}
                    className={`p-4 border-t ${borderDivider} flex items-center gap-3 shrink-0`}
                  >
                    <button
                      type="button"
                      className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                      aria-label="Attach file"
                    >
                      <Paperclip className="w-5 h-5 -rotate-45" />
                    </button>

                    <div className="flex-1 flex items-center bg-sky-50 dark:bg-slate-800 rounded-full px-4 py-2 border border-sky-100 dark:border-slate-700">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message here.."
                        className="w-full text-xs bg-transparent outline-none text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
                      />
                      <button
                        type="submit"
                        disabled={!newMessage.trim()}
                        className="p-1 text-blue-600 dark:text-blue-400 disabled:opacity-40"
                        aria-label="Send message"
                      >
                        <Send className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-slate-400 text-xs">
                  Select a conversation on the left to start chatting
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. COMPACT FLOATING DRAWER (Bottom-Right Corner)
  // =========================================================================
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none">
      {activeChat ? (
        /* Chat View */
        <div
          className={`w-90-[400px] h-130 border rounded-3xl shadow-2xl flex flex-col justify-between overflow-hidden ${popupBg}`}
        >
          {/* Header */}
          <div
            className={`px-5 py-4 border-b ${borderDivider} flex items-center justify-between`}
          >
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveChat(null)}
                className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500"
                aria-label="Back"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <User className="w-4 h-4" />
              </div>
              <span className={`text-sm font-bold ${textTitle}`}>
                {activeChat.name}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsFullScreen(true)}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600"
                title="Expand to Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
            {(activeChat.messages || []).map((m) => {
              if (m.type === "property") {
                return (
                  <div key={m.id} className="space-y-2 max-w-[85%]">
                    <div
                      className={`rounded-2xl overflow-hidden border p-2 space-y-2 ${cardBg}`}
                    >
                      <img
                        src={m.image}
                        alt="Property"
                        className="w-full h-28 object-cover rounded-xl"
                      />
                      <a
                        href={m.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline break-all block px-1"
                      >
                        {m.link}
                      </a>
                    </div>
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-2xl rounded-tl-xs w-fit">
                      <p>{m.text}</p>
                      <span className="text-[10px] text-slate-400 block text-right mt-1">
                        {m.time}
                      </span>
                    </div>
                  </div>
                );
              }

              if (m.sender === "me") {
                return (
                  <div key={m.id} className="flex justify-end">
                    <div className="max-w-[80%] p-3 bg-blue-600 text-white rounded-2xl rounded-tr-xs shadow-xs">
                      <p>{m.text}</p>
                      <span className="text-[10px] text-blue-200 block text-right mt-1">
                        {m.time}
                      </span>
                    </div>
                  </div>
                );
              }

              return (
                <div key={m.id} className="flex items-start gap-2 max-w-[80%]">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-1">
                    <User className="w-3 h-3" />
                  </div>
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-2xl rounded-tl-xs">
                    <p>{m.text}</p>
                    <span className="text-[10px] text-slate-400 block text-right mt-1">
                      {m.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chat Input */}
          <form
            onSubmit={handleSendMessage}
            className={`p-3 border-t ${borderDivider} flex items-center gap-2`}
          >
            <button
              type="button"
              className="p-2 text-slate-400 hover:text-slate-600"
              aria-label="Attach"
            >
              <Paperclip className="w-4 h-4 -rotate-45" />
            </button>

            <div className="flex-1 flex items-center bg-sky-50 dark:bg-slate-800 rounded-full px-3.5 py-1.5 border border-sky-100 dark:border-slate-700">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message here.."
                className="w-full text-xs bg-transparent outline-none text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={!newMessage.trim()}
                className="p-1 text-blue-600 dark:text-blue-400 disabled:opacity-40"
                aria-label="Send"
              >
                <Send className="w-4 h-4 fill-current" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* Inbox List View */
        <div
          className={`w-[320px] sm:w-90 h-120 border rounded-3xl shadow-2xl flex flex-col overflow-hidden ${popupBg}`}
        >
          <div
            className={`px-5 py-4 border-b ${borderDivider} flex items-center justify-between`}
          >
            <h3 className={`text-base font-bold ${textTitle}`}>Messages</h3>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsFullScreen(true)}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600"
                title="Expand to Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className={`p-3 border-b ${borderDivider}`}>
            <div
              className={`flex items-center gap-2 px-3 py-2 border rounded-xl ${inputBg}`}
            >
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs bg-transparent outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/60">
            {filteredConversations.map((c) => (
              <div
                key={c.id}
                onClick={() => setActiveChat(c)}
                className="px-4 py-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors relative"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h5 className={`text-xs font-bold truncate ${textTitle}`}>
                      {c.name}
                    </h5>
                    <p className={`text-[11px] truncate ${textMuted}`}>
                      {c.lastMessage}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className="text-[10px] text-slate-400">{c.time}</span>
                  {c.unread && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}