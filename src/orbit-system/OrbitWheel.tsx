import { getOrbitItemPosition, getRenderedItemClockAngle } from "./angle.utils";
import { getThemeAssets } from "./theme.assets";
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

export default function OrbitWheel({
  items,
  rotationDeg,
  activeItemId,
  themeMode,
  onItemEnter,
  onItemLeave,
  onItemClick,
}: OrbitWheelProps) {
  const assets = getThemeAssets(themeMode);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[700px]">
      <div
        className="absolute inset-[12%] rounded-full border"
        style={{
          borderColor:
            themeMode === "dark"
              ? "rgba(255,255,255,0.22)"
              : "rgba(54,36,24,0.18)",
          boxShadow:
            themeMode === "dark"
              ? "0 0 48px rgba(255,255,255,0.06)"
              : "0 0 42px rgba(0,0,0,0.04)",
        }}
      />
      <div
        className="absolute inset-[23%] rounded-full border"
        style={{
          borderStyle: "dashed",
          borderColor:
            themeMode === "dark"
              ? "rgba(255,255,255,0.12)"
              : "rgba(54,36,24,0.12)",
        }}
      />
      <div
        className="absolute inset-[31%] rounded-full"
        style={{
          background:
            themeMode === "dark"
              ? "radial-gradient(circle, rgba(255,255,255,0.08), rgba(255,255,255,0.02) 46%, transparent 72%)"
              : "radial-gradient(circle, rgba(255,255,255,0.56), rgba(255,255,255,0.20) 46%, transparent 72%)",
        }}
      />

      {items.map((item) => {
        const renderedAngle = getRenderedItemClockAngle(
          item.baseAngleDeg,
          rotationDeg
        );

        const position = getOrbitItemPosition(renderedAngle, 39.5);
        const isActive = item.id === activeItemId;

        return (
          <button
            key={item.id}
            type="button"
            className={[
              "absolute z-20 grid place-items-center rounded-full border overflow-hidden backdrop-blur-[3px] transition-all duration-200",
              "h-[clamp(112px,14vw,156px)] w-[clamp(112px,14vw,156px)]",
              isActive
                ? "scale-[1.06]"
                : "scale-100 hover:scale-[1.03]",
            ].join(" ")}
            style={{
              ...position,
              borderColor: isActive
                ? themeMode === "dark"
                  ? "rgba(255,255,255,0.74)"
                  : "rgba(54,36,24,0.32)"
                : themeMode === "dark"
                ? "rgba(255,255,255,0.32)"
                : "rgba(54,36,24,0.16)",
              backgroundColor: isActive
                ? themeMode === "dark"
                  ? "rgba(9, 9, 14, 0.50)"
                  : "rgba(255,255,255,0.50)"
                : themeMode === "dark"
                ? "rgba(9, 9, 14, 0.34)"
                : "rgba(255,255,255,0.34)",
              boxShadow: isActive
                ? "0 0 28px rgba(255,255,255,0.16)"
                : "0 10px 24px rgba(0,0,0,0.10)",
            }}
            onMouseEnter={() => onItemEnter(item.id)}
            onMouseLeave={onItemLeave}
            onFocus={() => onItemEnter(item.id)}
            onBlur={onItemLeave}
            onClick={() => onItemClick?.(item)}
            aria-label={`עיגול ${item.label}`}
          >
            <span
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${assets.orbitStars})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: themeMode === "dark" ? 0.42 : 0.24,
              }}
            />

            <span
              className="absolute inset-0"
              style={{
                background:
                  themeMode === "dark"
                    ? "linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(0,0,0,0.16))"
                    : "linear-gradient(to bottom, rgba(255,255,255,0.26), rgba(255,255,255,0.10))",
              }}
            />

            <span
              className="relative z-10 text-[clamp(1.25rem,2vw,1.7rem)] font-semibold"
              style={{
                color: themeMode === "dark" ? "#ffffff" : "#1a1a1a",
                textShadow:
                  themeMode === "dark"
                    ? "0 2px 10px rgba(0,0,0,0.30)"
                    : "0 1px 6px rgba(255,255,255,0.16)",
              }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
