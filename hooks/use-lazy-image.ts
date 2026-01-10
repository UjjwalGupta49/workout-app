import { useState, useEffect, useRef } from "react";

interface UseLazyImageOptions {
  rootMargin?: string; // e.g., "100%" to start loading 1 viewport ahead
  threshold?: number;
}

export function useLazyImage(
  src: string | undefined,
  options: UseLazyImageOptions = {}
) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !src) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        rootMargin: options.rootMargin || "100%", // Load 1 viewport ahead
        threshold: options.threshold || 0,
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [src, options.rootMargin, options.threshold]);

  return { ref, isVisible, isLoaded, setIsLoaded };
}
