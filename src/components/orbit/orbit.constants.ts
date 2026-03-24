import type { AvatarKey } from "./orbit.types";

export type AvatarSector = {
  from: number;
  to: number;
  avatar: AvatarKey;
};

export const ORBIT_SETTINGS = {
  zoneMaxWidth: 780,
  zoneHeight: { base: 560, md: 660, lg: 730 },
  radius: { base: 158, md: 212, lg: 246 },
  itemSize: { base: 152, md: 194, lg: 220 },
  spinSeconds: 405,
  activeScale: 1.035,

  avatarSize: { base: 248, md: 320, lg: 380 },
  avatarFloatSeconds: 10,
  avatarSwitchMs: 120,
} as const;

export const AVATAR_SECTORS: AvatarSector[] = [
  { from: 225, to: 270, avatar: "leftSide" },
  { from: 270, to: 315, avatar: "up" },
  { from: 315, to: 360, avatar: "rightSide" },
  { from: 0, to: 55, avatar: "rightMid" },
  { from: 55, to: 140, avatar: "down" },
  { from: 140, to: 180, avatar: "leftMid" },
  { from: 180, to: 225, avatar: "leftSide" },
];
