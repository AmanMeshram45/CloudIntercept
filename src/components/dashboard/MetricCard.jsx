import React from "react";
import {
  ShieldCheck,
  Siren,
  Activity,
  Network,
} from "lucide-react";

const iconMap = { ShieldCheck, Siren, Activity, Network };

const toneText = {
  secure: "text-ci-secure",
  warning: "text-ci-warning",
  critical: "text-ci-critical",
  neutral: "text-ci-glow",
};
const toneBg = {
  secure: "bg-ci-secure/12",
  warning: "bg-ci-warning/12",
  critical: "bg-ci-critical/12",
  neutral: "bg-ci-accent/12",
};

export default function MetricCard({ metric }) {
  const Icon = iconMap[metric.icon] ?? Activity;
  return (
    <div className="rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ci-glow/30">
      <div className="flex items-center justify-between">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${toneBg[metric.tone]}`}>
          <Icon className={`w-5 h-5 ${toneText[metric.tone]}`} />
        </div>
        <span className="text-xs text-ci-muted">{metric.trend}</span>
      </div>
      <p className="mt-4 text-3xl font-bold text-white">
        {metric.value}
        <span className="text-base font-medium text-ci-muted">{metric.unit}</span>
      </p>
      <p className="text-xs uppercase tracking-wider text-ci-muted mt-1">{metric.label}</p>
    </div>
  );
}