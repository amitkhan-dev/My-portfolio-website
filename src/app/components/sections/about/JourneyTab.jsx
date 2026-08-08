"use client";

import React from "react";
import { GraduationCap, CheckCircle2 } from "lucide-react";

export default function JourneyTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-2xl bg-[#10B981]/10 text-[#10B981]">
          <GraduationCap size={26} />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#F9FAFB]">
            How My Coding Journey Began
          </h3>
          <p className="text-xs font-mono text-[#10B981]">Curiosity turned into Passion</p>
        </div>
      </div>

      <p className="text-[#9CA3AF] leading-relaxed text-base sm:text-lg">
        My passion for software development started with a simple curiosity: understanding how interactive web platforms function behind the scenes. Starting with foundational HTML and CSS, I quickly advanced into JavaScript DOM manipulation, component-driven React application development, and full-stack MERN architectures.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-[#030712] border border-[#1F2937]">
          <h4 className="text-sm font-bold text-[#F9FAFB] mb-2 flex items-center gap-2">
            <CheckCircle2 size={16} className="text-[#10B981]" /> Frontend Craftsmanship
          </h4>
          <p className="text-xs text-[#9CA3AF]">
            Building clean, responsive, and accessible UI architectures with Tailwind CSS, Next.js, and modern state management.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#030712] border border-[#1F2937]">
          <h4 className="text-sm font-bold text-[#F9FAFB] mb-2 flex items-center gap-2">
            <CheckCircle2 size={16} className="text-[#10B981]" /> Full-Stack Engineering </h4>
          <p className="text-xs text-[#9CA3AF]">
            Designing scalable RESTful APIs, handling authentication flow, and working with MongoDB database structures. </p>
        </div>
      </div>
    </div>
  );
}