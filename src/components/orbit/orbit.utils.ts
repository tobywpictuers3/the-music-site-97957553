import { ANGLE_SECTORS } from "./orbit.constants";
import type {
  PresenterAssets,
  PresenterPoseKey,
  ResolvedPresenterAssets,
} from "./orbit.types";

export function normalizeAngle(angle: number) {
  const normalized = angle % 360;
  return normalized < 0 ? normalized + 360 : normalized;
}

/**
 * ממיר וקטור רגיל לזווית שעובדת כמו שעון:
 * 0 = מעלה
 * 90 = ימין
 * 180 = מטה
 * 270 = שמאל
 */
export function angleFromTopClockwise(dx: number, dy: number) {
  return normalizeAngle((Math.atan2(dy, dx) * 180) / Math.PI + 90);
}

export function resolvePoseFromAngle(angle: number): PresenterPoseKey {
  const normalized = normalizeAngle(angle);

  for (const sector of ANGLE_SECTORS) {
    if (normalized >= sector.from && normalized < sector.to) {
      return sector.pose;
    }
  }

  return "front";
}

function firstDefined(...values: Array<string | undefined>) {
  return values.find(Boolean) ?? "";
}

/**
 * תאימות לאחור:
 * גם אם בקונפיגים הישנים עדיין יש front / leftMid / leftSide / rightMid / rightSide / up / down
 * המנוע החדש מתרגם אותם ל-6 הכיוונים החדשים.
 */
export function buildResolvedPresenterAssets(
  assets: PresenterAssets
): ResolvedPresenterAssets {
  const front = assets.front;

  return {
    front,
    upRight: firstDefined(
      assets.upRight,
      assets.rightSide,
      assets.rightMid,
      assets.up,
      front
    ),
    right: firstDefined(
      assets.right,
      assets.rightMid,
      assets.rightSide,
      front
    ),
    downRight: firstDefined(
      assets.downRight,
      assets.down,
      assets.rightMid,
      front
    ),
    downLeft: firstDefined(
      assets.downLeft,
      assets.down,
      assets.leftMid,
      front
    ),
    left: firstDefined(
      assets.left,
      assets.leftMid,
      assets.leftSide,
      front
    ),
    upLeft: firstDefined(
      assets.upLeft,
      assets.leftSide,
      assets.leftMid,
      assets.up,
      front
    ),
  };
}

export function resolveAssetByAngle(
  angle: number,
  assets: ResolvedPresenterAssets
) {
  const pose = resolvePoseFromAngle(angle);
  return {
    pose,
    src: assets[pose] ?? assets.front,
  };
}

export async function preloadImages(urls: string[]) {
  await Promise.all(
    urls
      .filter(Boolean)
      .map((src) => {
        const img = new Image();
        img.src = src;
        if (typeof img.decode === "function") {
          return img.decode().catch(() => undefined);
        }
        return Promise.resolve();
      })
  );
}
