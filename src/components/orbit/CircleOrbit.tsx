import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import OrbitTopicButton from "./OrbitTopicButton";
import OrbitPresenter from "./OrbitPresenter";
import { ORBIT_SETTINGS } from "./orbit.constants";
import { getAvatarByAngle, normalizeAngle } from "./orbit.utils";
import type { AvatarKey, OrbitItem, PresenterAssets } from "./orbit.types";

type CircleOrbitProps = {
  items: OrbitItem[];
  presenterAssets: PresenterAssets;
  onItemClick?: (item: OrbitItem) => void;
  selectedId?: string | null;
  className?: string;
  centerTextureSrc?: string;
  presenterAlt?: string;
  center?: ReactNode;
};

export default function CircleOrbit({
  items,
  presenterAssets,
  onItemClick,
  selectedId = null,
  className = "",
  centerTextureSrc,
  presenterAlt = "המגיש",
}: CircleOrbitProps) {
  const orbitZoneRef = useRef<HTMLDivElement | null>(null);

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeAvatarKey, setActiveAvatarKey] = useState<AvatarKey>("front");

  const assetsToPreload = useMemo(() => Object.values(presenterAssets), [presenterAssets]);

  useEffect(() => {
    assetsToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [assetsToPreload]);

  function setFrontDefault() {
    setHoveredId(null);
    setActiveAvatarKey("front");
  }

  function updateAvatarFromPlus(buttonEl: HTMLElement) {
    const zoneEl = orbitZoneRef.current;
    const plusEl = buttonEl.querySelector<HTMLElement>('[data-plus-anchor="true"]');

    if (!zoneEl || !plusEl) {
      setActiveAvatarKey("front");
      return;
    }

    const zoneRect = zoneEl.getBoundingClientRect();
    const plusRect = plusEl.getBoundingClientRect();

    const centerX = zoneRect.left + zoneRect.width / 2;
    const centerY = zoneRect.top + zoneRect.height / 2;

    const plusX = plusRect.left + plusRect.width / 2;
    const plusY = plusRect.top + plusRect.height / 2;

    const dx = plusX - centerX;
    const dy = plusY - centerY;

    const angle = normalizeAngle((Math.atan2(dy, dx) * 180) / Math.PI);
    setActiveAvatarKey(getAvatarByAngle(angle));
  }

  function handleOrbitEnter(
    e: ReactMouseEvent<HTMLButtonElement>,
    itemId: string
  ) {
    setHoveredId(itemId);

    const buttonEl = e.currentTarget;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        updateAvatarFromPlus(buttonEl);
      });
    });
  }

  return (
    <>
      <style>{`
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbitCounterSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        @keyframes orbitAvatarFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .orbit-zone {
          position: relative;
          width: 100%;
          max-width: ${ORBIT_SETTINGS.zoneMaxWidth}px;
          height: ${ORBIT_SETTINGS.zoneHeight.base}px;
          --orbit-radius: ${ORBIT_SETTINGS.radius.base}px;
          --orbit-size: ${ORBIT_SETTINGS.itemSize.base}px;
        }

        .orbit-avatar-wrap {
          width: ${ORBIT_SETTINGS.avatarSize.base}px;
          height: ${ORBIT_SETTINGS.avatarSize.base}px;
        }

        @media (min-width: 768px) {
          .orbit-zone {
            height: ${ORBIT_SETTINGS.zoneHeight.md}px;
            --orbit-radius: ${ORBIT_SETTINGS.radius.md}px;
            --orbit-size: ${ORBIT_SETTINGS.itemSize.md}px;
          }

          .orbit-avatar-wrap {
            width: ${ORBIT_SETTINGS.avatarSize.md}px;
            height: ${ORBIT_SETTINGS.avatarSize.md}px;
          }
        }

        @media (min-width: 1024px) {
          .orbit-zone {
            height: ${ORBIT_SETTINGS.zoneHeight.lg}px;
            --orbit-radius: ${ORBIT_SETTINGS.radius.lg}px;
            --orbit-size: ${ORBIT_SETTINGS.itemSize.lg}px;
          }

          .orbit-avatar-wrap {
            width: ${ORBIT_SETTINGS.avatarSize.lg}px;
            height: ${ORBIT_SETTINGS.avatarSize.lg}px;
          }
        }

        .orbit-spin {
          animation: orbitSpin ${ORBIT_SETTINGS.spinSeconds}s linear infinite;
          transform-origin: center center;
        }

        .orbit-counter-spin {
          animation: orbitCounterSpin ${ORBIT_SETTINGS.spinSeconds}s linear infinite;
          transform-origin: center center;
        }

        .orbit-zone:hover .orbit-spin,
        .orbit-zone:hover .orbit-counter-spin,
        .orbit-zone:focus-within .orbit-spin,
        .orbit-zone:focus-within .orbit-counter-spin {
          animation-play-state: paused;
        }

        .orbit-avatar-float {
          animation: orbitAvatarFloat ${ORBIT_SETTINGS.avatarFloatSeconds}s ease-in-out infinite;
        }
      `}</style>

      <div
        ref={orbitZoneRef}
        className={`orbit-zone mx-auto ${className}`}
        onMouseLeave={setFrontDefault}
        onMouseMove={(e) => {
          const target = e.target as HTMLElement;
          const insideButton = target.closest('[data-orbit-button="true"]');

          if (!insideButton && activeAvatarKey !== "front") {
            setFrontDefault();
          }
        }}
      >
       <div className="pointer-events-none absolute inset-0">
  {centerTextureSrc && (
    <div
      className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px]"
      style={{
        backgroundImage: `url(${centerTextureSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.055,
        filter: "blur(1.5px) saturate(0.72)",
        maskImage:
          "radial-gradient(circle at center, rgba(0,0,0,0.92) 18%, rgba(0,0,0,0.78) 50%, rgba(0,0,0,0) 76%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, rgba(0,0,0,0.92) 18%, rgba(0,0,0,0.78) 50%, rgba(0,0,0,0) 76%)",
      }}
    />
  )}

  {/* glow בהיר-זהוב עדין */}
  <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.10),rgba(0,0,0,0)_70%)] md:h-[300px] md:w-[300px] lg:h-[360px] lg:w-[360px]" />

  {/* רק רמז בורדו קטן, לא כתם גדול */}
  <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(128,0,32,0.07),rgba(0,0,0,0)_72%)] md:h-[150px] md:w-[150px] lg:h-[180px] lg:w-[180px]" />
</div>
        
        <div className="orbit-spin absolute inset-0">
          {items.map((item) => {
            const isActive = hoveredId === item.id || selectedId === item.id;

            return (
              <div
                key={item.id}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateY(calc(var(--orbit-radius) * -1))`,
                }}
              >
                <div className="orbit-counter-spin">
                  <div style={{ transform: `rotate(${-item.angle}deg)` }}>
                    <OrbitTopicButton
                      item={item}
                      isActive={isActive}
                      onEnter={(e) => handleOrbitEnter(e as any, item.id)}
                      onClick={() => onItemClick?.(item)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <OrbitPresenter
          presenterAssets={presenterAssets}
          activeAvatarKey={activeAvatarKey}
          alt={presenterAlt}
        />
      </div>
    </>
  );
}
