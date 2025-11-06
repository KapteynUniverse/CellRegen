import { useEffect, useRef, useState, useCallback } from "react";

export function useAutoCarousel(length: number, interval: number) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const clear = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const start = useCallback(() => {
    clear();
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, interval);
  }, [clear, length, interval]);

  const manualSetIndex = (updater: (prev: number) => number) => {
    clear();
    setIndex(updater);
    setTimeout(start, 500);
  };

  useEffect(() => {
    start();
    return clear;
  }, [start, clear]);

  return [index, manualSetIndex] as const;
}
