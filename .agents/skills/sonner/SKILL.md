---
name: sonner
description: Sonner toast notifications library guidelines, Toast/Toaster provider setup, toast invocation API, promise toasts, and visual theme styling.
---

# Sonner Toast Notifications Guidelines

Sonner is an opinionated toast notification library built for React and Next.js applications.

## Integration Setup

### 1. Adding `Toaster` to Root Layout
Mount the `<Toaster />` component high in the React component tree (typically inside `app/layout.tsx`).

```tsx
import { Toaster } from "sonner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}
```

### 2. Triggering Toasts
Import `toast` from `sonner` in any client component to trigger notifications.

```tsx
"use client";

import { toast } from "sonner";

export function FeedbackButtons() {
  return (
    <div className="flex gap-2">
      <button onClick={() => toast.success("Changes saved successfully!")}>
        Success Toast
      </button>

      <button onClick={() => toast.error("Failed to update settings.")}>
        Error Toast
      </button>

      <button
        onClick={() =>
          toast.promise(saveSettingsApi(), {
            loading: "Saving...",
            success: "Settings saved!",
            error: "Could not save.",
          })
        }
      >
        Promise Toast
      </button>
    </div>
  );
}
```

## Best Practices
- **Rich Colors**: Enable `richColors` on `<Toaster />` for automatic success/error visual colors.
- **Custom Styling**: Style toasts using standard Tailwind utility classes or theme CSS custom properties.
