"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  {
    category: "Programming and Languages",
    icon: "💻",
    items: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "CCL"],
  },
  {
    category: "Developer Tools",
    icon: "🛠️",
    items: ["VS Code", "Jupyter Notebook", "Google Colab", "Git", "GitHub"],
  },
  {
    category: "Technologies / Frameworks",
    icon: "⚡",
    items: [
      "Next.js",
      "React",
      "Express.js",
      "Tailwind CSS",
      "Prisma",
      "Supabase",
      "Firebase",
      "NextAuth",
      "Three.js",
      "Pyodide",
      "OpenAI",
      "Machine Learning",
      "Blockchain",
      "MySQL",
      "pgvector",
    ],
  },
];

const CORE_ATTRIBUTES = [
  { left: "Python", right: "Java" },
  { left: "Backend Developer", right: "LLM integration pipelines" },
  { left: "Systems programming", right: "Open source" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[var(--void)] text-[var(--text)] py-28 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center items-center isolate"
      style={{
        borderTop: "1px solid color-mix(in srgb, var(--cold-silver) 12%, transparent)",
      }}
    >
      {/* Background Radial Glow */}
      <div
        className="absolute right-1/4 top-1/3 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-[180px] opacity-20"
        style={{
          background: "radial-gradient(circle, var(--violet-core) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl w-full flex flex-col gap-16 relative z-10">
        {/* Top Header Badge & Outline Number Row */}
        <div className="relative flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="label font-mono tracking-widest text-xs text-[var(--hot-violet)]">
              02 // ABOUT ME
            </span>
            <div className="h-px w-16 bg-gradient-to-r from-[var(--violet-core)] to-transparent opacity-60" />
          </motion.div>

          {/* Large Outline Section Number overlay */}
          <span
            className="font-mono text-7xl sm:text-9xl font-extrabold select-none pointer-events-none opacity-10 leading-none"
            style={{
              WebkitTextStroke: "1.5px var(--cold-silver)",
              color: "transparent",
            }}
          >
            02
          </span>
        </div>

        {/* ── Main Introduction & Bio Content ─────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Content Column (12 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 flex flex-col gap-8"
          >
            {/* Impact Headline */}
            <h2
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] tracking-tight"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Building tools that make{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--hot-violet)] via-purple-300 to-[var(--violet-core)]">
                machines work harder.
              </span>
            </h2>

            {/* Narrative Paragraphs */}
            <div className="flex flex-col gap-6 text-base sm:text-lg text-[var(--cold-silver)] leading-relaxed font-normal opacity-90 max-w-4xl">
              <p>
                I'm a Full Stack developer obsessed with how software performs at scale — where nanoseconds matter and memory budgets are tight. I build profiling systems, and performance primitives for developers who refuse to accept &quot;fast enough.&quot; Building FastAPI backend projects and trying to address various problems faced in day to day life. Could be for developers, students or even for myself. I have a strong interest in LLM integration pipelines.
              </p>
              <p>
                When I'm not writing code I'm reading specs, exploring open source repos, or trying to understand how things work at a fundamental level. I believe in the power of tools to amplify human potential, and I'm on a mission to build the best ones out there.
              </p>
            </div>

            {/* 2-Column Core Attributes List (Formatted like reference layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl pt-4 font-mono text-sm sm:text-base">
              {CORE_ATTRIBUTES.map((row, idx) => (
                <div key={idx} className="contents">
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-[var(--cold-silver)] hover:text-white transition-colors cursor-default"
                  >
                    <span className="text-[var(--hot-violet)]">—</span>
                    <span>{row.left}</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-[var(--cold-silver)] hover:text-white transition-colors cursor-default"
                  >
                    <span className="text-[var(--hot-violet)]">—</span>
                    <span>{row.right}</span>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Categorized Tech Stack Section ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8 pt-8 border-t border-white/10"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Tech Stack & Capabilities
            </h3>
            <span className="font-mono text-xs text-[var(--hot-violet)] tracking-widest uppercase">
              SKILLS & TOOLING
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TECH_STACK.map((group, gIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gIdx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-7 rounded-2xl border backdrop-blur-xl flex flex-col gap-6 transition-all duration-300 group"
                style={{
                  background: "color-mix(in srgb, var(--ink) 80%, transparent)",
                  borderColor: "color-mix(in srgb, var(--cold-silver) 15%, transparent)",
                  boxShadow: "0 20px 40px -15px color-mix(in srgb, var(--void) 90%, transparent)",
                }}
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="text-xl">{group.icon}</span>
                  <h4 className="font-mono text-xs sm:text-sm font-bold text-white tracking-wider uppercase group-hover:text-[var(--hot-violet)] transition-colors">
                    {group.category}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono tracking-wide"
                      style={{
                        background: "color-mix(in srgb, var(--violet-core) 12%, transparent)",
                        border: "1px solid color-mix(in srgb, var(--hot-violet) 30%, transparent)",
                        color: "var(--text)",
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
