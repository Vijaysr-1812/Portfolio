---
name: tailwind-v4
description: Tailwind CSS v4 and PostCSS design system guidelines, CSS theme variables, utility-first styling, dark mode configuration, and responsive design patterns.
---

# Tailwind CSS v4 & PostCSS Guidelines

Tailwind CSS v4 introduces a streamlined CSS-first configuration model using `@import "tailwindcss";` and native CSS custom properties.

## Configuration & Setup

### 1. Main CSS File Structure (`globals.css` or `app/globals.css`)
In Tailwind CSS v4, styling and theme variables are defined directly inside CSS files using `@theme` blocks rather than `tailwind.config.js`.

```css
@import "tailwindcss";

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --border: 240 5.9% 90%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --border: 240 3.7% 15.9%;
  }
}

@theme {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-border: hsl(var(--border));
  --radius-lg: var(--radius);
}
```

### 2. Modern Layout & Typography Best Practices
- Use flexbox and grid utilities (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- Use fluid typography and spacing scale to maintain responsiveness.
- Use `backdrop-blur-md` and semi-transparent backgrounds for modern glassmorphism aesthetics.

```tsx
export function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-background/60 p-6 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-primary/30">
      {children}
    </div>
  );
}
```

### 3. Responsive Breakpoints
Standard breakpoints to follow across layout designs:
- `sm:` 640px (Mobile landscape / small tablets)
- `md:` 768px (Tablets)
- `lg:` 1024px (Laptops / Small desktops)
- `xl:` 1280px (Desktops)
- `2xl:` 1536px (Large screens)
