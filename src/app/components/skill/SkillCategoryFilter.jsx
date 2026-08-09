"use client";

import React from "react";

export default function SkillCategoryFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-2 sm:mb-12 sm:gap-3">
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelectCategory(category.id)}
            aria-pressed={isActive}
            className={`group inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-medium transition-all duration-300 sm:px-5 sm:text-sm cursor-pointer ${
              isActive
                ? "bg-emerald-500 text-gray-950 shadow-lg shadow-emerald-500/20 font-semibold"
                : "border border-gray-800 bg-gray-900/80 text-gray-400 hover:border-emerald-500/40 hover:text-gray-100"
            }`}
          >
            <Icon
              size={16}
              className={isActive ? "text-gray-950" : "text-emerald-400"}
            />
            <span>{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}