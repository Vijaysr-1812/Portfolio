"use client";

import {
  useRef,
  useEffect,
  useCallback,
  type PointerEvent as ReactPointerEvent,
} from "react";

/* ────────────────────────────────────────────────────────────
   ALIGNMENT CORRECTION
   AI-generated reveal frames drift a few pixels from their
   base. These constants let you tune without regenerating art.
   ──────────────────────────────────────────────────────────── */
const ALIGN = {
  desktop: { scale: 1, x: 0, y: 0 },
  mobile: { scale: 1, x: 0, y: 0 },
} as const;

/* ────────────────────────────────────────────────────────────
   NODE CHAIN (liquid body)
   ──────────────────────────────────────────────────────────── */
const NODE_COUNT = 20;
const HEAD_CHASE = 0.32;
const BODY_CHASE = 0.34;
const ENGAGE_FACTOR = 0.11;
const HEAD_RADIUS_FINE = 240;
const HEAD_RADIUS_COARSE = 100;
const MAX_DPR = 2;

interface ChainNode {
  x: number;
  y: number;
}

/* ────────────────────────────────────────────────────────────
   IMAGE SOURCES
   ──────────────────────────────────────────────────────────── */
const IMAGES = {
  desktop: {
    base: "/images/Base_image_desktop.png",
    reveal: "/images/Reveal_image_desktop.png",
  },
  mobile: {
    base: "/images/Base_image_mobile.png",
    reveal: "/images/Reveal_image_mobile.png",
  },
} as const;

/* ────────────────────────────────────────────────────────────
   UTILITIES
   ──────────────────────────────────────────────────────────── */
function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function isMobileQuery(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 767px) and (orientation: portrait)")
    .matches;
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isCoarsePointer(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: coarse)").matches;
}

interface AlignItem {
  scale: number;
  x: number;
  y: number;
}

/* ────────────────────────────────────────────────────────────
   COVER MATHS — reproduces CSS background-size: cover
   ──────────────────────────────────────────────────────────── */
function coverRect(
  canvasW: number,
  canvasH: number,
  imgW: number,
  imgH: number,
  align: AlignItem
) {
  const baseScale = Math.max(canvasW / imgW, canvasH / imgH);
  const scale = baseScale * align.scale;
  const dw = imgW * scale;
  const dh = imgH * scale;
  const dx = (canvasW - dw) / 2 + align.x * dw;
  const dy = (canvasH - dh) / 2 + align.y * dh;
  return { dx, dy, dw, dh };
}

/* ════════════════════════════════════════════════════════════
   COMPONENT
   ════════════════════════════════════════════════════════════ */
