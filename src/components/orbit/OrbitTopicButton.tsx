import type { OrbitItem } from "./orbit.types";
import { ORBIT_SETTINGS } from "./orbit.constants";

type OrbitTopicButtonProps = {
  item: OrbitItem;
  isActive: boolean;
  onEnter: (e: React.MouseEvent<HTMLButtonElement> | React.FocusEvent<HTMLButtonElement>) => void;
  onClick: () => void;
};

export default function OrbitTopicButton({
  item,
  isActive,
  onEnter,
  onClick,
}: OrbitTopicButtonProps) {
  return (
    <button
      type="button"
      data-orbit-button="true"
      onMouseEnter={onEnter}
      onFocus={onEnter}
      onClick={onClick}
      className={`group relative h-[var(--orbit-size)] w-[var(--orbit-size)] rounded-full border text-center transition-all duration-500 ${
        isActive
          ? "border-primary/35 bg-background/90 shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
          : "border-border/70 bg-background/80 hover:border-primary/30 hover:bg-background/90"
      }`}
      style={{
        transform: `scale(${isActive ? ORBIT_SETTINGS.activeScale : 1})`,
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
          isActive ? "border-primary/40 bg-primary/10" : "border-border/60 bg-background/40"
        }`}
        aria-hidden="true"
      />

      <span
        className={`pointer-events-none absolute left-[13%] top-[24%] h-9 w-3 rounded-full border transition-colors duration-500 ${
          isActive ? "border-primary/40 bg-primary/10" : "border-border/60 bg-background/40"
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
              "radial-gradient(circle at 50% 25%, rgba(255,255,255,0.06), rgba(0,0,0,0) 55%), radial-gradient(circle at 50% 72%, rgba(128,0,32,0.15), rgba(0,0,0,0) 68%)",
          }}
        />
      </span>

      <span className="absolute right-4 top-4 text-[11px] font-medium tracking-[0.28em] text-primary/85">
        {item.indexLabel}
      </span>

      <div className="relative flex h-full flex-col items-center justify-center px-5">
        <div className="text-[1.95rem] font-bold leading-tight text-foreground md:text-[2.2rem]">
          {item.orbitTitle}
        </div>

        <div className="mt-2 max-w-[10ch] text-sm leading-6 text-muted-foreground md:text-[0.95rem]">
          {item.orbitNote}
        </div>

        <div
          data-plus-anchor="true"
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
