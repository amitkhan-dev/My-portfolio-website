import React from "react";
import { Mail, MapPin } from "lucide-react";

export default function ContactInfoCard() {
  return (
    <div className="bg-[#111827]/80 border border-[#1F2937] rounded-2xl p-6 sm:p-8 space-y-6">
      <h3 className="text-xl font-bold text-[#F9FAFB]">Contact Information</h3>

      {/* Email */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#10B981]/10 border border-[#10B981]/20 rounded-xl text-[#10B981] shrink-0"> <Mail size={20} />
        </div>
        <div>
          <p className="text-xs font-mono text-[#9CA3AF]">Email</p>
          <a
            href="mailto:your.email@example.com"
            className="text-sm font-medium text-[#F9FAFB] hover:text-[#10B981] transition-colors" > amitkhan4150@gmail.com </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#10B981]/10 border border-[#10B981]/20 rounded-xl text-[#10B981] shrink-0"> <MapPin size={20} />
        </div>
        <div>
          <p className="text-xs font-mono text-[#9CA3AF]">Location</p>
          <p className="text-sm font-medium text-[#F9FAFB]">Rajshahi, Bangladesh</p>
        </div>
      </div>
    </div>
  );
}