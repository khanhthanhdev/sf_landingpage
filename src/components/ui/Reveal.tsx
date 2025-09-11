"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  as?: React.ElementType;
  className?: string;
  threshold?: number;
  children: React.ReactNode;
};

export default function Reveal({
  as: Tag = "div",
  className,
  threshold = 0.2,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const mql =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    if (mql?.matches) {
      setRevealed(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setRevealed(true);
        });
      },
      { threshold }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref as React.MutableRefObject<HTMLElement>}
      className={className}
      data-revealed={revealed}
    >
      {children}
    </Tag>
  );
}
