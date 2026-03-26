/**
 * מקור האמת של כל הדמויות.
 * כאן שומרים:
 * - default
 * - 6 זוויות
 * - stageSign
 *
 * הייבוא אוטומטי לפי מבנה התיקיות והקבצים שהוגדר.
 */

import type {
  PresenterConfig,
  PresenterId,
  PresenterLook,
} from "./orbit.types";

const presenterImageModules = import.meta.glob(
  "../assets/orbit-system/presenters/*/*.webp",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

const LOOK_FILE_BY_KEY: Record<PresenterLook, string> = {
  default: "default.webp",
  upperRight: "upper-right.webp",
  right: "right.webp",
  lowerRight: "lower-right.webp",
  lowerLeft: "lower-left.webp",
  left: "left.webp",
  upperLeft: "upper-left.webp",
  stageSign: "stage-sign.webp",
};

function getPresenterImage(folderName: string, look: PresenterLook): string {
  const path = `../assets/orbit-system/presenters/${folderName}/${LOOK_FILE_BY_KEY[look]}`;
  const found = presenterImageModules[path];

  if (!found) {
    throw new Error(
      `[presenters.registry] Missing image: ${path}. בדקי שהתיקייה ושם הקובץ תואמים בדיוק.`
    );
  }

  return found;
}

function createPresenter(
  id: PresenterId,
  label: string,
  folderName: string
): PresenterConfig {
  return {
    id,
    label,
    looks: {
      default: {
        src: getPresenterImage(folderName, "default"),
        alt: `${label} - ברירת מחדל`,
      },
      upperRight: {
        src: getPresenterImage(folderName, "upperRight"),
        alt: `${label} - ימין למעלה`,
      },
      right: {
        src: getPresenterImage(folderName, "right"),
        alt: `${label} - ימין`,
      },
      lowerRight: {
        src: getPresenterImage(folderName, "lowerRight"),
        alt: `${label} - ימין למטה`,
      },
      lowerLeft: {
        src: getPresenterImage(folderName, "lowerLeft"),
        alt: `${label} - שמאל למטה`,
      },
      left: {
        src: getPresenterImage(folderName, "left"),
        alt: `${label} - שמאל`,
      },
      upperLeft: {
        src: getPresenterImage(folderName, "upperLeft"),
        alt: `${label} - שמאל למעלה`,
      },
      stageSign: {
        src: getPresenterImage(folderName, "stageSign"),
        alt: `${label} - עם שלט`,
      },
    },
    sizing: {
      /**
       * גודל הדמות במרכז המעגל.
       */
      heroWidth: "clamp(180px, 24vw, 340px)",
      heroMaxWidth: "340px",

      /**
       * גודל המגיש הקבוע בפינה.
       */
      stickyWidth: "clamp(92px, 12vw, 180px)",
      stickyMaxWidth: "180px",

      /**
       * גודל הדמות על הבמה בדף הבית.
       */
      stageWidth: "clamp(140px, 16vw, 250px)",
      stageMaxWidth: "250px",
    },
  };
}

export const presentersRegistry: Record<PresenterId, PresenterConfig> = {
  avatar: createPresenter("avatar", "אווטר ראשי", "avatar"),
  piano: createPresenter("piano", "פסנתר", "piano"),
  saxophone: createPresenter("saxophone", "סקסופון", "saxophone"),
  drums: createPresenter("drums", "תופים", "drums"),
  violin: createPresenter("violin", "כינור", "violin"),
  electricGuitar: createPresenter(
    "electricGuitar",
    "גיטרה חשמלית",
    "electric-guitar"
  ),
  classicalGuitar: createPresenter(
    "classicalGuitar",
    "גיטרה קלאסית",
    "classical-guitar"
  ),
};
