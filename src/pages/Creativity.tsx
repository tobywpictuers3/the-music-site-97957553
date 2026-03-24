import InnerPageLayout from "@/components/InnerPageLayout";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Creativity = () => {
  const creativityArticles = articles.filter(article => 
    article.category.toLowerCase() === "creativity"
  );

  return (
    <InnerPageLayout title="יצירתיות וביטוי" description="גלו את הפוטנציאל היצירתי שלכם ואת אמנות הביטוי העצמי האותנטי.">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativityArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl card-brand p-8 md:p-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-5">טיפוח הרוח היוצרת</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                יצירתיות אינה שמורה רק לאמנים — היא יכולת אנושית בסיסית שמעשירה כל תחום בחיים. 
                בין אם אתם כותבים, מעצבים, פותרים בעיות, או פשוט מדמיינים מחדש את השגרה, 
                חשיבה יצירתית פותחת דלתות לחדשנות ולהגשמה.
              </p>
            </div>
          </div>
        </section>
      </div>
    </InnerPageLayout>
  );
};

export default Creativity;
