import { useState } from "react";

import { useToast } from "@/components/ui/use-toast";

type Props = {
  source?: string;
  onSuccess?: () => void;
};

const NewsletterSignupForm = (_props: Props) => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "ההרשמה עדיין לא נשלחה",
      description: "הניוזלטר עדיין לא מחובר לשרת, לכן הכתובת נשארה בשדה ולא נשמרה עדיין.",
      variant: "destructive",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="כתובת מייל…"
        required
        className="w-full rounded-xl border border-border bg-background px-5 py-3 text-sm outline-none focus:border-primary"
        dir="rtl"
      />
      <button
        type="submit"
        className="rounded-xl bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
      >
        הצטרפות
      </button>
    </form>
  );
};

export default NewsletterSignupForm;
