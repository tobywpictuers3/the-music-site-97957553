import InnerPageLayout from "@/components/InnerPageLayout";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Travel = () => {
  const travelArticles = articles.filter(article => 
    article.category.toLowerCase() === "travel"
  );

  return (
    <InnerPageLayout title="טיולים וחוויות" description="מסעות מעוררי השראה, תובנות תרבותיות ותיירות מודעת.">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl card-brand p-8 md:p-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-5">הפילוסופיה שלנו</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                טיול הוא יותר מביקור במקומות חדשים — זו פתיחות לפרספקטיבות חדשות, תרבויות 
                ודרכי חיים. אנו מאמינים בטיולים איטיים ומכוונים שמעדיפים קשרים משמעותיים.
              </p>
            </div>
          </div>
        </section>
      </div>
    </InnerPageLayout>
  );
};

export default Travel;
