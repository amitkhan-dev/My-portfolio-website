import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin,  } from "react-icons/fa";

export default function SocialLinksCard() {
  return (
    <div className="bg-[#111827]/80 border border-[#1F2937] rounded-2xl p-6 sm:p-8">
      <h4 className="text-sm font-semibold text-[#F9FAFB] mb-4">Connect on Socials</h4>
      <div className="flex flex-col gap-3">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-3 rounded-xl bg-[#030712] border border-[#1F2937] hover:border-[#10B981]/40 text-[#9CA3AF] hover:text-[#F9FAFB] transition-all group"
        >
          <div className="flex items-center gap-3"> <SiGithub size={18} />
            <span className="text-xs font-mono">GitHub Profile</span>
          </div>
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#10B981]" />
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-3 rounded-xl bg-[#030712] border border-[#1F2937] hover:border-[#10B981]/40 text-[#9CA3AF] hover:text-[#F9FAFB] transition-all group"
        >
          <div className="flex items-center gap-3">
            <FaLinkedin size={18} className="text-[#0A66C2]" />
            <span className="text-xs font-mono">LinkedIn Profile</span>
          </div>
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#10B981]"/>
        </a>
      </div>
    </div>
  );
}