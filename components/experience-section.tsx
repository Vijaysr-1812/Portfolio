"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent: boolean;
  bullets: string[];
  skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "oracle-associate",
    company: "Oracle",
    role: "Associate Software Developer",
    period: "Jul 2026 – Present",
    location: "Bengaluru, India",
    isCurrent: true,
    bullets: [
      "Work as a Backend Developer delivering custom solutions for clients using Cerner Command Language (CCL), PL/SQL, Oracle APEX, and JavaScript to address complex application and data requirements.",
      "Design, develop, and maintain internal tools for Oracle, contributing to application development, database programming, automation, reporting, and system optimization across enterprise workflows.",
    ],
    skills: ["Cerner Command Language (CCL)", "PL/SQL", "Oracle APEX", "JavaScript", "Database Optimization", "Enterprise Automation"],
  },
  {
    id: "oracle-intern",
    company: "Oracle",
    role: "Engineering Intern",
    period: "Jan 2026 – Jul 2026",
    location: "Bengaluru, India",
    isCurrent: false,
    bullets: [
      "Engineered custom Cerner Command Language (CCL) and PL/SQL scripts for international healthcare clients to extract, process, and analyze critical data ranging from individual patient records to hospital-wide metrics.",
      "Developed and optimized clinical reports and data-driven solutions while gaining hands-on experience with Oracle APEX and JavaScript for application development and workflow automation.",
    ],
    skills: ["CCL Scripting", "PL/SQL Data Extraction", "Healthcare Analytics", "Oracle APEX", "JavaScript Workflow"],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full bg-[var(--void)] text-[var(--text)] py-28 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center items-center isolate"
      style={{
        borderTop: "1px solid color-mix(in srgb, var(--cold-silver) 12%, transparent)",
      }}
    >
      {/* Ambient Glow background */}
      <div
        className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-[180px] opacity-20"
        style={{
          background: "radial-gradient(circle, var(--hot-violet) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl w-full flex flex-col gap-16 relative z-10">
        {/* Header Row */}
        <div className="relative flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <span className="label font-mono tracking-widest text-xs text-[var(--hot-violet)]">
                03 // CAREER & WORK EXPERIENCE
              </span>
              <div className="h-px w-16 bg-gradient-to-r from-[var(--violet-core)] to-transparent opacity-60" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Professional Journey
            </h2>
          </motion.div>

          {/* Large Outline Section Number overlay */}
          <span
            className="font-mono text-7xl sm:text-9xl font-extrabold select-none pointer-events-none opacity-10 leading-none"
            style={{
              WebkitTextStroke: "1.5px var(--cold-silver)",
              color: "transparent",
            }}
          >
            03
          </span>
        </div>

        {/* ── Vertical Timeline Container ─────────────────────────── */}
        <div className="relative pl-6 sm:pl-10 flex flex-col gap-12 sm:gap-16">
          {/* Glowing Vertical Rail Line */}
          <div
            className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-0.5 rounded-full"
            style={{
              background: "linear-gradient(to bottom, var(--hot-violet) 0%, var(--violet-core) 60%, color-mix(in srgb, var(--violet-core) 20%, transparent) 100%)",
              boxShadow: "0 0 12px color-mix(in srgb, var(--hot-violet) 40%, transparent)",
            }}
          />

          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div
                className="absolute -left-[31px] sm:-left-[47px] top-2.5 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-125"
                style={{
                  background: exp.isCurrent ? "var(--hot-violet)" : "var(--ink)",
                  borderColor: "var(--hot-violet)",
                  boxShadow: exp.isCurrent
                    ? "0 0 16px var(--hot-violet), 0 0 24px color-mix(in srgb, var(--hot-violet) 50%, transparent)"
                    : "0 0 8px color-mix(in srgb, var(--hot-violet) 30%, transparent)",
                }}
              >
                {exp.isCurrent && (
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                )}
              </div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="p-7 sm:p-9 rounded-3xl border backdrop-blur-xl flex flex-col gap-6 transition-all duration-300"
                style={{
                  background: "color-mix(in srgb, var(--ink) 85%, transparent)",
                  borderColor: "color-mix(in srgb, var(--cold-silver) 15%, transparent)",
                  boxShadow: "0 20px 50px -15px color-mix(in srgb, var(--void) 90%, transparent)",
                }}
              >
                {/* Top Row: Company, Role & Date Badges */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-3">
                      <span className="font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                        {exp.company}
                      </span>
                      {exp.isCurrent && (
                        <span className="px-3 py-0.5 rounded-full font-mono text-[0.6rem] tracking-wider uppercase font-bold bg-purple-500/20 text-[var(--hot-violet)] border border-purple-400/40">
                          PRESENT ROLE
                        </span>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--hot-violet)]">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col md:items-end gap-1 font-mono text-xs text-[var(--cold-silver)] opacity-85">
                    <span className="px-3.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-white font-medium">
                      📅 {exp.period}
                    </span>
                    <span className="text-[0.7rem] opacity-75">📍 {exp.location}</span>
                  </div>
                </div>

                {/* Bullets List */}
                <div className="flex flex-col gap-3 text-sm sm:text-base text-[var(--cold-silver)] opacity-90 leading-relaxed font-normal">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <span className="text-[var(--hot-violet)] font-mono text-sm mt-0.5 select-none">✦</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-md font-mono text-[0.62rem] tracking-wider uppercase text-[var(--cold-silver)] bg-white/[0.04] border border-white/[0.08]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
