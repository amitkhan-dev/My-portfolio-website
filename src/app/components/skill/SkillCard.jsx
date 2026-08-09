"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SkillCard({ skill }) {
  const Icon = skill.icon;
  const isProfessional = skill.category === "professional";

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative flex h-full min-h-[310px] flex-col justify-between overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-gray-900 hover:shadow-xl hover:shadow-emerald-950/20">
      <div aria-hidden="true"  className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
      />
      <div>
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl border border-gray-800 bg-gray-950 text-2xl text-gray-100 transition-all duration-300 group-hover:border-emerald-500/40 group-hover:text-emerald-400">
            <Icon />
          </div>
          <span className="rounded-full border border-emerald-500/15 bg-emerald-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-emerald-400">
            {skill.type}
          </span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-gray-100 transition-colors duration-300 group-hover:text-emerald-400">
            {skill.name} </h3>
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-gray-800 text-gray-500 transition-all duration-300 group-hover:border-emerald-500/30 group-hover:text-emerald-400">
            <ArrowRight size={14} />
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          {skill.description} </p>

        {skill.highlights?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {skill.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-lg border border-gray-800 bg-gray-950/70 px-2.5 py-1 text-[11px] text-gray-400 transition-colors duration-300 group-hover:border-gray-700 group-hover:text-gray-300"
              > {highlight} </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 border-t border-gray-800/80 pt-4">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500" />
          <span className="text-xs font-medium text-gray-500">
            {isProfessional ? "Professional Skill" : "Technology & Workflow"} </span>
        </div>
      </div>
    </motion.article>
  );
}