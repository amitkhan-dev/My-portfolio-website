import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Sparkles, Layers, CheckCircle2,
  AlertCircle,Star,GitFork,} from "lucide-react";

import { SiGithub } from "react-icons/si";
import { projectsData } from "@/data/projects";
import ProjectGallery from "@/app/components/ProjectGallery";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

export default async function ProjectCaseStudy({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#030712] text-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#9CA3AF] hover:text-[#10B981] transition-colors mb-8 bg-[#111827] px-3.5 py-2 rounded-xl border border-[#1F2937] hover:border-[#10B981]/30"
        >
          <ArrowLeft size={16} />
          <span>Back to Selected Works</span>
        </Link>

        {/* Header Section */}
        <header className="mb-12 border-b border-[#1F2937] pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs font-mono text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full border border-[#10B981]/20 flex items-center gap-1.5">
              <Layers size={13} />
              {project.category}
            </span>

            {project.featured && (
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Featured Case Study
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F9FAFB] mb-4">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-[#10B981]/90 font-mono mb-6">
            {project.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#10B981] text-[#030712] text-sm font-semibold hover:bg-[#10B981]/90 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
              >
                <span>Live Preview</span>
                <ExternalLink size={16} />
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111827] border border-[#1F2937] hover:border-[#10B981]/40 text-[#F9FAFB] text-sm font-medium transition-all"
              >
                <SiGithub size={18} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </header>

        <div className="space-y-10">

          <section className="bg-[#111827]/80 border border-[#1F2937] rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#F9FAFB] mb-4 flex items-center gap-2">
              <Sparkles size={18} className="text-[#10B981]" />
              Project Overview
            </h2>
            <p className="text-[#9CA3AF] leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>

            {project.impact && (
              <div className="mt-6 bg-[#030712] border border-[#10B981]/20 rounded-xl p-4 text-xs sm:text-sm text-[#9CA3AF]">
                <strong className="text-[#10B981] font-mono block mb-1">Key Engineering Achievement:</strong>
                {project.impact}
              </div>
            )}
          </section>

          <ProjectGallery images={project.images} title={project.title} />

          {/* Tech Used */}
          <section className="bg-[#111827]/80 border border-[#1F2937] rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#F9FAFB] mb-4">
              Technologies & Architecture
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-gray-200 bg-[#030712] border border-[#1F2937] px-3 py-1.5 rounded-lg flex items-center gap-2"
                >
                  <CheckCircle2 size={13} className="text-[#10B981]" />
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/*Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <section className="bg-[#111827]/80 border border-[#1F2937] rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-[#F9FAFB] mb-4 flex items-center gap-2">
                <AlertCircle size={18} className="text-amber-400" />
                Technical Challenges & Solutions
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#9CA3AF] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

        </div>

      </div>
    </main>
  );
}