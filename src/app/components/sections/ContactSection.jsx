"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import ContactInfoCard from "./contact/ContactInfoCard";
import SocialLinksCard from "./contact/SocialLinksCard";
import ContactForm from "./contact/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-13 bg-[#030712] text-[#F9FAFB] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#10B981]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#10B981] bg-[#10B981]/10 px-3.5 py-1.5 rounded-full border border-[#10B981]/20 inline-flex items-center gap-2 mb-4">
            <MessageSquare size={14} /> Get In Touch</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F9FAFB]"> Let's Build Something <span className="text-[#10B981]">Great Together</span></h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] mt-4 leading-relaxed"> Have a project in mind, looking to hire, or just want to connect? Drop a message below and I'll respond within 24 hours.</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <ContactInfoCard />
            <SocialLinksCard />
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-[#111827]/90 border border-[#1F2937] rounded-2xl p-6 sm:p-8 shadow-xl"
          > <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}