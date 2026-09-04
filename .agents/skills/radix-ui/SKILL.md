---
name: radix-ui
description: Radix UI unstyled primitives (@radix-ui/react-slot, Slot component, polymorphic component composition, and accessible component building).
---

# Radix UI Primitives Guidelines

Radix UI provides accessible, unstyled UI primitives that serve as the foundation for design systems and component libraries (such as Shadcn UI).

## Core Concepts & `@radix-ui/react-slot`

### 1. The Slot Primitive
`Slot` merges its props onto its immediate child element, allowing components to support the `asChild` prop pattern for polymorphic rendering without sacrificing prop forwarding or event handlers.

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn("px-4 py-2 rounded-md font-medium transition-colors", className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
```

### 2. Using `asChild` for Links or Custom Elements
When a component needs to render as a Next.js `Link` or custom element while retaining button styling:

```tsx
import Link from "next/link";

export function NavLink() {
  return (
    <Button asChild>
      <Link href="/dashboard">Go to Dashboard</Link>
    </Button>
  );
}
```

## Best Practices
- **Accessibility**: Radix primitives handle WAI-ARIA compliance, focus management, and keyboard navigation automatically. Avoid overriding native focus traps or ARIA attributes unless required.
- **Composition**: Use `@radix-ui/react-slot` whenever creating reusable UI components that might wrap anchor tags, Next.js links, or third-party router components.
