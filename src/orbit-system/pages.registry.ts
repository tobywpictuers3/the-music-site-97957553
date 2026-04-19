/**
 * pagesRegistry נגזר כולו מתוך:
 * - orbitContentRegistry  (תוכן + תיזמונים פר-דף)
 * - defaultOrbitPageDesign (עיצוב מערכת)
 *
 * כלומר:
 * אין כאן יותר מקור אמת לתוכן עצמו.
 */

import { orbitContentRegistry } from "./orbit.content.registry";
import { resolveOrbitPageConfig } from "./resolveOrbitPageConfig";
import type { PageConfig, PageId } from "./orbit.types";

const routeByPageId: Record<PageId, string> = {
  home: "/",
  contact: "/contact",
  students: "/students",
  blog: "/blog",
  orchestras: "/orchestras",
  performances: "/performances",
  about: "/about",
  sheetMusic: "/sheets",
};

export const pagesRegistry: Record<PageId, PageConfig> = (
  Object.keys(routeByPageId) as PageId[]
).reduce((acc, pageId) => {
  acc[pageId] = resolveOrbitPageConfig({
    pageId,
    route: routeByPageId[pageId],
    content: orbitContentRegistry[pageId],
  });

  return acc;
}, {} as Record<PageId, PageConfig>);

/**
 * דף הדמו המחובר הראשון.
 */
export const orbitDemoPageId: PageId = "about";
