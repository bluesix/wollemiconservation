import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
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
            formType: "contact",
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
      toast({
        title: "Message sent",
        description: "Thank you for your enquiry. We'll get back to you soon.",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-forest-gradient text-sand-50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3 mb-6">
            Learn More About <span className="text-accent italic">Melaleuca</span>
          </h2>
          <p className="text-sand-200 max-w-xl mx-auto leading-relaxed">
            Interested in biodiversity credits, conservation partnerships, or learning more
            about the species at Melaleuca? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            <div className="bg-sand-50/10 backdrop-blur-sm rounded-xl p-6 border border-sand-50/10">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-display text-lg font-semibold mb-2 text-center">Location</h3>
              <p className="text-sand-300 text-sm text-center">
                Melaleuca Trail,<br />
                Putty, NSW 2330<br />
                Australia
              </p>
            </div>

            <div className="bg-sand-50/10 backdrop-blur-sm rounded-xl p-6 border border-sand-50/10">
              <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-display text-lg font-semibold mb-2 text-center">Enquiries</h3>
              <p className="text-sand-300 text-sm text-center">
                For biodiversity credit<br />
                enquiries and partnerships
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-sand-50/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-sand-50/10"
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">Thank You</h3>
                <p className="text-sand-300">
                  Your message has been sent. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-sand-100">
                    Name *
                  </Label>
                  <Input
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`bg-sand-50/10 border-sand-300/20 text-sand-50 placeholder:text-sand-400 ${
                      errors.name ? "border-red-400" : ""
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-sand-100">
                    Email *
                  </Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`bg-sand-50/10 border-sand-300/20 text-sand-50 placeholder:text-sand-400 ${
                      errors.email ? "border-red-400" : ""
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message" className="text-sand-100">
                    Message *
                  </Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows={4}
                    className={`bg-sand-50/10 border-sand-300/20 text-sand-50 placeholder:text-sand-400 resize-none ${
                      errors.message ? "border-red-400" : ""
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
