import type { OrbitPageContentConfig, PageId } from "./orbit.types";

import { HOME_PAGE_ORBIT_CONTENT } from "@/content/orbit/homePageOrbitContent";
import { CONTACT_PAGE_ORBIT_CONTENT } from "@/content/orbit/contactPageOrbitContent";
import { STUDENTS_PAGE_ORBIT_CONTENT } from "@/content/orbit/studentsPageOrbitContent";
import { BLOG_PAGE_ORBIT_CONTENT } from "@/content/orbit/blogPageOrbitContent";
import { ORCHESTRAS_PAGE_ORBIT_CONTENT } from "@/content/orbit/orchestrasPageOrbitContent";
import { PERFORMANCES_PAGE_ORBIT_CONTENT } from "@/content/orbit/performancesPageOrbitContent";
import { ABOUT_PAGE_ORBIT_CONTENT } from "@/content/orbit/aboutPageOrbitContent";
import { SHEET_MUSIC_PAGE_ORBIT_CONTENT } from "@/content/orbit/sheetMusicPageOrbitContent";

export const orbitContentRegistry: Record<PageId, OrbitPageContentConfig> = {
  home: HOME_PAGE_ORBIT_CONTENT,
  contact: CONTACT_PAGE_ORBIT_CONTENT,
  students: STUDENTS_PAGE_ORBIT_CONTENT,
  blog: BLOG_PAGE_ORBIT_CONTENT,
  orchestras: ORCHESTRAS_PAGE_ORBIT_CONTENT,
  performances: PERFORMANCES_PAGE_ORBIT_CONTENT,
  about: ABOUT_PAGE_ORBIT_CONTENT,
  sheetMusic: SHEET_MUSIC_PAGE_ORBIT_CONTENT,
};

export function getOrbitPageContent(pageId: PageId) {
  return orbitContentRegistry[pageId];
}
