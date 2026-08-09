"use client";
import React from 'react';

import { Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { timelineData } from "@/data/timelineData";

const Timeline = ()=> {
  return (
    <section id="experience" className="relative overflow-hidden bg-gray-950 py-10 sm:py-12">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl"/>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-1o max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-gray-900/80 px-3.5 py-1.5 backdrop-blur-sm">
            <Terminal size={14} className="text-emerald-400" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-gray-400"> Career & Education </span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-3xl lg:text-4xl"> My Journey <span className="text-emerald-400">& Experience</span> </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-gray-400 sm:text-sm"> A roadmap of my technical growth, hands-on learning, and project milestones in software development.</p>

          <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-emerald-500" />
        </div>

        {/* Timeline Grid Layout */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-5 left-12 right-12 hidden h-0.5 bg-linear-to-r from-emerald-500/20 via-emerald-500 to-emerald-500/20 lg:block"/>

          <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {timelineData.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex flex-col items-center h-full"
                >
                  <div className="relative z-10 mb-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-emerald-400 bg-gray-950 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.35)] transition-transform duration-300 hover:scale-110">
                    <Icon size={18} />
                  </div>

                  <div className="group relative flex w-full flex-col justify-between overflow-hidden rounded-xl border border-gray-800/90 bg-gray-900/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-gray-900 hover:shadow-xl hover:shadow-emerald-950/20 h-full">

                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div>
                      <span className="inline-block rounded bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-400"> {item.year}
                      </span>

                      <h3 className="mt-2.5 text-base font-bold text-gray-100 transition-colors duration-300 group-hover:text-emerald-400"> {item.title} </h3>
                      <p className="text-[11px] font-medium text-emerald-500/80">
                        {item.institution}
                      </p>
                      <p className="mt-2.5 text-xs leading-5 text-gray-400">  {item.description}
                      </p>
                    </div>

                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="mt-4 space-y-1.5 border-t border-gray-800/80 pt-3">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-[11px] text-gray-300">
                            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default  Timeline;