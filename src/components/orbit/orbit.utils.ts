import { AVATAR_SECTORS } from "./orbit.constants";
import type { AvatarKey } from "./orbit.types";

export function normalizeAngle(angle: number) {
  const normalized = angle % 360;
  return normalized < 0 ? normalized + 360 : normalized;
}

export function getAvatarByAngle(angle: number): AvatarKey {
  const normalized = normalizeAngle(angle);

  for (const sector of AVATAR_SECTORS) {
    if (normalized >= sector.from && normalized < sector.to) {
      return sector.avatar;
    }
  }

  return "front";
}