export function CognitionHero() {
  /* ── Refs ─────────────────────────────────────────────── */
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // offscreen field canvas
  const fieldCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // chain nodes
  const nodesRef = useRef<ChainNode[]>(
    Array.from({ length: NODE_COUNT }, () => ({ x: 0, y: 0 }))
  );

  // pointer state
  const pointerRef = useRef({ x: 0, y: 0 });
  const engagementRef = useRef(0);
  const engagementTargetRef = useRef(0);
  const seededRef = useRef(false);
  const headRadiusRef = useRef(HEAD_RADIUS_FINE);

  // animation
  const rafRef = useRef(0);
  const clockRef = useRef(0);

  // images
  const imagesLoadedRef = useRef(false);
  const revealImgRef = useRef<HTMLImageElement | null>(null);
  const mobileRef = useRef(false);
  const alignRef = useRef<AlignItem>(ALIGN.desktop);

  // reduced motion
  const reducedMotionRef = useRef(false);

  /* ── Resize handler ──────────────────────────────────── */
  const resize = useCallback(() => {
    const hero = heroRef.current;
    const canvas = canvasRef.current;
    if (!hero || !canvas) return;

    const rect = hero.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    // field canvas at 0.8x
    if (!fieldCanvasRef.current) {
      fieldCanvasRef.current = document.createElement("canvas");
    }
    fieldCanvasRef.current.width = Math.round(rect.width * dpr * 0.8);
    fieldCanvasRef.current.height = Math.round(rect.height * dpr * 0.8);

    // decide mobile or desktop
    const wasMobile = mobileRef.current;
    mobileRef.current = isMobileQuery();
    alignRef.current = mobileRef.current ? ALIGN.mobile : ALIGN.desktop;

    // reload images if breakpoint crossed
    if (wasMobile !== mobileRef.current || !imagesLoadedRef.current) {
      loadSet();
    }
  }, []);

  /* ── Load image set ──────────────────────────────────── */
  const loadSet = useCallback(async () => {
    const set = mobileRef.current ? IMAGES.mobile : IMAGES.desktop;
    try {
      const [, reveal] = await Promise.all([
        loadImage(set.base), // warm the cache (base is CSS bg)
        loadImage(set.reveal),
      ]);
      revealImgRef.current = reveal;
      imagesLoadedRef.current = true;
    } catch {
      console.warn("Image loading failed");
    }
  }, []);

  /* ── Pointer handlers (no state setters) ─────────────── */
  const seedPosition = useCallback((x: number, y: number) => {
    const hero = heroRef.current;
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    const px = x - rect.left;
    const py = y - rect.top;
    pointerRef.current = { x: px, y: py };
    if (!seededRef.current) {
      const nodes = nodesRef.current;
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].x = px;
        nodes[i].y = py;
      }
      seededRef.current = true;
    }
  }, []);

  const onPointerEnter = useCallback(
    (e: ReactPointerEvent<HTMLElement>) => {
      if (e.pointerType !== "mouse") return;
      seedPosition(e.clientX, e.clientY);
      engagementTargetRef.current = 1;
      headRadiusRef.current = HEAD_RADIUS_FINE;
    },
    [seedPosition]
  );

  const onPointerMove = useCallback(
    (e: ReactPointerEvent<HTMLElement>) => {
      if (e.pointerType !== "mouse" && !heroRef.current?.hasPointerCapture(e.pointerId)) return;
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      pointerRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    },
    []
  );

  const onPointerLeave = useCallback(
    (e: ReactPointerEvent<HTMLElement>) => {
      if (e.pointerType !== "mouse") return;
      engagementTargetRef.current = 0;
    },
    []
  );

  const onPointerDown = useCallback(
    (e: ReactPointerEvent<HTMLElement>) => {
      if (e.pointerType === "mouse") return;
      const hero = heroRef.current;
      if (!hero) return;
      hero.setPointerCapture(e.pointerId);
      seedPosition(e.clientX, e.clientY);
      engagementTargetRef.current = 1;
      headRadiusRef.current = HEAD_RADIUS_COARSE;
    },
    [seedPosition]
  );

  const onPointerUp = useCallback(
    (e: ReactPointerEvent<HTMLElement>) => {
      if (e.pointerType === "mouse") return;
      engagementTargetRef.current = 0;
    },
    []
  );

  /* ── Animation loop ──────────────────────────────────── */
  const frame = useCallback(() => {
    rafRef.current = requestAnimationFrame(frame);
    clockRef.current += 1 / 60;

    const canvas = canvasRef.current;
    const fieldCanvas = fieldCanvasRef.current;
    const revealImg = revealImgRef.current;
    const hero = heroRef.current;
    if (!canvas || !fieldCanvas || !hero) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: false });
    const fctx = fieldCanvas.getContext("2d", { willReadFrequently: false });
    if (!ctx || !fctx) return;

    const reduced = reducedMotionRef.current;
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    const cw = canvas.width;
    const ch = canvas.height;
    const fw = fieldCanvas.width;
    const fh = fieldCanvas.height;
    const fScale = fw / cw; // field is 0.8x
    const nodes = nodesRef.current;
    const ptr = pointerRef.current;
    const headR = headRadiusRef.current;
    const clock = clockRef.current;
    const engage = engagementRef.current;

    /* 1. Advance chain */
    const chaseFactor = reduced ? 1 : HEAD_CHASE;
    const bodyFactor = reduced ? 1 : BODY_CHASE;
    nodes[0].x += (ptr.x * dpr - nodes[0].x) * chaseFactor;
    nodes[0].y += (ptr.y * dpr - nodes[0].y) * chaseFactor;
    for (let i = 1; i < NODE_COUNT; i++) {
      nodes[i].x += (nodes[i - 1].x - nodes[i].x) * bodyFactor;
      nodes[i].y += (nodes[i - 1].y - nodes[i].y) * bodyFactor;
    }

    /* 2. Advance engagement */
    const engFactor = reduced ? 1 : ENGAGE_FACTOR;
    engagementRef.current +=
      (engagementTargetRef.current - engagementRef.current) * engFactor;
    const eng = engagementRef.current;

    /* Write --p for interface chrome and --sp for scroll progress */
    hero.style.setProperty("--p", eng.toFixed(3));

    const rect = hero.getBoundingClientRect();
    const maxScroll = rect.height - window.innerHeight;
    const sp =
      maxScroll > 0
        ? Math.min(Math.max(-rect.top / maxScroll, 0), 1)
        : 0;
    hero.style.setProperty("--sp", sp.toFixed(3));

    /* 3. If engagement is effectively 0, clear canvas and exit */
    ctx.clearRect(0, 0, cw, ch);
    fctx.clearRect(0, 0, fw, fh);
    if (eng <= 0.001) {
      return;
    }

    fctx.globalCompositeOperation = "lighter";

    const n = NODE_COUNT;
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      let radius = headR * dpr * (1 - t * 0.58) * eng;
      if (!reduced) {
        radius += Math.sin(clock * 1.6 + i * 0.9) * headR * dpr * 0.05;
      }
      if (radius <= 0) continue;

      const alpha = 0.72 - t * 0.22;
      const nx = nodes[i].x * fScale;
      const ny = nodes[i].y * fScale;
      const fr = radius * fScale;

      const grad = fctx.createRadialGradient(nx, ny, 0, nx, ny, fr);
      grad.addColorStop(0, `rgba(255,255,255,${alpha})`);
      grad.addColorStop(0.55, `rgba(255,255,255,${alpha * 0.78})`);
      grad.addColorStop(1, "rgba(255,255,255,0)");

      fctx.beginPath();
      fctx.arc(nx, ny, fr, 0, Math.PI * 2);
      fctx.fillStyle = grad;
      fctx.fill();
    }

    /* 4. Draw to main canvas */
    ctx.clearRect(0, 0, cw, ch);
    ctx.globalCompositeOperation = "source-over";
    const blurPx = 10 * dpr;
    ctx.filter = `blur(${blurPx}px)`;
    // draw twice to firm up the liquid surface
    ctx.drawImage(fieldCanvas, 0, 0, fw, fh, 0, 0, cw, ch);
    ctx.drawImage(fieldCanvas, 0, 0, fw, fh, 0, 0, cw, ch);
    ctx.filter = "none";

    /* 5. source-in: reveal appears only inside liquid body */
    if (revealImg && imagesLoadedRef.current) {
      ctx.globalCompositeOperation = "source-in";
      const align = alignRef.current;
      const { dx, dy, dw, dh } = coverRect(
        cw,
        ch,
        revealImg.naturalWidth,
        revealImg.naturalHeight,
        align
      );
      ctx.drawImage(revealImg, dx, dy, dw, dh);
    }

    /* 6. Reset */
    ctx.globalCompositeOperation = "source-over";
  }, []);

  /* ── Mount / Unmount ─────────────────────────────────── */
  useEffect(() => {
    reducedMotionRef.current = prefersReducedMotion();
    headRadiusRef.current = isCoarsePointer()
      ? HEAD_RADIUS_COARSE
      : HEAD_RADIUS_FINE;

    resize();
    rafRef.current = requestAnimationFrame(frame);

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotion = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mql.addEventListener("change", handleMotion);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      mql.removeEventListener("change", handleMotion);
    };
  }, [resize, frame]);

  /* ── Determine background image set for CSS ──────────── */
  // Base layer is CSS background-image; set both in inline style
  // with a media-query approach via picture-like logic.
  // Since we can't do CSS media in inline, we use two divs.

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative isolate overflow-hidden h-[100svh] w-full bg-[var(--void)]"
      style={
        {
          minWidth: "320px",
          "--p": "0",
          touchAction: "none",
        } as React.CSSProperties
      }
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* ── Viewport Container ──────────────────────── */}
      <div className="relative h-full w-full overflow-hidden flex flex-col justify-between">
        {/* ── Visually hidden h1 for a11y ──────────────────── */}
        <h1 className="sr-only">Vijay — Full Stack Developer & UI Engineer</h1>

        {/* ── Raw Portrait + Canvas Layer Wrapper ────── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 0,
          }}
        >
          {/* Layer 1: Base portrait (CSS background) ──────── */}
          <style>{`
            @media (max-width: 767px) and (orientation: portrait) {
              [data-base-layer] {
                background-image: url(${IMAGES.mobile.base}) !important;
              }
            }
          `}</style>
          <div
            data-base-layer=""
            className="hero-portrait-enter absolute inset-0"
            aria-hidden="true"
            style={{
              backgroundImage: `url(${IMAGES.desktop.base})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 0,
            }}
          />

          {/* Layer 1.5: Background Flowing Text (Strict Side-Only Mask) ─── */}
          <div
            className="hero-chrome-enter marquee-container absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden"
            aria-hidden="true"
            style={{
              zIndex: 0,
              opacity: 0.16,
              WebkitMaskImage:
                "linear-gradient(to right, black 0%, black 15%, transparent 35%, transparent 65%, black 85%, black 100%)",
              maskImage:
                "linear-gradient(to right, black 0%, black 15%, transparent 35%, transparent 65%, black 85%, black 100%)",
            }}
          >
            <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
              {Array.from({ length: 4 }).map((_, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-12 font-mono uppercase font-extrabold tracking-widest text-[clamp(4rem,12vw,11rem)]"
                  style={{
                    color: "var(--cold-silver)",
                    letterSpacing: "0.18em",
                    lineHeight: 1,
                  }}
                >
                  <span>FULL STACK DEVELOPER</span>
                  <span style={{ color: "var(--violet-core)", opacity: 0.8 }}>✦</span>
                  <span>CREATIVE ENGINEER</span>
                  <span style={{ color: "var(--violet-core)", opacity: 0.8 }}>✦</span>
                </span>
              ))}
            </div>
          </div>

          {/* Layer 2: Reveal canvas ───────────────────────── */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-auto"
            aria-hidden="true"
            style={{ zIndex: 1 }}
          />
        </div>

      {/* ── Layer 3: Interface Chrome ────────────────────── */}
      <div
        className="hero-chrome-enter absolute inset-0 pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <div className="relative h-full w-full px-5 py-5 sm:px-8 sm:py-6 flex flex-col justify-between pointer-events-auto">
          {/* ─── TOP ROW ─────────────────────────────── */}
          <div className="flex items-start justify-between gap-4">
            {/* Top-Left: Wordmark / Logo */}
            <a
              href="#hero"
              className="flex items-center gap-3 no-underline group cursor-pointer"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* V monogram - thin strokes */}
                <path
                  d="M4 5L10 23L16 5"
                  stroke="var(--text)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Trailing slashes */}
                <path
                  d="M19 5L22 23"
                  stroke="var(--violet-core)"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <path
                  d="M22 5L25 23"
                  stroke="var(--violet-core)"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  opacity="0.35"
                />
              </svg>
              <span
                className="label group-hover:text-[var(--hot-violet)] transition-colors"
                style={{
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.2em",
                  color: "var(--text)",
                  fontSize: "0.58rem",
                }}
              >
                VIJAY
              </span>
            </a>

            {/* Top-Centre: Navigation (hidden on mobile) */}
            <nav
              className="hidden sm:flex items-center gap-6"
              aria-label="Primary"
            >
              {[
                { label: "ABOUT", href: "#about" },
                { label: "WORK INDEX", href: "#experience" },
                { label: "PROJECTS", href: "#projects" },
                { label: "CONTACT", href: "#contact" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="nav-link label cursor-pointer"
                  style={{ color: "var(--cold-silver)", textDecoration: "none" }}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Top-Right: Contact CTA */}
            <a
              href="#contact"
              className="nav-link label cursor-pointer"
              style={{
                color: "var(--text)",
                textDecoration: "none",
                gap: "0.35rem",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              CONTACT
              <span style={{ fontSize: "0.72rem" }} aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          {/* ─── BOTTOM ROW ──────────────────────────── */}
          <div className="flex items-end justify-between gap-4">
            {/* Bottom-Left: Field caption (hidden on mobile) */}
            <div className="hidden sm:flex flex-col gap-1" style={{ maxWidth: "22rem" }}>
              <span
                className="label"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "color-mix(in srgb, var(--cold-silver) 50%, transparent)",
                }}
              >
                const identity = await cognition.resolve();
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  color: "color-mix(in srgb, var(--text) 72%, transparent)",
                  lineHeight: 1.5,
                }}
              >
                Building interfaces that feel like thought — fluid, precise, inevitable.
              </span>
            </div>

            {/* Bottom-Centre: Interaction cue */}
            <div className="flex flex-col items-center gap-2">
              {/* Violet dot with glow */}
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--violet-core)",
                  boxShadow: `0 0 calc(4px + var(--p, 0) * 12px) var(--hot-violet), 
                              0 0 calc(8px + var(--p, 0) * 24px) color-mix(in srgb, var(--hot-violet) 40%, transparent)`,
                }}
              />
              {/* Crossfading text lines */}
              <div
                className="relative"
                style={{ height: "1rem" }}
              >
                <span
                  className="label absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
                  style={{
                    opacity: "calc(1 - var(--p, 0) * 1.6)",
                    transition: "opacity 0.3s",
                  }}
                >
                  MOVE INTO THE FIELD
                </span>
                <span
                  className="label absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
                  style={{
                    color: "var(--hot-violet)",
                    opacity: "calc((var(--p, 0) - 0.55) * 2.2)",
                    transition: "opacity 0.3s",
                  }}
                >
                  FORM ACQUIRED
                </span>
              </div>
            </div>

            {/* Bottom-Right: Section index */}
            <div className="flex items-center gap-2.5">
              <span
                className="label"
                style={{ color: "var(--text)", fontSize: "0.58rem" }}
              >
                01
              </span>
              {/* Rail */}
              <div
                style={{
                  width: 56,
                  height: 1,
                  background:
                    "color-mix(in srgb, var(--cold-silver) 20%, transparent)",
                  position: "relative",
                  borderRadius: 1,
                }}
              >
                {/* Active segment */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "25%",
                    height: "100%",
                    background: "var(--violet-core)",
                    borderRadius: 1,
                    boxShadow: `0 0 calc(2px + var(--p, 0) * 6px) var(--hot-violet)`,
                  }}
                />
              </div>
              <span
                className="label"
                style={{
                  color:
                    "color-mix(in srgb, var(--cold-silver) 40%, transparent)",
                  fontSize: "0.58rem",
                }}
              >
                04
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
