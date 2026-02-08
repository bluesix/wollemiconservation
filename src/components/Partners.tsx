import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, CheckCircle, Building2 } from "lucide-react";

const accreditations = [
  {
    name: "NSW Biodiversity Conservation Trust",
    description: "Registered Biodiversity Stewardship Site",
    icon: Shield,
  },
  {
    name: "NSW Government",
    description: "Biodiversity Offset Scheme Compliant",
    icon: Building2,
  },
  {
    name: "Biodiversity Assessment Method",
    description: "BAM 2020 Accredited Assessment",
    icon: Award,
  },
  {
    name: "Ecological Consultants Association",
    description: "Survey by Accredited Assessors",
    icon: CheckCircle,
  },
];

export const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-muted/30 border-y border-border">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
            Accreditations & Compliance
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-3">
            Trusted Conservation Framework
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {accreditations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mb-4 group-hover:border-accent group-hover:shadow-lg transition-all duration-300">
                <item.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">
                {item.name}
              </h4>
              <p className="text-xs text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-muted-foreground">
            All credit calculations verified under the NSW Biodiversity Assessment Method (BAM) 2020
          </p>
        </motion.div>
      </div>
    </section>
  );
};
