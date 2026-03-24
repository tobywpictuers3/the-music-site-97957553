import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type InnerPageLayoutProps = {
  title?: string | string[];
  description?: string;
  children?: ReactNode;
  className?: string;
  hidePresenter?: boolean;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function InnerPageLayout({
  children,
  className = "",
}: InnerPageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className={cn("relative flex-1", className)}>
        {children}
      </main>

      <Footer />
    </div>
  );
}
