"use client";

import React from "react";
import { Briefcase, Globe2, Terminal, Sparkles } from "lucide-react";

export default function PreferencesTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-2xl bg-[#10B981]/10 text-[#10B981]">
          <Briefcase size={26} />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#F9FAFB]">
            Work Preferences & Ethos
          </h3>
          <p className="text-xs font-mono text-[#10B981]">Collaborative & Agile Mindset</p>
        </div>
      </div>

      <p className="text-[#9CA3AF] leading-relaxed text-base sm:text-lg">
        I enjoy working in environments where clean code, continuous learning, and open communication matter. Whether working remotely or as part of a team, I care about writing readable and maintainable code while keeping the user’s needs at the center of every solution. </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-[#030712] border border-[#1F2937] text-center">
          <Globe2 size={24} className="text-[#10B981] mx-auto mb-2" />
          <h4 className="text-sm font-bold text-[#F9FAFB]">Remote Friendly</h4>
          <p className="text-xs text-[#9CA3AF] mt-1">Comfortable with global async workflows & Git/GitHub.</p>
        </div>

        <div className="p-4 rounded-xl bg-[#030712] border border-[#1F2937] text-center">
          <Terminal size={24} className="text-[#10B981] mx-auto mb-2" />
          <h4 className="text-sm font-bold text-[#F9FAFB]">Clean Code</h4>
          <p className="text-xs text-[#9CA3AF] mt-1">Emphasizing modular design & maintainable structures.</p>
        </div>

        <div className="p-4 rounded-xl bg-[#030712] border border-[#1F2937] text-center">
          <Sparkles size={24} className="text-[#10B981] mx-auto mb-2" />
          <h4 className="text-sm font-bold text-[#F9FAFB]">Growth Oriented</h4>
          <p className="text-xs text-[#9CA3AF] mt-1">Constantly exploring new tooling & AI-assisted tech.</p>
        </div>
      </div>
    </div>
  );
}