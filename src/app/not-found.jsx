"use client";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-[#F9FAFB] flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_30%,rgba(16,185,129,0.12),rgba(255,255,255,0))]" />

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#10B981 1px, transparent 1px)`, backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-lg w-full text-center space-y-8">

        <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/30 px-4 py-1.5 rounded-full text-xs font-mono text-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />  Error 404
        </div>
        <div className="space-y-2">
          <h1 className="text-8xl sm:text-9xl font-extrabold font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#F9FAFB] to-[#4B5563]">   404 </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#F9FAFB]"> Page Not Found</h2>
          <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-sm mx-auto"> Oops! The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#10B981] text-[#030712] font-semibold text-sm transition-all duration-300 hover:bg-[#059669] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] cursor-pointer"
          >
            <Home size={18} /> Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#111827]/80 border border-[#1F2937] text-[#9CA3AF] hover:text-[#10B981] hover:border-[#10B981]/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] font-semibold text-sm transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>
      </div>
    </main>
  );
}