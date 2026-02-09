import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 506, suffix: "ha", label: "Protected Land" },
  { value: 10, suffix: "", label: "Threatened Species" },
  { value: 1, suffix: "M+", label: "Acre Wollemi & Yengo Wilderness Corridor" },
  { value: 11373, suffix: "", label: "Biodiversity Credits" },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-forest-gradient">
      <div className="container-wide px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground">
            Conservation by the Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <div className="text-primary-foreground/70 text-sm md:text-base tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
