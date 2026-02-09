import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { CreditCharts } from "./CreditCharts";
import { speciesByName } from "@/data/species";

const speciesCredits = [
  { species: "Koala", category: "Species", credits: 1485, subregion: "Wollemi", likeForLike: "Yes", status: "Endangered" },
  { species: "Brush-tailed Rock Wallaby", category: "Species", credits: 1518, subregion: "Wollemi", likeForLike: "Yes", status: "Endangered" },
  { species: "Large-eared Pied Bat", category: "Species", credits: 1518, subregion: "Wollemi", likeForLike: "Yes", status: "Vulnerable" },
  { species: "Persoonia hirsuta subsp. evoluta (Hairy Geebung)", category: "Species", credits: 1024, subregion: "Wollemi", likeForLike: "Yes", status: "Endangered" },
  { species: "Red-crowned Toadlet", category: "Species", credits: 828, subregion: "Wollemi", likeForLike: "Yes", status: "Vulnerable" },
  { species: "Southern Myotis", category: "Species", credits: 785, subregion: "Wollemi", likeForLike: "Yes", status: "Vulnerable" },
  { species: "Barking Owl", category: "Species", credits: 728, subregion: "Wollemi", likeForLike: "Yes", status: "Vulnerable" },
  { species: "Eastern Pygmy Possum", category: "Species", credits: 608, subregion: "Wollemi", likeForLike: "Yes", status: "Vulnerable" },
  { species: "Sooty Owl", category: "Species", credits: 256, subregion: "Wollemi", likeForLike: "Yes", status: "Vulnerable" },
  { species: "Pomaderris brunnea (Brown Pomaderris)", category: "Species", credits: 117, subregion: "Wollemi", likeForLike: "Yes", status: "Endangered" },
];

const habitatCredits = [
  { vegetation: "Sydney Hinterland Dry Sclerophyll Forests <50% (HBT)", category: "Ecosystem", credits: 1984, condition: "High", subregion: "Wollemi" },
  { vegetation: "Northern Hinterland Wet Sclerophyll Forests <50% (HBT)", category: "Ecosystem", credits: 522, condition: "High", subregion: "Wollemi" },
];

const creditSummary = [
  { type: "Species Credits", total: 8867, percentage: 78 },
  { type: "Ecosystem Credits", total: 2506, percentage: 22 },
];

export const CreditSummary = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("species");

  const totalCredits = speciesCredits.reduce((sum, item) => sum + item.credits, 0) + 
                       habitatCredits.reduce((sum, item) => sum + item.credits, 0);

  return (
    <section id="credits" ref={ref} className="section-padding bg-muted/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
            Biodiversity Credits
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4 leading-tight">
            Credit Summary Report
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Detailed breakdown of biodiversity credits generated within the Wollemi IBRA sub-region 
            under the NSW Biodiversity Offset Scheme, supporting the Greater Wollemi Wilderness conservation effort.
          </p>
        </motion.div>

        {/* Credit Charts */}
        <CreditCharts />

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-10"
        >
          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardDescription>Total Credits</CardDescription>
              <CardTitle className="text-3xl font-display text-primary">{totalCredits.toLocaleString()}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Across all credit types</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardDescription>Species Credits</CardDescription>
              <CardTitle className="text-3xl font-display text-accent">
                {speciesCredits.reduce((sum, item) => sum + item.credits, 0).toLocaleString()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{speciesCredits.length} threatened species</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardDescription>Ecosystem Credits</CardDescription>
              <CardTitle className="text-3xl font-display text-primary">
                {habitatCredits.reduce((sum, item) => sum + item.credits, 0).toLocaleString()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{habitatCredits.length} vegetation communities</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Credit Tables */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="species" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="species">Species Credits</TabsTrigger>
              <TabsTrigger value="ecosystem">Ecosystem Credits</TabsTrigger>
            </TabsList>
            
            <TabsContent value="species">
              <Card>
                <CardHeader>
                  <CardTitle className="font-display">Species Credit Breakdown</CardTitle>
                  <CardDescription>
                    Credits generated for individual threatened species recorded on the site
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Species</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Subregion</TableHead>
                        <TableHead>Like-for-Like</TableHead>
                        <TableHead className="text-right">Credits</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {speciesCredits.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {speciesByName[item.species] ? (
                              <HoverCard openDelay={200} closeDelay={100}>
                                <HoverCardTrigger asChild>
                                  <span className="cursor-default hover:text-primary transition-colors">
                                    {item.species}
                                  </span>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-72" side="right">
                                  <div className="flex gap-3">
                                    <img
                                      src={speciesByName[item.species].image}
                                      alt={speciesByName[item.species].name}
                                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                      <p className="font-display font-semibold text-sm">{speciesByName[item.species].name}</p>
                                      <p className="text-xs italic text-muted-foreground">{speciesByName[item.species].scientificName}</p>
                                    </div>
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-2 line-clamp-3 leading-relaxed">
                                    {speciesByName[item.species].description}
                                  </p>
                                </HoverCardContent>
                              </HoverCard>
                            ) : (
                              item.species
                            )}
                          </TableCell>
                          <TableCell>
                            <Badge 
                              variant={item.status === "Endangered" ? "destructive" : "secondary"}
                              className="text-xs"
                            >
                              {item.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{item.category}</TableCell>
                          <TableCell>{item.subregion}</TableCell>
                          <TableCell>
                            <Badge variant={item.likeForLike === "Yes" ? "default" : "outline"}>
                              {item.likeForLike}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right font-semibold">{item.credits.toLocaleString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ecosystem">
              <Card>
                <CardHeader>
                  <CardTitle className="font-display">Ecosystem Credit Breakdown</CardTitle>
                  <CardDescription>
                    Credits generated for Plant Community Types (PCTs) and vegetation communities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Vegetation Community</TableHead>
                        <TableHead>PCT Code</TableHead>
                        <TableHead>Condition</TableHead>
                        <TableHead>Subregion</TableHead>
                        <TableHead className="text-right">Credits</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {habitatCredits.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium max-w-[250px] truncate">{item.vegetation}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{item.category}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge 
                              variant={item.condition === "High" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {item.condition}
                            </Badge>
                          </TableCell>
                          <TableCell>{item.subregion}</TableCell>
                          <TableCell className="text-right font-semibold">{item.credits.toLocaleString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm text-muted-foreground text-center mt-8"
        >
          * Credit calculations based on the NSW Biodiversity Assessment Method (BAM) 2020. 
          Final credit numbers subject to BCT assessment and approval.
        </motion.p>
      </div>
    </section>
  );
};
