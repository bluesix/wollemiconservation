import { useParams, Link } from "react-router-dom";
import { speciesList } from "@/data/species";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TreePine, Shield, MapPin, ArrowLeft, Info } from "lucide-react";
import { Helmet } from "react-helmet-async";

const SpeciesPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const species = speciesList.find((s) => s.slug === slug);

  if (!species) {
    return (
      <main className="overflow-x-hidden">
        <Navigation />
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl mb-4">Species Not Found</h1>
            <Link to="/#wildlife" className="text-accent hover:underline">
              ← Back to Wildlife
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${species.name} – Melaleuca Conservation Reserve`,
    "description": species.description,
    "image": species.image,
    "author": { "@type": "Organization", "name": "Melaleuca Conservation Reserve" },
    "publisher": { "@type": "Organization", "name": "Melaleuca Conservation Reserve" },
  };

  return (
    <main className="overflow-x-hidden">
      <Helmet>
        <title>{`${species.name} (${species.scientificName}) | Melaleuca Conservation Reserve`}</title>
        <meta name="description" content={`Learn about the ${species.status.toLowerCase()} ${species.name} (${species.scientificName}) at Melaleuca Conservation Reserve, Putty NSW. ${species.description.slice(0, 120)}`} />
        <link rel="canonical" href={`https://melaleuca-wild-wonder.lovable.app/wildlife/${species.slug}`} />
        <meta property="og:title" content={`${species.name} | Melaleuca Conservation Reserve`} />
        <meta property="og:description" content={species.description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img
          src={species.image}
          alt={`${species.name} at Melaleuca Conservation Reserve`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
        <div className="relative h-full flex items-end pb-12 px-4 md:px-8">
          <div className="container-wide">
            <Link
              to="/#wildlife"
              className="inline-flex items-center gap-2 text-sm text-sand-100 hover:text-accent mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Wildlife
            </Link>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-sand-50">
              {species.name}
            </h1>
            <p className="italic text-sand-200 text-lg mt-2">{species.scientificName}</p>
            <div className="flex gap-2 mt-4">
              <Badge
                variant={species.status === "Endangered" ? "destructive" : "secondary"}
                className="flex items-center gap-1"
              >
                {species.status === "Protected" ? (
                  <Info className="w-3 h-3" />
                ) : (
                  <AlertTriangle className="w-3 h-3" />
                )}
                {species.status}
              </Badge>
              <Badge variant="outline" className="bg-sand-50/20 text-sand-50 border-sand-200/30">
                {species.type}
              </Badge>
              {species.credits > 0 && (
                <Badge className="bg-accent text-accent-foreground">
                  {species.credits.toLocaleString()} credits
                </Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            {species.description}
          </p>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TreePine className="w-5 h-5 text-primary" />
                <h2 className="font-display text-2xl font-semibold text-foreground">Habitat</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-7">
                {species.habitat}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <h2 className="font-display text-2xl font-semibold text-foreground">Key Threats</h2>
              </div>
              <ul className="pl-7 space-y-2">
                {species.threats.map((threat, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-2 flex-shrink-0" />
                    {threat}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-accent" />
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  Conservation at Melaleuca
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-7">
                {species.conservationAction}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground border-t border-border pt-6">
              <MapPin className="w-4 h-4" />
              <span>Wollemi IBRA Sub-region, NSW, Australia</span>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default SpeciesPage;
