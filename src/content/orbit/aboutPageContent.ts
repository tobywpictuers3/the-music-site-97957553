import type {
  OrbitItemId,
  OrbitPageContentConfig,
} from "@/orbit-system/orbit.types";
import { ABOUT_TOPICS } from "./aboutOrbit";

const ABOUT_ORBIT_IDS: OrbitItemId[] = ["1", "2", "3", "4", "5"];
const ABOUT_ORBIT_ANGLES = [342, 198, 54, 126, 270];

export const ABOUT_PAGE_CONTENT: OrbitPageContentConfig = {
  presenterId: "electricGuitar",

  hero: {
    titleLines: ["לא עוד בלוק טקסט,", "אלא מסע סביב", "העולמות שלי"],
    introLines: [
      "המוסיקה ואני התחלנו דרך משותפת עם מלאת לי 5 שנים.",
      "מאז — אנחנו יחד. יד־ביד.",
      "לא כתחביב, לא כשלב, לא כמשהו שעושים על הדרך...",
      "אלא כדרך חיים של לימוד, הוראה, במה, יצירה, דיוק, הקשבה והתפתחות מתמדת.",
    ],
  },

  orbit: {
    items: ABOUT_TOPICS.map((topic, index) => ({
      id: ABOUT_ORBIT_IDS[index],
      label: topic.title,
      eyebrow: `0${index + 1}`,
      title: topic.title,
      spoiler: topic.preview,
      baseAngleDeg: ABOUT_ORBIT_ANGLES[index],
      targetSectionId: `about-${topic.id}`,
    })),
  },

  stickyGuide: {
    enabled: true,
    activationRatio: 0.5,
    activationOffsetPx: 0,
    showFromAfterHeroPx: 0,
    bubbles: [
      {
        id: "about-bubble-1",
        text: "דף אודות כאן לא יושב כטקסט ארוך, אלא כמסלול שמקיף תחומי עשייה שונים ומחבר ביניהם.",
        showFromAfterHeroPx: 24,
        hideAfterHeroPx: 700,
      },
      {
        id: "about-bubble-2",
        text: "הכרטיסים כאן נפתחים לעומק, אבל האורביט נותן כבר בהתחלה מבט מרוכז על הוראה, למידה, במה, עיבוד והפקה.",
        showFromAfterHeroPx: 880,
        hideAfterHeroPx: 1800,
      },
    ],
  },

  tickerBanner: {
    enabled: true,
    items: [
      "26 שנות הוראת מוסיקה",
      "9 כלי נגינה ברמה מעולה",
      "מאות תלמידות פרטיות לאורך השנים",
      "אלפי בוגרות קורסים קבוצתיים",
      "5 תזמורות לימודיות עשירות",
      "20 קונצרטים לתלמידות",
      "250+ הופעות בארץ ובעולם",
      "35 שנות למידה רציפה",
    ],
    showFromAfterHeroPx: 0,
  },
};
