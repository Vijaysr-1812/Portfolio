---
name: lucide-react
description: Lucide React icon system guidelines, icon component patterns, customizable SVG props, sizing, accessibility, and dynamic icon rendering across components.
---

# Lucide React Guidelines & Patterns

Lucide React provides clean, consistent, and fully customizable SVG icons for React and Next.js applications.

## Usage & Best Practices

### 1. Direct Named Imports
Import icons individually to allow tree-shaking and bundle optimization. Avoid wildcard imports.

```tsx
import { ArrowRight, Check, Sparkles, User } from "lucide-react";

export function ActionButton() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md">
      <span>Get Started</span>
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}
```

### 2. Standard Props & Sizing
Lucide icons accept standard SVG attributes, including `size`, `color`, `strokeWidth`, and `className`.

```tsx
// Using className for Tailwind CSS responsive sizing and colors
<Sparkles className="h-5 w-5 text-amber-500 hover:text-amber-400 transition-colors" />

// Using explicit props for dynamic values
<Check size={20} strokeWidth={2.5} color="currentColor" />
```

### 3. Accessible Icon Patterns
When icons convey semantic meaning without visible text, always supply `aria-label` or wrapping accessibility hints.

```tsx
// Decorative icon (text provides context)
<button>
  <User className="h-4 w-4 mr-2" aria-hidden="true" />
  <span>Profile</span>
</button>

// Icon-only button (requires accessible label)
<button aria-label="Close dialog" className="p-2 rounded-full hover:bg-muted">
  <X className="h-4 w-4" />
</button>
```

### 4. Dynamic Icon Rendering
When rendering icons dynamically based on configuration or database records, map strings to icon components safely.

```tsx
import { Code, Globe, Palette, Terminal, type LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  code: Code,
  web: Globe,
  design: Palette,
  terminal: Terminal,
};

export function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = ICON_MAP[name] || Code;
  return <IconComponent className={className || "h-5 w-5"} />;
}
```
