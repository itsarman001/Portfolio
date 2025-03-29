import { useScrollToTop } from "@/hooks";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = useScrollToTop();
  return (
    <footer className="mx-auto flex w-fit cursor-pointer flex-col items-center gap-0 py-10 text-muted-foreground">
      <button
        onClick={() => scrollToTop()}
        variant="outline"
        className="flex items-center gap-1"
      >
        Elevate to the top
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};
