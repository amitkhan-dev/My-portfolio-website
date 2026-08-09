import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function ProjectCard({ project }) {
  return (
    <div className="group relative bg-[#111827]/80 border border-[#1F2937] hover:border-[#10B981]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
      
      {/* Top Image */}
      <div className="relative h-48 w-full overflow-hidden bg-[#030712]">
        <Image
          src={project.images?.[0] || "/placeholder.jpg"}
          alt={project.title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"/>
        <div className="absolute inset-0 bg-linear-to-t from-[#111827] via-transparent to-transparent opacity-80" />
        
        {/* Category Badge */}
        <span className="absolute top-3 left-3 text-[10px] font-mono text-[#10B981] bg-[#030712]/80 backdrop-blur-md border border-[#10B981]/30 px-2.5 py-1 rounded-full"> {project.category}</span>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#F9FAFB] group-hover:text-[#10B981] transition-colors mb-2"> {project.title} </h3>   
          <p className="text-xs text-[#10B981]/90 font-mono mb-3">
            {project.tagline} </p>
          <p className="text-sm text-[#9CA3AF] line-clamp-2 mb-4">
            {project.description} </p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags?.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono text-[#9CA3AF] bg-[#030712] border border-[#1F2937] px-2.5 py-1 rounded-md"
              > {tag} </span>
            ))}
            {project.tags?.length > 4 && (
              <span className="text-[11px] font-mono text-[#9CA3AF] bg-[#030712] border border-[#1F2937] px-2 py-1 rounded-md">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons & Case Study Link */}
        <div className="flex items-center justify-between border-t border-[#1F2937] pt-4 mt-auto">

          <div className="flex items-center gap-3">
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-[#10B981] transition-colors p-1"
                title="Live Preview" > <ExternalLink size={18} />
              </a>
            )}

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-[#10B981] transition-colors p-1"
                title="Source Code"> <SiGithub size={18} />
              </a>
            )}
          </div>

          {/* Case Study*/}
          <Link
            href={`/projects/${project.id}`}
            className="text-xs font-semibold text-[#10B981] hover:underline flex items-center gap-1 group/link">
            <span>Case Study</span>
            <ArrowUpRight
              size={15}
              className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"/>
          </Link>
        </div>

      </div>
    </div>
  );
}