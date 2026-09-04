---
name: framer-motion
description: Framer Motion animation engine guidelines, motion components, scroll animations, keyframe controls, layout animations, and page transitions for Next.js and React applications.
---

# Framer Motion Guidelines & Integration

Framer Motion is the production-ready motion engine for React applications. Use this skill when implementing animations, transitions, scroll-driven effects, gesture handlers, or layout animations.

## Core Concepts & Patterns

### 1. Client Components Setup
Framer Motion components must run on the client side in Next.js App Router. Always add `"use client"` at the top of files using motion components or hooks (`useScroll`, `useTransform`, `useAnimate`, `AnimatePresence`).

```tsx
"use client";

import { motion } from "framer-motion";

export function HeroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h1>Welcome</h1>
    </motion.div>
  );
}
```

### 2. Standard Motion Variants
Use variants for clean, reusable animation states and staggered children.

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function FeatureList({ items }: { items: string[] }) {
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <motion.li key={index} variants={itemVariants}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
```

### 3. Scroll Animations & Viewport Triggers
Trigger animations when elements scroll into view using `whileInView` and `viewport`.

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
  <Card />
</motion.div>
```

### 4. Interactive Micro-Interactions (Hover & Tap)
Enhance UI components with responsive hover and tap effects.

```tsx
<motion.button
  whileHover={{ scale: 1.03, translateY: -2 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 400, damping: 25 }}
  className="btn-primary"
>
  Click Me
</motion.button>
```

### 5. AnimatePresence for Mount/Unmount Transitions
Wrap conditional components or dynamic lists with `AnimatePresence` to enable exit animations.

```tsx
import { AnimatePresence, motion } from "framer-motion";

export function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-backdrop"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="modal-content"
          >
            Modal Body
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

## Best Practices
- **Performance**: Animate only GPU-accelerated CSS properties (`transform`, `opacity`). Avoid animating `height`, `width`, or `top/left` directly unless using `layout`.
- **Reduced Motion**: Respect user OS accessibility settings by using `useReducedMotion()`.
- **Bundle Size**: Import `m` and `LazyMotion` for code-splitting motion features if bundle size becomes critical.
