
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ArrowRight, Terminal, Code } from "lucide-react";
import SocialLinks from "../common/SocialLinks";


export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#030712]"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#10B981]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-[#34D399]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left side Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#10B981]/30 mb-6 shadow-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
              </span>
              <span className="text-xs font-mono font-medium text-[#F9FAFB]">
                Available for New Projects
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F9FAFB] tracking-tight leading-tight mb-4">
              Hi, I&apos;m <span className="text-[#10B981]">Amit Hasan</span>
            </h1>

            {/* Designation */}
            <div className="flex items-center gap-2 mb-6">
              <Terminal size={22} className="text-[#10B981]" />
              <h2 className="text-xl sm:text-2xl font-bold font-mono text-[#9CA3AF]">
                Full-Stack Web Developer <span className="text-[#10B981]">|</span> MERN Specialist
              </h2>
            </div>

            {/*Introduction */}
            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-2xl mb-8">
              I specialize in building scalable, modern web applications with sleek UIs and robust backend architectures. Focused on turning complex ideas into clean, functional code.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto mb-10">
              <a 
                href="/resume/Amit_Hasan_Resume.pdf" 
                download="Amit_Hasan_Resume.pdf"
                className="w-full sm:w-auto"
              >
                <button
                  type="button"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-[#10B981] hover:bg-[#34D399] text-[#030712] font-semibold rounded-xl shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] transition-all duration-300 cursor-pointer"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </button>
              </a>

              <a href="#projects" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 border border-[#1F2937] hover:border-[#10B981]/50 text-[#F9FAFB] bg-[#111827]/80 hover:bg-[#111827] rounded-xl transition-all duration-300 cursor-pointer"
                >
                  <span>View My Work</span>
                  <ArrowRight size={18} />
                </button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9CA3AF]">
                Connect With Me
              </span>
              <SocialLinks />
            </div>
          </motion.div>

          {/* Right  Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-[#10B981] to-emerald-900 opacity-20 blur-xl animate-pulse" />
              
              {/* Image  Card */}
              <div className="relative w-full h-full rounded-3xl bg-[#111827] border-2 border-[#1F2937] p-3 shadow-2xl overflow-hidden group hover:border-[#10B981]/50 transition-colors duration-500">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#030712]">
                  <Image
                    src="/images/profile/hero-profile.png"
                    alt="Amit Hasan"
                    width={400}
                    height={400}
                    priority
                    unoptimized
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-5 left-5 bg-[#030712]/90 backdrop-blur-md border border-[#1F2937] p-3 rounded-2xl flex items-center gap-3 shadow-xl z-10">
                  <div className="p-2 rounded-xl bg-[#10B981]/20 text-[#10B981]">
                    <Code size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#9CA3AF]">Clean Code</p>
                    <p className="text-sm font-bold text-[#F9FAFB]">MERN WEB DEVELOPER</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}