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
      <style>{`
        .inner-page-main {
          padding-top: 92px;
          transition: padding 300ms ease;
        }

        .inner-page-main:has(.orbit-page-shell) {
          padding-top: 0px;
        }
      `}</style>

      <Header />

      <main
        className={cn("inner-page-main relative flex-1", className)}
        style={{ paddingInlineStart: "var(--page-rail-offset, 0px)" }}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}
