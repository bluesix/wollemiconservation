import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SpeciesCard } from "./SpeciesCard";
import { SpeciesDetailModal } from "./SpeciesDetailModal";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import wildlife images
import koalaImg from "@/assets/wildlife/koala.jpg";
import wallabyImg from "@/assets/wildlife/wallaby.jpg";
import pygmyPossumImg from "@/assets/wildlife/pygmy-possum.jpg";
import gliderImg from "@/assets/wildlife/glider.jpg";
import owlImg from "@/assets/wildlife/owl.jpg";
import toadletImg from "@/assets/wildlife/toadlet.jpg";
import piedBatImg from "@/assets/wildlife/pied-bat.jpg";
import pomaderrisImg from "@/assets/wildlife/pomaderris.jpg";
import geebungImg from "@/assets/wildlife/geebung.jpg";
import southernMyotisImg from "@/assets/wildlife/southern-myotis.jpg";
import barkingOwlImg from "@/assets/wildlife/barking-owl.jpg";
import lyrebirdImg from "@/assets/wildlife/lyrebird.jpg";

type FilterType = "all" | "animal" | "plant";

const species = [
  {
    name: "Koala",
    scientificName: "Phascolarctos cinereus",
    status: "Endangered" as const,
    type: "Animal" as const,
    description: "Australia's beloved marsupial faces habitat loss across NSW. Melaleuca provides over 485 hectares of prime eucalyptus forest habitat essential for their survival.",
    image: koalaImg,
    credit: "Photo: iStock",
  },
  {
    name: "Brush-tailed Rock Wallaby",
    scientificName: "Petrogale penicillata",
    status: "Endangered" as const,
    type: "Animal" as const,
    description: "Once common across eastern Australia, these agile climbers now survive in isolated populations. The sandstone escarpments at Melaleuca offer perfect habitat.",
    image: wallabyImg,
    credit: "Photo: Trail camera, Melaleuca Reserve",
  },
  {
    name: "Eastern Pygmy Possum",
    scientificName: "Cercartetus nanus",
    status: "Vulnerable" as const,
    type: "Animal" as const,
    description: "Weighing just 15-40 grams, this tiny marsupial is a crucial pollinator. They've been captured on our remote cameras foraging in the banksia heathlands.",
    image: pygmyPossumImg,
    credit: "Photo: Trail camera, Melaleuca Reserve",
  },
  {
    name: "Sugar Glider",
    scientificName: "Petaurus breviceps",
    status: "Vulnerable" as const,
    type: "Animal" as const,
    description: "These remarkable gliding marsupials can soar up to 50 metres between trees. Our old-growth forests provide essential tree hollows for nesting.",
    image: gliderImg,
    credit: "Photo: Trail camera, Melaleuca Reserve",
  },
  {
    name: "Sooty Owl",
    scientificName: "Tyto tenebricosa",
    status: "Vulnerable" as const,
    type: "Animal" as const,
    description: "A secretive nocturnal hunter of the wet forests. Their distinctive calls echo through Melaleuca's gullies during surveys, confirming their presence.",
    image: owlImg,
    credit: "Photo: Trail camera, Melaleuca Reserve",
  },
  {
    name: "Large-eared Pied Bat",
    scientificName: "Chalinolobus dwyeri",
    status: "Vulnerable" as const,
    type: "Animal" as const,
    description: "Roosting in sandstone caves and overhangs, this rare microbat depends on the escarpment habitat. Acoustic surveys detected their ultrasonic calls here.",
    image: piedBatImg,
    credit: "Photo: Michael Pennay, Australian Museum (CC BY-NC-ND 2.0)",
  },
  {
    name: "Red-crowned Toadlet",
    scientificName: "Pseudophryne australis",
    status: "Vulnerable" as const,
    type: "Animal" as const,
    description: "This tiny frog with its distinctive orange crown breeds only in sandstone seeps. Over 276 hectares of suitable habitat has been mapped at Melaleuca.",
    image: toadletImg,
  },
  {
    name: "Southern Myotis",
    scientificName: "Myotis macropus",
    status: "Vulnerable" as const,
    type: "Animal" as const,
    description: "Australia's only fishing bat uses its large feet to trawl for prey over water. Found roosting near Wollemi Creek and wetland areas throughout the reserve.",
    image: southernMyotisImg,
    credit: "Photo: R & A Williams, Australian Museum",
  },
  {
    name: "Barking Owl",
    scientificName: "Ninox connivens",
    status: "Vulnerable" as const,
    type: "Animal" as const,
    description: "Named for its distinctive dog-like 'wook-wook' call, this powerful nocturnal predator hunts through Melaleuca's woodland corridors at night.",
    image: barkingOwlImg,
    credit: "Photo: Trail camera, Melaleuca Reserve",
  },
  {
    name: "Superb Lyrebird",
    scientificName: "Menura novaehollandiae",
    status: "Threatened" as const,
    type: "Animal" as const,
    description: "Master mimics of the forest, lyrebirds are regularly captured on trail cameras scratching through leaf litter. Their elaborate tail displays are a highlight of breeding season.",
    image: lyrebirdImg,
    credit: "Photo: Trail camera, Melaleuca Reserve",
  },
  {
    name: "Brown Pomaderris",
    scientificName: "Pomaderris brunnea",
    status: "Endangered" as const,
    type: "Plant" as const,
    description: "Found on sheltered south-facing slopes, this rare shrub produces clusters of small yellow-brown flowers. One of only a few known populations exists here.",
    image: pomaderrisImg,
  },
  {
    name: "Hairy Geebung",
    scientificName: "Persoonia hirsuta subsp. evoluta",
    status: "Endangered" as const,
    type: "Plant" as const,
    description: "A distinctive wildflower with yellow tubular blooms and hairy leaves. Over 341 hectares of habitat supports this rare Persoonia subspecies.",
    image: geebungImg,
  },
];

export const Wildlife = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<FilterType>("all");
  const [selectedSpecies, setSelectedSpecies] = useState<typeof species[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredSpecies = species.filter((s) => {
    if (filter === "all") return true;
    if (filter === "animal") return s.type === "Animal";
    if (filter === "plant") return s.type === "Plant";
    return true;
  });

  const handleSpeciesClick = (speciesItem: typeof species[0]) => {
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
