import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (anchor link), try to scroll to that element.
    if (hash) {
      // small timeout to allow the element to render
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
          return;
        }
        // fallback to top if anchor not found
        window.scrollTo(0, 0);
      }, 50);
      return;
    }

    // Normal route change -> scroll to top
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
