import React from "react";
import HeroClouds from "@/components/HeroClouds";
import CloudInterceptLogo from "@/components/CloudInterceptLogo";
import { Link } from "react-router-dom";

/**
 * Dark CloudIntercept-themed auth shell used by Register / Forgot / Reset.
 * Preserves the same API ({ icon, title, subtitle, footer, children }).
 */
export default function AuthLayout({ icon: Icon, title, subtitle, footer, children }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-ci-bg text-white overflow-hidden px-4 py-10">
      <HeroClouds overlay={false} />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8 flex flex-col items-center">
          <Link to="/" className="mb-6">
            <CloudInterceptLogo height={44} />
          </Link>
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-ci-accent/15 border border-ci-glow/20 mb-4">
            {Icon ? <Icon className="w-7 h-7 text-ci-accent" aria-hidden="true" /> : null}
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">{title}</h1>
          {subtitle && <p className="text-ci-muted mt-2 text-sm">{subtitle}</p>}
        </div>

        <div className="rounded-2xl glass-strong p-8 glow-cyan">{children}</div>

        {footer && <p className="text-center text-sm text-ci-muted mt-6">{footer}</p>}
      </div>
    </div>
  );
}