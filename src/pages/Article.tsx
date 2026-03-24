import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { getArticleById, getRelatedArticles } from "@/data/articles";
import { Facebook, Twitter, Linkedin, Link2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;
  
  if (!article) {
    return <Navigate to="/404" replace />;
  }

  const relatedArticles = getRelatedArticles(article.id);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  const getCategoryClass = (cat: string) => {
    const normalized = cat.toLowerCase();
    if (normalized.includes("financ")) return "tag-financing";
    if (normalized.includes("lifestyle")) return "tag-lifestyle";
    if (normalized.includes("community")) return "tag-community";
    if (normalized.includes("wellness")) return "tag-wellness";
    if (normalized.includes("travel")) return "tag-travel";
    if (normalized.includes("creativ")) return "tag-creativity";
    if (normalized.includes("growth")) return "tag-growth";
    return "tag-lifestyle";
  };

  return (
    <div className="min-h-screen bg-background page-enter">
      <Header />
      
      <main>
        {/* Back Navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to articles
          </a>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] mb-10">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-28 relative z-10">
          {/* Article Header */}
          <div className="mb-10 animate-slide-up">
            <div className="flex items-center gap-3 mb-5">
              <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getCategoryClass(article.category)}`}>
                {article.category}
              </span>
              <span className="text-sm text-muted-foreground">{article.date}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{article.readTime} read</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-7">
              {article.subtitle}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between border-t border-b border-border py-5">
              <div className="flex items-center gap-4">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <p className="font-semibold text-sm">{article.author.name}</p>
                  <p className="text-xs text-muted-foreground">{article.author.bio}</p>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="hidden md:flex items-center gap-2">
                {[
                  { icon: Link2, onClick: handleCopyLink, label: "Copy link" },
                ].map((btn) => (
                  <button
                    key={btn.label}
                    onClick={btn.onClick}
                    className="w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center"
                    aria-label={btn.label}
                  >
                    <btn.icon className="w-4 h-4" />
                  </button>
                ))}
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-14 animate-slide-up stagger-2">
            <p className="text-base leading-relaxed text-muted-foreground mb-7">
              {article.content.introduction}
            </p>

            {article.content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold mb-3">{section.heading}</h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="mt-10 p-6 rounded-xl bg-card border-l-4 border-primary shadow-soft">
              <p className="text-base leading-relaxed italic text-foreground">
                {article.content.conclusion}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-10 pb-10 border-b border-border">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs bg-muted text-foreground font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile Share Buttons */}
          <div className="md:hidden mb-10 pb-10 border-b border-border">
            <p className="text-sm font-semibold mb-3">Share this article</p>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="flex-1 py-2.5 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Link2 className="w-4 h-4" />
                Copy link
              </button>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mb-14 rounded-xl card-brand p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Enjoyed this article?</h3>
            <p className="text-muted-foreground mb-5 text-sm">
              Subscribe to receive more insights like this directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 font-semibold text-sm">
                Subscribe
              </Button>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="bg-muted py-14 animate-fade-in">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 animate-slide-up">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle, index) => (
                <div key={relatedArticle.id} className={`animate-slide-up stagger-${Math.min(index + 1, 3)}`}>
                  <ArticleCard {...relatedArticle} size="small" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Article;
