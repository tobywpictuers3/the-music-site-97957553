import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppearOnScroll from "@/components/AppearOnScroll";
import GuidePresenter from "@/components/GuidePresenter";

import {
  STAGE_CHARACTERS,
  MARQUEE_ITEMS,
  HERO_TEXT,
} from "@/config/homepage";

// Stage backgrounds
import stageBgLight from "@/assets/homepage/stage/lightstage.png";
import stageBgDark from "@/assets/homepage/stage/darkstage.png";

// Logo
import logoLight from "@/assets/logo-toby.png";
import logoDark from "@/assets/whitelogo.png";

// Sign-holding characters (stage)
import signPiano from "@/assets/homepage/characters-signs/piano.png";
import signEguitar from "@/assets/homepage/characters-signs/eguitar.png";
import signGuitar from "@/assets/homepage/characters-signs/guitar.png";
import signDrums from "@/assets/homepage/characters-signs/drums.png";
import signSaxophone from "@/assets/homepage/characters-signs/saxophone.png";
import signViolin from "@/assets/homepage/characters-signs/violin.png";

// Lower-page presenter characters (unchanged)
import drums from "@/assets/homepage/characters/drums.png";
import piano from "@/assets/homepage/characters/piano.png";
import saxophone from "@/assets/homepage/characters/saxophone.png";
import violin from "@/assets/homepage/characters/violin.png";
import guitarClassic from "@/assets/homepage/characters/guitar.png";
import guitarElectric from "@/assets/homepage/characters/eguitar.png";

// Textures for quote cards
import texStarsLight from "@/assets/homepage/textures/stars-light.png";
import texStarsDark from "@/assets/homepage/textures/stars-dark.png";

const SIGN_CHARACTER_MAP: Record<string, string> = {
  piano: signPiano,
  eguitar: signEguitar,
  guitar: signGuitar,
  drums: signDrums,
  saxophone: signSaxophone,
  violin: signViolin,
};

const PRESENTER_MAP: Record<string, string> = {
  piano,
  eguitar: guitarElectric,
  guitar: guitarClassic,
  drums,
  saxophone,
  violin,
};

