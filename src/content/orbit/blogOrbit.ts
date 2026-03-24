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

export const blogPresenterAssets: PresenterAssets = {
  front: avattarFront,
  leftMid: avattarLeftMid,
  leftSide: avattarLeftSide,
  rightMid: avattarRightMid,
  rightSide: avattarRightSide,
  up: avattarUp,
  down: avvatarDown,
};

export const blogOrbitItems: OrbitItem[] = [
  {
    id: "featured",
    indexLabel: "01",
    angle: 270,
    orbitTitle: "מוביל",
    orbitNote: "שער הכניסה לדף",
    sectionId: "featured",
  },
  {
    id: "articles",
    indexLabel: "02",
    angle: 315,
    orbitTitle: "מאמרים",
    orbitNote: "פיד התוכן המרכזי",
    sectionId: "articles",
  },
  {
    id: "quick-questions",
    indexLabel: "03",
    angle: 45,
    orbitTitle: "שאלות",
    orbitNote: "שאלה קצרה, מענה קצר",
    sectionId: "quick-questions",
  },
  {
    id: "community",
    indexLabel: "04",
    angle: 90,
    orbitTitle: "קהילה",
    orbitNote: "קולות מהשטח",
    sectionId: "community",
  },
  {
    id: "requested-topics",
    indexLabel: "05",
    angle: 135,
    orbitTitle: "נושאים",
    orbitNote: "מה ביקשו שאכתוב",
    sectionId: "requested-topics",
  },
  {
    id: "subscribers",
    indexLabel: "06",
    angle: 225,
    orbitTitle: "רשומות",
    orbitNote: "שכבה פנימית לדף",
    sectionId: "subscribers",
  },
];
