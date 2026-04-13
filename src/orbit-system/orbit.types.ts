/**
 * כל הטיפוסים של מערכת האורביט.
 * המטרה:
 * - כל התוכן, התזמונים והחלוקות יהיו ברמת הדף
 * - כל הפריסה, ההתנהגות והעיצוב יהיו ברמת המערכת
 */

export type ThemeMode = "light" | "dark";

export type PresenterLook =
  | "default"
  | "upperRight"
  | "right"
  | "lowerRight"
  | "lowerLeft"
  | "left"
  | "upperLeft"
  | "stageSign";

export type PresenterId =
  | "avatar"
  | "piano"
  | "saxophone"
  | "drums"
  | "violin"
  | "electricGuitar"
  | "classicalGuitar";

export type PageId =
  | "home"
  | "contact"
  | "students"
  | "blog"
  | "orchestras"
  | "performances"
  | "about"
  | "sheetMusic";

export type OrbitItemId = "1" | "2" | "3" | "4" | "5";

export type PresenterVisual = {
  src: string;
  alt: string;
};

export type PresenterConfig = {
  id: PresenterId;
  label: string;
  looks: Record<PresenterLook, PresenterVisual>;
  sizing: {
    heroWidth: string;
    heroMaxWidth: string;
    stickyWidth: string;
    stickyMaxWidth: string;
    stageWidth: string;
    stageMaxWidth: string;
  };
};

export type OrbitItemConfig = {
  id: OrbitItemId;
  label: string;
  baseAngleDeg: number;
  targetSectionId?: string;
};

export type BubbleConfig = {
  id: string;
  text: string;

  /**
   * מתי הבועה פעילה ביחס לגלילה אחרי אזור ההפעלה של ההירו
   */
  showFromAfterHeroPx: number;
  hideAfterHeroPx: number;

  /**
   * כיווני מיקום עדינים לכל בועה
   */
  offsetX?: number;
  offsetY?: number;
  maxWidthPx?: number;

  /**
   * שליטה מלאה בתיזמונים ברמת הדף
   */
  enterMs?: number;
  exitMs?: number;
  holdMs?: number;
  fadeMs?: number;

  /**
   * האם מותר לסגור ידנית
   */
  dismissible?: boolean;
};

export type StickyGuideConfig = {
  idleLook: "default";

  /**
   * מתי בכלל מפעילים את אזור ה-sticky אחרי תחילת ההירו
   */
  activationOffsetPx?: number;

  /**
   * כמה מגובה ההירו צריך לעבור לפני שהמערכת מתחילה לעבוד.
   * 0.5 = בערך חצי הירו
   */
  activationRatio?: number;

  /**
   * עיכוב נוסף בהופעת המדריך עצמו אחרי נקודת ההפעלה
   */
  showFromAfterHeroPx?: number;

  bubbles: BubbleConfig[];
};

export type TickerBannerConfig = {
  enabled: boolean;
  items: string[];

  heightPx: number;
  bottomOffsetPx: number;
  opacity: number;
  loopDurationSec: number;

  /**
   * מתי הבאנר מתחיל להופיע אחרי אזור ההפעלה
   */
  showFromAfterHeroPx?: number;

  /**
   * זמני כניסה/יציאה
   */
  enterMs?: number;
  exitMs?: number;
};

export type PageConfig = {
  pageId: PageId;
  route: string;
  presenterId: PresenterId;

  hero: {
    titleLines: string[];
    introLines: string[];
    headerOffsetPx: number;
  };

  orbit: {
    items: OrbitItemConfig[];
    rotationSpeedDegPerSec: number;
    defaultLook: "default";
  };

  stickyGuide: StickyGuideConfig;
  tickerBanner: TickerBannerConfig;
};
