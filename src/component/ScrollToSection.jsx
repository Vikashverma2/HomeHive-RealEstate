import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", ""); // Remove #
      const section = document.getElementById(sectionId);

      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200); // Delay to ensure rendering is done
      }
    }
  }, [location]);

  return null;
};

export default ScrollToSection;
