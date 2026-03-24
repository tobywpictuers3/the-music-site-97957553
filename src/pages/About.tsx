import { useEffect, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import InnerPageLayout from "@/components/InnerPageLayout";
import InnerPageOrbitHero from "@/components/brand/InnerPageOrbitHero";
import AppearOnScroll from "@/components/AppearOnScroll";
import {
  ABOUT_TOPICS,
  aboutOrbitItems,
  aboutPresenterAssets,
  type AboutTopicItem,
} from "@/content/orbit/aboutOrbit";
import red3 from "@/assets/red3.png";

const SETTINGS = {
  ticker: {
    speedSeconds: 28,
    stickyTop: "calc(100vh - 94px)",
  },

  hero: {
    title: ["לא עוד בלוק טקסט,", "אלא מסע סביב", "העולמות שלי"],
    intro: [
      "המוסיקה ואני התחלנו דרך משותפת עם מלאת לי 5 שנים.",
      "מאז — אנחנו יחד. יד־ביד.",
      "לא כתחביב, לא כשלב, לא כמשהו שעושים על הדרך...",
      "אלא כדרך חיים של לימוד, הוראה, במה, יצירה, דיוק, הקשבה והתפתחות מתמדת.",
    ],
  },
};

const TICKER_ITEMS = [
  "26 שנות הוראת מוסיקה",
  "9 כלי נגינה ברמה מעולה",
  "מאות תלמידות פרטיות לאורך השנים",
  "אלפי בוגרות קורסים קבוצתיים",
  "5 תזמורות לימודיות עשירות",
  "20 קונצרטים לתלמידות",
  "250+ הופעות בארץ ובעולם",
  "35 שנות למידה רציפה",
];

function SignatureLine({ text }: { text: string }) {
  const key = "אומנות ואמינות";
  const idx = text.indexOf(key);
  const before = idx >= 0 ? text.slice(0, idx) : text;
  const after = idx >= 0 ? text.slice(idx + key.length) : "";

  return (
    <div className="mt-6">
      <div className="relative overflow-hidden rounded-[1.6rem] border border-border/70 bg-card/70 px-5 py-5 backdrop-blur md:px-6">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.04] dark:opacity-[0.08] mix-blend-screen"
            style={{ backgroundImage: `url(${red3})` }}
          />
          <div className="absolute -top-10 right-0 h-24 w-24 rounded-full bg-primary/15 blur-3xl" />
        </div>

        <div className="relative text-base font-semibold leading-8 text-foreground/95 md:text-lg">
          {idx >= 0 ? (
            <span>
              {before}
              <span className="shimmer-gold">{key}</span>
              {after}
            </span>
          ) : (
            text
          )}
        </div>
      </div>
    </div>
  );
}

