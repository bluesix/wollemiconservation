import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Info, MapPin, Shield, TreePine } from "lucide-react";
import { SpeciesData } from "@/data/species";

interface SpeciesDetailModalProps {
  species: SpeciesData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SpeciesDetailModal = ({ species, open, onOpenChange }: SpeciesDetailModalProps) => {
  if (!species) return null;

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
                  {species.status === "Protected" ? <Info className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                  {species.status}
                </Badge>
                <Badge variant="outline">{species.type}</Badge>
                {species.credits > 0 && (
                  <Badge variant="default" className="bg-primary">
                    {species.credits.toLocaleString()} credits
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          <p className="text-muted-foreground leading-relaxed">
            {species.description}
          </p>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <TreePine className="w-4 h-4 text-primary" />
              <h4 className="font-semibold text-foreground">Habitat</h4>
            </div>
            <p className="text-sm text-muted-foreground pl-6">
              {species.habitat}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <h4 className="font-semibold text-foreground">Key Threats</h4>
            </div>
            <ul className="pl-6 space-y-1">
              {species.threats.map((threat, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-1.5 flex-shrink-0" />
                  {threat}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-accent" />
              <h4 className="font-semibold text-foreground">Conservation at Melaleuca</h4>
            </div>
            <p className="text-sm text-muted-foreground pl-6">
              {species.conservationAction}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground border-t border-border pt-4">
            <MapPin className="w-4 h-4" />
            <span>Wollemi IBRA Sub-region, NSW, Australia</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
