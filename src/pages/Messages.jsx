import React from "react";

export default function Messages() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Messages</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Direct chat and notifications hub.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center text-slate-500 dark:text-slate-400 shadow-sm">
        Direct messages and conversation view go here.
      </div>
    </div>
  );
}