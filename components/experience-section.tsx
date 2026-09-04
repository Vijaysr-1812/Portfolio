"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronDown,
  Award,
  Sparkles,
  Zap,
  TrendingUp,
} from "lucide-react";

interface ExperienceItem {
  id: string;
  step: string;
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  metrics: string;
  badges: string[];
  highlights: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "infosys",
    step: "01",
    company: "Infosys",
    role: "Senior Associate Consultant (Angular, React & AI)",
    location: "Bangalore, India",
    period: "Aug 2024 — Present",
    current: true,
    metrics: "2x Star Performer Awardee",
    badges: ["Angular 17", "React 19", "AI Chatbots", "Prompt Engineering", "TypeScript", "Agile"],
    highlights: [
      "Building scalable and high-performance web applications using React and Angular for renowned enterprise clients.",
      "Engineered AI-powered chatbot solutions to enhance user experience and automate complex customer interactions.",
      "Leading end-to-end UI development, API integrations, unit and integration testing to ensure high-quality deliverables.",
      "Actively collaborating with cross-functional teams and client stakeholders to streamline workflows and deliver projects on schedule.",
      "Awarded 'Star Performer' twice at Infosys for exceptional task accomplishment.",
    ],
  },
  {
    id: "accenture-lead",
    step: "02",
    company: "Accenture",
    role: "Application Development Analyst & Project Lead",
    location: "Bangalore, India",
    period: "Mar 2022 — Aug 2024",
    current: false,
    metrics: "30% Error Cut • 25% Efficiency Boost",
    badges: ["Angular", "Oracle DB", "GraphQL", "Swagger", "SQL Server 2012", "Jasmine/Karma"],
    highlights: [
      "Served as Project Lead for frontend design and development (Nov 2022 – Aug 2024), taking complete ownership of UI architecture from scratch.",
      "Orchestrated seamless phase coordination across development lifecycles, achieving a 30% reduction in errors and boosting project efficiency by 25%.",
      "Directly engaged with client stakeholders to outline project scope, interaction guidelines, and project timelines.",
      "Proactively anticipated and resolved defects during testing phases to maintain robust application performance.",
      "Honored with the 'DU Star Performer' (Sep 2022) award for delivering end-to-end frontend development from scratch within estimated due dates.",
    ],
  },
  {
    id: "accenture-assoc",
    step: "03",
    company: "Accenture",
    role: "Associate Development Analyst",
    location: "Bangalore, India",
    period: "Nov 2020 — Jan 2022",
    current: false,
    metrics: "2x Star of the Month",
    badges: ["Angular", "SQL Server 2012", "GraphQL", "REST APIs", "Agile/Scrum"],
    highlights: [
      "Exhibited high technical proficiency in Angular, unit testing, and GraphQL integration for client-facing software.",
      "Cultivated transparent communication channels with clients to refine scope and elevate project effectiveness.",
      "Proactively identified defects and bugs, swiftly rectifying issues during testing phases.",
      "Received 'Star of the Month' twice for timely accomplishment of complex frontend tasks.",
    ],
  },
];

export function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string>("infosys");

  return (
    <section id="experience" className="py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header with Top-Right Counter 02 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start gap-4 mb-20 relative"
      >
        {/* Header Top Row */}
        <div className="flex items-center justify-between w-full border-b border-zinc-800/80 pb-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <span className="font-mono text-xs tracking-[0.2em] text-amber-400 uppercase font-semibold">
              CAREER TIMELINE
            </span>
          </div>

          {/* Prominent Top-Right Section Counter 02 */}
          <span className="font-mono text-4xl sm:text-6xl font-black text-amber-400/40 tracking-tighter select-none">
            02
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] pt-2">
          Work Experience & Career Milestones
        </h2>

        <p className="text-zinc-400 text-base sm:text-lg font-sans font-light">
          A step-by-step timeline of roles, leadership achievements, and enterprise UI impact.
        </p>
      </motion.div>

      {/* Interactive Vertical Timeline Container */}
      <div className="relative pl-6 sm:pl-12 border-l-2 border-zinc-800/80 space-y-12">
        {/* Animated Glowing Vertical Track */}
        <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-500 via-amber-500/50 to-transparent pointer-events-none" />

        {EXPERIENCES.map((exp, idx) => {
          const isExpanded = expandedId === exp.id;
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div
                className={`absolute -left-[37px] sm:-left-[61px] top-4 w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                  exp.current
                    ? "bg-amber-500 border-amber-400 text-zinc-950 shadow-[0_0_20px_rgba(245,158,11,0.8)] scale-110"
                    : "bg-[#12141c] border-zinc-700 text-amber-400 group-hover:border-amber-500 group-hover:scale-105"
                }`}
              >
                {exp.step}
              </div>

              {/* Card Holder */}
              <div className="bg-[#12141c] border border-zinc-800/90 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 shadow-2xl">
                {/* Clickable Header Bar */}
                <div
                  onClick={() => setExpandedId(isExpanded ? "" : exp.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-[#12141c] to-[#161824] hover:from-[#161824] hover:to-[#1a1d2b] transition-all"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sans tracking-tight">
                        {exp.company}
                      </h3>

                      {exp.current && (
                        <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] uppercase font-bold px-3 py-0.5 rounded-full">
                          PRESENT ROLE
                        </span>
                      )}

                      <span className="font-mono text-xs text-amber-400/90 font-medium bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 rounded">
                        {exp.metrics}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base font-semibold text-amber-400 font-sans">
                      {exp.role}
                    </p>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-zinc-800/80">
                    <div className="flex flex-col md:items-end text-xs font-mono text-zinc-400 gap-1">
                      <div className="flex items-center gap-1.5 text-zinc-300">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-500">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:text-amber-400 group-hover:border-amber-500/40 transition-colors">
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-amber-400" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Collapsible / Expandable Details */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="border-t border-zinc-800/80 bg-[#0e1017] p-6 sm:p-8 space-y-6"
                    >
                      {/* Highlights */}
                      <div>
                        <h4 className="font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold mb-4 flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          <span>Key Deliverables & Impact</span>
                        </h4>
                        <ul className="space-y-3">
                          {exp.highlights.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed font-sans">
                              <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="pt-4 border-t border-zinc-800/60">
                        <h5 className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider mb-3">
                          Technologies Used:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.badges.map((badge, bIdx) => (
                            <span
                              key={bIdx}
                              className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 bg-[#161824] border border-zinc-800 px-3 py-1 rounded-md"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
