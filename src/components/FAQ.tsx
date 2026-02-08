import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are biodiversity credits?",
    answer: "Biodiversity credits are tradeable units that represent conservation outcomes. Under the NSW Biodiversity Offset Scheme, landholders who protect and manage land for biodiversity can generate credits that can be sold to developers who need to offset their environmental impact. Each credit represents a commitment to long-term conservation management of the land."
  },
  {
    question: "How are species credits different from ecosystem credits?",
    answer: "Species credits are generated for protecting habitat of specific threatened species listed under the NSW Biodiversity Conservation Act. These require evidence of species presence on the site. Ecosystem credits are generated based on the vegetation community type (Plant Community Type or PCT) and its condition, regardless of specific species. Both credit types contribute to overall biodiversity conservation."
  },
  {
    question: "What is a Biodiversity Stewardship Agreement (BSA)?",
    answer: "A BSA is a voluntary in-perpetuity agreement registered on the land title between a landholder and the NSW Biodiversity Conservation Trust (BCT). It commits the land to conservation management forever, in exchange for the ability to generate and sell biodiversity credits. The agreement specifies required management actions and monitoring obligations."
  },
  {
    question: "How does the NSW Biodiversity Offset Scheme work?",
    answer: "When development impacts biodiversity, the developer must offset these impacts by purchasing biodiversity credits. Credits must match the impacted species or ecosystem type (like-for-like). Landholders with significant biodiversity values can establish Biodiversity Stewardship sites to generate credits, creating a market-based system that funds conservation on private land."
  },
  {
    question: "What is the Wollemi IBRA sub-region?",
    answer: "The Wollemi IBRA (Interim Biogeographic Regionalisation for Australia) sub-region covers the sandstone plateaux, gorges, and escarpments of the Blue Mountains hinterland. It's renowned for its ancient landscapes, endemic species (including the famous Wollemi Pine), and high conservation value. Credits from this sub-region can only offset impacts within the same bioregion."
  },
  {
    question: "Why is like-for-like matching important?",
    answer: "Like-for-like matching ensures that the biodiversity being protected is ecologically similar to what is being impacted. For species credits, this means protecting the same species in the same IBRA sub-region. This prevents 'trading down' where common species might be protected instead of the actual threatened species impacted by development."
  },
  {
    question: "What ongoing management is required?",
    answer: "Biodiversity stewardship sites require active management including pest and weed control, fire management, stock exclusion, erosion management, and habitat improvement. Annual monitoring and reporting to the BCT is mandatory. Funds from credit sales are invested to generate income for this perpetual management."
  },
  {
    question: "How can I invest in biodiversity credits?",
    answer: "Investors can participate by purchasing credits directly, investing in stewardship sites, or through conservation finance vehicles. Please contact us via the enquiry form to discuss investment opportunities at Melaleuca Reserve. We can provide detailed credit reports and discuss partnership arrangements."
  },
];

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="section-padding bg-background">
      <div className="container-wide max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
            Common Questions
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understanding biodiversity credits and the NSW Biodiversity Offset Scheme
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-display text-lg hover:no-underline hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
