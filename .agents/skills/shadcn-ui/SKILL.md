---
name: shadcn-ui
description: Shadcn UI component suite architecture, copy-paste Tailwind primitives, component customization, path aliases (@/components/ui), and design integration.
---

# Shadcn UI Architecture & Integration Guidelines

Shadcn UI is a collection of re-usable components built with Radix UI and Tailwind CSS. Unlike traditional component libraries, components are owned directly within your codebase under `@/components/ui`.

## Configuration (`components.json`)

Ensure `components.json` defines your project paths and styling options correctly:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

## Adding Components

Components can be added using the Shadcn CLI:

```bash
npx shadcn@latest add button card dialog dropdown-menu avatar
```

## Customizing Components

Since Shadcn components reside directly in your codebase (`@/components/ui/button.tsx`), you have 100% control to modify styles, add custom variants using `cva`, or extend props.

```tsx
// @/components/ui/card.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
```
