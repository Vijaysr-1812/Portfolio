import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Globe } from "lucide-react";

export interface ProjectHoverCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  imageAlt?: string;
  logo?: React.ReactNode;
  title: string;
  category: string;
  overview: string;
  techStack?: string[];
  link: string;
  linkText?: string;
}

const ProjectHoverCard = React.forwardRef<HTMLDivElement, ProjectHoverCardProps>(
  (
    {
      className,
      imageUrl,
      imageAlt,
      logo,
      title,
      category,
      overview,
      techStack = [],
      link,
      linkText = "Visit Website",
      ...props
    },
    ref
  ) => {
    const displayDomain = React.useMemo(() => {
      try {
        if (!link || link === "#") return "project-preview.internal";
        const url = new URL(link);
        return url.hostname;
      } catch {
        return "ragonorok.vercel.app";
      }
    }, [link]);

    return (
      <div
        ref={ref}
        onClick={(e) => {
          if (link && link !== "#") {
            window.open(link, "_blank", "noopener,noreferrer");
          }
          props.onClick?.(e);
        }}
        className={cn(
          "group relative flex flex-col w-full overflow-hidden rounded-2xl border border-white/15 bg-[var(--void)]/90 backdrop-blur-2xl shadow-xl",
          "transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 hover:border-purple-500/60 cursor-pointer",
          className
        )}
        {...props}
      >
        {/* Top Browser Frame Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-black/90 border-b border-white/10 text-xs text-white/50">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono text-[0.7rem] text-white/70 max-w-[210px] truncate">
            <Globe className="w-3 h-3 text-purple-400 shrink-0" />
            <span className="truncate">{displayDomain}</span>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-purple-400 transition-colors" />
        </div>

        {/* Crisp Uncropped Cover Image Window */}
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/95 flex items-center justify-center border-b border-white/10 p-1">
          <img
            src={imageUrl}
            alt={imageAlt || title}
            className="w-full h-full object-contain rounded-lg transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>

        {/* Card Content & Information */}
        <div className="flex flex-col justify-between flex-1 p-6 space-y-4 bg-gradient-to-b from-black/40 via-black/80 to-black/95">
          <div className="space-y-3">
            {/* Header: Logo & Title & Category Tag */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                {logo && (
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white shrink-0">
                    {logo}
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-[var(--hot-violet)] transition-colors">
                    {title}
                  </h3>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full font-mono text-[0.65rem] tracking-wider uppercase bg-purple-500/10 text-purple-300 border border-purple-500/20 shrink-0">
                {category}
              </span>
            </div>

            {/* Overview */}
            <p className="text-xs text-white/75 leading-relaxed line-clamp-3">
              {overview}
            </p>
          </div>

          {/* Footer: Tech Stack & Action Button */}
          <div className="space-y-4 pt-2">
            {techStack.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {techStack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[0.6rem] font-mono uppercase bg-white/5 text-white/80 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold tracking-wide shadow-lg shadow-purple-500/25 rounded-xl transition-all duration-300 group-hover:shadow-purple-500/50"
            >
              {linkText} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);
ProjectHoverCard.displayName = "ProjectHoverCard";

export { ProjectHoverCard };
