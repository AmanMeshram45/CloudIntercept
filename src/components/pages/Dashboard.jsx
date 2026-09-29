import React, { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardTopbar from "@/components/dashboard/DashboardTopbar";
import MetricCard from "@/components/dashboard/MetricCard";
import SecurityActivityChart from "@/components/dashboard/SecurityActivityChart";
import ThreatDistributionChart from "@/components/dashboard/ThreatDistributionChart";
import SecurityEventsTable from "@/components/dashboard/SecurityEventsTable";
import { dashboardMetrics } from "@/components/lib/cloudintercept-data";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ci-bg text-white flex">
      <DashboardSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 min-w-0 flex flex-col">
        <DashboardTopbar onMenu={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 sm:p-6 space-y-5">
          {/* Status banner */}
          <div className="flex flex-wrap items-center gap-3 rounded-2xl glass px-5 py-4">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-ci-secure">
              <span className="ci-pulse w-2 h-2 rounded-full bg-ci-secure text-ci-secure" />
              All systems protected
            </span>
            <span className="text-xs text-ci-muted">Last scan completed 4 min ago · 26 AWS scanners active</span>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {dashboardMetrics.map((m) => (
              <MetricCard key={m.label} metric={m} />
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4">
            <SecurityActivityChart />
            <ThreatDistributionChart />
          </div>

          {/* Events */}
          <SecurityEventsTable />
        </main>
      </div>
    </div>
  );
}