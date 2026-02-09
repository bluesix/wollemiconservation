import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SpeciesCard } from "./SpeciesCard";
import { SpeciesDetailModal } from "./SpeciesDetailModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { speciesList } from "@/data/species";

type FilterType = "all" | "animal" | "plant";

export const Wildlife = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<FilterType>("all");
  const [selectedSpecies, setSelectedSpecies] = useState<typeof speciesList[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredSpecies = speciesList.filter((s) => {
    if (filter === "all") return true;
    if (filter === "animal") return s.type === "Animal";
    if (filter === "plant") return s.type === "Plant";
    return true;
  });

  const handleSpeciesClick = (speciesItem: typeof speciesList[0]) => {
    setSelectedSpecies(speciesItem);
    setModalOpen(true);
  };

  return (
    <section id="wildlife" ref={ref} className="section-padding bg-secondary/50">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
            Threatened Species
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
            Wildlife of <span className="text-primary italic">Melaleuca</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Scientific surveys have confirmed 12 species of conservation significance inhabit this Wollemi wilderness.
            These species share habitat with the famous Wollemi Pine's home in the adjacent national park.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <Tabs value={filter} onValueChange={(v) => setFilter(v as FilterType)}>
            <TabsList className="bg-card border border-border">
              <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                All Species
              </TabsTrigger>
              <TabsTrigger value="animal" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Animals
              </TabsTrigger>
              <TabsTrigger value="plant" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Plants
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Species Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpecies.map((speciesItem, index) => (
            <SpeciesCard
              key={speciesItem.name}
              {...speciesItem}
              index={index}
              isInView={isInView}
              onClick={() => handleSpeciesClick(speciesItem)}
            />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Species data from ecological surveys conducted March 2025 by accredited assessors.
        </motion.p>

        {/* Species Detail Modal */}
        <SpeciesDetailModal
          species={selectedSpecies}
          open={modalOpen}
          onOpenChange={setModalOpen}
        />
      </div>
    </section>
  );
};
