import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const Section = ({ children, className = "", id }: SectionProps) => (
  <section id={id} className={`mx-auto max-w-[110rem] px-4 py-16 md:px-8 md:py-20 ${className}`}>
    {children}
  </section>
);

export default Section;
