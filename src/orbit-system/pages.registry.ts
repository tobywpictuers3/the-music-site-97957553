/**
 * מקור האמת של כל דפי הדמו.
 * כאן מוגדרים:
 * - טקסטי הירו
 * - 5 העיגולים
 * - מהירות הסיבוב
 * - הבועות של המגיש הקבוע
 * - הבאנר הנוסע
 */

import type { OrbitItemConfig, PageConfig, PageId } from "./orbit.types";

function createGenericOrbitItems(): OrbitItemConfig[] {
  return [
    { id: "1", label: "1", baseAngleDeg: 0, targetSectionId: "section-1" },
    { id: "2", label: "2", baseAngleDeg: 72, targetSectionId: "section-2" },
    { id: "3", label: "3", baseAngleDeg: 144, targetSectionId: "section-3" },
    { id: "4", label: "4", baseAngleDeg: 216, targetSectionId: "section-4" },
    { id: "5", label: "5", baseAngleDeg: 288, targetSectionId: "section-5" },
  ];
}

function createBasePage(
  pageId: PageId,
  route: string,
  presenterId: PageConfig["presenterId"]
): PageConfig {
  return {
    pageId,
    route,
    presenterId,
    hero: {
      titleLines: ["כותרת ראשית לדף", "עוד שורת כותרת"],
      introLines: [
        "זהו טקסט דמה נעים לקריאה בתוך אזור שני השליש.",
        "אחר כך תוכלי להחליף אותו לתוכן המדויק של הדף.",
      ],
      headerOffsetPx: 96,
    },
    orbit: {
      items: createGenericOrbitItems(),
      rotationSpeedDegPerSec: 1.15,
      defaultLook: "default",
    },
    stickyGuide: {
      idleLook: "default",
      bubbles: [
        {
          id: "bubble-1",
          text: "זו בועת דמה ראשונה. כאן יופיע הטקסט הקבוע שמלווה את תחילת הגלילה.",
          showFromAfterHeroPx: 30,
          hideAfterHeroPx: 620,
          maxWidthPx: 520,
          offsetX: 20,
          offsetY: -2,
          enterMs: 220,
          exitMs: 180,
        },
        {
          id: "bubble-2",
          text: "זו בועת דמה שנייה. אפשר להחליף לכל דף נוסח אחר, בלי לשנות את המבנה.",
          showFromAfterHeroPx: 760,
          hideAfterHeroPx: 1500,
          maxWidthPx: 540,
          offsetX: 26,
          offsetY: 6,
          enterMs: 220,
          exitMs: 180,
        },
      ],
    },
    tickerBanner: {
      enabled: true,
      items: [
        "טקסט נע לדוגמה",
        "כאן יוגדר תוכן שונה לכל דף",
        "הבאנר מופיע כבר בתחילת הגלילה",
      ],
      heightPx: 94,
      bottomOffsetPx: 32,
      opacity: 0.92,
      loopDurationSec: 34,
    },
  };
}

const basePages: Record<PageId, PageConfig> = {
  home: createBasePage("home", "/", "avatar"),
  contact: createBasePage("contact", "/contact", "avatar"),
  students: createBasePage("students", "/students", "piano"),
  blogs: createBasePage("blogs", "/blogs", "saxophone"),
  orchestras: createBasePage("orchestras", "/orchestras", "drums"),
  performances: createBasePage("performances", "/performances", "violin"),
  about: createBasePage("about", "/about", "electricGuitar"),
  sheetMusic: createBasePage("sheetMusic", "/sheet-music", "classicalGuitar"),
};

basePages.about = {
  ...basePages.about,
  hero: {
    titleLines: ["כותרת ראשית לדף", "עוד שורת כותרת"],
    introLines: [
      "זהו טקסט דמה נעים לקריאה בתוך אזור שני השליש.",
      "אחר כך תוכלי להחליף אותו לתוכן המדויק של הדף.",
    ],
    headerOffsetPx: 96,
  },
  orbit: {
    ...basePages.about.orbit,
    rotationSpeedDegPerSec: 1.05,
  },
  stickyGuide: {
    idleLook: "default",
    bubbles: [
      {
        id: "about-bubble-1",
        text: "זו בועת דמה ראשונה. כאן יופיע הטקסט שמגיע מיד כשמתחילה הגלילה מההירו.",
        showFromAfterHeroPx: 24,
        hideAfterHeroPx: 640,
        maxWidthPx: 560,
        offsetX: 18,
        offsetY: -4,
        enterMs: 240,
        exitMs: 180,
      },
      {
        id: "about-bubble-2",
        text: "זהו אזור תוכן לבדיקה. כאן ייכנס בהמשך התוכן האמיתי של הדף, וכל חלק יוכל להשתייך לעיגול 1, 2, 3, 4 או 5.",
        showFromAfterHeroPx: 760,
        hideAfterHeroPx: 1600,
        maxWidthPx: 620,
        offsetX: 22,
        offsetY: 2,
        enterMs: 240,
        exitMs: 180,
      },
    ],
  },
  tickerBanner: {
    enabled: true,
    items: [
      "טקסט נע לדוגמה",
      "כאן יוגדר תוכן שונה לכל דף",
      "הבאנר מופיע יחד עם המגיש הקבוע",
      "הגלילה מההירו מפעילה את המערכת מיד",
    ],
    heightPx: 96,
    bottomOffsetPx: 34,
    opacity: 0.92,
    loopDurationSec: 36,
  },
};

export const pagesRegistry: Record<PageId, PageConfig> = basePages;

/**
 * דף הדמו המחובר הראשון.
 */
export const orbitDemoPageId: PageId = "about";
