import React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { securityActivity, DEMO_NOTE } from "@/components/lib/cloudintercept-data";

export default function SecurityActivityChart() {
  return (
    <div className="rounded-2xl glass p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm font-semibold text-white">Security Activity</p>
          <p className="text-[11px] text-ci-muted">Events over the last 24h</p>
        </div>
        <span className="text-[11px] text-ci-muted">{DEMO_NOTE}</span>
      </div>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={securityActivity} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="dashArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#20C4E8" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#20C4E8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="dashThreat" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(125,232,255,0.08)" vertical={false} />
            <XAxis dataKey="time" tick={{ fill: "#A9C3D9", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#A9C3D9", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                background: "rgba(7,26,47,0.95)",
                border: "1px solid rgba(125,232,255,0.2)",
                borderRadius: 12,
                fontSize: 12,
              }}
              labelStyle={{ color: "#7DE8FF" }}
            />
            <Area type="monotone" dataKey="events" stroke="#20C4E8" strokeWidth={2} fill="url(#dashArea)" />
            <Area type="monotone" dataKey="threats" stroke="#F59E0B" strokeWidth={2} fill="url(#dashThreat)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}