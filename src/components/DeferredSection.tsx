import React, { useEffect, useState, useRef } from "react";

export function DeferredSection({
  children,
  idleTimeout = 3000,
}: {
  children: React.ReactNode;
  idleTimeout?: number;
}) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          if ("requestIdleCallback" in window) {
            requestIdleCallback(() => setMounted(true), { timeout: idleTimeout });
          } else {
            setTimeout(() => setMounted(true), 100);
          }
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [idleTimeout]);

  return <div ref={ref}>{mounted ? children : null}</div>;
}
