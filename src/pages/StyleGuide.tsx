import InnerPageLayout from "@/components/InnerPageLayout";
import { Button } from "@/components/ui/button";

const StyleGuide = () => {
  return (
    <InnerPageLayout title="מדריך עיצוב" description="תצוגה של מערכת העיצוב, הטיפוגרפיה ודפוסי הרכיבים.">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Typography */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8">טיפוגרפיה</h2>
          <div className="space-y-6 bg-card border border-border rounded-2xl p-8">
            <div>
              <h1 className="text-5xl font-bold mb-2">כותרת 1</h1>
              <p className="text-xs text-muted-foreground">Playfair Display Bold, 3rem</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">כותרת 2</h2>
              <p className="text-xs text-muted-foreground">Playfair Display Bold, 2.25rem</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">כותרת 3</h3>
              <p className="text-xs text-muted-foreground">Playfair Display Bold, 1.875rem</p>
            </div>
            <div>
              <p className="text-lg mb-2">גוף גדול — טקסט פסקה בגודל גדול יותר להדגשה או תוכן מבוא.</p>
              <p className="text-xs text-muted-foreground">Assistant Regular, 1.125rem</p>
            </div>
            <div>
              <p className="mb-2">גוף רגיל — טקסט פסקה סטנדרטי המשמש באתר לקריאה נוחה.</p>
              <p className="text-xs text-muted-foreground">Assistant Regular, 1rem</p>
            </div>
            <div>
              <p className="text-sm mb-2">גוף קטן — משמש לכיתובים, מטא-נתונים ומידע משלים.</p>
              <p className="text-xs text-muted-foreground">Assistant Regular, 0.875rem</p>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8">פלטת צבעים</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "רקע", cls: "bg-background border border-border" },
              { name: "טקסט", cls: "bg-foreground" },
              { name: "ראשי (זהב)", cls: "bg-primary" },
              { name: "משני", cls: "bg-secondary" },
              { name: "הדגשה (בורדו)", cls: "bg-accent" },
              { name: "מעומעם", cls: "bg-muted" },
              { name: "כרטיס", cls: "bg-card border border-border" },
              { name: "הרסני", cls: "bg-destructive" },
            ].map((c) => (
              <div key={c.name} className="space-y-2">
                <div className={`h-20 rounded-xl ${c.cls}`}></div>
                <p className="text-xs font-medium">{c.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8">כפתורים</h2>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">ראשי (זהב)</Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">הדגשה (בורדו)</Button>
            <Button variant="secondary" className="rounded-full">משני</Button>
            <Button variant="outline" className="rounded-full">קו מתאר</Button>
            <Button variant="ghost">רוח</Button>
            <Button variant="destructive" className="rounded-full">הרסני</Button>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8">כרטיסים</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-card border border-border p-6 hover-sparkle">
              <h3 className="text-lg font-bold font-serif mb-2">כרטיס עם נצנוץ</h3>
              <p className="text-sm text-muted-foreground">
                כרטיס זה כולל את אפקט ה-hover-sparkle משפת העיצוב של Toby Music.
              </p>
            </div>
            <div className="rounded-2xl card-brand p-6">
              <h3 className="text-lg font-bold font-serif mb-2">כרטיס מותג</h3>
              <p className="text-sm text-muted-foreground">
                כרטיס עם מסגרת זהב לתוכן מודגש או מיוחד.
              </p>
            </div>
          </div>
        </section>

        {/* Effects */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8">אפקטים מיוחדים</h2>
          <div className="space-y-6 bg-card border border-border rounded-2xl p-8">
            <div>
              <h3 className="text-3xl font-bold shimmer-gold mb-2">טקסט זהב נוצץ</h3>
              <p className="text-xs text-muted-foreground">אפקט טקסט גרדיאנט זהב מונפש</p>
            </div>
            <div>
              <div className="inline-block glow-gold rounded-2xl bg-card border border-border p-6">
                <p className="text-sm font-medium">אפקט זוהר זהב</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </InnerPageLayout>
  );
};

export default StyleGuide;
