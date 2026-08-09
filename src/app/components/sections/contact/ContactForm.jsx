"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    // Demo Submission: Pore add korbo 
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage("Message sent successfully! (Demo Mode)");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-mono text-[#9CA3AF] mb-2">Your Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            className="w-full bg-[#030712] border border-[#1F2937] focus:border-[#10B981] text-[#F9FAFB] text-sm rounded-xl px-4 py-3 outline-none transition-all placeholder:text-[#4B5563]"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-[#9CA3AF] mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your-mail@example.com"
            className="w-full bg-[#030712] border border-[#1F2937] focus:border-[#10B981] text-[#F9FAFB] text-sm rounded-xl px-4 py-3 outline-none transition-all placeholder:text-[#4B5563]"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono text-[#9CA3AF] mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project Inquiry / Job Opportunity"
          className="w-full bg-[#030712] border border-[#1F2937] focus:border-[#10B981] text-[#F9FAFB] text-sm rounded-xl px-4 py-3 outline-none transition-all placeholder:text-[#4B5563]"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-[#9CA3AF] mb-2">Message</label>
        <textarea
          name="message"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project or inquiry..."
          className="w-full bg-[#030712] border border-[#1F2937] focus:border-[#10B981] text-[#F9FAFB] text-sm rounded-xl px-4 py-3 outline-none transition-all placeholder:text-[#4B5563] resize-none"
        ></textarea>
      </div>

      {statusMessage && (
        <p className="text-xs font-mono text-[#10B981] bg-[#10B981]/10 p-3 rounded-xl border border-[#10B981]/20">
          {statusMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-xl bg-[#10B981] hover:bg-[#10B981]/90 text-[#030712] font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? (
          <span>Sending...</span>
        ) : (
          <>
            <span>Send Message</span>
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}