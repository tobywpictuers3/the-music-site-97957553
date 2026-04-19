import type { OrbitPageContentConfig } from "@/orbit-system/orbit.types";

export const STUDENTS_PAGE_ORBIT_CONTENT: OrbitPageContentConfig = {
  presenterId: "piano",

  hero: {
    titleLines: ["לא רק שיעורי נגינה שבועיים,", "אלא דרך", "מוזיקלית שלמה"],
    introLines: [
      "כאן לומדים מוסיקה מתוך בהירות, הקשבה, דיוק ורצף.",
      "לא כמפגש חד־פעמי, אלא כמסלול שמחזיק תלמידה לאורך זמן — עם רמה, מסגרת, ליווי ודרך עבודה מסודרת.",
    ],
  },

  orbit: {
    items: [
      {
        id: "1",
        label: "המסלול",
        eyebrow: "01",
        title: "המסלול",
        spoiler:
          "לא רק שיעור טוב, אלא דרך ברורה שמחזיקה תלמידה לאורך זמן — עם רמה, יחס אישי ורצף אמיתי.",
        baseAngleDeg: 342,
        targetSectionId: "track-section",
      },
      {
        id: "2",
        label: "מה לומדים",
        eyebrow: "02",
        title: "מה לומדים",
        spoiler:
          "פסנתר, חליל צד ומקצועות משלימים — בתוך מסלול מסודר שמחבר בין טכניקה, הבנה והבעה מוזיקלית.",
        baseAngleDeg: 54,
        targetSectionId: "studies-section",
      },
      {
        id: "3",
        label: "הדרך",
        eyebrow: "03",
        title: "הדרך",
        spoiler:
          "עומק, בהירות, דרישה מקצועית ורגישות אישית — הגישה שמאחורי כל שיעור וכל התקדמות.",
        baseAngleDeg: 126,
        targetSectionId: "belief-section",
      },
      {
        id: "4",
        label: "איך זה עובד",
        eyebrow: "04",
        title: "איך זה עובד",
        spoiler:
          "שיעור, תרגול, חומרים ורצף — תהליך ברור שמאפשר לתלמידה להתקדם באמת, לא רק להתרשם לרגע.",
        baseAngleDeg: 198,
        targetSectionId: "process-section",
      },
      {
        id: "5",
        label: "המערכת",
        eyebrow: "05",
        title: "המערכת",
        spoiler:
          "מעטפת דיגיטלית שממשיכה את הלמידה גם בין השיעורים — עם סדר, מעקב, תקשורת וכלים שימושיים.",
        baseAngleDeg: 270,
        targetSectionId: "system-section",
      },
    ],
  },

  stickyGuide: {
    activationRatio: 0.5,
    activationOffsetPx: 0,
    showFromAfterHeroPx: 0,
    bubbles: [
      {
        id: "students-bubble-1",
        text: "כאן רואים קודם כול את המסלול: למי זה מתאים, למה זה בנוי כתהליך, ואיך נראית למידה שיש בה גם עומק וגם בהירות.",
        showFromAfterHeroPx: 40,
        hideAfterHeroPx: 760,
      },
      {
        id: "students-bubble-2",
        text: "תחומי הלימוד כאן לא עומדים לבד — הם נבנים כחלק מדרך רחבה יותר של הבנה, הקשבה והתקדמות מוזיקלית.",
        showFromAfterHeroPx: 900,
        hideAfterHeroPx: 1380,
      },
      {
        id: "students-bubble-3",
        text: "הדרך שלי נשענת על עומק, רגישות ודרישה מקצועית. לא קיצורי דרך — אלא תהליך נכון שאפשר לבנות עליו.",
        showFromAfterHeroPx: 1420,
        hideAfterHeroPx: 1860,
      },
      {
        id: "students-bubble-4",
        text: "כאן כבר רואים איך זה עובד בפועל: שיעור, תרגול, חומרים, רצף ומערכת שממשיכה את הלמידה גם בין המפגשים.",
        showFromAfterHeroPx: 1900,
        hideAfterHeroPx: 2500,
      },
    ],
  },

  tickerBanner: {
    enabled: true,
    items: [
      "בת שבע — למדתי אצל טובי חליל צד ארבע שנים, ובזכותה ממש התקדמתי בקריאת תווים",
      "מירי — כל שיעור היה חוויה מיוחדת שפתחה שערים לתחומים נוספים במוזיקה",
      "תמר — הרבה מעבר לשיעורי נגינה, עם התקדמות מקצועית בתוך תהליך מובנה וברור",
      "ריקי — שיעורים מעניינים וחווייתיים עם הבנה עמוקה ונרחבת בחומר",
      "נעמי — להיות תלמידה של טובי זה הרבה מעבר לללמוד מוזיקה",
      "קרייני — כל השבוע חיכיתי לשיעור פסנתר, עם אווירה נעימה וזורמת",
      "תמר — מוסרת את השיעור עם כל הלב ועם אכפתיות אמיתית להתקדמות",
      "דסי — כל דקה איתך שווה בשבילי זהב",
    ],
    showFromAfterHeroPx: 0,
  },
};
