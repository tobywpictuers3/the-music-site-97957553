import type { PresenterConfig, PresenterLook } from "./orbit.types";

type HeroCenterPresenterProps = {
  presenter: PresenterConfig;
  activeLook: PresenterLook;
};

const HERO_LOOKS: PresenterLook[] = [
  "default",
  "upperRight",
  "right",
  "lowerRight",
  "lowerLeft",
  "left",
  "upperLeft",
];

export default function HeroCenterPresenter({
  presenter,
  activeLook,
}: HeroCenterPresenterProps) {
  const visibleLook = activeLook === "stageSign" ? "default" : activeLook;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
      aria-hidden="true"
    >
      <div
        className="relative"
        style={{
          width: presenter.sizing.heroWidth,
          maxWidth: presenter.sizing.heroMaxWidth,
          aspectRatio: "1 / 1.25",
        }}
      >
        {HERO_LOOKS.map((look) => (
          <img
            key={look}
            src={presenter.looks[look].src}
            alt={presenter.looks[look].alt}
            loading="eager"
            decoding="sync"
            className="absolute inset-0 h-full w-full object-contain transition-opacity duration-150 ease-out"
            style={{
              opacity: visibleLook === look ? 1 : 0,
              willChange: "opacity",
            }}
          />
        ))}
      </div>
    </div>
  );
}
