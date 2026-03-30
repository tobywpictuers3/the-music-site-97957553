import { getThemeAssets } from "./theme.assets";
import type { BubbleConfig, ThemeMode } from "./orbit.types";

type SpeechBubbleLayerProps = {
  bubble: BubbleConfig | null;
  themeMode: ThemeMode;
};

export default function SpeechBubbleLayer({
  bubble,
  themeMode,
}: SpeechBubbleLayerProps) {
  if (!bubble) return null;

  const assets = getThemeAssets(themeMode);

  return (
    <div
      className="absolute left-[calc(100%+18px)] bottom-[122px] z-50"
      style={{
        transform: `translate(${bubble.offsetX ?? 0}px, ${bubble.offsetY ?? 0}px)`,
      }}
    >
      <div
        className="relative overflow-visible rounded-[28px] border px-6 py-5 shadow-[0_22px_54px_rgba(0,0,0,0.24)] backdrop-blur-sm transition-all"
        style={{
          width: `min(${bubble.maxWidthPx ?? 560}px, 36vw)`,
          minWidth: "360px",
          borderColor:
            themeMode === "dark"
              ? "rgba(255,255,255,0.20)"
              : "rgba(120,30,30,0.18)",
          backgroundColor:
            themeMode === "dark"
              ? "rgba(92, 18, 32, 0.80)"
              : "rgba(158, 41, 55, 0.74)",
          transitionDuration: `${bubble.enterMs ?? 180}ms`,
        }}
      >
        <span
          className="absolute inset-0 rounded-[28px]"
          style={{
            backgroundImage: `url(${assets.bubbleStarsRed})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.42,
          }}
        />

        <div className="relative z-10 text-right">
          <div
            className="text-[1rem] leading-8"
            style={{
              color: "#ffffff",
              textShadow: "0 2px 14px rgba(0,0,0,0.24)",
            }}
          >
            {bubble.text}
          </div>
        </div>

        <span
          className="absolute bottom-7 -left-3 h-5 w-5 rotate-45 rounded-[4px]"
          style={{
            backgroundColor:
              themeMode === "dark"
                ? "rgba(92, 18, 32, 0.86)"
                : "rgba(158, 41, 55, 0.82)",
          }}
        />
      </div>
    </div>
  );
}
