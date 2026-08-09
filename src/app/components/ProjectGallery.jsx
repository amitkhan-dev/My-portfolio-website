import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function ProjectGallery({ images, title }) {
  if (!images || images.length === 0) return null;

  return (
    <section className="bg-[#111827]/80 border border-[#1F2937] rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-[#F9FAFB] mb-6 flex items-center gap-2">
        <Sparkles size={18} className="text-[#10B981]" />Interface & Visual Breakdown </h2>
      
       {/* Banner Image */}
      <div className="relative w-full h-[250px] sm:h-[420px] rounded-xl overflow-hidden border border-[#1F2937] bg-[#030712] mb-6 shadow-2xl">
        <Image
          src={images[0]}
          alt={`${title} Main Preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          className="object-cover hover:scale-[1.02] transition-transform duration-500"
          priority />
      </div>

      {/*Screenshots Grid  */}
      {images.length > 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.slice(1).map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden border border-[#1F2937] bg-[#030712]">
              <Image
                src={img}
                alt={`${title} Screenshot ${idx + 2}`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500"/>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}