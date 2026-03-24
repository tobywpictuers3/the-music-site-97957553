import InnerPageLayout from "@/components/InnerPageLayout";
import { Mail } from "lucide-react";

const Authors = () => {
  const authors = [
    {
      name: "Emma Thompson",
      role: "עורכת בריאות",
      bio: "אמה היא מאמנת בריאות ותזונאית מוסמכת עם למעלה מ-10 שנות ניסיון בסיוע לאנשים ליצור שגרות טיפוח עצמי בנות קיימא.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      articles: 24,
    },
    {
      name: "Marcus Chen",
      role: "כותב טיולים",
      bio: "לאחר שביקר ביותר מ-60 מדינות, מרקוס מתמחה בטיולים איטיים והיטמעות תרבותית. הכתיבה שלו חוקרת כיצד טיולים יכולים להיות הן מעצבים והן בני קיימא.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      articles: 31,
    },
    {
      name: "Sofia Rodriguez",
      role: "טורית יצירתיות",
      bio: "סופיה היא אמנית רב-תחומית ויועצת יצירתית שעוזרת ליחידים וצוותים לפתוח את הפוטנציאל היצירתי שלהם.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      articles: 19,
    },
    {
      name: "David Kim",
      role: "כותב צמיחה אישית",
      bio: "דוד משלב תובנות מפסיכולוגיה, פילוסופיה וניסיון אישי כדי לחקור מה משמעות לחיות בכוונה.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      articles: 27,
    },
  ];

  return (
    <InnerPageLayout title="הצוות שלנו" description="הקולות מאחורי Toby Music — כותבים, מוזיקאים ויוצרים שמביאים פרספקטיבות מגוונות.">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="grid md:grid-cols-2 gap-6 mb-14">
          {authors.map((author, index) => (
            <div key={author.name} className={`rounded-2xl bg-card border border-border p-7 hover-sparkle animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
              <div className="flex items-start gap-5 mb-5">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-20 h-20 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-serif mb-1">{author.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-2">{author.role}</p>
                  <p className="text-xs text-muted-foreground">{author.articles} מאמרים פורסמו</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {author.bio}
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="/contact"
                  className="w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </section>

        <section className="text-center py-10 rounded-2xl card-brand">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">רוצים לתרום?</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
            אנו תמיד מחפשים קולות מחושבים שיצטרפו לקהילה שלנו. אם יש לכם תובנות 
            לשתף, נשמח לשמוע מכם.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:scale-105 text-sm"
          >
            צרו קשר
          </a>
        </section>
      </div>
    </InnerPageLayout>
  );
};

export default Authors;
