"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Code2, Heart, Briefcase, GraduationCap, Terminal, Cpu, Laptop } from "lucide-react";

import JourneyTab from "./about/JourneyTab";
import PreferencesTab from "./about/PreferencesTab";
import HobbiesTab from "./about/HobbiesTab";

export default function About() {
  const [activeTab, setActiveTab] = useState("journey");

  const highlightStats = [
    { label: "Frontend Core", value: "React & Next.js", icon: Code2 },
    { label: "Backend Core", value: "Node & MongoDB", icon: Cpu },
    { label: "Focus", value: "MERN Stack", icon: Terminal },
    { label: "Target", value: "Full-Stack Engineer", icon: Laptop },
  ];

  return (
    <section 
      id="about" className="relative py-10 bg-[#030712] overflow-hidden border-t border-[#1F2937]/50">

      {/* Background color*/}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#10B981]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#10B981]/30 mb-4 shadow-sm">
            <User size={16} className="text-[#10B981]" />
            <span className="text-xs font-mono font-medium text-[#F9FAFB] uppercase tracking-wider"> Get To Know Me </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F9FAFB] tracking-tight"> About <span className="text-[#10B981]">My Journey</span> & Passions </h2>
          <div className="w-16 h-1 bg-[#10B981] rounded-full mt-4" />
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {highlightStats.map((stat, idx) => { const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-[#111827] border border-[#1F2937] hover:border-[#10B981]/40 transition-all duration-300 group">

                <div className="p-2.5 w-fit rounded-xl bg-[#10B981]/10 text-[#10B981] mb-3 group-hover:scale-11 transition-transform">
                  <Icon size={22} />
                </div>
                <p className="text-xs font-mono text-[#9CA3AF] uppercase">{stat.label}</p>
                <p className="text-base sm:text-lg font-bold text-[#F9FAFB] mt-0.5">{stat.value}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#111827] border border-[#1F2937]">
            <button
              onClick={() => setActiveTab("journey")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === "journey"
                  ? "bg-[#10B981] text-[#030712] font-semibold shadow-lg"
                  : "text-[#9CA3AF] hover:text-[#F9FAFB]"
              }`}
            >
              <GraduationCap size={18} />
              <span>Programming Journey</span>
            </button>

            <button
              onClick={() => setActiveTab("preferences")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === "preferences"
                  ? "bg-[#10B981] text-[#030712] font-semibold shadow-lg"
                  : "text-[#9CA3AF] hover:text-[#F9FAFB]"
              }`}
            >
              <Briefcase size={18} />
              <span>Work & Environment</span>
            </button>

            <button
              onClick={() => setActiveTab("hobbies")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === "hobbies"
                  ? "bg-[#10B981] text-[#030712] font-semibold shadow-lg"
                  : "text-[#9CA3AF] hover:text-[#F9FAFB]"
              }`}
            >
              <Heart size={18} />
              <span>Interests & Hobbies</span>
            </button>
          </div>
        </div>

        {/* Tab Content Cards */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto rounded-3xl bg-[#111827] border border-[#1F2937] p-6 sm:p-10 shadow-2xl relative overflow-hidden">

          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#10B981] to-transparent" />

          {/* Render Tabs  */}
          {activeTab === "journey" && <JourneyTab />}
          {activeTab === "preferences" && <PreferencesTab />}
          {activeTab === "hobbies" && <HobbiesTab />}

        </motion.div>

      </div>
    </section>
  );
}