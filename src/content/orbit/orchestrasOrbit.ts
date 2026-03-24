import type {
  OrbitItem,
  PresenterAssets,
} from "@/components/orbit/orbit.types";

import avattarFront from "@/assets/avattar-front.png";
import avattarLeftMid from "@/assets/avattar-left-mid.png";
import avattarLeftSide from "@/assets/avattar-left-side.png";
import avattarRightMid from "@/assets/avattar-right-mid.png";
import avattarRightSide from "@/assets/avattar-right-side.png";
import avattarUp from "@/assets/avattar-up.png";
import avvatarDown from "@/assets/avvatar-down.png";

export const orchestrasPresenterAssets: PresenterAssets = {
  front: avattarFront,
  leftMid: avattarLeftMid,
  leftSide: avattarLeftSide,
  rightMid: avattarRightMid,
  rightSide: avattarRightSide,
  up: avattarUp,
  down: avvatarDown,
};

export const orchestrasOrbitItems: OrbitItem[] = [
  {
    id: "overview",
    indexLabel: "01",
    angle: 342,
    orbitTitle: "מבט",
    orbitNote: "מה מצפה לך כאן",
    sectionId: "overview-section",
  },
  {
    id: "quote",
    indexLabel: "02",
    angle: 54,
    orbitTitle: "הצעה",
    orbitNote: "בניית הצעת מחיר",
    sectionId: "pricing-section",
  },
  {
    id: "budget",
    indexLabel: "03",
    angle: 126,
    orbitTitle: "תקציב",
    orbitNote: "המלצה לפי סכום",
    sectionId: "pricing-section",
  },
  {
    id: "events",
    indexLabel: "04",
    angle: 198,
    orbitTitle: "יומן",
    orbitNote: "הופעות קרובות",
    sectionId: "events-section",
  },
  {
    id: "contact",
    indexLabel: "05",
    angle: 270,
    orbitTitle: "קשר",
    orbitNote: "המשך הזמנה",
    sectionId: "contact-section",
  },
];
