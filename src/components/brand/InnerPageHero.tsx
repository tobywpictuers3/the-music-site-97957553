import { ReactNode } from "react";
import darkStage from "@/assets/homepage/stage/darkstage.png";
import lightStage from "@/assets/homepage/stage/lightstage.png";

type InnerPageHeroProps = {
  eyebrow?: string;
  title: string | string[];
  intro?: string[];
  presenter?: ReactNode;
  circle: ReactNode;
  reverse?: boolean;
  className?: string;
};

export default function InnerPageHero({
  eyebrow,
  title,
  intro = [],
  presenter,
  circle,
  reverse = false,
  className = "",
}: InnerPageHeroProps) {
  const titleLines = Array.isArray(title) ? title : [title];

  return (
    <section
      className={`relative overflow-hidden pt-4 md:pt-6 lg:pt-8 pb-20 md:pb-28 lg:pb-36 ${className}`}
      dir="rtl"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <img
          src={lightStage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center dark:hidden"
        />

        <img
          src={darkStage}
          alt=""
          className="absolute inset-0 hidden h-full w-full object-cover object-center dark:block"
        />

        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background/35 to-transparent dark:from-background/20" />

        <div className="absolute inset-0 dark:hidden">
          <div className="absolute inset-0 bg-white/8" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.02) 42%, rgba(255,255,255,0) 72%, hsl(var(--background)) 100%)",
            }}
          />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background/35 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background/35 to-transparent" />
          <div className="absolute inset-0 shadow-[inset_0_0_90px_rgba(0,0,0,0.06)]" />
        </div>

        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 bg-black/14" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.05) 46%, rgba(0,0,0,0) 72%, hsl(var(--background)) 100%)",
            }}
          />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background/28 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background/28 to-transparent" />
          <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.22)]" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`min-h-[760px] md:min-h-[860px] lg:min-h-[940px] grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.08fr] lg:items-center ${
            reverse
              ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
              : ""
          }`}
        >
          <div className="relative z-10">
            <div className="max-w-2xl space-y-5">
              {eyebrow && (
                <div className="text-xs font-medium tracking-[0.34em] text-primary/85">
                  {eyebrow}
                </div>
              )}

              <div className="space-y-4">
                <h1 className="bg-gradient-to-b from-foreground via-foreground to-primary/85 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl">
                  {titleLines.map((line, index) => (
                    <span key={`${line}-${index}`}>
                      {line}
                      {index < titleLines.length - 1 && <br />}
                    </span>
                  ))}
                </h1>

                {intro.length > 0 && (
                  <div className="space-y-3 text-lg leading-loose text-foreground/92 md:text-xl">
                    {intro.map((line, index) => (
                      <p key={`${line}-${index}`}>{line}</p>
                    ))}
                  </div>
                )}
              </div>

              {presenter && <div className="pt-2">{presenter}</div>}
            </div>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-center">
            {circle}
          </div>
        </div>
      </div>
    </section>
  );
}
