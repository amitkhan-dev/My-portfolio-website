"use client";

import React from "react";
import { Heart, Compass, Cpu } from "lucide-react";

export default function HobbiesTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-2xl bg-[#10B981]/10 text-[#10B981]">
          <Heart size={26} />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#F9FAFB]">
            Beyond the Screen </h3>
          <p className="text-xs font-mono text-[#10B981]">Interests & Personal Pursuits</p>
        </div>
      </div>

      <p className="text-[#9CA3AF] leading-relaxed text-base sm:text-lg">
        When I am not debugging code or architecting web interfaces, I enjoy exploring new technology ecosystems, working on mindset and productivity strategies, and staying active.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-[#030712] border border-[#1F2937] flex items-start gap-3">
          <Compass size={22} className="text-[#10B981] shrink-0 mt-1" />
          <div>
            <h4 className="text-sm font-bold text-[#F9FAFB]">Continuous Learning & Writing</h4>
            <p className="text-xs text-[#9CA3AF] mt-1">Interested in self-growth literature, writing, and structured goal-setting.</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#030712] border border-[#1F2937] flex items-start gap-3">
          <Cpu size={22} className="text-[#10B981] shrink-0 mt-1" />
          <div>
            <h4 className="text-sm font-bold text-[#F9FAFB]">AI & Software Ecosystems</h4>
            <p className="text-xs text-[#9CA3AF] mt-1">Experimenting with new developer tooling, AI integrations, and digital products.</p>
          </div>
        </div>
      </div>
    </div>
  );
}