export default function Index() {
  // ── Marquee visibility (scroll-based) ──
  const heroRef = useRef<HTMLElement>(null);
  const [showMarquee, setShowMarquee] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowMarquee(!entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes toby-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .toby-marquee-track {
          animation: toby-marquee 26s linear infinite;
          width: max-content;
        }

        @keyframes sparkle-float {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          20% { opacity: 1; transform: scale(1) rotate(30deg); }
          80% { opacity: 1; transform: scale(0.8) rotate(-20deg); }
        }
        .sparkle-star {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: hsl(var(--primary));
          box-shadow: 0 0 6px 2px hsl(var(--primary) / 0.6);
          animation: sparkle-float 1.6s ease-in-out infinite;
          pointer-events: none;
        }
      `}</style>

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* ══════════════════════════════════════════════════════
            FIXED MARQUEE — appears after scrolling past hero
        ══════════════════════════════════════════════════════ */}
        {showMarquee && (
          <div className="fixed inset-x-0 top-0 z-[60] overflow-hidden border-b border-border bg-accent py-3 text-accent-foreground">
            <div className="toby-marquee-track flex items-center gap-6 whitespace-nowrap pr-6">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
                (item, i) => (
                  <span
                    key={`${item}-${i}`}
                    className="text-base font-semibold tracking-[0.18em] text-accent-foreground/95 md:text-lg"
                  >
                    {item}
                    <span className="mx-6 text-accent-foreground/45">•</span>
                  </span>
                )
              )}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════
            HERO / STAGE
        ══════════════════════════════════════════════════════ */}
        <section
          ref={heroRef}
          id="stage-characters"
          className="relative isolate overflow-hidden scroll-mt-16"
        >
          {/* Stage background */}
          <div className="absolute inset-0">
            <img
              src={stageBgLight}
              alt=""
              className="block h-full w-full object-cover dark:hidden"
            />
            <img
              src={stageBgDark}
              alt=""
              className="hidden h-full w-full object-cover dark:block"
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
          </div>

          <div className="relative mx-auto min-h-[780px] max-w-[1600px] px-4 pt-10 md:min-h-[900px] md:px-8 lg:min-h-[980px]">
            {/* ── Hero text (centered) ── */}
            <div className="relative z-20 mx-auto flex max-w-3xl flex-col items-center pt-6 text-center md:pt-10">
              {/* Logo as heading */}
              <img
                src={logoLight}
                alt="Toby Music"
                className="mb-4 h-[60px] object-contain drop-shadow-lg dark:hidden md:h-[80px] lg:h-[96px]"
              />
              <img
                src={logoDark}
                alt="Toby Music"
                className="mb-4 hidden h-[60px] object-contain drop-shadow-lg dark:block md:h-[80px] lg:h-[96px]"
              />

              {/* Main title line */}
              <h1 className="text-[clamp(36px,5vw,72px)] font-black leading-tight text-foreground drop-shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
                {HERO_TEXT.subtitle}{" "}
                <a
                  href={HERO_TEXT.linkHref}
                  className="relative inline-block cursor-pointer text-accent underline underline-offset-8 decoration-accent/35 decoration-2 transition-colors hover:text-accent/80"
                >
                  {HERO_TEXT.linkWord}
                  {/* Sparkle stars */}
                  <span className="sparkle-star" style={{ top: "-10px", right: "-6px", animationDelay: "0s" }} />
                  <span className="sparkle-star" style={{ top: "-4px", left: "-10px", animationDelay: "0.4s", width: 6, height: 6 }} />
                  <span className="sparkle-star" style={{ bottom: "-8px", right: "4px", animationDelay: "0.8s", width: 5, height: 5 }} />
                  <span className="sparkle-star" style={{ top: "2px", right: "-14px", animationDelay: "1.2s", width: 7, height: 7 }} />
                  <span className="sparkle-star" style={{ bottom: "-6px", left: "-8px", animationDelay: "0.6s", width: 4, height: 4 }} />
                </a>
              </h1>

              {/* Support line with subtle background */}
              <p className="mt-4 rounded-full bg-foreground/5 px-6 py-2 text-[clamp(14px,1.4vw,22px)] text-foreground/80 backdrop-blur-sm">
                {HERO_TEXT.supportLine}
              </p>

              {/* Slogan */}
              <p className="mt-3 text-[clamp(16px,1.6vw,26px)] font-bold text-foreground/90">
                {HERO_TEXT.sloganPrefix}{" "}
                <span className="bg-gradient-to-l from-accent via-primary to-accent bg-clip-text text-transparent">
                  {HERO_TEXT.sloganAccent}
                </span>
              </p>
            </div>

            {/* ── Stage characters with signs ── */}
            {STAGE_CHARACTERS.map((char) => (
              <Link
                key={char.character}
                to={char.href}
                className="group absolute select-none transition-transform duration-300 hover:scale-105"
                style={{
                  left: char.stage.left,
                  bottom: char.stage.bottom,
                  width: char.stage.width,
                  zIndex: char.stage.zIndex,
                }}
                aria-label={`מעבר לדף ${char.title}`}
              >
                <div className="relative">
                  <img
                    src={SIGN_CHARACTER_MAP[char.character]}
                    alt={char.title}
                    className="w-full drop-shadow-[0_14px_30px_rgba(0,0,0,0.22)]"
                  />
                  {/* Sign text overlay */}
                  <div
                    className="absolute flex items-center justify-center"
                    style={{
                      top: char.signBox.top,
                      left: char.signBox.left,
                      width: char.signBox.width,
                      height: char.signBox.height,
                    }}
                  >
                    <span className="text-center text-[clamp(8px,1vw,16px)] font-bold leading-tight text-foreground drop-shadow-sm group-hover:text-accent transition-colors">
                      {char.title}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            GUIDE PRESENTER
        ══════════════════════════════════════════════════════ */}
        <GuidePresenter />

        {/* ══════════════════════════════════════════════════════
            QUOTE CARDS — themed background with textures
        ══════════════════════════════════════════════════════ */}
        <AppearOnScroll>
          <section className="px-4 py-12 md:px-8 md:py-20" dir="rtl">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {STAGE_CHARACTERS.map((char) => (
                  <Link
                    key={char.character}
                    to={char.href}
                    className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 md:p-8"
                  >
                    {/* Subtle texture overlay */}
                    <img
                      src={texStarsLight}
                      alt=""
                      className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12] dark:hidden"
                    />
                    <img
                      src={texStarsDark}
                      alt=""
                      className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover opacity-[0.15] dark:block"
                    />

                    <div className="relative z-10">
                      <img
                        src={PRESENTER_MAP[char.character]}
                        alt={char.title}
                        className={`mx-auto mb-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] ${
                          char.character === "drums"
                            ? "w-36 md:w-44 xl:w-52"
                            : "w-24 md:w-28 xl:w-32"
                        }`}
                      />
                      <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {char.title}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {char.quote}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </AppearOnScroll>

        <Footer />
      </div>
    </>
  );
}
