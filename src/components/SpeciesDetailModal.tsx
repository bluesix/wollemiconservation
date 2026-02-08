import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, MapPin, Leaf, Shield, TreePine } from "lucide-react";

interface SpeciesDetail {
  name: string;
  scientificName: string;
  status: "Endangered" | "Vulnerable" | "Threatened";
  type: "Animal" | "Plant";
  description: string;
  image: string;
  credit?: string;
  habitat?: string;
  threats?: string[];
  conservationAction?: string;
  credits?: number;
}

interface SpeciesDetailModalProps {
  species: SpeciesDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Extended species info
const speciesExtendedInfo: Record<string, { habitat: string; threats: string[]; conservationAction: string; credits: number }> = {
  "Koala": {
    habitat: "Eucalyptus forest and woodland, particularly areas with preferred feed trees like Grey Gum and Forest Red Gum.",
    threats: ["Habitat loss and fragmentation", "Vehicle strikes", "Dog attacks", "Disease (Chlamydia)", "Climate change impacts"],
    conservationAction: "Protection of 485+ hectares of prime eucalypt habitat with wildlife corridors connecting to Wollemi National Park.",
    credits: 1485,
  },
  "Brush-tailed Rock Wallaby": {
    habitat: "Rocky outcrops, cliffs, and sandstone escarpments with caves and overhangs for shelter.",
    threats: ["Predation by foxes and wild dogs", "Habitat degradation", "Competition with goats", "Altered fire regimes"],
    conservationAction: "Fox and feral predator control program, protection of sandstone escarpment habitat.",
    credits: 1518,
  },
  "Eastern Pygmy Possum": {
    habitat: "Banksia heathland, shrubby forest understorey, and areas with abundant flowering plants.",
    threats: ["Habitat loss", "Intense fires destroying nest sites", "Predation by cats and foxes", "Climate-induced food shortages"],
    conservationAction: "Protection of banksia heath habitat and implementation of mosaic burning practices.",
    credits: 608,
  },
  "Sugar Glider": {
    habitat: "Open forest and woodland with abundant tree hollows for nesting and flowering trees for nectar.",
    threats: ["Loss of tree hollows", "Barbed wire fencing injuries", "Habitat fragmentation", "Cat predation"],
    conservationAction: "Retention of old-growth trees with hollows and installation of nest boxes in younger forest areas.",
    credits: 0,
  },
  "Sooty Owl": {
    habitat: "Wet sclerophyll forest and rainforest gullies with large hollow-bearing trees for nesting.",
    threats: ["Logging of old-growth forest", "Loss of tree hollows", "Barbed wire entanglement", "Rodenticide poisoning"],
    conservationAction: "Protection of wet gully habitat and old-growth forest corridors.",
    credits: 256,
  },
  "Large-eared Pied Bat": {
    habitat: "Sandstone caves, overhangs, and mine tunnels near forested areas for foraging.",
    threats: ["Cave disturbance", "Habitat clearing near roosts", "Climate change affecting insect prey"],
    conservationAction: "Protection of sandstone escarpment roosting habitat and surrounding foraging areas.",
    credits: 1518,
  },
  "Red-crowned Toadlet": {
    habitat: "Sandstone geology with ephemeral soaks, seepage lines, and drainage depressions.",
    threats: ["Urban development", "Altered drainage patterns", "Chytrid fungus", "Climate change reducing moisture"],
    conservationAction: "Protection of 276 hectares of sandstone seep habitat with natural hydrology.",
    credits: 828,
  },
  "Southern Myotis": {
    habitat: "Near permanent water bodies, roosting in caves, tunnels, and tree hollows close to waterways.",
    threats: ["Loss of waterside habitat", "Water pollution", "Disturbance of roost sites"],
    conservationAction: "Protection of Wollemi Creek riparian zone and associated roosting habitat.",
    credits: 785,
  },
  "Barking Owl": {
    habitat: "Open woodland and forest edge habitat with large hollow-bearing trees.",
    threats: ["Loss of large hollow trees", "Habitat fragmentation", "Secondary poisoning from rodenticides"],
    conservationAction: "Retention of woodland corridors and hollow-bearing trees.",
    credits: 728,
  },
  "Superb Lyrebird": {
    habitat: "Wet forest and rainforest understorey with deep leaf litter for foraging.",
    threats: ["Fox predation", "Habitat disturbance", "Altered fire regimes destroying leaf litter"],
    conservationAction: "Fox control and protection of forest understorey habitat.",
    credits: 0,
  },
  "Brown Pomaderris": {
    habitat: "Sheltered south-facing slopes along drainage lines in wet sclerophyll forest.",
    threats: ["Habitat clearing", "Road construction", "Inappropriate fire regimes", "Climate change"],
    conservationAction: "In-situ protection of known population and habitat with targeted weed management.",
    credits: 117,
  },
  "Hairy Geebung": {
    habitat: "Sandy soils in dry sclerophyll forest and woodland on sandstone substrates.",
    threats: ["Urban development", "Frequent fire", "Phytophthora root rot disease"],
    conservationAction: "Protection of 341 hectares of habitat with disease hygiene protocols.",
    credits: 1024,
  },
};

export const SpeciesDetailModal = ({ species, open, onOpenChange }: SpeciesDetailModalProps) => {
  if (!species) return null;

  const extendedInfo = speciesExtendedInfo[species.name] || {
    habitat: species.description,
    threats: ["Habitat loss", "Climate change"],
    conservationAction: "Habitat protection through the Biodiversity Stewardship Agreement.",
    credits: 0,
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4">
            <img
              src={species.image}
              alt={species.name}
              className="w-24 h-24 rounded-xl object-cover"
            />
            <div className="flex-1">
              <DialogTitle className="font-display text-2xl">{species.name}</DialogTitle>
              <DialogDescription className="italic text-base mt-1">
                {species.scientificName}
              </DialogDescription>
              <div className="flex gap-2 mt-3">
                <Badge
                  variant={species.status === "Endangered" ? "destructive" : "secondary"}
                  className="flex items-center gap-1"
                >
                  <AlertTriangle className="w-3 h-3" />
                  {species.status}
                </Badge>
                <Badge variant="outline">{species.type}</Badge>
                {extendedInfo.credits > 0 && (
                  <Badge variant="default" className="bg-primary">
                    {extendedInfo.credits.toLocaleString()} credits
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {species.description}
          </p>

          {/* Habitat */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TreePine className="w-4 h-4 text-primary" />
              <h4 className="font-semibold text-foreground">Habitat</h4>
            </div>
            <p className="text-sm text-muted-foreground pl-6">
              {extendedInfo.habitat}
            </p>
          </div>

          {/* Threats */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <h4 className="font-semibold text-foreground">Key Threats</h4>
            </div>
            <ul className="pl-6 space-y-1">
              {extendedInfo.threats.map((threat, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-1.5 flex-shrink-0" />
                  {threat}
                </li>
              ))}
            </ul>
          </div>

          {/* Conservation Action */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-accent" />
              <h4 className="font-semibold text-foreground">Conservation at Melaleuca</h4>
            </div>
            <p className="text-sm text-muted-foreground pl-6">
              {extendedInfo.conservationAction}
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground border-t border-border pt-4">
            <MapPin className="w-4 h-4" />
            <span>Wollemi IBRA Sub-region, NSW, Australia</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