function ExpandableStoryCard({
  item,
  isOpen,
  onToggle,
}: {
  item: AboutTopicItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const clampedPreview = isOpen
    ? undefined
    : ({
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      } as CSSProperties);

  return (
    <article
      id={`about-${item.id}`}
      className={`relative overflow-hidden rounded-[2rem] border backdrop-blur transition-all duration-500 ${
        isOpen
          ? "border-primary/30 bg-card/80 shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
          : "border-border/70 bg-card/65"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute inset-0 bg-cover bg-center mix-blend-screen transition-opacity duration-500 ${
            isOpen
              ? "opacity-[0.06] dark:opacity-[0.11]"
              : "opacity-[0.03] dark:opacity-[0.06]"
          }`}
          style={{ backgroundImage: `url(${red3})` }}
        />
        {isOpen && (
          <div className="absolute -top-8 right-8 h-28 w-28 rounded-full bg-primary/14 blur-3xl" />
        )}
      </div>

      <button
        type="button"
        onClick={onToggle}
        className="relative block w-full px-6 py-6 text-right md:px-8 md:py-7"
      >
        <div className="flex items-start justify-between gap-6">
          <span
            className={`mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-lg font-bold transition-all duration-300 ${
              isOpen
                ? "border-primary/35 bg-primary/14 text-primary"
                : "border-border bg-background text-muted-foreground hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
            }`}
            aria-hidden="true"
          >
            {isOpen ? "−" : "+"}
          </span>

          <div className="min-w-0 flex-1">
            <h3 className="text-3xl font-bold leading-tight text-foreground md:text-[2.2rem]">
              {item.title}
            </h3>

            <div className="relative mt-4">
              <p
                style={clampedPreview}
                className={`text-base leading-8 transition-opacity duration-300 md:text-lg ${
                  isOpen ? "text-foreground/72" : "text-foreground/92"
                }`}
              >
                {item.preview}
              </p>

              {!isOpen && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-card via-card/90 to-transparent" />
              )}
            </div>
          </div>
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 md:px-8 md:pb-8">
            <div className="space-y-4 text-base leading-8 text-foreground/92 md:text-lg">
              {item.paragraphs.map((paragraph, index) => (
                <p key={`${item.id}-${index}`}>{paragraph}</p>
              ))}
            </div>

            <SignatureLine text={item.signature} />

            {(item.ctaLabel || item.secondaryCtaLabel) && (
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {item.ctaLabel && item.ctaTo && (
                  <Link
                    to={item.ctaTo}
                    className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    {item.ctaLabel}
                  </Link>
                )}

                {item.secondaryCtaLabel && item.secondaryCtaTo && (
                  <Link
                    to={item.secondaryCtaTo}
                    className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    {item.secondaryCtaLabel}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function StatsTicker({ items }: { items: string[] }) {
  return (
    <div className="sticky z-30 mt-2" style={{ top: SETTINGS.ticker.stickyTop }}>
      <div className="about-marquee relative overflow-hidden rounded-full border border-primary/20 bg-background/84 backdrop-blur">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.07] dark:opacity-[0.14] mix-blend-screen"
            style={{ backgroundImage: `url(${red3})` }}
          />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary/20 via-primary/8 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary/20 via-primary/8 to-transparent" />
        </div>

        <div className="relative overflow-hidden whitespace-nowrap py-3.5 md:py-4">
          <div className="about-marquee-rail flex w-max items-center">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="flex shrink-0 items-center gap-8 px-8 md:gap-12 md:px-12"
              >
                {items.map((item, index) => {
                  const [num, ...rest] = item.split(" ");
                  return (
                    <span
                      key={`${groupIndex}-${index}`}
                      className="inline-flex items-center gap-3 text-base font-medium text-foreground/90 md:text-lg"
                    >
                      <span
                        className="shimmer-gold text-[1.55rem] font-extrabold leading-none md:text-[1.9rem]"
                        style={{
                          textShadow:
                            "0 0 12px rgba(255,205,84,0.22), 0 0 22px rgba(255,205,84,0.10)",
                        }}
                      >
                        {num}
                      </span>
                      <span className="text-foreground/92">{rest.join(" ")}</span>
                      <span className="text-primary/70">•</span>
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const [openId, setOpenId] = useState<string>(ABOUT_TOPICS[1].id);
  const [activeOrbitId, setActiveOrbitId] = useState<string>(ABOUT_TOPICS[1].id);

  useEffect(() => {
    const observableItems = aboutOrbitItems.filter(
      (item) => typeof item.sectionId === "string" && item.sectionId.length > 0
    );

    const elements = observableItems
      .map((item) => {
        const el = document.getElementById(item.sectionId!);
        return el ? { item, el } : null;
      })
      .filter(Boolean) as Array<{
      item: (typeof aboutOrbitItems)[number];
      el: HTMLElement;
    }>;

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const matched = elements.find(({ el }) => el === visible.target);
        if (matched) {
          setActiveOrbitId(matched.item.id);
        }
      },
      {
        root: null,
        threshold: [0.15, 0.35, 0.6],
        rootMargin: "-28% 0px -42% 0px",
      }
    );

    elements.forEach(({ el }) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  function openCardFromOrbit(id: string, sectionId?: string) {
    setOpenId(id);
    setActiveOrbitId(id);

    requestAnimationFrame(() => {
      const el = document.getElementById(sectionId ?? `about-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  return (
    <InnerPageLayout
      title="אודות"
      description="המוסיקה ואני — דרך משותפת של למעלה משלושה עשורים."
    >
      <style>{`
        @keyframes aboutMarqueeRail {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .about-marquee:hover .about-marquee-rail {
          animation-play-state: paused;
        }

        .about-marquee-rail {
          animation: aboutMarqueeRail ${SETTINGS.ticker.speedSeconds}s linear infinite;
          width: max-content;
        }
      `}</style>

      <div className="relative pb-28">
        <StatsTicker items={TICKER_ITEMS} />

        <InnerPageOrbitHero
          eyebrow="אודות"
          title={SETTINGS.hero.title}
          intro={SETTINGS.hero.intro}
          orbitItems={aboutOrbitItems}
          presenterAssets={aboutPresenterAssets}
          activeOrbitId={activeOrbitId}
          presenterAlt="מגישת דף אודות"
          onOrbitItemClick={(item) => openCardFromOrbit(item.id, item.sectionId)}
          reverse
        />

        <section className="w-full py-10 md:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mb-6 text-sm font-medium tracking-[0.30em] text-primary/80">
              להעמקה
            </div>

            <div className="space-y-4">
              {ABOUT_TOPICS.map((item, index) => (
                <AppearOnScroll key={item.id} delay={index * 70}>
                  <div
                    className="scroll-mt-28"
                    onMouseEnter={() => setActiveOrbitId(item.id)}
                  >
                    <ExpandableStoryCard
                      item={item}
                      isOpen={openId === item.id}
                      onToggle={() => {
                        setActiveOrbitId(item.id);
                        setOpenId((current) => (current === item.id ? "" : item.id));
                      }}
                    />
                  </div>
                </AppearOnScroll>
              ))}
            </div>
          </div>
        </section>
      </div>
    </InnerPageLayout>
  );
}
