import { Leaf } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-forest-900 text-primary-foreground py-12">
      <div className="container-wide px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <Leaf className="w-5 h-5 text-accent-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-semibold">Melaleuca</span>
              <span className="text-primary-foreground/60 text-[10px] uppercase tracking-[0.15em] -mt-0.5">
                Conservation Reserve
              </span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="text-primary-foreground/70 hover:text-accent transition-colors">
              Home
            </a>
            <a href="#about" className="text-primary-foreground/70 hover:text-accent transition-colors">
              About
            </a>
            <a href="#wildlife" className="text-primary-foreground/70 hover:text-accent transition-colors">
              Wildlife
            </a>
            <a href="#conservation" className="text-primary-foreground/70 hover:text-accent transition-colors">
              Conservation
            </a>
            <a href="#contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Melaleuca Conservation Reserve
          </div>
        </div>

        {/* Credits */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
          <p>
            Located in the Wollemi IBRA sub-region, bordering Wollemi Creek and Wollemi National Park.
            Wildlife photos captured on-site during ecological surveys.
          </p>
          <p className="mt-2">
            Part of the Greater Wollemi Wilderness conservation effort under the NSW Biodiversity Conservation Act.
          </p>
        </div>
      </div>
    </footer>
  );
};
