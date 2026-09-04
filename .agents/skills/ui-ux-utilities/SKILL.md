---
name: ui-ux-utilities
description: CVA (class-variance-authority), tailwind-merge, and clsx utility patterns for managing dynamic component variants and merging Tailwind CSS classes safely.
---

# UI / UX Utilities: CVA, Tailwind-Merge & Clsx

This skill covers the standard helper utilities for managing dynamic component variants and merging Tailwind CSS class names without precedence conflicts.

## Helper Utility Setup (`@/lib/utils.ts`)

### `cn` Utility Function
Combine `clsx` (for conditional class logic) with `tailwind-merge` (to resolve class specificity conflicts).

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Usage Examples for `cn`

```tsx
// Merges background classes safely, correctly overriding bg-red-500 with bg-blue-500
<div className={cn("p-4 bg-red-500 text-white", isSuccess && "bg-blue-500", className)} />
```

## Component Variants with Class Variance Authority (CVA)

CVA allows creating strongly-typed, scalable component variants with default variants and compound variants.

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function CustomButton({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}
```
