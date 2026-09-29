import React, { useState } from "react";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Loader2, ShieldCheck, ArrowRight } from "lucide-react";
import GoogleIcon from "@/components/GoogleIcon";
import { safeReturnTo } from "@/components/lib/authReturnTo";
import HeroClouds from "@/components/HeroClouds";
import CloudInterceptLogo from "@/components/CloudInterceptLogo";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const returnTo = safeReturnTo();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await base44.auth.loginViaEmailPassword(email, password);
      window.location.href = returnTo;
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    base44.auth.loginWithProvider("google", returnTo);
  };

  return (
    <div className="relative min-h-screen flex bg-ci-bg text-white overflow-hidden">
      <HeroClouds overlay={false} />

      {/* Left branding */}
      <div className="relative z-10 hidden lg:flex flex-col justify-between w-1/2 p-12">
        <Link to="/">
          <CloudInterceptLogo height={42} />
        </Link>
        <div className="max-w-md">
          <h2
            className="font-bold text-white leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(2rem, 3vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Cloud visibility, <span className="text-gradient-cyan">secured.</span>
          </h2>
          <p className="mt-5 text-base text-ci-muted leading-relaxed">
            Monitor, analyze, and protect your cloud environment with unified
            security intelligence and real-time threat detection.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-ci-muted">
            <ShieldCheck className="w-5 h-5 text-ci-accent" />
            Data Intelligence &amp; Security
          </div>
        </div>
        <p className="text-xs text-ci-muted/60">© 2026 CloudIntercept</p>
      </div>

      {/* Right login panel */}
      <div className="relative z-10 flex w-full lg:w-1/2 items-center justify-center p-6">
        <div className="w-full max-w-md rounded-2xl glass-strong p-8 glow-cyan">
          <div className="lg:hidden mb-6 flex justify-center">
            <CloudInterceptLogo height={40} />
          </div>

          <h1 className="text-2xl font-bold text-white">Welcome back</h1>
          <p className="mt-1.5 text-sm text-ci-muted">Log in to your CloudIntercept account</p>

          <Button
            variant="outline"
            className="w-full h-11 text-sm font-medium mt-6 bg-white/5 border-white/15 text-white hover:bg-white/10 hover:text-white"
            onClick={handleGoogle}
          >
            <GoogleIcon className="w-4 h-4 mr-2" />
            Continue with Google
          </Button>

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-ci-panel/80 px-3 text-ci-muted backdrop-blur">or</span>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-ci-critical/12 text-ci-critical text-sm border border-ci-critical/20">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-ci-muted">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ci-muted" aria-hidden="true" />
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  autoFocus
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-11 bg-white/5 border-white/15 text-white placeholder:text-ci-muted/60"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-ci-muted">Password</Label>
                <Link to="/forgot-password" className="text-xs text-ci-glow hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ci-muted" aria-hidden="true" />
                <Input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-11 bg-white/5 border-white/15 text-white placeholder:text-ci-muted/60"
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full h-11 font-semibold bg-ci-accent text-ci-bg hover:bg-ci-glow"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Logging in...
                </>
              ) : (
                <span className="inline-flex items-center gap-2">
                  Sign In <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-ci-muted mt-6">
            Don't have an account?{" "}
            <Link
              to={"/register" + (returnTo !== "/" ? "?returnTo=" + encodeURIComponent(returnTo) : "")}
              className="text-ci-glow font-medium hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}