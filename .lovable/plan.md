
מטרת התיקון: להחזיר תצוגה מקדימה פעילה, לא רק build תקין.

מה מצאתי עכשיו:
1. הבעיה המרכזית שעדיין שוברת את ה-preview היא ב-`src/pages/StudentsDemo.tsx`.
   הקומפוננטה `InnerPageLayout` מקבלת רק:
   `title`, `description`, `children`, `className`, `hidePresenter`
   אבל ב-`StudentsDemo` עדיין מועברים אליה props לא חוקיים:
   `eyebrow`, `intro`, `presenter`, `circle`.
   זה תואם בדיוק לסוג השגיאה שיכול להפיל את Vite/TypeScript ולכן גם את התצוגה המקדימה.

2. נתיבי התמונות כרגע נראים תקינים לפי התיקיות שקראתי:
   `src/assets/students-demo/light`
   `src/assets/students-demo/dark`
   והשמות הקיימים תואמים לגרסה הנוכחית של ה-imports.

3. `CircleOrbit` כבר כולל `center?: ReactNode` בטיפוס, לכן זו כבר לא נראית כסיבת הכשל הראשית כרגע.
   עם זאת, ה-prop עדיין לא נשלף מה-destructuring ולא מוצג בפועל, אז זה תיקון משלים ולא blocker לבנייה.

תוכנית תיקון:
1. לתקן את `StudentsDemo.tsx`
   - להסיר מ-`InnerPageLayout` את כל ה-props הלא נתמכים.
   - להשאיר רק props חוקיים.
   - להעביר את תוכן ההירו לאחד משני מסלולים:
     - או לבנות אותו כ-children רגילים בתוך `InnerPageLayout`
     - או להשתמש ב-`InnerPageOrbitHero` לפני שאר תוכן הדף, לפי הדפוס שכבר קיים בדפים אחרים כמו `Students.tsx` ו-`Orchestras.tsx`.

2. ליישר את מבנה הדף עם הפטרן הקיים בפרויקט
   - להשתמש במבנה:
     `InnerPageLayout` -> hero component -> sections/content
   - כך נמנע props מומצאים ונחזור למבנה שכבר עובד בשאר הדפים.

3. להשלים את `CircleOrbit`
   - להוסיף destructuring של `center`
   - ואם צריך, גם לרנדר אותו במרכז המעגל
   - זה לא כנראה שובר build כרגע, אבל יסגור חוסר עקביות בין `InnerPageOrbitHero` ל-`CircleOrbit`.

4. לבצע בדיקת שאריות לשגיאות preview
   - לחפש עוד שימושים דומים של props לא חוקיים
   - לבדוק שאין עוד import שבור או mismatch של extensions/שמות קבצים
   - לוודא שאין מנגנון cache/service worker שמפריע; כרגע לא מצאתי שום registration של service worker בפרויקט, לכן זה פחות חשוד מהשגיאה ב-`StudentsDemo`.

תוצאה צפויה אחרי היישום:
- שרת הפיתוח יחזור להיטען
- ה-live preview יחזור להתעדכן
- דף `StudentsDemo` יעבוד בלי לשבור את כל סביבת התצוגה המקדימה

פרטים טכניים:
- קבצים עיקריים:
  - `src/pages/StudentsDemo.tsx`
  - `src/components/InnerPageLayout.tsx`
  - `src/components/orbit/CircleOrbit.tsx`
  - להשוואת דפוס עבודה:
    - `src/pages/Students.tsx`
    - `src/pages/Orchestras.tsx`

הערה חשובה:
מהבדיקה הנוכחית, אני כן יודע מה הבעיה העיקרית: `StudentsDemo` עדיין משתמש ב-API לא קיים של `InnerPageLayout`, וזה כרגע החשוד מספר 1 לכשל התצוגה המקדימה.
