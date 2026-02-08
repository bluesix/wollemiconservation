import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Leaf, Shield, Clock, Heart } from "lucide-react";

const benefits = [
  "Permanent legal protection through Biodiversity Stewardship Agreement",
  "Buffer zone protecting the Greater Wollemi Wilderness Area",
  "Active management to control invasive species and fire risk",
  "Ongoing ecological monitoring and scientific surveys",
  "Restoration of degraded areas to native vegetation",
  "Critical wildlife corridor between Wollemi and Yengo National Parks",
];

const timeline = [
  {
    icon: Clock,
    year: "2024",
    title: "Ecological Assessment",
    description: "Comprehensive surveys identified 10 threatened species across 7 vegetation communities.",
  },
  {
    icon: Leaf,
    year: "2025",
    title: "Species Surveys",
    description: "69 remote cameras, acoustic monitoring, and spotlight surveys confirmed species presence.",
  },
  {
    icon: Shield,
    year: "2025",
    title: "BSA Registration",
    description: "Biodiversity Stewardship Agreement application submitted for permanent protection.",
  },
  {
    icon: Heart,
    year: "Ongoing",
    title: "Active Conservation",
    description: "Long-term management plan implementation for pest control, fire management, and restoration.",
  },
];

export const Conservation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="conservation" ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
              Conservation Commitment
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-6 leading-tight">
              Protecting This Land 
              <span className="text-primary italic"> Forever</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Through the NSW Biodiversity Offset Scheme, Melaleuca will be permanently protected 
              under a Biodiversity Stewardship Agreement. Bordering Wollemi Creek and adjacent to 
              Wollemi National Park, this land will never be cleared, developed, or degraded—forming 
              a permanent sanctuary within the Greater Wollemi Wilderness.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
              Conservation Journey
            </h3>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  className="relative flex gap-4"
                >
                  {/* Line connector */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-6 top-14 w-0.5 h-[calc(100%-1rem)] bg-border" />
                  )}
                  
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 relative z-10">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1 pb-6">
                    <span className="text-accent font-semibold text-sm">{item.year}</span>
                    <h4 className="font-display text-lg font-semibold text-foreground mt-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
