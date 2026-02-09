import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import heroImg from "@/assets/hero-landscape.jpg";
const investorSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  investmentInterest: z.string().min(1, "Please select an option"),
  notes: z.string().trim().max(1000, "Notes must be less than 1000 characters").optional(),
  acceptPrivacy: z.boolean().refine(val => val === true, "You must accept the privacy policy")
});
type InvestorFormData = z.infer<typeof investorSchema>;
const investmentOptions = [{
  value: "",
  label: "Select an option"
}, {
  value: "long-term",
  label: "Long-term investment (5+ years)"
}, {
  value: "medium-term",
  label: "Medium-term investment (2-5 years)"
}, {
  value: "impact-focused",
  label: "Impact-focused investment"
}, {
  value: "diversification",
  label: "Portfolio diversification"
}, {
  value: "other",
  label: "Other"
}];
export const InvestorInterest = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<InvestorFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    investmentInterest: "",
    notes: "",
    acceptPrivacy: false
  });
  const [errors, setErrors] = useState<Partial<Record<keyof InvestorFormData, string>>>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof InvestorFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      acceptPrivacy: checked
    }));
    if (errors.acceptPrivacy) {
      setErrors(prev => ({
        ...prev,
        acceptPrivacy: undefined
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = investorSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof InvestorFormData, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof InvestorFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    setIsSubmitting(true);
    
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-form-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            formType: "investor-interest",
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone || undefined,
            investmentInterest: formData.investmentInterest,
            notes: formData.notes || undefined,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
      toast({
        title: "Interest registered",
        description: "Thank you for your interest. Our team will be in touch within 48 hours.",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your interest. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="invest" ref={ref}>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <motion.img initial={{
        scale: 1.1
      }} animate={isInView ? {
        scale: 1
      } : {}} transition={{
        duration: 1.2
      }} src={heroImg} alt="Melaleuca Reserve landscape" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/40 to-foreground/70" />
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground uppercase tracking-tight">GET INVOLVED</h2>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-primary-foreground mt-4">
              Make a difference —{" "}
              <span className="underline decoration-gold-400 decoration-4 underline-offset-4">
                starting today.
              </span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-background">
        <div className="container-wide py-16 md:py-24">
          {/* Intro Text */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="max-w-3xl mb-16">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Melaleuca's 10,373 biodiversity credits represent a unique opportunity to invest in 
              Australia's natural heritage. By owning a share of these credits, you're not just 
              making a financial investment—you're securing the future of endangered species 
              and protecting 506 hectares of critical habitat for generations to come.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mt-6">
              All of this is possible because of the commitment of people like you.
            </p>
          </motion.div>

          {/* Form Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Why Invest */}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.5
          }}>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Why invest in biodiversity credits?
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-5">
                  <h4 className="font-semibold text-foreground mb-2">Government-backed security</h4>
                  <p className="text-muted-foreground">
                    Credits are issued under the NSW Biodiversity Offsets Scheme, providing legal 
                    protections and a regulated marketplace.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-5">
                  <h4 className="font-semibold text-foreground mb-2">Growing demand</h4>
                  <p className="text-muted-foreground">
                    As development increases, so does the legal requirement for biodiversity offsets. 
                    Credits are a finite, appreciating asset.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-5">
                  <h4 className="font-semibold text-foreground mb-2">Tangible impact</h4>
                  <p className="text-muted-foreground">
                    Your investment directly protects koalas, rock wallabies, and 8 other threatened 
                    species that call Melaleuca home.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-10 p-6 bg-card rounded-xl border border-border">
                <div>
                  <p className="text-3xl md:text-4xl font-display font-bold text-primary">10,373</p>
                  <p className="text-sm text-muted-foreground mt-1">Biodiversity Credits</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-display font-bold text-primary">100 yrs</p>
                  <p className="text-sm text-muted-foreground mt-1">Protected in Perpetuity</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              {isSubmitted ? <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-2">Thank You</h3>
                  <p className="text-muted-foreground">
                    Your interest has been registered. Our investment team will contact you within 48 hours.
                  </p>
                </div> : <>
                  <h3 className="font-display text-2xl font-semibold mb-2">Expression of Interest</h3>
                  <p className="text-muted-foreground mb-6">
                    Complete this form and our team will reach out with detailed investment information.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First name *</Label>
                        <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" className={errors.firstName ? "border-destructive" : ""} />
                        {errors.firstName && <p className="text-xs text-destructive">{errors.firstName}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last name *</Label>
                        <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className={errors.lastName ? "border-destructive" : ""} />
                        {errors.lastName && <p className="text-xs text-destructive">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email address *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className={errors.email ? "border-destructive" : ""} />
                      {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+61 4XX XXX XXX" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="investmentInterest">What is your investment interest? *</Label>
                      <select id="investmentInterest" name="investmentInterest" value={formData.investmentInterest} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.investmentInterest ? "border-destructive" : "border-input"}`}>
                        {investmentOptions.map(option => <option key={option.value} value={option.value}>
                            {option.label}
                          </option>)}
                      </select>
                      {errors.investmentInterest && <p className="text-xs text-destructive">{errors.investmentInterest}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Notes</Label>
                      <Textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} placeholder="Tell us about your investment goals or any questions..." rows={4} className="resize-none" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start space-x-3">
                        <Checkbox id="acceptPrivacy" checked={formData.acceptPrivacy} onCheckedChange={handleCheckboxChange} className={errors.acceptPrivacy ? "border-destructive" : ""} />
                        <Label htmlFor="acceptPrivacy" className="text-sm leading-relaxed cursor-pointer">
                          I accept the{" "}
                          <a href="#" className="text-primary underline hover:no-underline">
                            Privacy Policy
                          </a>{" "}
                          and consent to being contacted.
                        </Label>
                      </div>
                      {errors.acceptPrivacy && <p className="text-xs text-destructive">{errors.acceptPrivacy}</p>}
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </form>
                </>}
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};