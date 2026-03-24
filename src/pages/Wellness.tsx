import InnerPageLayout from "@/components/InnerPageLayout";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Wellness = () => {
  const wellnessArticles = articles.filter(article => 
    article.category.toLowerCase() === "wellness"
  );

  return (
    <InnerPageLayout title="בריאות ואיכות חיים" description="תובנות, שיטות ואסטרטגיות לטיפוח הגוף, הנפש והרוח.">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wellnessArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl card-brand p-8 md:p-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-5">למה בריאות חשובה</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                בריאות היא לא רק בריאות פיזית — היא יצירת הרמוניה בין גוף, נפש ורוח. 
                בעולם המהיר שלנו, הקדשת זמן לטיפוח עצמי אינה מותרות; היא חיונית לחיים בני קיימא.
              </p>
              <p>
                באמצעות טיפוח עצמי מחושב, אנו יכולים לבנות חוסן, לשפר את הקשרים שלנו, לשפר את 
                הפרודוקטיביות שלנו, ובסופו של דבר, לחיות חיים מספקים יותר.
              </p>
            </div>
          </div>
        </section>
      </div>
    </InnerPageLayout>
  );
};

export default Wellness;
