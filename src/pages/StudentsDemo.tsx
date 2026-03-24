import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  Award,
  CalendarDays,
  ExternalLink,
  Gauge,
  History,
  LayoutDashboard,
  Medal,
  MessageSquare,
  Repeat2,
  ShoppingBag,
  Sparkles,
  Trophy,
  UserRound,
  Wrench,
} from "lucide-react";

import InnerPageLayout from "@/components/InnerPageLayout";
import AppearOnScroll from "@/components/AppearOnScroll";
import { Button } from "@/components/ui/button";

/* ==========================================================================
   תמונות הדמו
   מותאם בדיוק לשמות ולנתיבים שב־GitHub:
   src/assets/students-demo/light/
   src/assets/students-demo/dark/

   חשוב:
   - הסיומת כאן היא .jpg קטנה
   - השם הוא "אזור" ולא "איזור"
   - השם הוא "היסטוריית" ולא "הסטוריית"
   ========================================================================== */

/* light */
import openingLight from "@/assets/students-demo/light/פתיחה בהיר.jpg";
import personalAreaLight from "@/assets/students-demo/light/איזור אישי בהיר.jpg";
import detailsLight from "@/assets/students-demo/light/פרטים בהיר.jpg";
import messagesLight from "@/assets/students-demo/light/הודעות בהיר.jpg";
import lessonHistoryLight from "@/assets/students-demo/light/היסטוריית שיעורים בהיר.jpg";
import weeklySystemLight from "@/assets/students-demo/light/מערכת בהיר.jpg";
import replacementsLight from "@/assets/students-demo/light/החלפות בהיר.jpg";
import practiceHistoryLight from "@/assets/students-demo/light/היסטוריית אימונים בהיר.jpg";
import monthlyAchievementsLight from "@/assets/students-demo/light/השגי חודשים קודמים בהיר.jpg";
import medalsLight from "@/assets/students-demo/light/מדליות בהיר.jpg";
import leaderboardLight from "@/assets/students-demo/light/לוח המצטיינות בהיר.jpg";
import storeLight from "@/assets/students-demo/light/חנות בהיר.jpg";
import tunerLight from "@/assets/students-demo/light/טיונר בהיר.jpg";
import aidsLight from "@/assets/students-demo/light/עזרים בהיר.jpg";

/* dark */
import openingDark from "@/assets/students-demo/dark/פתיחה כהה.jpg";
import personalAreaDark from "@/assets/students-demo/dark/איזור אישי כהה.jpg";
import detailsDark from "@/assets/students-demo/dark/פרטים כהה.jpg";
import messagesDark from "@/assets/students-demo/dark/הודעות כהה.jpg";
import lessonHistoryDark from "@/assets/students-demo/dark/היסטוריית שיעורים כהה.jpg";
import weeklySystemDark from "@/assets/students-demo/dark/מערכת כהה.jpg";
import replacementsDark from "@/assets/students-demo/dark/החלפות כהה.jpg";
import practiceHistoryDark from "@/assets/students-demo/dark/היסטוריית אימונים כהה.jpg";
import monthlyAchievementsDark from "@/assets/students-demo/dark/השגי חודשים קודמים כהה.jpg";
import medalsDark from "@/assets/students-demo/dark/מדליות כהה.jpg";
import leaderboardDark from "@/assets/students-demo/dark/לוח המצטיינות כהה.jpg";
import storeDark from "@/assets/students-demo/dark/חנות כהה.jpg";
import tunerDark from "@/assets/students-demo/dark/טיונר כהה.jpg";
import aidsDark from "@/assets/students-demo/dark/עזרים כהה.jpg";

/* ==========================================================================
   טיפוסים
   ========================================================================== */

type DemoItem = {
  id: string;
  title: string;
  summary: string;
  details: string;
  benefit: string;
  lightImage: string;
  darkImage: string;
  alt: string;
  Icon: LucideIcon;
  highlights: string[];
};

type DemoSection = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  items: DemoItem[];
};

