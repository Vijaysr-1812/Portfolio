"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Trophy, Medal, Sparkles, CheckCircle2 } from "lucide-react";

const CERTIFICATIONS = [
  {
    code: "AZ-900",
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    category: "Cloud Systems",
  },
  {
    code: "AI-900",
    name: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    category: "Artificial Intelligence",
  },
  {
    code: "DP-900",
    name: "Microsoft Azure Data Fundamentals",
    issuer: "Microsoft",
    category: "Data Platforms",
  },
  {
    code: "SC-900",
    name: "Microsoft Security, Compliance & Identity",
    issuer: "Microsoft",
    category: "Security & Governance",
  },
  {
    code: "MS-900",
    name: "Microsoft 365 Fundamentals",
    issuer: "Microsoft",
    category: "Enterprise Cloud",
  },
  {
    code: "PL-900",
    name: "Microsoft Power Platform Fundamentals",
    issuer: "Microsoft",
    category: "Workflow Automation",
  },
  {
    code: "AI-PRACT",
    name: "Infosys Certified AI Practitioner",
    issuer: "Infosys",
    category: "Conversational AI & LLMs",
  },
  {
    code: "REACT-PRACT",
    name: "Infosys Certified React Practitioner",
    issuer: "Infosys",
    category: "Modern React Development",
  },
  {
    code: "GOOGLE-CERT",
    name: "Google Workshop Certified Developer",
    issuer: "Google",
    category: "Web Technologies",
  },
];

const ACHIEVEMENTS = [
  {
    title: "DU Star Performer Award",
    date: "September 2022",
    org: "Accenture",
    description:
      "Awarded for delivering end-to-end frontend UI development from scratch within strict due dates.",
  },
  {
    title: "Star of the Month (2x Winner)",
    date: "Accenture Tenure",
    org: "Accenture",
    description:
      "Honored twice for outstanding task accomplishment and timely execution of complex frontend deliverables.",
  },
  {
    title: "Star Performer Award (2x Winner)",
    date: "Infosys Tenure",
    org: "Infosys",
    description:
      "Recognized twice for task execution excellence and prompt delivery in AI chatbot solutions.",
  },
];

export function CertificationsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "certifications" | "awards">("all");

  return (
    <section id="certifications" className="py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header with Top-Right Counter 05 */}
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
              RECOGNITION & CREDENTIALS
            </span>
          </div>

          {/* Prominent Top-Right Section Counter 05 */}
          <span className="font-mono text-4xl sm:text-6xl font-black text-amber-400/40 tracking-tighter select-none">
            05
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full pt-2">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Certifications & Honors
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg font-sans font-light mt-2 max-w-xl">
              Verified Microsoft certifications and enterprise Star Performer awards.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 bg-[#12141c] border border-zinc-800 p-1.5 rounded-xl shrink-0">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg font-mono text-xs tracking-wider transition-all focus:outline-none ${
                activeTab === "all"
                  ? "bg-amber-500 text-zinc-950 font-bold shadow-md"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              Show All
            </button>
            <button
              onClick={() => setActiveTab("awards")}
              className={`px-4 py-2 rounded-lg font-mono text-xs tracking-wider transition-all focus:outline-none ${
                activeTab === "awards"
                  ? "bg-amber-500 text-zinc-950 font-bold shadow-md"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              Awards (3)
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`px-4 py-2 rounded-lg font-mono text-xs tracking-wider transition-all focus:outline-none ${
                activeTab === "certifications"
                  ? "bg-amber-500 text-zinc-950 font-bold shadow-md"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              Certifications (9)
            </button>
          </div>
        </div>
      </motion.div>

      {/* Major Achievements Showcase Cards */}
      {(activeTab === "all" || activeTab === "awards") && (
        <div className="mb-16">
          <h3 className="font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold mb-6 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Excellence Awards & Star Performer Honors</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((ach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#12141c] border border-amber-500/30 rounded-2xl p-7 relative overflow-hidden group hover:border-amber-400 transition-all duration-300 shadow-2xl flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/20 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl">
                      <Medal className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-amber-400 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-md">
                      {ach.org}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-1 font-sans">{ach.title}</h4>
                  <p className="font-mono text-xs text-amber-400/90 mb-4">{ach.date}</p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  {ach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Technical Certifications Grid */}
      {(activeTab === "all" || activeTab === "certifications") && (
        <div>
          <h3 className="font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold mb-6 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Technical Certifications (Microsoft, Infosys, Google)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-[#12141c] border border-zinc-800/90 rounded-2xl p-6 hover:border-amber-500/40 hover:bg-[#161824] transition-all duration-300 group shadow-xl flex items-start gap-4"
              >
                <div className="p-3 bg-zinc-900 border border-zinc-800 text-amber-400 rounded-xl group-hover:scale-110 transition-transform shrink-0">
                  <Award className="w-5 h-5" />
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[11px] tracking-widest text-amber-400 font-bold uppercase block">
                    {cert.code}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug font-sans">
                    {cert.name}
                  </h4>
                  <div className="flex items-center gap-2 pt-1 font-mono text-xs text-zinc-400">
                    <span className="text-zinc-200 font-medium">{cert.issuer}</span>
                    <span>•</span>
                    <span className="text-zinc-500">{cert.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
