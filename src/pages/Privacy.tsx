import InnerPageLayout from "@/components/InnerPageLayout";

const Privacy = () => {
  return (
    <InnerPageLayout title="מדיניות פרטיות" description="עדכון אחרון: מרץ 2025" hidePresenter>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none space-y-8 bg-card border border-border rounded-2xl p-8 md:p-10">
          <section>
            <h2 className="text-xl font-bold font-serif mb-3">הקדמה</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ב-Toby Music, אנו מתייחסים לפרטיותכם ברצינות. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, 
              משתמשים, חושפים ומגינים על המידע שלכם בעת ביקור באתר שלנו והרשמה לניוזלטר שלנו.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3">מידע שאנו אוספים</h2>
            <h3 className="text-base font-semibold mb-2 mt-5">מידע אישי</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              אנו עשויים לאסוף מידע אישי שאתם מוסרים מרצונכם כאשר אתם:
            </p>
            <ul className="list-disc pr-5 space-y-1.5 text-sm text-muted-foreground">
              <li>נרשמים לניוזלטר שלנו</li>
              <li>יוצרים איתנו קשר דרך טופס יצירת הקשר</li>
              <li>מגיבים על תכנים באתר</li>
              <li>יוצרים חשבון באתר שלנו</li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              מידע זה עשוי לכלול את שמכם, כתובת הדואר האלקטרוני שלכם, וכל מידע נוסף שתבחרו לספק.
            </p>

            <h3 className="text-base font-semibold mb-2 mt-5">מידע שנאסף אוטומטית</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              בעת ביקור באתר שלנו, אנו עשויים לאסוף באופן אוטומטי מידע מסוים אודות המכשיר שלכם, 
              כולל מידע על דפדפן האינטרנט, כתובת ה-IP, אזור הזמן וחלק מהעוגיות 
              המותקנות במכשירכם.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3">כיצד אנו משתמשים במידע שלכם</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">אנו משתמשים במידע שאנו אוספים כדי:</p>
            <ul className="list-disc pr-5 space-y-1.5 text-sm text-muted-foreground">
              <li>לשלוח לכם את הניוזלטר ותקשורת שיווקית</li>
              <li>להגיב להערות ושאלות שלכם</li>
              <li>לשפר את האתר והתכנים שלנו</li>
              <li>לנתח דפוסי שימוש ומגמות</li>
              <li>להגן מפני פעילות הונאה או בלתי חוקית</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3">עוגיות וטכנולוגיות מעקב</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              אנו משתמשים בעוגיות וטכנולוגיות מעקב דומות כדי לעקוב אחר פעילות באתר שלנו ולאחסן 
              מידע מסוים. ניתן להורות לדפדפן שלכם לסרב לכל העוגיות או לציין מתי עוגייה נשלחת.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3">אבטחת מידע</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              אנו מיישמים אמצעי אבטחה טכניים וארגוניים מתאימים כדי להגן על המידע האישי שלכם. 
              עם זאת, אף שיטת העברה דרך האינטרנט אינה מאובטחת ב-100%.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3">הזכויות שלכם</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              בהתאם למיקומכם, ייתכן שיש לכם זכויות מסוימות בנוגע למידע האישי שלכם:
            </p>
            <ul className="list-disc pr-5 space-y-1.5 text-sm text-muted-foreground">
              <li>הזכות לגשת למידע האישי שלכם</li>
              <li>הזכות לתיקון מידע לא מדויק</li>
              <li>הזכות למחיקת המידע האישי שלכם</li>
              <li>הזכות לביטול הסכמה</li>
              <li>הזכות לניידות מידע</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3">שירותי צד שלישי</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              האתר שלנו עשוי להכיל קישורים לאתרי צד שלישי. איננו אחראים לנוהלי הפרטיות 
              של אתרי צד שלישי אלה.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3">פרטיות ילדים</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              האתר שלנו אינו מיועד לילדים מתחת לגיל 13. איננו אוספים ביודעין 
              מידע אישי מילדים מתחת לגיל 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3">שינויים למדיניות פרטיות זו</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              אנו עשויים לעדכן את מדיניות הפרטיות שלנו מעת לעת. נודיע לכם על כל שינוי 
              על ידי פרסום מדיניות הפרטיות החדשה בעמוד זה.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3">צור קשר</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              אם יש לכם שאלות בנוגע למדיניות פרטיות זו, אנא צרו עימנו קשר:
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              אימייל: toby.musicartist@gmail.com<br />
              כתובת: צירלסון 7, בני ברק
            </p>
          </section>
        </div>
      </div>
    </InnerPageLayout>
  );
};

export default Privacy;
