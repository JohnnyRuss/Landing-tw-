import { useEffect, useState } from "react";

function getDimetion(): { width: number } {
  const { innerWidth: width } = window;

  return { width };
}

function useWindowDimention(): { width: number } {
  const [width, setWidth] = useState<number>(NaN);

  function handleWindowResize() {
    const { width } = getDimetion();
    setWidth(width);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
  }, [width]);

  return { width };
}

export default useWindowDimention;
