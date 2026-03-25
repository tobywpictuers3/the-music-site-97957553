import type {
  FloatingBubbleMessage,
  OrbitItem,
  PresenterAssets,
} from "@/components/orbit/orbit.types";

import presenterImg from "@/assets/homepage/presenter/presenter.png";

export const contactOrbitItems: OrbitItem[] = [
  {
    id: "intro",
    indexLabel: "01",
    angle: 336,
    orbitTitle: "פתיחה",
    orbitNote: "היכרות קצרה והכוונה",
    sectionId: "contact-intro-section",
  },
  {
    id: "form",
    indexLabel: "02",
    angle: 48,
    orbitTitle: "טופס",
    orbitNote: "השארת פרטים מסודרת",
    sectionId: "contact-form-section",
  },
  {
    id: "topics",
    indexLabel: "03",
    angle: 120,
    orbitTitle: "נושאים",
    orbitNote: "שיעורים, הופעות ושיתופים",
    sectionId: "contact-form-section",
  },
  {
    id: "details",
    indexLabel: "04",
    angle: 192,
    orbitTitle: "פירוט",
    orbitNote: "כמה שורות שיעזרו לדייק",
    sectionId: "contact-form-section",
  },
  {
    id: "followup",
    indexLabel: "05",
    angle: 264,
    orbitTitle: "המשך",
    orbitNote: "איך אני חוזרת אליך",
    sectionId: "contact-followup-section",
  },
];

export const contactPresenterAssets: PresenterAssets = {
  front: presenterImg,
  upRight: presenterImg,
  right: presenterImg,
  downRight: presenterImg,
  downLeft: presenterImg,
  left: presenterImg,
  upLeft: presenterImg,
};

export const contactFloatingMessages: FloatingBubbleMessage[] = [
  { id: "contact-1", text: "אפשר לבחור כמה נושאים יחד, לא רק אחד." },
  { id: "contact-2", text: "כמה שורות ברורות בטופס יעזרו לי לחזור אליכם מדויק יותר." },
  { id: "contact-3", text: "אם הגעתם מדף תלמידות, אפשר להשאיר כבר כאן פנייה לשיעורים פרטיים." },
];
