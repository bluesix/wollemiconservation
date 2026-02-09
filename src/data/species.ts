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

export interface SpeciesData {
  name: string;
  slug: string;
  scientificName: string;
  status: "Endangered" | "Vulnerable" | "Threatened" | "Protected";
  type: "Animal" | "Plant";
  description: string;
  image: string;
  credit?: string;
  habitat: string;
  threats: string[];
  conservationAction: string;
  credits: number;
}

export const speciesList: SpeciesData[] = [
  {
    name: "Koala",
    slug: "koala",
    scientificName: "Phascolarctos cinereus",
    status: "Endangered",
    type: "Animal",
    description: "Australia's beloved marsupial faces habitat loss across NSW. Melaleuca provides over 485 hectares of prime eucalyptus forest habitat essential for their survival.",
    image: koalaImg,
    credit: "Photo: iStock",
    habitat: "Eucalyptus forest and woodland, particularly areas with preferred feed trees like Grey Gum and Forest Red Gum.",
    threats: ["Habitat loss and fragmentation", "Vehicle strikes", "Dog attacks", "Disease (Chlamydia)", "Climate change impacts"],
    conservationAction: "Protection of 485+ hectares of prime eucalypt habitat with wildlife corridors connecting to Wollemi National Park.",
    credits: 1485,
  },
  {
    name: "Brush-tailed Rock Wallaby",
    slug: "brush-tailed-rock-wallaby",
    scientificName: "Petrogale penicillata",
    status: "Endangered",
    type: "Animal",
    description: "Once common across eastern Australia, these agile climbers now survive in isolated populations. The sandstone escarpments at Melaleuca offer perfect habitat.",
    image: wallabyImg,
    credit: "Photo: Trail camera, Melaleuca Reserve",
    habitat: "Rocky outcrops, cliffs, and sandstone escarpments with caves and overhangs for shelter.",
    threats: ["Predation by foxes and wild dogs", "Habitat degradation", "Competition with goats", "Altered fire regimes"],
    conservationAction: "Fox and feral predator control program, protection of sandstone escarpment habitat.",
    credits: 1518,
  },
  {
    name: "Eastern Pygmy Possum",
    slug: "eastern-pygmy-possum",
    scientificName: "Cercartetus nanus",
    status: "Vulnerable",
    type: "Animal",
    description: "Weighing just 15-40 grams, this tiny marsupial is a crucial pollinator. They've been captured on our remote cameras foraging in the banksia heathlands.",
    image: pygmyPossumImg,
    credit: "Photo: Trail camera, Melaleuca Reserve",
    habitat: "Banksia heathland, shrubby forest understorey, and areas with abundant flowering plants.",
    threats: ["Habitat loss", "Intense fires destroying nest sites", "Predation by cats and foxes", "Climate-induced food shortages"],
    conservationAction: "Protection of banksia heath habitat and implementation of mosaic burning practices.",
    credits: 608,
  },
  {
    name: "Sugar Glider",
    slug: "sugar-glider",
    scientificName: "Petaurus breviceps",
    status: "Protected",
    type: "Animal",
    description: "These remarkable gliding marsupials can soar up to 50 metres between trees. Our old-growth forests provide essential tree hollows for nesting.",
    image: gliderImg,
    credit: "Photo: Trail camera, Melaleuca Reserve",
    habitat: "Open forest and woodland with abundant tree hollows for nesting and flowering trees for nectar.",
    threats: ["Loss of tree hollows", "Barbed wire fencing injuries", "Habitat fragmentation", "Cat predation"],
    conservationAction: "Retention of old-growth trees with hollows and installation of nest boxes in younger forest areas.",
    credits: 0,
  },
  {
    name: "Sooty Owl",
    slug: "sooty-owl",
    scientificName: "Tyto tenebricosa",
    status: "Vulnerable",
    type: "Animal",
    description: "A secretive nocturnal hunter of the wet forests. Their distinctive calls echo through Melaleuca's gullies during surveys, confirming their presence.",
    image: owlImg,
    credit: "Photo: eBird",
    habitat: "Wet sclerophyll forest and rainforest gullies with large hollow-bearing trees for nesting.",
    threats: ["Logging of old-growth forest", "Loss of tree hollows", "Barbed wire entanglement", "Rodenticide poisoning"],
    conservationAction: "Protection of wet gully habitat and old-growth forest corridors.",
    credits: 256,
  },
  {
    name: "Large-eared Pied Bat",
    slug: "large-eared-pied-bat",
    scientificName: "Chalinolobus dwyeri",
    status: "Vulnerable",
    type: "Animal",
    description: "Roosting in sandstone caves and overhangs, this rare microbat depends on the escarpment habitat. Acoustic surveys detected their ultrasonic calls here.",
    image: piedBatImg,
    credit: "Photo: iStock",
    habitat: "Sandstone caves, overhangs, and mine tunnels near forested areas for foraging.",
    threats: ["Cave disturbance", "Habitat clearing near roosts", "Climate change affecting insect prey"],
    conservationAction: "Protection of sandstone escarpment roosting habitat and surrounding foraging areas.",
    credits: 1518,
  },
  {
    name: "Red-crowned Toadlet",
    slug: "red-crowned-toadlet",
    scientificName: "Pseudophryne australis",
    status: "Vulnerable",
    type: "Animal",
    description: "This tiny frog with its distinctive orange crown breeds only in sandstone seeps. Over 276 hectares of suitable habitat has been mapped at Melaleuca.",
    image: toadletImg,
    credit: "Photo: Melaleuca Reserve",
    habitat: "Sandstone geology with ephemeral soaks, seepage lines, and drainage depressions.",
    threats: ["Urban development", "Altered drainage patterns", "Chytrid fungus", "Climate change reducing moisture"],
    conservationAction: "Protection of 276 hectares of sandstone seep habitat with natural hydrology.",
    credits: 828,
  },
  {
    name: "Southern Myotis",
    slug: "southern-myotis",
    scientificName: "Myotis macropus",
    status: "Vulnerable",
    type: "Animal",
    description: "Australia's only fishing bat uses its large feet to trawl for prey over water. Found roosting near Wollemi Creek and wetland areas throughout the reserve.",
    image: southernMyotisImg,
    credit: "Photo: R & A Williams, Australian Museum",
    habitat: "Near permanent water bodies, roosting in caves, tunnels, and tree hollows close to waterways.",
    threats: ["Loss of waterside habitat", "Water pollution", "Disturbance of roost sites"],
    conservationAction: "Protection of Wollemi Creek riparian zone and associated roosting habitat.",
    credits: 785,
  },
  {
    name: "Barking Owl",
    slug: "barking-owl",
    scientificName: "Ninox connivens",
    status: "Vulnerable",
    type: "Animal",
    description: "Named for its distinctive dog-like 'wook-wook' call, this powerful nocturnal predator hunts through Melaleuca's woodland corridors at night.",
    image: barkingOwlImg,
    credit: "Photo: Dark Arm, Melaleuca Reserve",
    habitat: "Open woodland and forest edge habitat with large hollow-bearing trees.",
    threats: ["Loss of large hollow trees", "Habitat fragmentation", "Secondary poisoning from rodenticides"],
    conservationAction: "Retention of woodland corridors and hollow-bearing trees.",
    credits: 728,
  },
  {
    name: "Superb Lyrebird",
    slug: "superb-lyrebird",
    scientificName: "Menura novaehollandiae",
    status: "Protected",
    type: "Animal",
    description: "Master mimics of the forest, lyrebirds are regularly captured on trail cameras scratching through leaf litter. Their elaborate tail displays are a highlight of breeding season.",
    image: lyrebirdImg,
    credit: "Photo: Trail camera, Melaleuca Reserve",
    habitat: "Wet forest and rainforest understorey with deep leaf litter for foraging.",
    threats: ["Fox predation", "Habitat disturbance", "Altered fire regimes destroying leaf litter"],
    conservationAction: "Fox control and protection of forest understorey habitat.",
    credits: 0,
  },
  {
    name: "Brown Pomaderris",
    slug: "brown-pomaderris",
    scientificName: "Pomaderris brunnea",
    status: "Endangered",
    type: "Plant",
    description: "Found on sheltered south-facing slopes, this rare shrub produces clusters of small yellow-brown flowers. One of only a few known populations exists here.",
    image: pomaderrisImg,
    credit: "Photo: Melaleuca Reserve",
    habitat: "Sheltered south-facing slopes along drainage lines in wet sclerophyll forest.",
    threats: ["Habitat clearing", "Road construction", "Inappropriate fire regimes", "Climate change"],
    conservationAction: "In-situ protection of known population and habitat with targeted weed management.",
    credits: 117,
  },
  {
    name: "Hairy Geebung",
    slug: "hairy-geebung",
    scientificName: "Persoonia hirsuta subsp. evoluta",
    status: "Endangered",
    type: "Plant",
    description: "A distinctive wildflower with yellow tubular blooms and hairy leaves. Over 341 hectares of habitat supports this rare Persoonia subspecies.",
    image: geebungImg,
    credit: "Photo: Melaleuca Reserve",
    habitat: "Sandy soils in dry sclerophyll forest and woodland on sandstone substrates.",
    threats: ["Urban development", "Frequent fire", "Phytophthora root rot disease"],
    conservationAction: "Protection of 341 hectares of habitat with disease hygiene protocols.",
    credits: 1024,
  },
];

// Map for quick lookup by name (used in credit summary hover)
export const speciesByName: Record<string, SpeciesData> = {};
speciesList.forEach((s) => {
  speciesByName[s.name] = s;
});

// Also map common credit table names
speciesByName["Persoonia hirsuta subsp. evoluta (Hairy Geebung)"] = speciesList.find(s => s.name === "Hairy Geebung")!;
speciesByName["Pomaderris brunnea (Brown Pomaderris)"] = speciesList.find(s => s.name === "Brown Pomaderris")!;
