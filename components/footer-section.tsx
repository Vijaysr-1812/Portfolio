"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, ArrowUpRight, Sparkles } from "lucide-react";

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-[#090a0e] pt-20 pb-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Sleek CTA Banner */}
        <div className="bg-gradient-to-r from-[#12141c] via-[#161824] to-[#12141c] border border-amber-500/20 p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 max-w-xl">
            <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>LET’S COLLABORATE</span>
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to elevate your Web & AI interfaces?
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base font-light">
              Senior Frontend Developer specialized in Angular, React & AI Chatbot Solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="mailto:kavana262@gmail.com"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold font-mono text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/10"
            >
              <Mail className="w-4 h-4" />
              <span>SEND AN EMAIL</span>
            </a>
          </div>
        </div>

        {/* Navigation & Signature Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-4">
          {/* Brand Signature */}
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              <span className="font-mono text-base font-extrabold text-white tracking-widest uppercase">
                KAVANA SRINIVASA
              </span>
            </div>
            <p className="font-mono text-xs text-zinc-500">
              Senior Frontend Developer & AI Solutions Engineer
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-8 font-mono text-xs text-zinc-400 uppercase tracking-widest">
            <a href="#hero" className="hover:text-amber-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-amber-400 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-amber-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">
              Skills
            </a>
            <a href="#certifications" className="hover:text-amber-400 transition-colors">
              Certifications
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3.5 bg-zinc-900 hover:bg-amber-500 hover:text-zinc-950 text-zinc-300 border border-zinc-800 rounded-full transition-all focus:outline-none shadow-xl shrink-0"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Minimal Copyright Row */}
        <div className="border-t border-zinc-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Kavana Srinivasa. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with precision for</span>
            <span className="text-amber-400 font-semibold">Kavana Srinivasa</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
