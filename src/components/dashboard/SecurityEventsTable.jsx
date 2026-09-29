import React from "react";
import { securityEvents, DEMO_NOTE } from "@/components/lib/cloudintercept-data";

const sevTone = {
  Critical: "text-ci-critical bg-ci-critical/12",
  High: "text-ci-warning bg-ci-warning/12",
  Medium: "text-ci-warning bg-ci-warning/10",
  Low: "text-ci-secure bg-ci-secure/12",
};

const toneDot = {
  critical: "bg-ci-critical",
  warning: "bg-ci-warning",
  secure: "bg-ci-secure",
};

export default function SecurityEventsTable() {
  return (
    <div className="rounded-2xl glass p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm font-semibold text-white">Recent Security Events</p>
          <p className="text-[11px] text-ci-muted">Live monitoring feed</p>
        </div>
        <span className="text-[11px] text-ci-muted">{DEMO_NOTE}</span>
      </div>
      <div className="overflow-x-auto ci-scroll -mx-2">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="text-[11px] uppercase tracking-wider text-ci-muted">
              <th className="font-medium px-2 pb-2">Event</th>
              <th className="font-medium px-2 pb-2">Source</th>
              <th className="font-medium px-2 pb-2">Severity</th>
              <th className="font-medium px-2 pb-2 text-right">Time</th>
            </tr>
          </thead>
          <tbody>
            {securityEvents.map((e, i) => (
              <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02]">
                <td className="px-2 py-3 text-white">
                  <span className="flex items-center gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${toneDot[e.tone] ?? "bg-ci-glow"}`} />
                    {e.type}
                  </span>
                </td>
                <td className="px-2 py-3 text-ci-muted font-mono text-xs">{e.source}</td>
                <td className="px-2 py-3">
                  <span className={`inline-block rounded-md px-2 py-0.5 text-[11px] font-medium ${sevTone[e.severity] ?? ""}`}>
                    {e.severity}
                  </span>
                </td>
                <td className="px-2 py-3 text-right text-ci-muted">{e.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}