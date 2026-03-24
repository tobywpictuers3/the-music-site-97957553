import type { OrbitItem, PresenterAssets } from "@/components/orbit/orbit.types";

import avattarFront from "@/assets/avattar-front.png";
import avattarLeftMid from "@/assets/avattar-left-mid.png";
import avattarLeftSide from "@/assets/avattar-left-side.png";
import avattarRightMid from "@/assets/avattar-right-mid.png";
import avattarRightSide from "@/assets/avattar-right-side.png";
import avattarUp from "@/assets/avattar-up.png";
import avvatarDown from "@/assets/avvatar-down.png";

export const studentsPresenterAssets: PresenterAssets = {
  front: avattarFront,
  leftMid: avattarLeftMid,
  leftSide: avattarLeftSide,
  rightMid: avattarRightMid,
  rightSide: avattarRightSide,
  up: avattarUp,
  down: avvatarDown,
};

export const studentsOrbitItems: OrbitItem[] = [
  {
    id: "students-method",
    sectionId: "students-method",
    indexLabel: "01",
    angle: 342,
    orbitTitle: "שיטה",
    orbitNote: "יסודות, סדר והבנה",
  },
  {
    id: "students-listening",
    sectionId: "students-listening",
    indexLabel: "02",
    angle: 54,
    orbitTitle: "שמיעה",
    orbitNote: "הקשבה, רגישות ומוסיקליות",
  },
  {
    id: "students-practice",
    sectionId: "students-practice",
    indexLabel: "03",
    angle: 126,
    orbitTitle: "אימון",
    orbitNote: "הרגלים נכונים ובניית יכולת",
  },
  {
    id: "students-growth",
    sectionId: "students-growth",
    indexLabel: "04",
    angle: 198,
    orbitTitle: "צמיחה",
    orbitNote: "ביטחון, התמדה והתפתחות",
  },
  {
    id: "students-results",
    sectionId: "students-results",
    indexLabel: "05",
    angle: 270,
    orbitTitle: "תוצאה",
    orbitNote: "נגינה, עומק ובשלות",
  },
];
