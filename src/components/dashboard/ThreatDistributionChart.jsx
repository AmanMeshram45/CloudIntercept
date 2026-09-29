import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { threatDistribution, DEMO_NOTE } from "@/components/lib/cloudintercept-data";

export default function ThreatDistributionChart() {
  const total = threatDistribution.reduce((s, d) => s + d.value, 0);
  return (
    <div className="rounded-2xl glass p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm font-semibold text-white">Threat Distribution</p>
          <p className="text-[11px] text-ci-muted">By category</p>
        </div>
        <span className="text-[11px] text-ci-muted">{DEMO_NOTE}</span>
      </div>
      <div className="relative h-44">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={threatDistribution}
              dataKey="value"
              nameKey="name"
              innerRadius={48}
              outerRadius={70}
              paddingAngle={3}
              stroke="none"
            >
              {threatDistribution.map((d) => (
                <Cell key={d.name} fill={d.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "rgba(7,26,47,0.95)",
                border: "1px solid rgba(125,232,255,0.2)",
                borderRadius: 12,
                fontSize: 12,
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-2xl font-bold text-white">{total}</p>
          <p className="text-[10px] uppercase tracking-wider text-ci-muted">Total</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {threatDistribution.map((d) => (
          <div key={d.name} className="flex items-center gap-2 text-xs text-ci-muted">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: d.color }} />
            <span className="text-white font-medium">{d.value}</span>
            {d.name}
          </div>
        ))}
      </div>
    </div>
  );
}