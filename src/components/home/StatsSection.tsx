"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, GraduationCap, Trophy, Calendar } from "lucide-react";

const stats = [
  { icon: Users, label: "Beneficiaries Supported", value: 5000, suffix: "+" },
  { icon: GraduationCap, label: "Students Educated", value: 2500, suffix: "+" },
  { icon: Trophy, label: "Sports Achievements", value: 150, suffix: "+" },
  { icon: Calendar, label: "Years of Service", value: 39, suffix: "+" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2200;
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (step >= steps) {
        clearInterval(timer);
        setCount(target);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} aria-live="polite">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="gradient-primary text-white py-16" aria-labelledby="stats-heading" ref={ref}>
      <h2 id="stats-heading" className="sr-only">Impact statistics</h2>
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/15 flex items-center justify-center">
                <stat.icon size={30} className="text-white" aria-hidden="true" />
              </div>
              <p className="text-4xl lg:text-5xl font-bold mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-green-100 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
