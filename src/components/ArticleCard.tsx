import { ArrowUpRight } from "lucide-react";

interface ArticleCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  size?: "small" | "large";
}

const ArticleCard = ({ id, title, category, date, image, size = "small" }: ArticleCardProps) => {
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
    <a
      href={`/article/${id}`}
      className={`group relative block rounded-xl overflow-hidden card-hover ${
        size === "large" ? "col-span-1 md:col-span-2 row-span-2" : ""
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        
        {/* Content overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          {/* Top section - Category and Date */}
          <div className="flex items-start justify-between">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${getCategoryClass(category)}`}>
              {category}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-medium text-white border border-white/20">
              {date}
            </span>
          </div>

          {/* Bottom section - Title and Arrow */}
          <div className="flex items-end justify-between gap-4">
            <div className="flex-1">
              <span className="text-white/40 text-xs font-medium tracking-widest uppercase block mb-2">{id}</span>
              <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold leading-tight">
                {title}
              </h3>
            </div>
          </div>
        </div>

        {/* Floating circular arrow button */}
        <div className="absolute bottom-5 right-5 floating-button opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
