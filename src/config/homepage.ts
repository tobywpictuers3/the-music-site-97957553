/**
 * Homepage Configuration — Single Source of Truth
 * All stage positions, sign boxes, page mapping, and guide content live here.
 */

// ── Page-to-character mapping ──────────────────────────────────────
export type StageCharacter = {
  /** Page title shown on the sign */
  title: string;
  /** Route path */
  href: string;
  /** Character key (matches the image import map) */
  character: "piano" | "eguitar" | "guitar" | "drums" | "saxophone" | "violin";
  /** Stage position — percentage-based */
  stage: { left: string; bottom: string; width: string; zIndex: number };
  /** Sign-board text overlay position inside the character container */
  signBox: { top: string; left: string; width: string; height: string };
  /** Short quote shown in the lower card section */
  quote: string;
};

export const STAGE_CHARACTERS: StageCharacter[] = [
  {
    title: "תלמידות",
    href: "/students",
    character: "piano",
    stage: { left: "6%", bottom: "2%", width: "17%", zIndex: 4 },
    signBox: { top: "12%", left: "32%", width: "42%", height: "22%" },
    quote: "מרחב שמחבר בין לימוד, תרגול, התקדמות וקשר אישי — בצורה חיה ונעימה.",
  },
  {
    title: "תזמורות",
    href: "/orchestras",
    character: "eguitar",
    stage: { left: "21%", bottom: "8%", width: "11.5%", zIndex: 5 },
    signBox: { top: "10%", left: "18%", width: "58%", height: "24%" },
    quote: "הרכבים, סגנונות ואפשרויות שמתאימים לאירוע שלכם — בלי להסתבך.",
  },
  {
    title: "אודות",
    href: "/about",
    character: "guitar",
    stage: { left: "34%", bottom: "11%", width: "11.5%", zIndex: 5 },
    signBox: { top: "10%", left: "18%", width: "58%", height: "24%" },
    quote: "הסיפור, הדרך והאני מאמין של Toby Music — במקום אחד, ברור ומדויק.",
  },
  {
    title: "תווים",
    href: "/sheets",
    character: "drums",
    stage: { left: "46%", bottom: "14%", width: "15.5%", zIndex: 6 },
    signBox: { top: "8%", left: "25%", width: "50%", height: "22%" },
    quote: "ספריית תווים מסודרת, נוחה ונעימה לעין — כדי להגיע מהר למה שצריך.",
  },
  {
    title: "בלוגים",
    href: "/blog",
    character: "saxophone",
    stage: { left: "66%", bottom: "8%", width: "11%", zIndex: 5 },
    signBox: { top: "10%", left: "18%", width: "58%", height: "24%" },
    quote: "טיפים, מחשבות, רעיונות והשראה מוזיקלית שנעים לחזור אליה שוב.",
  },
  {
    title: "צור קשר",
    href: "/contact",
    character: "violin",
    stage: { left: "80%", bottom: "4%", width: "10.5%", zIndex: 4 },
    signBox: { top: "10%", left: "18%", width: "58%", height: "24%" },
    quote: "רוצה לשאול, להתייעץ או להזמין? כאן מתחילים שיחה פשוטה ונעימה.",
  },
];

// ── Marquee items ──────────────────────────────────────────────────
export const MARQUEE_ITEMS = [
  "תזמורות",
  "תלמידות",
  "תווים",
  "בלוגים",
  "יצירת קשר",
  "מוזיקה • תוכן • חוויה",
  "אירועים • לימוד • השראה",
  "Toby Music",
];

// ── Guide presenter ────────────────────────────────────────────────
export const GUIDE_PRESENTER = {
  welcomeText:
    "ברוכים הבאים לאתר של טובי. אני אלווה אתכם כאן בסיור באתר. בלחיצה עלי תוכלו לשאול כל מה שתצטרכו אודות הנכתב באתר, אשתדל לענות לכם ככל יכולתי. ניתן גם לבקש הסבר באופן קולי. לשירותכם!",
  floatingLabel: "שאלו את טובי",
};

// ── Hero text ──────────────────────────────────────────────────────
export const HERO_TEXT = {
  subtitle: "המוזיקה מתחילה",
  linkWord: "כאן",
  linkHref: "#stage-characters",
  supportLine: "תזמורות, תלמידות, תווים ותוכן — במקום אחד.",
  sloganPrefix: "אומנות ואמינות —",
  sloganAccent: "זו יצירה",
};
