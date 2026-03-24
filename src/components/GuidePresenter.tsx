import { useState, useEffect, useRef } from "react";
import { GUIDE_PRESENTER } from "@/config/homepage";
import presenterImg from "@/assets/homepage/presenter/presenter.png";

/**
 * GuidePresenter — reusable presenter shell.
 *
 * Behaviour:
 *  • On first render: shown large under the hero with a speech bubble
 *  • After scrolling past the threshold: shrinks into a floating corner launcher
 *  • On click (floating mode): expands the help bubble again
 *
 * Future: swap static text with AI / site-search integration.
 */
export default function GuidePresenter() {
  const [isFloating, setIsFloating] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the inline section scrolls out of view → go floating
        setIsFloating(!entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Inline (under hero) ── */}
      <section
        ref={sectionRef}
        className="relative z-10 px-4 py-12 md:px-8 md:py-16"
        dir="rtl"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <img
            src={presenterImg}
            alt="טובי — המדריך שלכם"
            className="w-[180px] drop-shadow-[0_18px_35px_rgba(0,0,0,0.14)] md:w-[240px] lg:w-[280px]"
          />

          {/* Speech bubble */}
          <div className="relative rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-lg md:p-8">
            {/* Tail pointing up */}
            <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 border-l border-t border-border bg-card" />
            <p className="relative z-10 text-base leading-8 md:text-lg">
              {GUIDE_PRESENTER.welcomeText}
            </p>
          </div>
        </div>
      </section>

      {/* ── Floating launcher (corner) ── */}
      {isFloating && (
        <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-2 animate-scale-in">
          {bubbleOpen && (
            <div
              className="relative max-w-xs rounded-2xl border border-border bg-card p-4 text-sm leading-7 text-card-foreground shadow-xl"
              dir="rtl"
            >
              <button
                onClick={() => setBubbleOpen(false)}
                className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                aria-label="סגור"
              >
                ✕
              </button>
              <p>{GUIDE_PRESENTER.welcomeText}</p>
            </div>
          )}

          <button
            onClick={() => setBubbleOpen((v) => !v)}
            className="group relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary/40 bg-card shadow-xl transition hover:scale-110"
            aria-label={GUIDE_PRESENTER.floatingLabel}
          >
            <img
              src={presenterImg}
              alt=""
              className="h-full w-full object-cover object-top"
            />
          </button>
          <span className="rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground shadow backdrop-blur">
            {GUIDE_PRESENTER.floatingLabel}
          </span>
        </div>
      )}
    </>
  );
}
