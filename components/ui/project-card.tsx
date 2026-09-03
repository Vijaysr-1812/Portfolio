import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the props interface for type safety and clarity
export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, imgSrc, title, description, link, linkText = "View Project", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl border-white/10 hover:border-purple-500/50 bg-white/[0.03] backdrop-blur-xl",
          className
        )}
        {...props}
      >
        {/* Card Image Section */}
        <div className="aspect-video overflow-hidden relative">
          <img
            src={imgSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        </div>

        {/* Card Content Section */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[var(--hot-violet)] text-white">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-sm text-[var(--cold-silver)] opacity-85 leading-relaxed">
            {description}
          </p>

          {/* Card Link/CTA */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/button mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--hot-violet)] transition-all duration-300 hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            {linkText}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
          </a>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
