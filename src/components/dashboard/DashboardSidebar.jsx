import React from "react";
import CloudInterceptLogo from "@/components/CloudInterceptLogo";
import { sidebarNav } from "@/components/lib/cloudintercept-data";
import {
  LayoutDashboard,
  ShieldAlert,
  Network,
  Siren,
  BarChart3,
  Bell,
  FileText,
  Settings,
  X,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

const iconMap = {
  LayoutDashboard,
  ShieldAlert,
  Network,
  Siren,
  BarChart3,
  Bell,
  FileText,
  Settings,
};

export default function DashboardSidebar({ open, onClose }) {
  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 z-50 lg:z-auto h-screen w-[240px] shrink-0 border-r border-white/10 bg-ci-panel/80 backdrop-blur-xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
          <Link to="/" onClick={onClose}>
            <CloudInterceptLogo height={30} />
          </Link>
          <button
            className="lg:hidden text-ci-muted hover:text-white p-1"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto ci-scroll px-3 py-4 space-y-1">
          <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-ci-muted">
            Workspace
          </p>
          {sidebarNav.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  item.active
                    ? "bg-ci-accent/15 text-white border border-ci-glow/20"
                    : "text-ci-muted hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-3 border-t border-white/10">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ci-muted hover:text-white hover:bg-white/5"
          >
            <LogOut className="w-4 h-4" />
            Back to site
          </Link>
        </div>
      </aside>
    </>
  );
}