/* ==========================================================================
   תוכן הדף
   ========================================================================== */

const demoSections: DemoSection[] = [
  {
    id: "entry-and-orientation",
    eyebrow: "כניסה והתמצאות",
    title: "המערכת מתחילה בכניסה ברורה וממשיכה למרחב אישי מסודר",
    intro:
      "החלק הראשון מציג את שער הכניסה למערכת ואת נקודת ההתחלה של התלמידה בתוך המרחב האישי שלה.",
    items: [
      {
        id: "opening",
        title: "פתיחה",
        summary:
          "זהו שער הכניסה למערכת. מכאן התלמידה נכנסת לאזור האישי שלה, והמורה או המנהלת נכנסות למרחב הניהול.",
        details:
          "מסך הפתיחה נותן כניסה מסודרת לעולם הלימוד הדיגיטלי, עם חלוקה ברורה בין אזור אישי לבין ניהול, ועם פרטי קשר זמינים במקום אחד.",
        benefit:
          "כך מתחילים ממקום ברור ונעים, בלי ללכת לאיבוד בין קישורים, הודעות או דרכי כניסה שונות.",
        lightImage: openingLight,
        darkImage: openingDark,
        alt: "מסך פתיחה של מערכת התלמידות",
        Icon: Sparkles,
        highlights: [
          "כניסה לאזור אישי",
          "כניסת מנהל נפרדת",
          "פרטי קשר זמינים",
        ],
      },
      {
        id: "personal-area",
        title: "אזור אישי",
        summary:
          "זהו מסך הבית של התלמידה. ממנו מגיעים לכל האזורים המרכזיים במערכת בלחיצה אחת.",
        details:
          "כאן מרוכזים הלשוניות והכלים העיקריים: מעקב אימונים, מערכת שבועית, עזרים, מדליות, חנות, היסטוריית שיעורים, הודעות, פרטים, אנשי קשר וקבצים.",
        benefit:
          "התלמידה לא צריכה לזכור איפה כל דבר נמצא — כל העולם שלה יושב במקום אישי, קבוע וברור.",
        lightImage: personalAreaLight,
        darkImage: personalAreaDark,
        alt: "האזור האישי של התלמידה",
        Icon: LayoutDashboard,
        highlights: [
          "גישה מהירה לכל הלשוניות",
          "מבנה קבוע וברור",
          "תחושת מרחב אישי מסודר",
        ],
      },
      {
        id: "details",
        title: "פרטים",
        summary:
          "האזור הזה מרכז את הפרטים האישיים והמידע המנהלי של התלמידה.",
        details:
          "מופיעים כאן שם, טלפון, אימייל, תאריך התחלה, מצב תשלומים, מספר שיעור נוכחי, ובחלק מהמקרים גם חוב, זכות והיסטוריית תשלומים.",
        benefit:
          "המידע החשוב לא מפוזר — אפשר לראות מצב אישי ומנהלי במקום אחד, בלי צורך לפנות בכל פעם מחדש.",
        lightImage: detailsLight,
        darkImage: detailsDark,
        alt: "אזור פרטים של תלמידה",
        Icon: UserRound,
        highlights: [
          "פרטים אישיים",
          "סטטוס תשלום",
          "מספר שיעור נוכחי",
        ],
      },
    ],
  },
  {
    id: "communication-and-lessons",
    eyebrow: "שיעורים ותקשורת",
    title: "כל מה שקשור ללוח הזמנים, להודעות ולשינויים בשיעורים",
    intro:
      "בחלק הזה רואים איך המערכת עוזרת לתלמידה להבין מה קורה השבוע, מה היה, ואיך מתנהלים גם כשצריך שינוי או תקשורת שוטפת.",
    items: [
      {
        id: "messages",
        title: "הודעות",
        summary:
          "זהו מרכז הודעות פנימי בסגנון תיבת מייל, עם חלוקה ברורה בין דואר נכנס, יוצא, טיוטות, כוכב ואשפה.",
        details:
          "אפשר לפתוח הודעות, להשיב, להעביר, לשמור טיוטות, לצרף קבצים, לסמן בכוכב ואף לסנכרן. בנוסף יש גם שכבת הודעות כלליות ועדכונים שוטפים.",
        benefit:
          "המערכת שומרת על תקשורת מסודרת בתוך אותו מרחב עבודה, בלי שהמידע ילך לאיבוד בין מקומות שונים.",
        lightImage: messagesLight,
        darkImage: messagesDark,
        alt: "מרכז הודעות במערכת",
        Icon: MessageSquare,
        highlights: [
          "דואר נכנס / יוצא / טיוטות",
          "תגובה והעברה",
          "סדר בתקשורת",
        ],
      },
      {
        id: "weekly-system",
        title: "מערכת",
        summary:
          "זהו הלוח השבועי של השיעורים. כאן התלמידה רואה את הלו״ז הקרוב בצורה רחבה וברורה.",
        details:
          "התצוגה נועדה לתת תמונה מסודרת של השבוע, עם שיבוץ לפי ימים, שעות, סטטוסים והבחנה בין שיעורים רגילים, שיעורים מוחלפים ושיעורים חד־פעמיים.",
        benefit:
          "התלמידה מבינה במהירות מתי השיעור שלה, מה צפוי השבוע, ואיך נראה רצף הלימוד הקרוב.",
        lightImage: weeklySystemLight,
        darkImage: weeklySystemDark,
        alt: "מערכת שיעורים שבועית",
        Icon: CalendarDays,
        highlights: [
          "תצוגת שבוע מלאה",
          "הבחנה בין סטטוסים",
          "בהירות סביב הלו״ז",
        ],
      },
      {
        id: "replacements",
        title: "החלפות",
        summary:
          "האזור הזה מיועד לבקשת החלפת שיעור בצורה מסודרת.",
        details:
          "התהליך בנוי בשלבים: הזנת קוד החלפה, בחירת שיעור, בחירת שיעור מבוקש, ובמידת הצורך גם קוד החלפה של התלמידה השנייה.",
        benefit:
          "במקום לנהל החלפות באקראי, יש למערכת תהליך ברור, מסודר ונוח שמקטין בלבול וחוסר ודאות.",
        lightImage: replacementsLight,
        darkImage: replacementsDark,
        alt: "אזור החלפת שיעורים במערכת",
        Icon: Repeat2,
        highlights: [
          "תהליך החלפה מובנה",
          "שלבים ברורים",
          "ניהול שינוי בתוך המערכת",
        ],
      },
      {
        id: "lesson-history",
        title: "היסטוריית שיעורים",
        summary:
          "האזור הזה מציג את כל השיעורים הקודמים בצורה מסודרת ונוחה לעיון.",
        details:
          "אפשר לראות מספר שיעור, תאריך, שעה, סטטוס, הערות, ולעקוב לאורך זמן אחרי מה שכבר התקיים ומה השתנה בדרך.",
        benefit:
          "כך נשמר רצף, ואפשר תמיד לחזור אחורה ולהבין את הדרך שנעשתה ולא רק את מה שקורה עכשיו.",
        lightImage: lessonHistoryLight,
        darkImage: lessonHistoryDark,
        alt: "היסטוריית שיעורים",
        Icon: History,
        highlights: [
          "תיעוד שיעורים קודמים",
          "סטטוסים והערות",
          "מבט על הרצף לאורך זמן",
        ],
      },
    ],
  },
  {
    id: "practice-and-growth",
    eyebrow: "אימון והתקדמות",
    title: "המערכת לא נגמרת בשיעור — היא מחזיקה גם תרגול, התמדה והישגים",
    intro:
      "החלק הזה מציג את שכבת המעקב וההנעה: רישום אימונים, תמונת התקדמות, מדליות, לוח מצטיינות וחנות פרסים.",
    items: [
      {
        id: "practice-history",
        title: "היסטוריית אימונים",
        summary:
          "האזור הזה מציג את האימונים שנרשמו בפועל, מקובצים לפי יום, עם סך דקות יומי ומדליה יומית.",
        details:
          "אפשר לראות בכל יום כמה אימונים בוצעו, מה היה משך כל אימון, ומהו הסך הכולל. במסך האמיתי יש גם אפשרויות תחזוקה כמו עריכה ומחיקה של רישום קיים.",
        benefit:
          "כך התרגול הופך למשהו שאפשר לראות, למדוד ולתחזק — לא רק להרגיש בערך.",
        lightImage: practiceHistoryLight,
        darkImage: practiceHistoryDark,
        alt: "היסטוריית אימונים",
        Icon: History,
        highlights: [
          "רישום לפי ימים",
          "סך דקות יומי",
          "מעקב ברור אחרי תרגול",
        ],
      },
      {
        id: "monthly-achievements",
        title: "השגי חודשים קודמים",
        summary:
          "כאן רואים תמונה רחבה יותר של ההתקדמות החודשית, ולא רק מה קרה ביום מסוים.",
        details:
          "לכל חודש מופיעים סך הדקות שנצברו, השיא היומי של אותו חודש, והרצף המקסימלי של ימי אימון.",
        benefit:
          "התלמידה יכולה לראות תהליך מצטבר לאורך זמן ולקבל תחושת דרך, ולא רק רשימה טכנית של אימונים.",
        lightImage: monthlyAchievementsLight,
        darkImage: monthlyAchievementsDark,
        alt: "השגי חודשים קודמים",
        Icon: Award,
        highlights: [
          "סיכום לפי חודשים",
          "שיא יומי",
          "רצף מקסימלי",
        ],
      },
      {
        id: "medals",
        title: "מדליות",
        summary:
          "מערכת המדליות מתרגמת התמדה, דקות תרגול ורצפים להישגים ברורים ומעודדים.",
        details:
          "המסך מציג אוסף מדליות, יתרה לקניות, רצף נוכחי ומבנה הישגים שמבוסס על נתוני האימון עצמם.",
        benefit:
          "העבודה מקבלת משוב מוחשי וחיובי, והתלמידה מרגישה שהמאמץ שלה נראה ומצטבר.",
        lightImage: medalsLight,
        darkImage: medalsDark,
        alt: "מערכת מדליות",
        Icon: Medal,
        highlights: [
          "אוסף מדליות",
          "יתרה לקניות",
          "חיזוק מוטיבציה",
        ],
      },
      {
        id: "leaderboard",
        title: "לוח המצטיינות",
        summary:
          "זהו לוח הישגים שמדגיש הצטיינות מסוגים שונים — לא רק מדד אחד.",
        details:
          "אפשר לראות קטגוריות של התמדה, רצף, ממוצע שבועי, שיאים וניקוד, כך שכל תלמידה יכולה למצוא את תחום החוזק שלה ולהרגיש שהדרך שלה מקבלת מקום.",
        benefit:
          "המערכת יוצרת השראה ודרייב חיובי בלי לצמצם הצלחה רק לפרמטר אחד.",
        lightImage: leaderboardLight,
        darkImage: leaderboardDark,
        alt: "לוח מצטיינות",
        Icon: Trophy,
        highlights: [
          "קטגוריות הצטיינות שונות",
          "עידוד והשראה",
          "תחושת הישג",
        ],
      },
      {
        id: "store",
        title: "חנות",
        summary:
          "החנות מחוברת לעולם המדליות ומאפשרת להפוך התמדה והישגים למשהו מוחשי.",
        details:
          "במסך הזה התלמידה רואה את יתרת המדליות שלה, בוחרת פרסים, ומבינה מה זמין כרגע ומה עוד דורש התקדמות.",
        benefit:
          "כך המערכת לא רק מודדת עבודה, אלא גם מדרבנת ומתגמלת אותה בצורה חיה ונעימה.",
        lightImage: storeLight,
        darkImage: storeDark,
        alt: "חנות פרסים במערכת",
        Icon: ShoppingBag,
        highlights: [
          "יתרת מדליות",
          "פרסים זמינים",
          "תגמול על התמדה",
        ],
      },
    ],
  },
  {
    id: "tools",
    eyebrow: "כלי עבודה",
    title: "בתוך אותה מערכת מחכים גם כלי עזר מעשיים לתרגול",
    intro:
      "המערכת לא רק מציגה נתונים, אלא גם עוזרת בפועל בזמן העבודה בבית — דרך טיונר, מטרונום וכלים נוספים.",
    items: [
      {
        id: "tuner",
        title: "טיונר",
        summary:
          "זהו כלי כיוון שמסייע לתלמידה לכוון את הכלי בצורה מדויקת מתוך המערכת עצמה.",
        details:
          "המסך מציג תו, תדירות וסטייה, ומאפשר להפעיל מיקרופון, לכוון A4 ולראות בזמן אמת אם הצליל מדויק או לא.",
        benefit:
          "במקום לחפש כלי חיצוני, הכיוון עצמו קורה מתוך סביבת הלימוד — נגיש, ברור ומיידי.",
        lightImage: tunerLight,
        darkImage: tunerDark,
        alt: "טיונר בתוך מערכת התלמידות",
        Icon: Gauge,
        highlights: [
          "זיהוי תו",
          "תדירות וסטייה",
          "עבודה ישירה עם מיקרופון",
        ],
      },
      {
        id: "aids",
        title: "עזרים",
        summary:
          "האזור הזה מרכז כלי עבודה נוספים לתרגול, ובראשם מטרונום וכלי עזר משלימים.",
        details:
          "המסך מציג סביבת עבודה פעילה עם כמה לשוניות וכלי שליטה, כדי שהתלמידה תוכל לעבוד נכון ומדויק גם בבית, מתוך אותו מרחב מערכת.",
        benefit:
          "המערכת הופכת להיות לא רק מקום למעקב, אלא גם סביבת עבודה מעשית שעוזרת לתרגול עצמו.",
        lightImage: aidsLight,
        darkImage: aidsDark,
        alt: "עזרים לתרגול בתוך המערכת",
        Icon: Wrench,
        highlights: [
          "מטרונום וכלי תרגול",
          "סביבת עבודה אחת",
          "דיוק ועצמאות בבית",
        ],
      },
    ],
  },
];

