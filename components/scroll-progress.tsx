"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function ScrollProgress() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3">
      {SECTIONS.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            aria-label={`Scroll to ${sec.label}`}
            className="group relative flex items-center justify-center py-1"
          >
            {/* Tooltip */}
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-mono tracking-wider px-2 py-1 rounded whitespace-nowrap pointer-events-none">
              {sec.label}
            </span>

            {/* Dot */}
            <span
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? "w-2.5 h-2.5 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)] scale-125"
                  : "w-1.5 h-1.5 bg-zinc-700 hover:bg-zinc-400"
              }`}
            />
          </a>
        );
      })}
    </div>
  );
}
