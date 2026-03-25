

## סיכום הבעיות

שלוש בעיות מרכזיות שוברות את הבנייה:

### 1. `orbit.utils.ts` — פונקציות חיוניות נמחקו
הקובץ הוחלף בגרסה מצומצמת שמכילה רק `normalizeAngle` ו-`getAvatarByAngle`, ומייבאת `AVATAR_SECTORS` שלא קיים. ארבע פונקציות שנמחקו עדיין נדרשות ב-`CircleOrbit.tsx` וב-`InnerPageOrbitHero.tsx`:
- `angleFromTopClockwise`
- `buildResolvedPresenterAssets`
- `preloadImages`
- `resolveAssetByAngle`

### 2. `InnerPageOrbitHero.tsx` — imports שבורים
הקובץ נמצא ב-`src/components/brand/` אבל מייבא מנתיבים יחסיים כמו `./OrbitTopicButton` — שקיימים רק ב-`src/components/orbit/`.

### 3. `InnerPageOrbitHero.tsx` — הוחלף בטעות עם תוכן של `CircleOrbit`
הקומפוננטה אמורה להיות **עטיפת הירו** שמקבלת props כמו `eyebrow`, `title[]`, `intro[]`, `heroId`, `support`, `compactLabel`, `floatingMessages`, `reverse`, ומציגה טקסט + אורביט + אופציונלית `CompactPresenterRail`. במקום זה, היא עכשיו עותק של `CircleOrbit` שלא מקבל אף אחד מה-props האלה.

6 דפים נשברים: About, Contact, Orchestras, Performances, Students, blog.

---

## תוכנית תיקון

### שלב 1: שחזור `orbit.utils.ts`
להחזיר את כל הפונקציות שנמחקו: `angleFromTopClockwise`, `resolvePoseFromAngle`, `buildResolvedPresenterAssets`, `resolveAssetByAngle`, `preloadImages`. להסיר את ה-import השבור של `AVATAR_SECTORS` ולהחזיר את ה-import של `ANGLE_SECTORS` ואת הטיפוסים הנדרשים.

### שלב 2: שכתוב `InnerPageOrbitHero.tsx`
לבנות מחדש את הקומפוננטה כעטיפת הירו שמשלבת:
- טקסט (eyebrow, title, intro, support) — בדומה ל-`InnerPageHero`
- `CircleOrbit` מ-`src/components/orbit/CircleOrbit`
- `CompactPresenterRail` (כשיש `heroId` ו-`compactLabel`)

Props שצריך לתמוך בהם (לפי השימוש בכל 6 הדפים):
`eyebrow`, `title: string[]`, `intro: string[]`, `support?: ReactNode`, `orbitItems`, `presenterAssets`, `activeOrbitId`, `presenterAlt`, `onOrbitItemClick`, `center?: ReactNode`, `reverse?: boolean`, `heroId?: string`, `compactLabel?: string`, `floatingMessages?: FloatingBubbleMessage[]`

ה-imports יפנו לנתיבים הנכונים: `@/components/orbit/CircleOrbit`, `@/components/orbit/CompactPresenterRail`, `@/components/orbit/orbit.types`.

### שלב 3: אימות
לוודא שאין שגיאות בנייה נוספות.

---

### פרטים טכניים

קבצים לעריכה:
- `src/components/orbit/orbit.utils.ts` — שחזור 4 פונקציות + תיקון imports
- `src/components/brand/InnerPageOrbitHero.tsx` — שכתוב מלא כעטיפת הירו

אין צורך לגעת ב-6 דפי הצרכן (About, Contact, Orchestras, Performances, Students, blog) — ה-API שהם משתמשים בו הוא הנכון, רק הקומפוננטה צריכה לתמוך בו.

