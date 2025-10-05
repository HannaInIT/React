import { useState, useEffect, useDebugValue } from "react";

function useWindowSize(label = "Window size") {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const getScreenType = (width) => {
    if (width > 1000) return "big";
    if (width < 700) return "small";
    return "medium";
  };

  const screenType = getScreenType(windowSize.width);

  useDebugValue(
    `${label}: ${windowSize.width}x ${windowSize.height} (${screenType})`
  );

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { ...windowSize, screenType };
}

export default useWindowSize;
