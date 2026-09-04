"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  Edit2,
  Check,
  Code2,
  Bot,
  Layers,
  Award,
  Briefcase,
  Mail,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";

const TECH_TAGS = [
  "ANGULAR",
  "REACT",
  "TYPESCRIPT",
  "AI CHATBOTS",
  "PROMPT ENG.",
  "AZURE DEVOPS",
];

export function HeroSection() {
  const [imageSrc, setImageSrc] = useState("/images/kavana_portrait.png");
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [inputUrl, setInputUrl] = useState("");

  const handleUpdateImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      setImageSrc(inputUrl.trim());
      setIsEditingImage(false);
      toast.success("Profile photo updated successfully!");
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-12 flex flex-col justify-between max-w-7xl mx-auto overflow-hidden"
    >
      {/* Subtle Warm Background Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Main Grid Layout (Reference Image Matching) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column — Text & Bio Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start gap-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#161821] border border-amber-500/20 px-3.5 py-1.5 rounded-full shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span className="font-mono text-xs tracking-[0.2em] text-amber-400 font-semibold uppercase">
              AVAILABLE FOR HIRE
            </span>
          </div>

          {/* Name Title matching font & tracking style from reference image */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white uppercase font-sans leading-[1.05]">
              KAVANA SRINIVASA
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 italic font-sans font-light tracking-wide">
              Senior Frontend Developer & AI Solutions Engineer
            </p>
          </div>

          {/* Bio Brief */}
          <p className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed font-sans">
            Over 5 years of mastery building high-performance web applications using{" "}
            <span className="text-amber-400 font-medium">Angular & React</span>.
            Specialized in AI-powered chatbot integration, prompt engineering, and
            scalable enterprise UI architectures.
          </p>

          {/* Tech Tag Pills matching reference image */}
          <div className="flex flex-wrap gap-2 pt-1">
            {TECH_TAGS.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 bg-[#161822] border border-zinc-800 hover:border-amber-500/30 px-3 py-1.5 rounded-sm transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-5 pt-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 text-sm font-mono tracking-widest text-amber-400 uppercase font-semibold border-b-2 border-amber-500/80 hover:border-amber-400 py-1 transition-all"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold font-mono text-xs uppercase tracking-wider px-5 py-3 rounded-md transition-colors shadow-lg shadow-amber-500/10"
            >
              <Mail className="w-4 h-4" />
              <span>GET IN TOUCH</span>
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-[#161822] hover:bg-[#1f2230] border border-zinc-700/80 text-zinc-200 font-mono text-xs uppercase tracking-wider px-4 py-3 rounded-md transition-colors"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>RESUME HIGHLIGHTS</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column — Photo Container with Floating Stats Overlay (Reference Image Matching) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          {/* Main Portrait Frame */}
          <div className="relative w-full max-w-md aspect-[4/5] rounded-xl overflow-hidden bg-[#161822] border border-zinc-800 shadow-2xl group">
            {/* Image display */}
            <Image
              src={imageSrc}
              alt="Kavana Srinivasa Portfolio Photo"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover object-center filter grayscale contrast-[1.05] brightness-95 group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e]/80 via-transparent to-transparent pointer-events-none" />

            {/* Quick Image Edit / Swap Button */}
            <button
              onClick={() => setIsEditingImage(!isEditingImage)}
              className="absolute top-3 left-3 z-20 bg-zinc-900/90 hover:bg-amber-500 hover:text-zinc-950 text-zinc-300 p-2 rounded-md border border-zinc-700 text-xs font-mono flex items-center gap-1.5 transition-all shadow-lg"
              title="Replace profile image URL"
            >
              <Edit2 className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono">Change Photo</span>
            </button>

            {/* URL Edit Form Overlay */}
            {isEditingImage && (
              <form
                onSubmit={handleUpdateImage}
                className="absolute inset-x-3 top-14 z-30 bg-zinc-900/95 border border-amber-500/40 p-3 rounded-lg shadow-2xl backdrop-blur-md flex flex-col gap-2"
              >
                <label className="text-[11px] font-mono text-amber-400">
                  Insert Image URL or Path:
                </label>
                <input
                  type="text"
                  placeholder="/images/kavana_portrait.png"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-xs text-zinc-100 font-mono focus:outline-none focus:border-amber-500"
                />
                <div className="flex gap-2 justify-end pt-1">
                  <button
                    type="button"
                    onClick={() => setIsEditingImage(false)}
                    className="px-2.5 py-1 text-[10px] font-mono text-zinc-400 hover:text-zinc-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-3 py-1 text-[10px] font-mono bg-amber-500 text-zinc-950 font-bold rounded"
                  >
                    Apply
                  </button>
                </div>
              </form>
            )}

            {/* Floating Overlay Card 1 — TOP RIGHT (Reference Image Match) */}
            <div className="absolute top-6 right-6 z-20 bg-[#14161f]/95 border border-zinc-800/90 p-3.5 rounded-lg shadow-2xl backdrop-blur-md flex flex-col items-center justify-center min-w-[100px] text-center">
              <span className="text-2xl font-extrabold font-sans text-amber-400 tracking-tight">
                9+
              </span>
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase mt-0.5">
                CERTIFICATIONS
              </span>
            </div>

            {/* Floating Overlay Card 2 — BOTTOM LEFT (Reference Image Match) */}
            <div className="absolute bottom-6 left-6 z-20 bg-[#14161f]/95 border border-zinc-800/90 p-4 rounded-lg shadow-2xl backdrop-blur-md flex flex-col items-start justify-center min-w-[130px]">
              <span className="text-3xl font-extrabold font-sans text-amber-400 tracking-tight leading-none">
                5+
              </span>
              <span className="text-[10px] font-mono tracking-widest text-zinc-300 uppercase mt-1">
                YEARS EXP.
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Center Scroll Indicator (Reference Image Matching) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex flex-col items-center justify-center pt-12 pb-2 gap-2 text-center"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
          SCROLL
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-amber-500 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
