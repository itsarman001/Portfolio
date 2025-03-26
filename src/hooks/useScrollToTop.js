import { useCallback } from "react";

export const useScrollToTop = () =>
  useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
