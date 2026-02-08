import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-landscape.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Melaleuca Conservation Reserve landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent/90 text-accent-foreground px-4 py-2 rounded-full mb-6"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">Putty, NSW Australia</span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground mb-6 leading-[1.1]">
            Melaleuca
            <span className="block text-accent italic font-normal mt-2">
              Conservation Reserve
            </span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            506 hectares of protected wilderness on the doorstep of <span className="text-accent font-medium">Wollemi National Park</span>, 
            bordering Wollemi Creek and home to 
            <span className="text-accent font-medium"> 10 threatened species </span> 
            including neighbours of the ancient Wollemi Pine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-base rounded-full shadow-glow transition-all hover:shadow-lg"
            >
              <a href="#wildlife">Discover Our Wildlife</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/60 bg-black/30 text-white hover:bg-black/50 hover:border-white px-8 py-6 text-base rounded-full backdrop-blur-sm font-medium"
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
