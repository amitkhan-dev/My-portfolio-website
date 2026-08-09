"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Terminal, ArrowUpRight } from "lucide-react";

import { skillCategories, skillsData,} from "@/data/skillsData";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter(
          (skill) => skill.category === activeCategory
        );

  return (
    <section
      id="skills" className="relative overflow-hidden bg-[#030712] py-24 sm:py-28 lg:py-32"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-100 w-100 -translate-x-1/2 rounded-full bg-[#10B981]/5 blur-[120px]"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/*Section Header*/}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#10B981]/20 bg-[#111827]/80 px-4 py-2 backdrop-blur-sm">
            <Terminal
              size={15}
              className="text-[#10B981]"
            />
            <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#9CA3AF]">
              Technical Expertise
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-[#F9FAFB] sm:text-4xl lg:text-5xl">
            Technologies{" "}
            <span className="text-[#10B981]">
              I Work With
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#9CA3AF] sm:text-base">
            A practical toolkit I use to build modern,
            responsive, and scalable web applications.
          </p>
          <div className="mx-auto mt-7 h-1 w-12 rounded-full bg-[#10B981]" />
        </div>

        {/*Category Filter*/}
        <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isActive =
              activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() =>
                  setActiveCategory(category.id)
                }
                aria-pressed={isActive}
                className={`group inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-medium transition-all duration-300 sm:px-5 sm:text-sm ${
                  isActive
                    ? "bg-[#10B981] text-[#030712] shadow-[0_8px_25px_rgba(16,185,129,0.18)]"
                    : "border border-[#1F2937] bg-[#111827]/80 text-[#9CA3AF] hover:border-[#10B981]/40 hover:text-[#F9FAFB]"
                }`}
              >
                <Icon
                  size={16}
                  className={
                    isActive
                      ? "text-[#030712]"
                      : "text-[#10B981]"
                  }
                />

                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/*Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.article
                  key={skill.name}
                  layout
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.035,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-[#1F2937] bg-[#111827]/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/40 hover:bg-[#111827]"
                >
                  {/* Hover Accent */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#10B981] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  {/*Card Header */}
                  <div className="mb-5 flex items-start justify-between gap-4">

                    {/* Technology Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#1F2937] bg-[#030712] text-2xl text-[#F9FAFB] transition-all duration-300 group-hover:border-[#10B981]/30 group-hover:text-[#10B981]">
                      <Icon />
                    </div>

                    {/* Type Badge */}
                    <span className="rounded-full border border-[#10B981]/15 bg-[#10B981]/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#10B981]">
                      {skill.type}
                    </span>
                  </div>

                  {/* Skill Information */}
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold text-[#F9FAFB] transition-colors duration-300 group-hover:text-[#10B981]">
                        {skill.name}
                      </h3>

                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-[#4B5563] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#10B981]"
                      />
                    </div>

                    <p className="mt-2 text-sm leading-6 text-[#9CA3AF]">
                      {skill.description}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-lg border border-[#1F2937] bg-[#030712]/70 px-2.5 py-1.5 text-[11px] text-[#9CA3AF] transition-colors duration-300 group-hover:border-[#374151] group-hover:text-[#D1D5DB]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-6 h-px w-full bg-[#1F2937]" />

                  <div className="mt-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.6)]" />

                    <span className="text-xs font-medium text-[#6B7280]">
                      {skill.category === "professional"
                        ? "Professional Skill"
                        : "Technology & Workflow"}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-sm text-[#9CA3AF]">
              No skills found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}