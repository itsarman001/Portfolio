import { useCallback } from "react";

export const useNavigateTo = () => {
  return useCallback((idOrUrl, isExternal = false) => {
    if (!idOrUrl) return;

    if (isExternal && idOrUrl.startsWith("http")) {
      window.open(idOrUrl, "_blank", "noopener,noreferrer");
      return;
    }

    const elementId = idOrUrl.startsWith("#") ? idOrUrl.substring(1) : idOrUrl;
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);
};
