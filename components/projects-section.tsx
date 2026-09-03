"use client";

import { motion } from "framer-motion";
import { ProjectHoverCard } from "@/components/ui/card-7";
import { Code2, BrainCircuit, TrendingUp, BotMessageSquare, ShieldCheck } from "lucide-react";

const PROJECTS = [
  {
    title: "Ragnorok",
    category: "FULL STACK PLATFORM",
    overview:
      "Gamified full-stack Python learning platform featuring RPG-style coding challenges with in-browser execution via Pyodide. Engineered user progression, classroom management, and 3D interfaces with Next.js, Prisma, Supabase, and Three.js.",
    imageUrl: "/images/ragnorok-cover.png",
    link: "https://ragonorok.vercel.app/",
    linkText: "Visit Website",
    logo: <Code2 className="h-5 w-5 text-purple-400" />,
    techStack: ["Next.js", "TypeScript", "Pyodide", "Supabase", "Three.js"],
  },
  {
    title: "Viscount AI",
    category: "AI & COMPLIANCE",
    overview:
      "Full-stack AI contract compliance platform to automate obligation extraction and match them against real-world operational evidence. Features vector semantic search (pgvector), real-time risk scoring, and OpenAI GPT models.",
    imageUrl: "/images/viscount-ai-cover.png",
    link: "https://viscountai.vercel.app/",
    linkText: "Visit Website",
    logo: <BrainCircuit className="h-5 w-5 text-indigo-400" />,
    techStack: ["Next.js", "OpenAI GPT", "pgvector", "Supabase", "Tailwind"],
  },
  {
    title: "Growth AI",
    category: "AI FINANCIAL INTELLIGENCE",
    overview:
      "Real-time sentiment analysis and personalized financial advice powered by Gemini AI. Smart investing platform built with Next.js, TypeScript, and AI confidence scoring.",
    imageUrl: "/images/growth-ai-cover.png",
    link: "https://growth-ai-sigma.vercel.app/",
    linkText: "Visit Website",
    logo: <TrendingUp className="h-5 w-5 text-blue-400" />,
    techStack: ["Next.js", "TypeScript", "Gemini AI", "Prisma", "Tailwind CSS"],
  },
  {
    title: "Intuiprep",
    category: "CONVERSATIONAL AI",
    overview:
      "AI-powered mock interview platform enabling users to practice with AI agents, receive real-time feedback, and track progress using Next.js, shadcn/ui, Vapi.ai voice agents, and Firebase.",
    imageUrl: "/images/intuiprep-cover.png",
    link: "https://ai-interview-eight-chi.vercel.app/",
    linkText: "Visit Website",
    logo: <BotMessageSquare className="h-5 w-5 text-fuchsia-400" />,
    techStack: ["Next.js", "Vapi.ai", "shadcn/ui", "Firebase"],
  },
  {
    title: "LandChain",
    category: "BLOCKCHAIN & SYSTEM",
    overview:
      "Secure blockchain system for verifying land documents and minimizing fraud. Designed a responsive UI using React & Tailwind CSS, and developed backend APIs with Express.js.",
    imageUrl:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    link: "#",
    linkText: "Explore LandChain",
    logo: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
    techStack: ["Blockchain", "React", "Tailwind CSS", "Express.js"],
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-[var(--void)] text-[var(--text)] py-28 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center items-center isolate"
      style={{
        borderTop: "1px solid color-mix(in srgb, var(--cold-silver) 12%, transparent)",
      }}
    >
      {/* Background Glow */}
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none blur-[180px] opacity-20"
        style={{
          background: "radial-gradient(circle, var(--hot-violet) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl w-full flex flex-col gap-14 relative z-10">
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
                04 // FEATURED PROJECTS
              </span>
              <div className="h-px w-16 bg-gradient-to-r from-[var(--violet-core)] to-transparent opacity-60" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Selected Works & Systems
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
            04
          </span>
        </div>

        {/* ── Projects Grid using ProjectHoverCard (card-7 style with reveal button) ────── */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <ProjectHoverCard
                title={project.title}
                category={project.category}
                overview={project.overview}
                imageUrl={project.imageUrl}
                link={project.link}
                linkText={project.linkText}
                logo={project.logo}
                techStack={project.techStack}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
