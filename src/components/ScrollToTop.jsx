import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    if (typeof window !== "undefined") {
      // Use standard behavior values for broad browser support
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default ScrollToTop;


