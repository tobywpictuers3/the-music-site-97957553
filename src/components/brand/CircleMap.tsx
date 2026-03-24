import {
  CSSProperties,
  MouseEvent as ReactMouseEvent,
  useMemo,
} from "react";
import type { CircleMapNode, CircleMapProps } from "./circle-map.types";

function CircleNodeButton({
  node,
  isActive,
  onEnter,
  onClick,
}: {
  node: CircleMapNode;
  isActive: boolean;
  onEnter: (e: React.MouseEvent<HTMLButtonElement> | React.FocusEvent<HTMLButtonElement>) => void;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onFocus={onEnter}
      onClick={onClick}
      className={`group relative h-[var(--orbit-size)] w-[var(--orbit-size)] rounded-full border text-center transition-all duration-500 ${
        isActive
          ? "border-primary/40 bg-background/90 shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
          : "border-border/70 bg-background/80 hover:border-primary/30 hover:bg-background/90"
      }`}
      style={{
        transform: `scale(${isActive ? 1.035 : 1})`,
      }}
    >
      <span
        className={`pointer-events-none absolute left-1/2 top-[-14px] h-8 w-[70%] -translate-x-1/2 rounded-t-full border border-b-0 transition-colors duration-500 ${
          isActive ? "border-primary/45" : "border-border/70"
        }`}
        aria-hidden="true"
      />

      <span
        className={`pointer-events-none absolute right-[13%] top-[24%] h-9 w-3 rounded-full border transition-colors duration-500 ${
          isActive
            ? "border-primary/40 bg-primary/10"
            : "border-border/60 bg-background/40"
        }`}
        aria-hidden="true"
      />

      <span
        className={`pointer-events-none absolute left-[13%] top-[24%] h-9 w-3 rounded-full border transition-colors duration-500 ${
          isActive
            ? "border-primary/40 bg-primary/10"
            : "border-border/60 bg-background/40"
        }`}
        aria-hidden="true"
      />

      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <span
          className={`absolute inset-0 rounded-full transition-opacity duration-500 ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
          style={{
            background:
              "radial-gradient(circle at 50% 25%, rgba(255,255,255,0.05), rgba(0,0,0,0) 55%), radial-gradient(circle at 50% 72%, rgba(128,0,32,0.12), rgba(0,0,0,0) 68%)",
          }}
        />
      </span>

      {node.indexLabel && (
        <span className="absolute right-4 top-4 text-[11px] font-medium tracking-[0.28em] text-primary/85">
          {node.indexLabel}
        </span>
      )}

      <div className="relative flex h-full flex-col items-center justify-center px-5">
        <div className="text-[1.85rem] font-bold leading-tight text-foreground md:text-[2.1rem]">
          {node.title}
        </div>

        {node.note && (
          <div className="mt-2 max-w-[10ch] text-sm leading-6 text-muted-foreground md:text-[0.95rem]">
            {node.note}
          </div>
        )}

        <div
          className={`mt-4 inline-flex h-12 w-12 items-center justify-center rounded-full border text-lg font-bold transition-all duration-500 ${
            isActive
              ? "border-primary/45 bg-primary/15 text-primary shadow-[0_0_22px_rgba(128,0,32,0.25)]"
              : "border-border bg-background text-muted-foreground group-hover:border-primary/40 group-hover:bg-primary/14 group-hover:text-primary group-hover:shadow-[0_0_18px_rgba(128,0,32,0.18)]"
          }`}
          aria-hidden="true"
        >
          +
        </div>
      </div>
    </button>
  );
}

export default function CircleMap({
  nodes,
  center,
  activeId = null,
  onNodeEnter,
  onNodeLeave,
  onNodeClick,
  enableRotation = true,
  spinSeconds = 405,
  className = "",
}: CircleMapProps) {
  const visibleNodes = useMemo(() => nodes.slice(0, 5), [nodes]);

  const handleClick = (node: CircleMapNode) => {
    if (onNodeClick) {
      onNodeClick(node.id);
      return;
    }

    if (node.sectionId) {
      const el = document.getElementById(node.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const styleVars = {
    ["--orbit-radius" as string]: "220px",
    ["--orbit-size" as string]: "210px",
    ["--center-size" as string]: "330px",
  } as CSSProperties;

  return (
    <>
      <style>{`
        @keyframes circleMapSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes circleMapCounterSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        .circle-map-zone {
          position: relative;
          width: 100%;
          max-width: 780px;
          height: 730px;
        }

        .circle-map-spin {
          animation: circleMapSpin ${spinSeconds}s linear infinite;
          transform-origin: center center;
        }

        .circle-map-counter {
          animation: circleMapCounterSpin ${spinSeconds}s linear infinite;
          transform-origin: center center;
        }

        .circle-map-zone:hover .circle-map-spin,
        .circle-map-zone:hover .circle-map-counter,
        .circle-map-zone:focus-within .circle-map-spin,
        .circle-map-zone:focus-within .circle-map-counter {
          animation-play-state: paused;
        }

        @media (max-width: 1023px) {
          .circle-map-zone {
            max-width: 640px;
            height: 620px;
          }
        }

        @media (max-width: 767px) {
          .circle-map-zone {
            max-width: 420px;
            height: 500px;
            --orbit-radius: 148px !important;
            --orbit-size: 148px !important;
            --center-size: 220px !important;
          }
        }
      `}</style>

      <div
        className={`circle-map-zone mx-auto ${className}`}
        style={styleVars}
        onMouseLeave={onNodeLeave}
        dir="rtl"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(128,0,32,0.18),rgba(0,0,0,0)_68%)] md:h-[380px] md:w-[380px]" />
        </div>

        <div className={enableRotation ? "circle-map-spin absolute inset-0" : "absolute inset-0"}>
          {visibleNodes.map((node) => (
            <div
              key={node.id}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(-50%, -50%) rotate(${node.angle}deg) translateY(calc(var(--orbit-radius) * -1))`,
              }}
            >
              <div className={enableRotation ? "circle-map-counter" : ""}>
                <div style={{ transform: `rotate(${-node.angle}deg)` }}>
                  <CircleNodeButton
                    node={node}
                    isActive={activeId === node.id}
                    onEnter={() => onNodeEnter?.(node.id)}
                    onClick={() => handleClick(node)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-[var(--center-size)] w-[var(--center-size)] items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.72),rgba(0,0,0,0.08)_72%,transparent)]" />
            <div className="absolute bottom-6 h-20 w-44 rounded-full bg-primary/16 blur-3xl md:h-24 md:w-56" />
            <div className="relative z-10 flex h-full w-full items-center justify-center">
              {center}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
