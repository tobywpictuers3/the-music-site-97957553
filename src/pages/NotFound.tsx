import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background page-enter">
      <div className="text-center animate-slide-up">
        <h1 className="mb-4 text-6xl font-bold shimmer-gold">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="inline-block px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:scale-105 text-sm">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
