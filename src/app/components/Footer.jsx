"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030712] text-[#F9FAFB] border-t border-[#1F2937]/80 overflow-hidden pt-16 pb-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]" />

      <div className="absolute animate-border-slide inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(16,185,129,0)_20%,rgba(16,185,129,0.4)_50%,rgba(16,185,129,0)_80%,transparent_100%)] animate-[borderSlide_3s_linear_infinite]"style={{ width: "200%", height: "100%", left: "-50%" }}/>

    

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
  
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold font-mono tracking-tight text-[#F9FAFB]"
            > Amit<span className="text-[#10B981]">.dev</span>
            </Link>
            <p className="text-sm text-[#9CA3AF] max-w-sm leading-relaxed">Full-Stack Developer specializing in building modern web applications with Next.js, React, and Node.js. </p>
            
            {/* Social Links on Hover */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 bg-[#111827]/80 border border-[#1F2937] hover:border-[#10B981] hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] rounded-xl text-[#9CA3AF] hover:text-[#10B981] transition-all duration-300"> <SiGithub size={18} /> </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 bg-[#111827]/80 border border-[#1F2937] hover:border-[#10B981] hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] rounded-xl text-[#9CA3AF] hover:text-[#10B981] transition-all duration-300"> <FaLinkedinIn size={18} /> </a>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-xs font-mono uppercase text-[#10B981] tracking-wider mb-4"> Quick Links </h4>
            <ul className="space-y-2.5 text-sm text-[#9CA3AF]">
              <li>
                <a href="#about" className="hover:text-[#10B981] transition-colors"> About Me </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#10B981] transition-colors"> Skills </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#10B981] transition-colors"> Projects </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#10B981] transition-colors"> Contact </a>
              </li>
            </ul>
          </div>

          {/* Location & Status */}
          <div>
            <h4 className="text-xs font-mono uppercase text-[#10B981] tracking-wider mb-4"> Status </h4>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/30 px-3.5 py-1.5 rounded-full text-xs font-mono text-[#10B981] shadow-[0_0_12px_rgba(16,185,129,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" /> Available for Hire
              </div>
              <p className="text-xs text-[#9CA3AF]">Based in Rajshahi, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1F2937]/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9CA3AF]">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} Amit Hasan. Built with Next.js & React. </p>
            
            <button
            onClick={scrollToTop}
            className="flex items-center gap-2 p-2 px-3.5 bg-[#111827]/80 border border-[#1F2937] hover:border-[#10B981]/50 text-[#9CA3AF] hover:text-[#10B981] hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] rounded-xl transition-all duration-300 group cursor-pointer"> <span>Back to Top</span>
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}