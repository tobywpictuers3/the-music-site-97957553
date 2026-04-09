import SpeechBubbleLayer from "./SpeechBubbleLayer";
import type {
  BubbleConfig,
  PresenterConfig,
  ThemeMode,
} from "./orbit.types";

type StickyGuideProps = {
  presenter: PresenterConfig;
  themeMode: ThemeMode;
  visible: boolean;
  activeBubble: BubbleConfig | null;
  bannerHeightPx: number;
  bannerBottomOffsetPx: number;
  dockOffsetPx?: number;
};

export default function StickyGuide({
  presenter,
  themeMode,
  visible,
  activeBubble,
  bannerHeightPx,
  bannerBottomOffsetPx,
  dockOffsetPx = 0,
}: StickyGuideProps) {
  return (
    <div
      className="pointer-events-none fixed left-[clamp(8px,1.4vw,22px)] z-[70] hidden xl:block"
      style={{
        bottom: `${bannerHeightPx + bannerBottomOffsetPx + 8 + dockOffsetPx}px`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(-140px)",
        transition:
          "bottom 120ms linear, opacity 380ms ease, transform 520ms cubic-bezier(0.22,1,0.36,1)",
      }}
      aria-hidden={!visible}
    >
      <div className="relative">
        <img
          src={presenter.looks.default.src}
          alt={presenter.looks.default.alt}
          className="pointer-events-none h-auto object-contain"
          style={{
            width: "clamp(82px, 7.8vw, 116px)",
            maxWidth: "116px",
            filter: "drop-shadow(0 10px 22px rgba(0,0,0,0.24))",
          }}
        />

        <div className="pointer-events-auto">
          <SpeechBubbleLayer bubble={activeBubble} themeMode={themeMode} />
        </div>
      </div>
    </div>
  );
}
