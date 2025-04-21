import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./email";
import { z } from "zod";

// Define contact form schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message is required and must be at least 5 characters"),
  subject: z.string().optional(),
  phone: z.string().optional(),
  company: z.string().optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate form data
      const formData = contactFormSchema.parse(req.body);
      
      // Send email
      const emailSent = await sendContactEmail(formData);
      
      if (emailSent) {
        return res.status(200).json({ success: true, message: "Message sent successfully" });
      } else {
        return res.status(500).json({ success: false, message: "Failed to send message, please try again" });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      
      // Check if it's a validation error
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors.map(e => ({ field: e.path.join('.'), message: e.message }))
        });
      }
      
      return res.status(500).json({ success: false, message: "Server error, please try again later" });
    }
  });

  // Add other routes here

  const httpServer = createServer(app);

  return httpServer;
}
