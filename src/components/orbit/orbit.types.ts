export type AvatarKey =
  | "front"
  | "leftMid"
  | "leftSide"
  | "rightMid"
  | "rightSide"
  | "up"
  | "down";

export type OrbitItem = {
  id: string;
  indexLabel: string;
  angle: number;
  orbitTitle: string;
  orbitNote: string;
  sectionId?: string;
};

export type PresenterAssets = Record<AvatarKey, string>;
