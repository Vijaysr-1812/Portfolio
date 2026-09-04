"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Bot,
  Layers,
  Sparkles,
  ArrowUpRight,
  Filter,
  Check,
  X,
  Code2,
  Cpu,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "AI & Frontend" | "Angular Systems" | "Data & APIs";
  description: string;
  metrics: string;
  tags: string[];
  features: string[];
  longDescription: string;
}

const PROJECTS: Project[] = [
  {
    id: "ai-chatbot",
    title: "AI-Powered Customer Chatbot Automation",
    category: "AI & Frontend",
    description:
      "Enterprise chatbot automation platform built with Angular 17, React 19, and Azure AI prompt engineering.",
    metrics: "Automated 60% Customer Interactions",
    tags: ["React 19", "Angular", "Azure AI", "Prompt Engineering", "TypeScript", "RxJS"],
    features: [
      "Real-time streaming response rendering and intent classification",
      "Custom prompt engineering workflow pipelines for complex customer queries",
      "Integrated with enterprise client web applications at Infosys",
      "Robust fallback logic and conversation context persistence",
    ],
    longDescription:
      "Engineered during Senior Associate Consultant role at Infosys to streamline customer service operations. Built with a modular React/Angular frontend architecture connecting to Azure AI services.",
  },
  {
    id: "angular-microfrontend",
    title: "Enterprise Angular Micro-Frontend Suite",
    category: "Angular Systems",
    description:
      "Scalable client-facing web application built from scratch with Angular 15+, Oracle DB, and Swagger APIs.",
    metrics: "30% Error Cut • 25% Efficiency Boost",
    tags: ["Angular 15+", "Oracle DB", "Swagger", "Jasmine/Karma", "TypeScript"],
    features: [
      "End-to-end UI development from initial wireframes to production release",
      "Comprehensive Jasmine & Karma unit testing coverage across components",
      "Integrated RESTful APIs and Swagger contract validations",
      "Strict accessibility and cross-browser performance standards",
    ],
    longDescription:
      "Led as Project Lead at Accenture. Spearheaded architecture, client engagement, and phase adherence, delivering high-performance UI components ahead of schedule.",
  },
  {
    id: "graphql-dashboard",
    title: "GraphQL Real-Time Analytics Dashboard",
    category: "Data & APIs",
    description:
      "High-throughput data visualization dashboard with GraphQL query caching and dynamic charting.",
    metrics: "100k+ Daily Events Rendered",
    tags: ["React", "GraphQL", "SQL Server 2012", "Tailwind CSS", "TypeScript"],
    features: [
      "Optimized GraphQL query deduplication & SWR client caching",
      "Interactive data filtering, sorting, and export capabilities",
      "Dark mode glassmorphism UI styled with Tailwind CSS",
      "Responsive layout for mobile and desktop viewports",
    ],
    longDescription:
      "Developed to aggregate complex dataset records into clean visual widgets for enterprise stakeholders, reducing page render times significantly.",
  },
  {
    id: "defect-control",
    title: "Automated QA & Defect Tracking Portal",
    category: "Angular Systems",
    description:
      "Defect management and release coordination web app for tracking software testing metrics.",
    metrics: "35% Reduction in Bug Cycles",
    tags: ["Angular", "SQL Server", "REST APIs", "Azure DevOps", "Chakra UI"],
    features: [
      "Real-time bug tracking & automated escalation alerts",
      "Client scope agreement and guideline documentation hub",
      "Built with Agile methodologies and sprint planning tools",
    ],
    longDescription:
      "Created to streamline defect identification, testing coordination, and client communication during critical deployment phases.",
  },
];

const CATEGORIES = ["All", "AI & Frontend", "Angular Systems", "Data & APIs"] as const;

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header with Top-Right Counter 03 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start gap-4 mb-16 relative"
      >
        {/* Header Top Row */}
        <div className="flex items-center justify-between w-full border-b border-zinc-800/80 pb-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <span className="font-mono text-xs tracking-[0.2em] text-amber-400 uppercase font-semibold">
              PORTFOLIO SHOWCASE
            </span>
          </div>

          {/* Prominent Top-Right Section Counter 03 */}
          <span className="font-mono text-4xl sm:text-6xl font-black text-amber-400/40 tracking-tighter select-none">
            03
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full pt-2">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Featured Projects & Architectures
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg font-sans font-light mt-2">
              Spacious project holders showcasing enterprise web apps and AI integrations.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-[#12141c] border border-zinc-800 p-1.5 rounded-xl shrink-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-mono text-xs tracking-wider transition-all focus:outline-none ${
                  selectedCategory === cat
                    ? "bg-amber-500 text-zinc-950 font-bold shadow-lg"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Grid — De-cluttered Spacious Holders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-[#12141c] border border-zinc-800/90 rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-amber-500/40 hover:bg-[#161824] transition-all duration-300 group shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-all" />

            <div>
              {/* Category & Impact Metric Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="font-mono text-xs tracking-wider text-amber-400 uppercase bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-md font-semibold">
                  {project.category}
                </span>
                <span className="font-mono text-xs text-zinc-300 font-semibold bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-md">
                  {project.metrics}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white font-sans group-hover:text-amber-300 transition-colors mb-3 leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {project.description}
              </p>

              {/* Features List */}
              <div className="mb-8 space-y-2.5">
                {project.features.slice(0, 3).map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-zinc-800/80">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-wider text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActiveModalProject(project)}
                className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-amber-500 hover:text-zinc-950 text-zinc-200 border border-zinc-800 font-mono text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all font-semibold"
              >
                <span>VIEW ARCHITECTURE DETAILS</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:text-zinc-950" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Architecture Details Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#12141c] border border-amber-500/40 p-8 sm:p-10 rounded-2xl max-w-2xl w-full shadow-2xl relative"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full border border-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded inline-block mb-3">
                {activeModalProject.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-sans">
                {activeModalProject.title}
              </h3>

              <div className="font-mono text-xs text-amber-400 font-semibold mb-4">
                Key Impact: {activeModalProject.metrics}
              </div>

              <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed font-sans">
                {activeModalProject.longDescription}
              </p>

              <div className="mb-6">
                <h4 className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-3">
                  Technical Architecture Highlights:
                </h4>
                <div className="space-y-2.5">
                  {activeModalProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                      <Check className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {activeModalProject.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold font-mono text-xs uppercase tracking-wider py-3.5 rounded-xl transition-colors"
              >
                Close Architecture View
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
