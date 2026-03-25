import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface StatsCounterProps {
  stats: { value: number; suffix?: string; label: string }[];
}

const CounterItem = ({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) => {
  const { count, ref } = (() => {
    // inline hook logic
    const { useEffect, useRef, useState } = require("react");
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]: IntersectionObserverEntry[]) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = Date.now();
            const tick = () => {
              const elapsed = Date.now() - start;
              const progress = Math.min(elapsed / 2000, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(eased * value));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        },
        { threshold: 0.5 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [value]);

    return { count, ref };
  })();

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-heading font-bold text-gradient mb-2">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

const StatsCounter = ({ stats }: StatsCounterProps) => {
  return (
    <AnimatedSection className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      {stats.map((stat, i) => (
        <CounterItem key={i} {...stat} />
      ))}
    </AnimatedSection>
  );
};

export default StatsCounter;
