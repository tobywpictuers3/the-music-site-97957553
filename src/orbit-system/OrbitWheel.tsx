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
    <div className="relative mx-auto aspect-square w-full max-w-[760px]">
      <div
        className="absolute inset-[12%] rounded-full border"
        style={{
          borderColor:
            themeMode === "dark"
              ? "rgba(255,255,255,0.12)"
              : "rgba(120,30,30,0.12)",
          boxShadow:
            themeMode === "dark"
              ? "0 0 44px rgba(255,255,255,0.05)"
              : "0 0 34px rgba(120,30,30,0.06)",
          transition: "border-color 700ms ease, box-shadow 700ms ease",
        }}
      />
      <div
        className="absolute inset-[20%] rounded-full border"
        style={{
          borderStyle: "dashed",
          borderColor:
            themeMode === "dark"
              ? "rgba(255,255,255,0.08)"
              : "rgba(120,30,30,0.10)",
          transition: "border-color 700ms ease",
        }}
      />

      {items.map((item) => {
        const renderedAngle = getRenderedItemClockAngle(
          item.baseAngleDeg,
          rotationDeg
        );

        const position = getOrbitItemPosition(renderedAngle, 34.5);
        const isActive = item.id === activeItemId;

        return (
          <button
            key={item.id}
            type="button"
            className="absolute z-20 grid place-items-center overflow-hidden rounded-full border backdrop-blur-[3px]"
            style={{
              ...position,
              width: "clamp(142px, 15.5vw, 236px)",
              height: "clamp(142px, 15.5vw, 236px)",
              borderColor: isActive
                ? themeMode === "dark"
                  ? "rgba(255,235,205,0.74)"
                  : "rgba(170,90,30,0.34)"
                : themeMode === "dark"
                ? "rgba(255,255,255,0.24)"
                : "rgba(120,30,30,0.14)",
              backgroundColor: isActive
                ? themeMode === "dark"
                  ? "rgba(64, 14, 22, 0.52)"
                  : "rgba(183, 57, 70, 0.22)"
                : themeMode === "dark"
                ? "rgba(54, 12, 20, 0.32)"
                : "rgba(158, 41, 55, 0.14)",
              boxShadow: isActive
                ? "0 0 28px rgba(220,170,90,0.18)"
                : "0 12px 24px rgba(0,0,0,0.08)",
              transform: `${position.transform} scale(${isActive ? 1.04 : 1})`,
              transition:
                "transform 220ms ease, border-color 700ms ease, background-color 700ms ease, box-shadow 700ms ease",
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
                backgroundImage: `url(${assets.bubbleStarsRed})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: isActive ? 0.74 : 0.5,
                transition: "opacity 280ms ease",
              }}
            />

            <span
              className="absolute inset-0"
              style={{
                background: isActive
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
                    ? "radial-gradient(circle at top, rgba(255,255,255,0.04), rgba(0,0,0,0.12))"
                    : "radial-gradient(circle at top, rgba(255,255,255,0.24), rgba(255,255,255,0.06))",
                transition: "background 700ms ease",
              }}
            />

            <span
              className="relative z-10 text-[clamp(1.2rem,1.9vw,1.7rem)] font-semibold"
              style={{
                color: isActive
                  ? themeMode === "dark"
                    ? "#ffe0aa"
                    : "#9f6118"
                  : themeMode === "dark"
                  ? "#f3d08a"
                  : "#8f5d18",
                textShadow:
                  themeMode === "dark"
                    ? "0 2px 10px rgba(0,0,0,0.30)"
                    : "0 1px 6px rgba(255,255,255,0.16)",
                transition: "color 280ms ease, text-shadow 700ms ease",
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
