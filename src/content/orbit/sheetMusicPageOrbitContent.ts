import type { OrbitPageContentConfig } from "@/orbit-system/orbit.types";

export const SHEET_MUSIC_PAGE_ORBIT_CONTENT: OrbitPageContentConfig = {
  presenterId: "classicalGuitar",
  hero: {
    titleLines: ["תווים, עיבודים", "וכתיבה מוזיקלית", "בהזמנה"],
    introLines: [
      "כאן אפשר גם לעיין במאגר של תווים קיימים, וגם להזמין כתיבה או עיבוד מותאם.",
      "המטרה היא לחבר בין מאגר קיים לבין מסלול ברור להזמנה אישית: לכלי, לרמה, לסולם, להרכב או לתזמורת.",
    ],
  },
  orbit: {
    items: [
      {
        id: "1",
        label: "שירותים",
        eyebrow: "01",
        title: "שירותים",
        spoiler: "מה אפשר להזמין: כתיבה, התאמות, שינוי רמה או עיבוד.",
        baseAngleDeg: 270,
        targetSectionId: "services-section",
      },
      {
        id: "2",
        label: "מאגר",
        eyebrow: "02",
        title: "מאגר",
        spoiler: "חיפוש תווים קיימים לפי כלי, רמה, סולם וסגנון.",
        baseAngleDeg: 338,
        targetSectionId: "catalog",
      },
      {
        id: "3",
        label: "הזמנה",
        eyebrow: "03",
        title: "הזמנה",
        spoiler: "מסלול ברור להזמנה אישית של כתיבה או התאמה.",
        baseAngleDeg: 52,
        targetSectionId: "custom-order",
      },
      {
        id: "4",
        label: "טופס",
        eyebrow: "04",
        title: "טופס",
        spoiler: "שליחת בקשה מסודרת עם כל הפרטים הדרושים.",
        baseAngleDeg: 126,
        targetSectionId: "request-form",
      },
      {
        id: "5",
        label: "שאלות",
        eyebrow: "05",
        title: "שאלות",
        spoiler: "מענה על שאלות נפוצות לפני קנייה או הזמנה.",
        baseAngleDeg: 202,
        targetSectionId: "faq-section",
      },
    ],
  },
  stickyGuide: {
    activationRatio: 0.5,
    activationOffsetPx: 0,
    showFromAfterHeroPx: 0,
    bubbles: [
      {
        id: "sheetmusic-bubble-1",
        text: "הדף הזה לא רק מציג תווים מוכנים, אלא עושה סדר בין שני מסלולים: חיפוש במאגר, או הזמנה אישית של כתיבה והתאמה.",
        showFromAfterHeroPx: 40,
        hideAfterHeroPx: 760,
      },
      {
        id: "sheetmusic-bubble-2",
        text: "השלב הבא אחרי העיון הוא בקשה מסודרת: מה השיר, לאיזה כלי, באיזו רמה, ובאיזו צורת עיבוד צריך אותו.",
        showFromAfterHeroPx: 920,
        hideAfterHeroPx: 1900,
      },
    ],
  },
  tickerBanner: {
    enabled: true,
    items: [
      "מאגר תווים",
      "התאמה לכלי",
      "שינוי רמה",
      "שינוי סולם",
      "שני קולות והרכב",
      "כתיבה בהזמנה",
    ],
    showFromAfterHeroPx: 0,
  },
};
