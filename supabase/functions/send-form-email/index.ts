import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface FormSubmission {
  formType: "investor-interest" | "contact";
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  phone?: string;
  investmentInterest?: string;
  message?: string;
  notes?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: FormSubmission = await req.json();

    // Validate required fields
    if (!data.email || !data.formType) {
      throw new Error("Missing required fields: email and formType are required");
    }

    // Build email content based on form type
    let subject: string;
    let htmlContent: string;

    if (data.formType === "investor-interest") {
      const fullName = `${data.firstName || ""} ${data.lastName || ""}`.trim();
      subject = `New Expression of Interest from ${fullName}`;
      
      const investmentLabels: Record<string, string> = {
        "long-term": "Long-term investment (5+ years)",
        "medium-term": "Medium-term investment (2-5 years)",
        "impact-focused": "Impact-focused investment",
        "diversification": "Portfolio diversification",
        "other": "Other",
      };

      htmlContent = `
        <h2>New Expression of Interest</h2>
        <p>A new investor interest form has been submitted on the Melaleuca website.</p>
        
        <h3>Contact Details</h3>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          ${data.phone ? `<li><strong>Phone:</strong> ${data.phone}</li>` : ""}
        </ul>
        
        <h3>Investment Interest</h3>
        <p><strong>Type:</strong> ${investmentLabels[data.investmentInterest || ""] || data.investmentInterest || "Not specified"}</p>
        
        ${data.notes ? `
          <h3>Additional Notes</h3>
          <p>${data.notes.replace(/\n/g, "<br>")}</p>
        ` : ""}
        
        <hr>
        <p style="color: #666; font-size: 12px;">This email was sent from the Melaleuca Reserve website contact form.</p>
      `;
    } else if (data.formType === "contact") {
      subject = `New Contact Enquiry from ${data.name || "Website Visitor"}`;
      
      htmlContent = `
        <h2>New Contact Enquiry</h2>
        <p>A new contact form has been submitted on the Melaleuca website.</p>
        
        <h3>Contact Details</h3>
        <ul>
          <li><strong>Name:</strong> ${data.name || "Not provided"}</li>
          <li><strong>Email:</strong> ${data.email}</li>
        </ul>
        
        <h3>Message</h3>
        <p>${(data.message || "No message provided").replace(/\n/g, "<br>")}</p>
        
        <hr>
        <p style="color: #666; font-size: 12px;">This email was sent from the Melaleuca Reserve website contact form.</p>
      `;
    } else {
      throw new Error("Invalid form type");
    }

    const emailResponse = await resend.emails.send({
      from: "Melaleuca Reserve <noreply@wollemiconservation.com>",
      to: ["gus@melaleucaconservation.com"],
      subject: subject,
      html: htmlContent,
      reply_to: data.email,
    });

    console.log("Form submission email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, id: emailResponse.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    console.error("Error in send-form-email function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
