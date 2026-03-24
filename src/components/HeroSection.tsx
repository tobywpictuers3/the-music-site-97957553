import { Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative rounded-2xl overflow-hidden bg-card border border-border my-8 hover-sparkle animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 md:gap-10 p-6 md:p-10 lg:p-14">
        {/* Left side - Image */}
        <div className="relative aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden animate-scale-in shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&q=80"
            alt="Hero"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight animate-slide-down">
              Journey Through Life's{" "}
              <span className="shimmer-gold">Spectrum</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl animate-slide-up stagger-1">
              Welcome to Perspective's Blog: A Realm of Reflection, Inspiration, and Discovery. Where Words Illuminate
              Paths of Meaning and Thoughts Unravel the Mysteries of Life's Spectrum.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-5 pt-2 animate-slide-up stagger-2">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-5 md:px-10 md:py-6 text-base font-semibold transition-all hover:scale-105 w-full sm:w-auto shadow-soft">
              Join Now
            </Button>

            <div className="flex items-center gap-3">
              <a
                href="#instagram"
                className="w-11 h-11 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                className="w-11 h-11 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                className="w-11 h-11 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
