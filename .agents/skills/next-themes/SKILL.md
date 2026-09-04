---
name: next-themes
description: Next Themes integration for smooth dark mode and light mode theme switching, ThemeProvider setup, and preventing flash of unstyled content (FOUC).
---

# Next Themes Integration Guidelines

Next Themes manages dark mode, light mode, and system preferences seamlessly in Next.js applications while preventing layout flickers (FOUC).

## Implementation Setup

### 1. Theme Provider Component (`components/theme-provider.tsx`)
Create a wrapper client component around `ThemeProvider` from `next-themes`.

```tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

### 2. Root Layout Integration (`app/layout.tsx`)
Wrap your application in `ThemeProvider` inside `app/layout.tsx`, passing `attribute="class"` and `suppressHydrationWarning` on `<html>`.

```tsx
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 3. Theme Toggle Component
Use the `useTheme` hook to read and update the current theme safely after mounting.

```tsx
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9" />; // Placeholder to avoid layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md border border-border bg-background hover:bg-accent"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
```
