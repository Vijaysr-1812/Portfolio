"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Bot,
  Terminal,
  Workflow,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Core & UI Frameworks",
    icon: Code2,
    description: "Building responsive, modular, high-performance web applications",
    skills: [
      { name: "Angular (15+)", level: 95 },
      { name: "React & Next.js", level: 90 },
      { name: "TypeScript", level: 92 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5 & CSS3", level: 98 },
      { name: "Tailwind CSS & PostCSS", level: 90 },
      { name: "Chakra UI & Bootstrap", level: 88 },
    ],
  },
  {
    title: "AI Chatbots & Backend APIs",
    icon: Bot,
    description: "Conversational AI automation, APIs, and relational databases",
    skills: [
      { name: "AI Chatbot Development", level: 90 },
      { name: "Prompt Engineering", level: 88 },
      { name: "RESTful APIs", level: 95 },
      { name: "GraphQL APIs", level: 85 },
      { name: "SQL & Oracle DB", level: 88 },
      { name: "SQL Server 2012", level: 86 },
      { name: "Java Fundamentals", level: 78 },
    ],
  },
  {
    title: "Testing, DevOps & Tooling",
    icon: Terminal,
    description: "CI/CD pipelines, automated testing, and developer environments",
    skills: [
      { name: "Azure DevOps", level: 88 },
      { name: "Karma & Jasmine Unit Testing", level: 92 },
      { name: "Integration Testing", level: 90 },
      { name: "GitHub & Version Control", level: 95 },
      { name: "Swagger API Docs", level: 88 },
      { name: "Agile & Scrum Methodologies", level: 95 },
    ],
  },
  {
    title: "Engineering Practices",
    icon: Workflow,
    description: "Software design principles and architectural patterns",
    skills: [
      { name: "Responsive Web Design", level: 98 },
      { name: "Performance Optimization", level: 92 },
      { name: "Object-Oriented Design (OOD)", level: 88 },
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Defect Resolution & Bug Fixing", level: 95 },
      { name: "Client Stakeholder Engagement", level: 92 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header with Top-Right Counter 04 */}
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
              TECHNICAL MASTERY
            </span>
          </div>

          {/* Prominent Top-Right Section Counter 04 */}
          <span className="font-mono text-4xl sm:text-6xl font-black text-amber-400/40 tracking-tighter select-none">
            04
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] pt-2">
          Skills & Technical Capabilities
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg font-sans font-light">
          Continuous scroll animations re-triggering dynamically as you scroll through each capability group.
        </p>
      </motion.div>

      {/* Grid of Skill Category Cards (Re-triggers on scroll!) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#12141c] border border-zinc-800/90 rounded-2xl p-8 hover:border-amber-500/40 hover:bg-[#161824] transition-all duration-300 group shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 text-amber-400 rounded-xl group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-sans">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 mb-8 font-sans">
                  {category.description}
                </p>

                {/* Skills Progress Bars */}
                <div className="space-y-5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex flex-col gap-2">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                        <span className="text-zinc-200 font-medium">{skill.name}</span>
                        <span className="text-amber-400 font-bold">{skill.level}%</span>
                      </div>

                      <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/80">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ amount: 0.5 }}
                          transition={{ duration: 1.1, delay: 0.1 + sIdx * 0.06, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-400 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.5)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
