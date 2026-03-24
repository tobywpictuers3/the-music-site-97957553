import type { CircleMapNode } from "@/components/brand/circle-map.types";

export const STUDENTS_CIRCLE_NODES: CircleMapNode[] = [
  {
    id: "track",
    angle: 342,
    title: "מסלול",
    note: "עומק, מסגרת ותוצאות",
    indexLabel: "01",
    sectionId: "track-section",
  },
  {
    id: "studies",
    angle: 54,
    title: "לימוד",
    note: "פסנתר, חליל ומעטפת",
    indexLabel: "02",
    sectionId: "studies-section",
  },
  {
    id: "belief",
    angle: 126,
    title: "דרך",
    note: "הגישה והחותם המקצועי",
    indexLabel: "03",
    sectionId: "belief-section",
  },
  {
    id: "process",
    angle: 198,
    title: "תהליך",
    note: "שיעור, תרגול, רצף ומעקב",
    indexLabel: "04",
    sectionId: "process-section",
  },
  {
    id: "system",
    angle: 270,
    title: "מערכת",
    note: "למידה שממשיכה גם בין השיעורים",
    indexLabel: "05",
    sectionId: "system-section",
  },
];
