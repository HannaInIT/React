import { useState, useEffect, useDebugValue } from "react";

export function useWindowSize(label = "Window size") {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useDebugValue(`${label}: ${windowSize.width} x ${windowSize.height}`);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export function useWithinWindowWidth(minWidth, maxWidth) {
  const { width } = useWindowSize();
  const isWithin = width && width >= minWidth && width <= maxWidth;

  useDebugValue(
    { minWidth, maxWidth, isWithin },
    ({ minWidth, maxWidth, isWithin }) =>
      `(min: ${minWidth}px, max: ${maxWidth}px) => ${isWithin}`
  );

  return isWithin;
}
