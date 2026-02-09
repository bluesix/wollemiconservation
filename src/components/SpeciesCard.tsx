import { motion } from "framer-motion";
import { AlertTriangle, Info, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SpeciesCardProps {
  name: string;
  scientificName: string;
  status: "Endangered" | "Vulnerable" | "Threatened" | "Protected";
  type: "Animal" | "Plant";
  description: string;
  image: string;
  index: number;
  isInView: boolean;
  credit?: string;
  onClick?: () => void;
}

export const SpeciesCard = ({
  name,
  scientificName,
  status,
  type,
  description,
  image,
  index,
  isInView,
  credit,
  onClick,
}: SpeciesCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      onClick={onClick}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-elevated transition-all duration-500 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <Badge
            variant={status === "Endangered" ? "destructive" : status === "Protected" ? "outline" : "secondary"}
            className={`${
              status === "Endangered"
                ? "bg-destructive/90 hover:bg-destructive"
                : status === "Protected"
                ? "bg-primary/80 text-primary-foreground hover:bg-primary"
                : "bg-gold-500/90 text-accent-foreground hover:bg-gold-500"
            } flex items-center gap-1.5 px-3 py-1`}
          >
            {(status === "Endangered" || status === "Vulnerable" || status === "Threatened") && <AlertTriangle className="w-3 h-3" />}
            {status === "Protected" && <Info className="w-3 h-3" />}
            {status}
          </Badge>
        </div>

        {/* Type Badge */}
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-none">
            {type}
          </Badge>
        </div>

        {/* Photo Credit */}
        {credit && (
          <div className="absolute bottom-2 right-2 text-[10px] text-primary-foreground/60">
            {credit}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm italic text-muted-foreground mb-3">
          {scientificName}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>
        <div className="flex items-center gap-1 mt-3 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-3 h-3" />
          <span>Click for details</span>
        </div>
      </div>

      {/* Hover Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};
