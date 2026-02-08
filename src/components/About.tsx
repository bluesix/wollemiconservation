import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, TreeDeciduous, Bird, Mountain } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Protected Forever",
    description: "Under a Biodiversity Stewardship Agreement, this land is legally protected in perpetuity for conservation.",
  },
  {
    icon: TreeDeciduous,
    title: "Ancient Forests",
    description: "Home to Sydney Hinterland Dry Sclerophyll Forests and Northern Hinterland Wet Sclerophyll Forests.",
  },
  {
    icon: Bird,
    title: "Wollemi Corridor",
    description: "Forms a vital wildlife corridor between Wollemi and Yengo National Parks, bordering Wollemi Creek.",
  },
  {
    icon: Mountain,
    title: "Sandstone Country",
    description: "Located in the Wollemi subregion of the Sydney Basin, featuring dramatic sandstone escarpments.",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
              About the Reserve
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-6 leading-tight">
              A Sanctuary for 
              <span className="text-primary italic"> Australia's Rarest</span> Species
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Melaleuca Conservation Reserve is a 506-hectare protected wilderness area 
                located in the heart of the Hunter Range, NSW. The property sits within the 
                <strong className="text-foreground"> Wollemi IBRA Sub-region</strong> of the Sydney Basin Bioregion, 
                with <strong className="text-foreground">Wollemi Creek</strong> forming its natural boundary.
              </p>
              <p>
                Positioned at the gateway to <strong className="text-foreground">Wollemi National Park</strong>—home to the prehistoric 
                Wollemi Pine discovered in 1994—our reserve forms part of a critical wilderness corridor. 
                Through extensive ecological surveys, scientists have confirmed <strong className="text-foreground">10 threatened species</strong> that 
                depend on this land, including the iconic Koala and the elusive Brush-tailed Rock Wallaby.
              </p>
              <p>
                The property is being established as a <strong className="text-foreground">Biodiversity Stewardship Site</strong> under 
                the NSW Biodiversity Conservation Act, creating a protected buffer zone for 
                the Greater Wollemi Wilderness for generations to come.
              </p>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
