"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUp, Copy, Check, ExternalLink, MapPin } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function FooterSection() {
  const [copied, setCopied] = useState(false);
  const email = "vijay@example.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[var(--void)] text-[var(--text)] pt-24 pb-12 px-6 sm:px-12 lg:px-20 overflow-hidden isolate"
      style={{
        borderTop: "1px solid color-mix(in srgb, var(--cold-silver) 12%, transparent)",
      }}
    >
      {/* Background Ambient Glow */}
      <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none blur-[200px] opacity-15"
        style={{
          background: "radial-gradient(circle, var(--hot-violet) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Header Row */}
        <div className="relative flex items-start justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="label font-mono tracking-widest text-xs text-[var(--hot-violet)]">
                05 // CONTACT & CONNECT
              </span>
              <div className="h-px w-16 bg-gradient-to-r from-[var(--violet-core)] to-transparent opacity-60" />
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  Let&apos;s Build &amp; Connect
                </h2>
                <p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed">
                  Open for engineering discussions, full-stack architecture, open-source collaborations, or software opportunities. Feel free to reach out directly or check out my work across social platforms.
                </p>
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80 backdrop-blur-md shrink-0">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>Associate Software Developer @ Oracle</span>
              </div>
            </div>
          </div>

          {/* Large Outline Section Number overlay */}
          <span
            className="font-mono text-7xl sm:text-9xl font-extrabold select-none pointer-events-none opacity-10 leading-none shrink-0 hidden sm:block"
            style={{
              WebkitTextStroke: "1.5px var(--cold-silver)",
              color: "transparent",
            }}
          >
            05
          </span>
        </div>

        {/* ── Contact & Social Cards Grid ────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* GitHub Card */}
          <motion.a
            href="https://github.com/Vijaysr-1812"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/50 hover:bg-white/[0.07] hover:-translate-y-1.5 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                  <GithubIcon className="h-6 w-6" />
                </div>
                <ExternalLink className="h-4 w-4 text-white/40 group-hover:text-purple-400 transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[var(--hot-violet)] transition-colors">
                  GitHub
                </h3>
                <p className="mt-1 text-xs text-white/70 leading-relaxed">
                  Explore open-source repositories, system codebases, and contributions.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-purple-300">
              <span>View Repositories</span>
              <span className="text-white/40 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href="https://www.linkedin.com/in/vijay-s-r-1704672a2"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.07] hover:-translate-y-1.5 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="h-6 w-6" />
                </div>
                <ExternalLink className="h-4 w-4 text-white/40 group-hover:text-blue-400 transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  LinkedIn
                </h3>
                <p className="mt-1 text-xs text-white/70 leading-relaxed">
                  Connect professionally, discuss career updates &amp; engineering projects.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-blue-300">
              <span>Connect Profile</span>
              <span className="text-white/40 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </motion.a>

          {/* Direct Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/50 hover:bg-white/[0.07] shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="flex items-center gap-1 text-[0.65rem] font-mono text-white/40">
                  <MapPin className="h-3 w-3" /> Bengaluru, IN
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  Get in Touch
                </h3>
                <p className="mt-1 text-xs text-white/70 leading-relaxed">
                  Send a message directly to discuss projects, ideas, or opportunities.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
              <a
                href={`mailto:${email}`}
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium text-center transition-colors"
              >
                Send Email
              </a>
              <button
                onClick={handleCopyEmail}
                title="Copy Email Address"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors flex items-center justify-center"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <p>© {new Date().getFullYear()} Vijay. Crafted with Next.js, Framer Motion &amp; Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all group cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
