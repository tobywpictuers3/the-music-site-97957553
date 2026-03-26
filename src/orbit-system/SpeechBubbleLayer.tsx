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
      className="absolute left-[calc(100%+14px)] bottom-[110px] z-50"
      style={{
        transform: `translate(${bubble.offsetX ?? 0}px, ${bubble.offsetY ?? 0}px)`,
      }}
    >
      <div
        className="relative overflow-hidden rounded-[28px] border px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-all"
        style={{
          maxWidth: `${bubble.maxWidthPx ?? 320}px`,
          borderColor:
            themeMode === "dark"
              ? "rgba(255,255,255,0.18)"
              : "rgba(120,30,30,0.18)",
          backgroundColor:
            themeMode === "dark"
              ? "rgba(92, 18, 32, 0.74)"
              : "rgba(158, 41, 55, 0.70)",
          transitionDuration: `${bubble.enterMs ?? 180}ms`,
        }}
      >
        {/* רקע כוכבים אדום 80% */}
        <span
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${assets.bubbleStarsRed})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.8,
          }}
        />

        <div
          className="relative z-10 text-[0.98rem] leading-7"
          style={{ color: "#ffffff" }}
        >
          {bubble.text}
        </div>

        <span
          className="absolute bottom-5 -left-2 h-4 w-4 rotate-45 rounded-[4px]"
          style={{
            backgroundColor:
              themeMode === "dark"
                ? "rgba(92, 18, 32, 0.80)"
                : "rgba(158, 41, 55, 0.78)",
          }}
        />
      </div>
    </div>
  );
}
