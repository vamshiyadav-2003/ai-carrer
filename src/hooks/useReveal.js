import { useEffect, useRef, useState } from "react";

/**
 * useReveal
 * Tracks whether an element has scrolled into the viewport, once.
 * Used to trigger the "fade-up" scroll-reveal animation on sections
 * and cards without pulling in an animation library.
 *
 * Returns a ref to attach to the element, and a boolean that flips
 * to true the first time the element becomes visible.
 */
export default function useReveal({ threshold = 0.2 } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If the browser doesn't support IntersectionObserver, just show content.
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node); // reveal once, don't re-trigger
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
