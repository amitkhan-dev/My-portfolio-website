"use client";

import React, { useState } from "react";
import { Terminal, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { skillCategories, skillsData } from "@/data/skillsData";
import SkillCategoryFilter from "../skill/SkillCategoryFilter";
import SkillCard from "../skill/SkillCard";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative overflow-hidden bg-gray-950 py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl"/>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-gray-900/80 px-4 py-2 backdrop-blur-sm">
            <Terminal size={15} className="text-emerald-400" />
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-gray-400"> Technical Expertise
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl lg:text-5xl">  Technologies <span className="text-emerald-400">I Work With</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base"> A practical toolkit I use to build modern, responsive, scalable, and maintainable web applications.
          </p>

          <div className="mx-auto mt-7 h-1 w-12 rounded-full bg-emerald-500" />
        </div>

        <SkillCategoryFilter
          categories={skillCategories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <div className="mb-5 flex items-center justify-end gap-2">
          <button
            type="button"
            className="skills-prev flex h-9 w-9 items-center justify-center rounded-lg border border-gray-800 bg-gray-900 text-gray-400 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400 cursor-pointer"
            aria-label="Previous skills">
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            className="skills-next flex h-9 w-9 items-center justify-center rounded-lg border border-gray-800 bg-gray-900 text-gray-400 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400 cursor-pointer"
            aria-label="Next skills">
            <ArrowRight size={16} />
          </button>
        </div>

        {filteredSkills.length > 0 ? (
          <Swiper
            key={activeCategory}
            modules={[Navigation, Pagination, A11y]}
            navigation={{
              prevEl: ".skills-prev",
              nextEl: ".skills-next",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="skills-swiper pb-12!"
          >
            {filteredSkills.map((skill) => (
              <SwiperSlide key={skill.name}>
                <SkillCard skill={skill} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="rounded-2xl border border-gray-800 bg-gray-900/70 py-16 text-center">
            <p className="text-sm text-gray-400"> No skills found in this category. </p>
          </div>
        )}
      </div>
    </section>
  );
}