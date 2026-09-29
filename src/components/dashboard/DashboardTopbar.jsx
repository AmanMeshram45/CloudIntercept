import React from "react";
import { Menu, Search, Bell, ChevronDown } from "lucide-react";

export default function DashboardTopbar({ onMenu }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 h-16 px-4 sm:px-6 border-b border-white/10 bg-ci-bg/80 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden text-ci-muted hover:text-white p-1"
          onClick={onMenu}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-base font-semibold text-white">Overview</h1>
          <p className="text-[11px] text-ci-muted">Cloud security intelligence — demo data</p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="hidden sm:flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-ci-muted w-56">
          <Search className="w-4 h-4" />
          <input
            placeholder="Search resources, events…"
            className="bg-transparent outline-none text-sm text-white placeholder:text-ci-muted w-full"
          />
        </div>
        <button
          className="relative w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-ci-muted hover:text-white"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-ci-critical" />
        </button>
        <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-2.5 py-1.5">
          <div className="w-7 h-7 rounded-full bg-ci-accent/20 flex items-center justify-center text-xs font-semibold text-ci-glow">
            CI
          </div>
          <div className="hidden sm:block leading-tight">
            <p className="text-xs font-medium text-white">Admin User</p>
            <p className="text-[10px] text-ci-muted">Administrator</p>
          </div>
          <ChevronDown className="hidden sm:block w-3.5 h-3.5 text-ci-muted" />
        </div>
      </div>
    </header>
  );
}