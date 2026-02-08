import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Wildlife } from "@/components/Wildlife";
import { Gallery } from "@/components/Gallery";
import { Conservation } from "@/components/Conservation";
import { CreditSummary } from "@/components/CreditSummary";
import { Partners } from "@/components/Partners";
import { FAQ } from "@/components/FAQ";
import { InvestorInterest } from "@/components/InvestorInterest";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Stats />
      <Wildlife />
      <Gallery />
      <Conservation />
      <CreditSummary />
      <Partners />
      <FAQ />
      <InvestorInterest />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
