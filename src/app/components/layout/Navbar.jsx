
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";
import { Menu, X, Download, Code2, Sparkles } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-[#1F2937]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2.5 rounded-xl bg-[#10B981]/10 text-[#10B981] group-hover:bg-[#10B981] group-hover:text-[#030712] transition-all duration-300 border border-[#10B981]/20">
              <Code2 size={22} />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-wider text-[#F9FAFB] group-hover:text-[#10B981] transition-colors flex items-center gap-1">
                AMIT<span className="text-[#10B981]">.DEV</span>
                <Sparkles size={14} className="text-[#10B981] opacity-80" />
              </span>
              <span className="text-[10px] text-[#9CA3AF] tracking-widest uppercase -mt-1 font-mono">
                Full-Stack Eng.
              </span>
            </div>
          </Link>

          {/* Desktop response */}
          <nav className="hidden md:flex items-center gap-8 bg-[#111827]/60 px-6 py-2.5 rounded-full border border-[#1F2937]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#9CA3AF] hover:text-[#10B981] transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#10B981] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="/resume/Amit_Hasan_Resume.pdf" 
              download="Amit_Hasan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="md"
                startContent={<Download size={18} />}
                className="bg-[#10B981] hover:bg-[#34D399] text-[#030712] font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(52,211,153,0.4)] rounded-xl"
              >
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="p-2.5 rounded-xl text-[#9CA3AF] hover:text-[#F9FAFB] bg-[#111827] border border-[#1F2937] focus:outline-none"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#111827] border-b border-[#1F2937]"
          >
            <div className="px-6 pt-4 pb-8 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-[#9CA3AF] hover:text-[#10B981] hover:bg-[#1F2937]/50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a 
                  href="/resume/Amit_Hasan_Resume.pdf" 
                  download="Amit_Hasan_Resume.pdf"
                  onClick={() => setIsOpen(false)}
                  className="w-full block"
                >
                  <Button
                    size="lg"
                    startContent={<Download size={18} />}
                    className="w-full bg-[#10B981] hover:bg-[#34D399] text-[#030712] font-semibold rounded-xl"
                  >
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}