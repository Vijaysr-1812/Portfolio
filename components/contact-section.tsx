"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      toast.success("Email copied to clipboard!");
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
      toast.success("Phone number copied to clipboard!");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your message has been sent successfully.");
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header with Top-Right Counter 06 */}
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
              GET IN TOUCH
            </span>
          </div>

          {/* Prominent Top-Right Section Counter 06 */}
          <span className="font-mono text-4xl sm:text-6xl font-black text-amber-400/40 tracking-tighter select-none">
            06
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Let’s Build Something Remarkable
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base font-mono max-w-xl">
          // Open for senior frontend opportunities, AI project leads & consultations
        </p>
      </motion.div>

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column — Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <div className="bg-[#14161f] border border-zinc-800 p-8 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-2xl font-bold text-white mb-4">
              Contact Information
            </h3>
            <p className="text-sm text-zinc-300 mb-8 leading-relaxed">
              Whether you have a question about my experience, want to discuss a new frontend initiative, or explore AI chatbot implementations, feel free to reach out!
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-lg flex items-center justify-between group hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-zinc-400 uppercase">
                      Direct Email
                    </span>
                    <a
                      href="mailto:kavana262@gmail.com"
                      className="text-sm font-semibold text-white hover:text-amber-400 transition-colors"
                    >
                      kavana262@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard("kavana262@gmail.com", "email")}
                  className="p-2 text-zinc-400 hover:text-amber-400 transition-colors focus:outline-none"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-lg flex items-center justify-between group hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-zinc-400 uppercase">
                      Phone Number
                    </span>
                    <a
                      href="tel:+918867545191"
                      className="text-sm font-semibold text-white hover:text-amber-400 transition-colors"
                    >
                      +91 8867545191
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard("+918867545191", "phone")}
                  className="p-2 text-zinc-400 hover:text-amber-400 transition-colors focus:outline-none"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-lg flex items-center gap-3">
                <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-zinc-400 uppercase">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Bangalore, India
                  </span>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kavana-srinivasa-489529152/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-lg flex items-center justify-between group hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-md">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-zinc-400 uppercase">
                      LinkedIn Profile
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                      kavana-srinivasa-489529152
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column — Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-[#14161f] border border-zinc-800 p-8 rounded-xl shadow-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Send a Direct Message
          </h3>
          <p className="text-xs font-mono text-zinc-400 mb-6">
            Fill out the form below and I’ll get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono text-zinc-300 uppercase mb-2">
                  Your Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  placeholder="Kavana Srinivasa"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 font-sans focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-300 uppercase mb-2">
                  Your Email <span className="text-amber-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  placeholder="kavana262@gmail.com"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 font-sans focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 uppercase mb-2">
                Subject
              </label>
              <input
                type="text"
                value={formState.subject}
                onChange={(e) =>
                  setFormState({ ...formState, subject: e.target.value })
                }
                placeholder="Senior Frontend Opportunity / Project Inquiry"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 font-sans focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 uppercase mb-2">
                Message <span className="text-amber-400">*</span>
              </label>
              <textarea
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                placeholder="Hi Kavana, I'd like to discuss..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 font-sans focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold font-mono text-xs uppercase tracking-wider py-3.5 rounded-lg transition-colors shadow-lg shadow-amber-500/10 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "SENDING MESSAGE..." : "SEND MESSAGE"}</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
