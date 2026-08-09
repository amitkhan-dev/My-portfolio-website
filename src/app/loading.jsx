import React from 'react';

const LoadingPage = () => {
  return (
    <div className="relative min-h-screen bg-[#030712] text-[#F9FAFB] flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_30%,rgba(16,185,129,0.12),rgba(255,255,255,0))]" />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#10B981 1px, transparent 1px)`, backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-sm w-full text-center">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#10B981] border-r-[#10B981]/40 animate-spin shadow-[0_0_15px_rgba(16,185,129,0.3)]" />

          <div className="w-8 h-8 rounded-full bg-[#10B981]/20 border border-[#10B981] flex items-center justify-center animate-pulse">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
          </div>
        </div>

        <div className="space-y-3 w-full">
          <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/20 px-3.5 py-1 rounded-full text-xs font-mono text-[#10B981]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" /> Loading Portfolio...
          </div>
          <div className="space-y-2 pt-2">
            <div className="h-3 w-3/4 mx-auto bg-[#1F2937]/60 rounded-full animate-pulse" />
            <div className="h-2.5 w-1/2 mx-auto bg-[#1F2937]/40 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoadingPage;
