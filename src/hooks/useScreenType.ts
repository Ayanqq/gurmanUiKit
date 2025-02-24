import { useState, useEffect } from "react";

const getScreenType = (width: number) => {
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

const useScreenType = () => {
  const [screenType, setScreenType] = useState(
    getScreenType(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenType(getScreenType(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenType;
};

export default useScreenType;
