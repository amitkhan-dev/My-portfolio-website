"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2,ExternalLink,ArrowUpRight,Layers,Sparkles,
  Star,GitFork, } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projectsData } from "@/data/projects";
import ProjectCard from "../ProjectCard";

const categories = ["All", "Full-Stack", "Frontend App", "JavaScript / API"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-[#030712] relative">
      
      {/* Backgroun Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#1F2937_1px,transparent_1px)] bg-size:[24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-xs font-mono mb-3">
              <FolderGit2 size={14} />
              <span>Selected Works</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F9FAFB] tracking-tight">
              Crafted with <span className="text-[#10B981]">Code & Purpose</span>
            </h2>
            <p className="mt-2 text-[#9CA3AF] text-sm sm:text-base max-w-xl">Real projects built to solve core workflow challenges, featuring modern full-stack patterns and clean component architecture.</p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-1.5 bg-[#111827] p-1.5 rounded-xl border border-[#1F2937] overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#10B981] text-[#030712] font-semibold shadow-sm"
                    : "text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#1F2937]/50"
                }`}>{cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub  Link */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/amitkhan-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111827] border border-[#1F2937] hover:border-[#10B981]/40 text-[#9CA3AF] hover:text-[#F9FAFB] text-sm font-medium transition-all"
          > <SiGithub size={18} />
            <span>Explore all repositories on GitHub</span>
            <ArrowUpRight size={16} className="text-[#10B981]" />
          </a>
        </div>

      </div>
    </section>
  );
}