/* ==========================================================================
   קומפוננטות עזר
   ========================================================================== */

function ThemeAwareImage({
  lightSrc,
  darkSrc,
  alt,
  className = "",
}: {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  className?: string;
}) {
  return (
    <>
      <img
        src={lightSrc}
        alt={alt}
        loading="lazy"
        className={`block w-full dark:hidden ${className}`}
      />
      <img
        src={darkSrc}
        alt={alt}
        loading="lazy"
        className={`hidden w-full dark:block ${className}`}
      />
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-amber-700/80 dark:text-amber-300/80">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-semibold leading-tight text-stone-900 md:text-4xl dark:text-stone-100">
        {title}
      </h2>

      <p className="mt-4 text-base leading-8 text-stone-600 dark:text-stone-300">
        {intro}
      </p>
    </div>
  );
}

function ScreenshotFrame({
  lightSrc,
  darkSrc,
  alt,
}: {
  lightSrc: string;
  darkSrc: string;
  alt: string;
}) {
  return (
    <div className="overflow-hidden rounded-[26px] border border-white/70 bg-white/80 p-3 shadow-[0_25px_80px_-45px_rgba(120,90,40,0.45)] dark:border-white/10 dark:bg-white/5">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-stone-300 dark:bg-stone-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-stone-300 dark:bg-stone-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-stone-300 dark:bg-stone-600" />
        </div>

        <span className="rounded-full border border-amber-200/70 bg-amber-50/80 px-3 py-1 text-[11px] tracking-[0.22em] text-amber-700 dark:border-amber-400/20 dark:bg-amber-500/10 dark:text-amber-300">
          SCREENSHOT
        </span>
      </div>

      <ThemeAwareImage
        lightSrc={lightSrc}
        darkSrc={darkSrc}
        alt={alt}
        className="rounded-[18px] border border-stone-200/70 dark:border-white/10"
      />
    </div>
  );
}

