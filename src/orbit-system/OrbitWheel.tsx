import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { getThemeAssets } from "./theme.assets";
import { getOrbitItemPosition, getRenderedItemClockAngle } from "./angle.utils";
import type {
  OrbitItemConfig,
  OrbitItemId,
  ThemeMode,
} from "./orbit.types";

type OrbitWheelProps = {
  items: OrbitItemConfig[];
  rotationDeg: number;
  activeItemId: OrbitItemId | null;
  themeMode: ThemeMode;
  onItemEnter: (itemId: OrbitItemId) => void;
  onItemLeave: () => void;
  onItemClick?: (item: OrbitItemConfig) => void;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function getSpoilerClampStyle(lines: number): CSSProperties {
  return {
    display: "-webkit-box",
    WebkitLineClamp: lines,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
}

type MeasuredItem = {
  item: OrbitItemConfig;
  hasRichContent: boolean;
  titleText: string;
  spoilerText: string;
  eyebrowText?: string;
  baseMinSizePx: number;
  baseMaxSizePx: number;
  hoverMinSizePx: number;
  hoverMaxSizePx: number;
  baseFluidVw: number;
  hoverFluidVw: number;
  baseRadiusPercent: number;
  hoverRadiusPercent: number;
  spoilerLines: number;
};

function measureOrbitItem(item: OrbitItemConfig): MeasuredItem {
  const titleText = (item.title ?? item.label).trim();
  const spoilerText = (item.spoiler ?? "").trim();
  const eyebrowText = item.eyebrow?.trim();
  const hasRichContent = Boolean(item.title || item.spoiler || item.eyebrow);

  if (!hasRichContent) {
    return {
      item,
      hasRichContent: false,
      titleText,
      spoilerText,
      eyebrowText,
      baseMinSizePx: 156,
      baseMaxSizePx: 232,
      hoverMinSizePx: 176,
      hoverMaxSizePx: 252,
      baseFluidVw: 15.6,
      hoverFluidVw: 16.8,
      baseRadiusPercent: clamp(
        35 + (item.radiusBoostPercent ?? 0),
        35,
        45
      ),
      hoverRadiusPercent: clamp(
        36 + (item.radiusBoostPercent ?? 0),
        36,
        46
      ),
      spoilerLines: 0,
    };
  }

  const titleLength = titleText.length;
  const spoilerLength = spoilerText.length;
  const eyebrowLength = eyebrowText?.length ?? 0;

  const compactScore = titleLength * 1.02 + eyebrowLength * 0.15;
  const hoverScore =
    titleLength * 1.04 +
    Math.min(spoilerLength, 220) * 0.48 +
    eyebrowLength * 0.22;

  const baseRequestedMin = 162;
  const baseRequestedMax = 240;
  const hoverRequestedMin = item.minBubbleSizePx ?? 252;
  const hoverRequestedMax = item.maxBubbleSizePx ?? 388;

  const baseMaxSizePx = clamp(
    178 + compactScore * 0.24,
    baseRequestedMin + 8,
    baseRequestedMax
  );
  const baseMinSizePx = clamp(
    baseMaxSizePx * 0.85,
    baseRequestedMin,
    baseMaxSizePx - 10
  );
  const baseFluidVw = clamp(baseMaxSizePx / 14.2, 15.8, 18.6);

  const hoverMaxSizePx = clamp(
    262 + hoverScore * 0.32,
    hoverRequestedMin + 12,
    hoverRequestedMax
  );
  const hoverMinSizePx = clamp(
    hoverMaxSizePx * 0.87,
    hoverRequestedMin,
    hoverMaxSizePx - 14
  );
  const hoverFluidVw = clamp(hoverMaxSizePx / 11.8, 20.2, 26.2);

  const baseRadiusPercent = clamp(
    35.4 + (item.radiusBoostPercent ?? 0),
    35.4,
    45.4
  );

  const hoverRadiusBoost =
    Math.max(hoverMaxSizePx - 270, 0) / 26 +
    Math.max(spoilerLength - 80, 0) / 120;

  const hoverRadiusPercent = clamp(
    36.2 + hoverRadiusBoost + (item.radiusBoostPercent ?? 0),
    36.2,
    47.2
  );

  return {
    item,
    hasRichContent: true,
    titleText,
    spoilerText,
    eyebrowText,
    baseMinSizePx,
    baseMaxSizePx,
    hoverMinSizePx,
    hoverMaxSizePx,
    baseFluidVw,
    hoverFluidVw,
    baseRadiusPercent,
    hoverRadiusPercent,
    spoilerLines: item.maxSpoilerLines ?? 4,
  };
}

export default function OrbitWheel({
  items,
  rotationDeg,
  activeItemId: _activeItemId,
  themeMode,
  onItemEnter,
  onItemLeave,
  onItemClick,
}: OrbitWheelProps) {
  const assets = getThemeAssets(themeMode);
  const measuredItems = useMemo(() => items.map(measureOrbitItem), [items]);

  const [hoveredItemId, setHoveredItemId] = useState<OrbitItemId | null>(null);

  useEffect(() => {
    const clearHover = () => {
      setHoveredItemId(null);
      onItemLeave();
    };

    window.addEventListener("scroll", clearHover, { passive: true });
    window.addEventListener("resize", clearHover);

    return () => {
      window.removeEventListener("scroll", clearHover);
      window.removeEventListener("resize", clearHover);
    };
  }, [onItemLeave]);

  const maxRadiusPercent = measuredItems.reduce((maxValue, current) => {
    const candidate =
      current.item.id === hoveredItemId
        ? current.hoverRadiusPercent
        : current.baseRadiusPercent;

    return Math.max(maxValue, candidate);
  }, 35.6);

  const outerRingInsetPercent = clamp(
    50 - (maxRadiusPercent + 4.1),
    5.2,
    13.2
  );
  const innerRingInsetPercent = clamp(
    50 - (maxRadiusPercent - 4.8),
    13.2,
    22.2
  );

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[920px]">
      <div
        className="absolute rounded-full border"
        style={{
          inset: `${outerRingInsetPercent}%`,
          borderColor:
            themeMode === "dark"
              ? "rgba(255,255,255,0.12)"
              : "rgba(120,30,30,0.12)",
          boxShadow:
            themeMode === "dark"
              ? "0 0 44px rgba(255,255,255,0.05)"
              : "0 0 34px rgba(120,30,30,0.06)",
          transition:
            "inset 260ms ease, border-color 700ms ease, box-shadow 700ms ease",
        }}
      />

      <div
        className="absolute rounded-full border"
        style={{
          inset: `${innerRingInsetPercent}%`,
          borderStyle: "dashed",
          borderColor:
            themeMode === "dark"
              ? "rgba(255,255,255,0.08)"
              : "rgba(120,30,30,0.10)",
          transition: "inset 260ms ease, border-color 700ms ease",
        }}
      />

      {measuredItems.map((measured) => {
        const { item } = measured;
        const isHovered = item.id === hoveredItemId;

        const renderedAngle = getRenderedItemClockAngle(
          item.baseAngleDeg,
          rotationDeg
        );

        const radiusPercent = isHovered
          ? measured.hoverRadiusPercent
          : measured.baseRadiusPercent;

        const position = getOrbitItemPosition(renderedAngle, radiusPercent);

        const minSizePx = isHovered
          ? measured.hoverMinSizePx
          : measured.baseMinSizePx;

        const maxSizePx = isHovered
          ? measured.hoverMaxSizePx
          : measured.baseMaxSizePx;

        const fluidVw = isHovered
          ? measured.hoverFluidVw
          : measured.baseFluidVw;

        const ariaText = measured.titleText || item.label;

        return (
          <button
            key={item.id}
            type="button"
            className="absolute z-20 overflow-hidden rounded-full border backdrop-blur-[4px]"
            style={{
              ...position,
              width: `clamp(${Math.round(minSizePx)}px, ${fluidVw}vw, ${Math.round(
                maxSizePx
              )}px)`,
              height: `clamp(${Math.round(minSizePx)}px, ${fluidVw}vw, ${Math.round(
                maxSizePx
              )}px)`,
              borderColor: isHovered
                ? themeMode === "dark"
                  ? "rgba(255,235,205,0.74)"
                  : "rgba(170,90,30,0.34)"
                : themeMode === "dark"
                ? "rgba(255,255,255,0.22)"
                : "rgba(120,30,30,0.14)",
              backgroundColor: isHovered
                ? themeMode === "dark"
                  ? "rgba(64, 14, 22, 0.56)"
                  : "rgba(183, 57, 70, 0.24)"
                : themeMode === "dark"
                ? "rgba(54, 12, 20, 0.30)"
                : "rgba(158, 41, 55, 0.14)",
              boxShadow: isHovered
                ? "0 0 28px rgba(220,170,90,0.18), inset 0 1px 0 rgba(255,255,255,0.13), inset 0 -1px 0 rgba(0,0,0,0.18)"
                : "0 14px 32px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.14)",
              transform: `${position.transform} scale(${isHovered ? 1.05 : 1})`,
              transition:
                "transform 220ms ease, width 260ms ease, height 260ms ease, border-color 700ms ease, background-color 700ms ease, box-shadow 700ms ease",
            }}
            onMouseEnter={() => {
              setHoveredItemId(item.id);
              onItemEnter(item.id);
            }}
            onMouseLeave={() => {
              setHoveredItemId(null);
              onItemLeave();
            }}
            onFocus={() => {
              onItemEnter(item.id);
            }}
            onBlur={() => {
              onItemLeave();
            }}
            onClick={() => {
              setHoveredItemId(null);
              onItemClick?.(item);
            }}
            aria-label={ariaText}
          >
            <span
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${assets.bubbleStarsRed})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: isHovered ? 0.74 : 0.48,
                transition: "opacity 280ms ease",
              }}
            />

            <span
              className="absolute inset-0"
              style={{
                background: isHovered
                  ? "linear-gradient(to bottom, rgba(255,224,170,0.22), rgba(146,34,46,0.30))"
                  : "linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(120,18,30,0.10))",
                transition: "background 280ms ease",
              }}
            />

            <span
              className="absolute inset-0"
              style={{
                background:
                  themeMode === "dark"
                    ? "radial-gradient(circle at 38% 22%, rgba(255,255,255,0.11), rgba(0,0,0,0) 48%), radial-gradient(circle at 62% 82%, rgba(0,0,0,0.22), rgba(0,0,0,0) 52%)"
                    : "radial-gradient(circle at 38% 22%, rgba(255,255,255,0.30), rgba(255,255,255,0) 48%), radial-gradient(circle at 62% 82%, rgba(0,0,0,0.08), rgba(0,0,0,0) 52%)",
                transition: "background 700ms ease",
              }}
            />

            {measured.hasRichContent ? (
              <span
                className={`relative z-10 flex h-full w-full flex-col items-center justify-center text-center ${
                  isHovered ? "px-7 py-7" : "px-4 py-4"
                }`}
                style={{
                  gap: isHovered ? "0.9rem" : "0.28rem",
                }}
              >
                {isHovered && measured.eyebrowText ? (
                  <span
                    className="inline-flex rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.18em]"
                    style={{
                      color: themeMode === "dark" ? "#ffe8be" : "#8f5d18",
                      borderColor:
                        themeMode === "dark"
                          ? "rgba(255,240,210,0.22)"
                          : "rgba(143,93,24,0.18)",
                      backgroundColor:
                        themeMode === "dark"
                          ? "rgba(255,255,255,0.04)"
                          : "rgba(255,255,255,0.34)",
                    }}
                  >
                    {measured.eyebrowText}
                  </span>
                ) : null}

                <span
                  className={
                    isHovered
                      ? "text-[clamp(0.98rem,1.06vw,1.18rem)] font-bold leading-[1.3]"
                      : "text-[clamp(1rem,1.22vw,1.28rem)] font-bold leading-[1.2]"
                  }
                  style={{
                    color: isHovered
                      ? themeMode === "dark"
                        ? "#ffe0aa"
                        : "#9f6118"
                      : themeMode === "dark"
                      ? "#f3d08a"
                      : "#8f5d18",
                    textShadow:
                      themeMode === "dark"
                        ? "0 1px 1px rgba(0,0,0,0.55), 0 2px 10px rgba(0,0,0,0.30)"
                        : "0 1px 0 rgba(255,255,255,0.55), 0 1px 6px rgba(255,255,255,0.16)",
                    transition: "color 280ms ease, text-shadow 700ms ease",
                    maxWidth: isHovered ? "80%" : "76%",
                  }}
                >
                  {measured.titleText}
                </span>

                {isHovered && measured.spoilerText ? (
                  <span
                    className="text-[clamp(0.74rem,0.82vw,0.86rem)] leading-[1.72]"
                    style={{
                      ...getSpoilerClampStyle(measured.spoilerLines),
                      color:
                        themeMode === "dark"
                          ? "rgba(255,255,255,0.9)"
                          : "rgba(34,24,18,0.82)",
                      maxWidth: "80%",
                    }}
                  >
                    {measured.spoilerText}
                  </span>
                ) : null}
              </span>
            ) : (
              <span
                className="relative z-10 grid h-full w-full place-items-center text-[clamp(1.2rem,1.9vw,1.7rem)] font-semibold"
                style={{
                  color: isHovered
                    ? themeMode === "dark"
                      ? "#ffe0aa"
                      : "#9f6118"
                    : themeMode === "dark"
                    ? "#f3d08a"
                    : "#8f5d18",
                  textShadow:
                    themeMode === "dark"
                      ? "0 1px 1px rgba(0,0,0,0.55), 0 2px 10px rgba(0,0,0,0.30)"
                      : "0 1px 0 rgba(255,255,255,0.55), 0 1px 6px rgba(255,255,255,0.16)",
                  transition: "color 280ms ease, text-shadow 700ms ease",
                }}
              >
                {item.label}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
