import type { OrbitPageContentConfig } from "@/orbit-system/orbit.types";

export const BLOG_PAGE_ORBIT_CONTENT: OrbitPageContentConfig = {
  presenterId: "saxophone",
  hero: {
    titleLines: ["במה חיה", "לתוכן, שאלות,", "וקשר עם הקוראות"],
    introLines: [
      "במקום בלוג שבלוני — דף שנכנסים אליו כמו למסלול.",
      "יש כאן מאמרים, שאלות קצרות, קולות מהקהילה, ורעיונות שנולדים מהשיח עם הקוראות.",
    ],
  },
  orbit: {
    items: [
      {
        id: "1",
        label: "מוביל",
        eyebrow: "01",
        title: "מוביל",
        spoiler: "שער הכניסה הראשי, המאמר שמוביל את הקוראת פנימה.",
        baseAngleDeg: 270,
        targetSectionId: "featured",
      },
      {
        id: "2",
        label: "מאמרים",
        eyebrow: "02",
        title: "מאמרים",
        spoiler: "פיד חי עם סינון, מאמרים, בלוקי מעבר וזרימה חכמה.",
        baseAngleDeg: 338,
        targetSectionId: "articles",
      },
      {
        id: "3",
        label: "שאלות",
        eyebrow: "03",
        title: "שאלות",
        spoiler: "Q&A קצר, פנייה מהקהילה ושאלות שנולדות מהשטח.",
        baseAngleDeg: 52,
        targetSectionId: "quick-questions",
      },
      {
        id: "4",
        label: "קהילה",
        eyebrow: "04",
        title: "קהילה",
        spoiler: "תגובות, שאלות ודיאלוג חי ולא רק פיד חד-כיווני.",
        baseAngleDeg: 126,
        targetSectionId: "community",
      },
      {
        id: "5",
        label: "נושאים",
        eyebrow: "05",
        title: "נושאים",
        spoiler: "נושאים שביקשו, רעיונות עתידיים והמשך קשר דרך הרשמה.",
        baseAngleDeg: 202,
        targetSectionId: "requested-topics",
      },
    ],
  },
  stickyGuide: {
    activationRatio: 0.5,
    activationOffsetPx: 0,
    showFromAfterHeroPx: 0,
    bubbles: [
      {
        id: "blog-bubble-1",
        text: "כאן הבלוג לא נפתח כפיד שטוח, אלא כשער כניסה: קודם במה, אחר כך מסלול קריאה ברור.",
        showFromAfterHeroPx: 40,
        hideAfterHeroPx: 760,
      },
      {
        id: "blog-bubble-2",
        text: "בהמשך הדף השאלות, הקהילה והנושאים המבוקשים ממשיכים את המאמרים, ולא יושבים בצד כאזור נפרד.",
        showFromAfterHeroPx: 920,
        hideAfterHeroPx: 1900,
      },
    ],
  },
  tickerBanner: {
    enabled: true,
    items: [
      "מאמרים חדשים",
      "שאלות קצרות",
      "קולות מהקהילה",
      "נושאים שביקשו שאכתוב",
      "רשימת התפוצה",
    ],
    showFromAfterHeroPx: 0,
  },
};
