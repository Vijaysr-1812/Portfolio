"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0c0e]/90 backdrop-blur-md border-b border-amber-500/20 py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse group-hover:scale-125 transition-transform" />
          <span className="font-mono text-xs sm:text-sm tracking-[0.2em] font-extrabold text-white uppercase group-hover:text-amber-400 transition-colors">
            PORTFOLIO
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] text-amber-400 bg-zinc-900/90 border border-zinc-800 rounded px-2 py-0.5">
            KAVANA.DEV
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 bg-zinc-950/70 border border-zinc-800/80 px-6 py-2 rounded-full backdrop-blur-md shadow-lg">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-mono tracking-widest uppercase transition-colors relative py-1 focus:outline-none ${
                  isActive
                    ? "text-amber-400 font-bold"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-amber-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Available Tag */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span className="font-mono text-[11px] tracking-wider text-amber-400 uppercase font-semibold">
              AVAILABLE FOR HIRE
            </span>
          </div>

          <a
            href="mailto:kavana262@gmail.com"
            className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-mono font-bold tracking-wider px-4 py-2 rounded-lg transition-all shadow-lg"
          >
            <span>HIRE ME</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-200 hover:text-amber-400 focus:outline-none bg-zinc-900 border border-zinc-800 rounded-md"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0b0c0e]/95 border-b border-amber-500/20 px-6 py-6 shadow-2xl backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <span className="font-mono text-xs tracking-wider text-amber-400 uppercase font-semibold">
                  AVAILABLE FOR HIRE
                </span>
              </div>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-sm tracking-widest uppercase text-zinc-200 hover:text-amber-400 transition-colors py-1.5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="mailto:kavana262@gmail.com"
                  className="w-full text-center bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold font-mono text-xs tracking-wider py-3 rounded-lg transition-colors"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
