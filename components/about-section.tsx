"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Bot,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Terminal,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Frontend Architecture",
    value: "5+ Years",
    description:
      "Designing resilient, high-performance web applications using Angular 15+, React 19, TypeScript, and modern CSS design systems.",
  },
  {
    icon: Bot,
    title: "AI Chatbot Engineering",
    value: "AI Practitioner",
    description:
      "Engineering conversational AI chatbots & prompt pipelines at Infosys to automate workflows and elevate user engagement.",
  },
  {
    icon: TrendingUp,
    title: "Performance & Impact",
    value: "30% Error Cut",
    description:
      "Streamlined UI architectures and QA testing workflows resulting in a 25% project efficiency boost and 30% reduction in errors.",
  },
];

const CORE_CAPABILITIES = [
  "End-to-End UI Development from Scratch",
  "Angular & React Enterprise Micro-Frontends",
  "AI Prompt Engineering & Chatbot Workflows",
  "GraphQL & RESTful API Architecture",
  "Automated Jasmine/Karma Testing Suite",
  "Agile Leadership & Client Stakeholder Mastery",
];

export function AboutSection() {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Section Header with Top-Right Counter 01 */}
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
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-mono text-xs tracking-[0.2em] text-amber-400 uppercase font-semibold">
              ABOUT ME
            </span>
          </div>

          {/* Prominent Top-Right Section Counter 01 */}
          <span className="font-mono text-4xl sm:text-6xl font-black text-amber-400/40 tracking-tighter select-none">
            01
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] pt-2">
          Architecting High-Performance Web Interfaces & Intelligent AI Solutions
        </h2>

        <p className="text-zinc-400 text-base sm:text-lg font-sans font-light leading-relaxed">
          I bridge complex enterprise frontend systems with modern conversational AI, delivering seamless digital experiences with precision engineering.
        </p>
      </motion.div>

      {/* Spacious 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Card — Bio Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 bg-[#12141c] border border-zinc-800/90 rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-all" />

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-zinc-900 border border-zinc-800 text-amber-400 rounded-lg">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-sans tracking-tight">
                Professional Bio & Vision
              </h3>
            </div>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                I am a Senior Frontend Developer with over <strong className="text-amber-400 font-semibold">5 years of hands-on experience</strong> architecting dynamic web applications at premier technology consultancies including <strong className="text-white">Infosys</strong> and <strong className="text-white">Accenture</strong>.
              </p>
              <p>
                My specialty lies in building scalable enterprise UIs from scratch using <strong className="text-white">Angular & React</strong>, alongside developing <strong className="text-amber-400 font-semibold">AI-powered chatbot solutions</strong> and custom prompt engineering pipelines to automate customer interactions.
              </p>
              <p className="text-zinc-400 text-sm">
                I thrive in Agile environments—combining technical rigor, comprehensive unit testing, and transparent client engagement to deliver software that drives real business efficiency.
              </p>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="mt-8 pt-8 border-t border-zinc-800/80">
            <h4 className="font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Core Strengths</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CORE_CAPABILITIES.map((cap, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Cards — 3 Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col gap-5 justify-between"
        >
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#12141c] border border-zinc-800/90 rounded-2xl p-6 sm:p-7 hover:border-amber-500/40 hover:bg-[#161824] transition-all duration-300 group shadow-xl flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 text-amber-400 rounded-xl group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">
                    {item.value}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white mb-1.5 font-sans">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