function DemoBlock({
  item,
  reverse = false,
}: {
  item: DemoItem;
  reverse?: boolean;
}) {
  const {
    title,
    summary,
    details,
    benefit,
    lightImage,
    darkImage,
    alt,
    Icon,
    highlights,
  } = item;

  return (
    <div
      className={[
        "grid items-center gap-6 rounded-[30px] border border-white/70 bg-white/70 p-4 shadow-[0_25px_80px_-50px_rgba(120,90,40,0.45)] backdrop-blur md:p-6 dark:border-white/10 dark:bg-white/5",
        "lg:grid-cols-[1.1fr_0.9fr]",
      ].join(" ")}
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <ScreenshotFrame lightSrc={lightImage} darkSrc={darkImage} alt={alt} />
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-200/70 bg-amber-50 text-amber-700 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300">
          <Icon className="h-5 w-5" />
        </div>

        <h3 className="text-2xl font-semibold text-stone-900 dark:text-stone-100">
          {title}
        </h3>

        <div className="mt-5 rounded-[24px] border border-stone-200/70 bg-stone-50/80 p-5 dark:border-white/10 dark:bg-white/5">
          <p className="mb-2 text-sm font-medium tracking-wide text-stone-500 dark:text-stone-400">
            מה רואים כאן
          </p>
          <p className="leading-8 text-stone-700 dark:text-stone-200">
            {summary}
          </p>
          <p className="mt-3 leading-8 text-stone-600 dark:text-stone-300">
            {details}
          </p>
        </div>

        <div className="mt-4 rounded-[24px] border border-amber-200/70 bg-amber-50/70 p-5 dark:border-amber-400/20 dark:bg-amber-500/10">
          <p className="mb-2 text-sm font-medium tracking-wide text-amber-800 dark:text-amber-200">
            למה זה חשוב לתלמידה
          </p>
          <p className="leading-8 text-stone-700 dark:text-stone-200">
            {benefit}
          </p>
        </div>

        <div className="mt-4">
          <p className="mb-3 text-sm font-medium tracking-wide text-stone-500 dark:text-stone-400">
            מה אפשר לעשות כאן
          </p>

          <div className="flex flex-wrap gap-2">
            {highlights.map((point) => (
              <span
                key={point}
                className="rounded-full border border-amber-200/70 bg-white px-3 py-1.5 text-sm text-stone-700 dark:border-amber-400/20 dark:bg-white/5 dark:text-stone-200"
              >
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroPreview() {
  return (
    <div className="mx-auto max-w-[620px]">
      <div className="rounded-[28px] border border-white/70 bg-white/75 p-4 shadow-[0_25px_80px_-45px_rgba(120,90,40,0.45)] backdrop-blur dark:border-white/10 dark:bg-white/5">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.28em] text-amber-700/80 dark:text-amber-300/80">
            students demo
          </p>
          <span className="rounded-full border border-amber-200/70 bg-amber-50 px-3 py-1 text-[11px] text-amber-700 dark:border-amber-400/20 dark:bg-amber-500/10 dark:text-amber-300">
            walkthrough
          </span>
        </div>

        <ThemeAwareImage
          lightSrc={openingLight}
          darkSrc={openingDark}
          alt="תצוגה ראשית של מערכת התלמידות"
          className="rounded-[20px] border border-stone-200/70 dark:border-white/10"
        />
      </div>
    </div>
  );
}

function HeroOrbitInfo() {
  const labels = ["שיעורים", "הודעות", "תרגול", "מדליות", "חנות", "עזרים"];
  const positions = [
    "left-1/2 top-2 -translate-x-1/2",
    "right-0 top-1/2 -translate-y-1/2",
    "left-1/2 bottom-2 -translate-x-1/2",
    "left-0 top-1/2 -translate-y-1/2",
    "left-[14%] top-[18%]",
    "right-[14%] bottom-[18%]",
  ];

  return (
    <div className="relative mx-auto h-[320px] w-[320px] max-w-full">
      <div className="absolute inset-3 rounded-full border border-amber-200/70 dark:border-amber-400/20" />
      <div className="absolute inset-9 rounded-full border border-dashed border-amber-300/60 dark:border-amber-300/20" />

      <div className="absolute inset-[31%] flex items-center justify-center rounded-full border border-white/80 bg-white/85 p-6 text-center shadow-[0_20px_60px_-30px_rgba(120,90,40,0.35)] dark:border-white/10 dark:bg-stone-950/80">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-amber-700/80 dark:text-amber-300/80">
            demo
          </p>
          <p className="mt-2 text-lg font-semibold leading-7 text-stone-900 dark:text-stone-100">
            כך נראית
            <br />
            המערכת מבפנים
          </p>
        </div>
      </div>

      {labels.map((label, index) => (
        <div
          key={label}
          className={`absolute ${positions[index]} rounded-full border border-amber-200/80 bg-white/90 px-4 py-2 text-sm font-medium text-stone-700 shadow-sm dark:border-amber-400/20 dark:bg-stone-900/85 dark:text-stone-200`}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

function QuickNav() {
  const flatItems = demoSections.flatMap((section) => section.items);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="rounded-[24px] border border-white/70 bg-white/65 p-4 shadow-[0_20px_60px_-45px_rgba(120,90,40,0.45)] backdrop-blur dark:border-white/10 dark:bg-white/5">
        <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.28em] text-amber-700/80 dark:text-amber-300/80">
          קפיצה מהירה למסכים
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {flatItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full border border-amber-200/70 bg-amber-50/80 px-4 py-2 text-sm font-medium text-stone-700 transition hover:-translate-y-0.5 hover:bg-amber-100 dark:border-amber-400/20 dark:bg-amber-500/10 dark:text-stone-200 dark:hover:bg-amber-500/15"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function StudentsDemo() {
  return (
    <InnerPageLayout className="pb-24">
      {/* Hero section */}
      <section className="relative overflow-hidden pb-12 pt-8 md:pb-16" dir="rtl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-700/80 dark:text-amber-300/80">
                דמו מערכת התלמידות
              </p>
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
                כך נראית המערכת שמלווה את התלמידה לאורך הדרך
              </h1>
              <div className="space-y-3 text-lg leading-loose text-foreground/85">
                <p>זהו דף הסבר חזותי למערכת עצמה — עם צילומי מסך אמיתיים והסבר ברור ליד כל אחד.</p>
                <p>המטרה כאן היא לא רק להראות איך המערכת נראית, אלא להסביר איך היא תומכת בסדר, שיעורים, הודעות, תרגול, התקדמות וכלי עבודה.</p>
              </div>
              <div className="pt-2">
                <HeroPreview />
              </div>
            </div>
            <div className="flex justify-center">
              <HeroOrbitInfo />
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-16 px-4 pb-6 pt-4 md:space-y-24 md:px-6">
        <AppearOnScroll>
          <QuickNav />
        </AppearOnScroll>

        <AppearOnScroll>
          <section className="mx-auto max-w-5xl rounded-[30px] border border-white/70 bg-white/70 p-6 text-center shadow-[0_25px_80px_-50px_rgba(120,90,40,0.45)] backdrop-blur md:p-8 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-700/80 dark:text-amber-300/80">
              איך לקרוא את הדף
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight text-stone-900 md:text-4xl dark:text-stone-100">
              זהו walkthrough של המערכת — עם צילומי מסך והסבר תמציתי ליד כל אחד
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-stone-600 dark:text-stone-300">
              הדף הזה לא נועד רק להראות עיצוב, אלא להסביר איך המערכת שלך תומכת
              בסדר, תרגול, הודעות, שיעורים, התקדמות וכלי עבודה — באופן נעים,
              מקצועי וברור.
            </p>
          </section>
        </AppearOnScroll>

        {demoSections.map((section) => (
          <section key={section.id} className="scroll-mt-24">
            <AppearOnScroll>
              <div className="mx-auto max-w-6xl">
                <SectionHeading
                  eyebrow={section.eyebrow}
                  title={section.title}
                  intro={section.intro}
                />

                <div className="space-y-8">
                  {section.items.map((item, index) => (
                    <div id={item.id} key={item.id} className="scroll-mt-24">
                      <AppearOnScroll>
                        <DemoBlock item={item} reverse={index % 2 === 1} />
                      </AppearOnScroll>
                    </div>
                  ))}
                </div>
              </div>
            </AppearOnScroll>
          </section>
        ))}

        <AppearOnScroll>
          <section className="mx-auto max-w-6xl rounded-[32px] border border-white/70 bg-white/75 p-6 shadow-[0_25px_80px_-50px_rgba(120,90,40,0.45)] backdrop-blur md:p-8 dark:border-white/10 dark:bg-white/5">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-amber-700/80 dark:text-amber-300/80">
                  חלק מהמעטפת הרחבה
                </p>

                <h2 className="mt-3 text-3xl font-semibold leading-tight text-stone-900 md:text-4xl dark:text-stone-100">
                  המערכת אינה נפרדת מעולם התלמידות —
                  <br />
                  היא ההמשך הישיר שלו
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-8 text-stone-600 dark:text-stone-300">
                  עמוד התלמידות מציג את הגישה, היחס והעולם הרחב של הלימוד.
                  דף הדמו הזה מראה איך אותה מעטפת מקבלת ביטוי מעשי בתוך מערכת
                  שחיה עם התלמידה גם בין שיעור לשיעור.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "מקום אחד ברור לכל מה שקשור בלימוד השוטף",
                  "חיבור בין שיעורים, הודעות, תרגול והישגים",
                  "סדר שמקטין בלבול ומחזק רצף",
                  "סביבה שמחזיקה גם תהליך וגם מוטיבציה",
                ].map((point) => (
                  <div
                    key={point}
                    className="rounded-[24px] border border-amber-200/70 bg-amber-50/70 p-4 dark:border-amber-400/20 dark:bg-amber-500/10"
                  >
                    <p className="leading-7 text-stone-700 dark:text-stone-200">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AppearOnScroll>

        <AppearOnScroll>
          <section className="mx-auto max-w-5xl rounded-[32px] border border-amber-200/70 bg-gradient-to-b from-amber-50/80 via-white to-white px-6 py-10 text-center shadow-[0_25px_80px_-45px_rgba(120,90,40,0.45)] dark:border-amber-400/20 dark:from-amber-500/10 dark:via-stone-950 dark:to-stone-950">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-700/80 dark:text-amber-300/80">
              להמשיך מכאן
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight text-stone-900 md:text-4xl dark:text-stone-100">
              מכאן אפשר לעבור למערכת, לעמוד התלמידות או לפרטים
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-stone-600 dark:text-stone-300">
              הדף הזה נותן מבט מסודר ומוחשי על המערכת שלך. אחרי ההיכרות, אפשר
              להמשיך אל החוויה עצמה או לחזור לעולם הרחב של עמוד התלמידות.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild className="rounded-full">
                <a
                  href="https://tobymusic.lovable.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  כניסה למערכת
                  <ExternalLink className="mr-2 h-4 w-4" />
                </a>
              </Button>

              <Button asChild variant="outline" className="rounded-full">
                <Link to="/students">חזרה לעמוד התלמידות</Link>
              </Button>

              <Button asChild variant="outline" className="rounded-full">
                <Link to="/contact">
                  לפרטים ולהרשמה
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
        </AppearOnScroll>
      </div>
    </InnerPageLayout>
  );
}
