import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// All service details data
const servicesDetails = {
  "AI Automation": {
    title: "🤖 AI-Powered / Machine Learning Services",
    services: [
      {
        name: "Chatbots & Virtual Assistants (LLMs)",
        description: "Smart bots that talk like humans and solve customer queries 24/7."
      },
      {
        name: "Image/Video Analysis (Computer Vision)",
        description: "AI that can detect faces, objects, and actions from images or videos."
      },
      {
        name: "Custom AI Models",
        description: "We build smart systems that can learn from your business data to make predictions or decisions."
      },
      {
        name: "Recommendation Systems",
        description: "Like Netflix or Amazon? We build systems that recommend products or services to your users."
      },
      {
        name: "Text Analysis",
        description: "Automatically understand and process customer feedback, reviews, and messages."
      }
    ]
  },
  "Cyber Security": {
    title: "🔐 Cybersecurity Services",
    services: [
      {
        name: "Vulnerability Testing",
        description: "We find weak points in your website or app before hackers do."
      },
      {
        name: "Security Setup",
        description: "Set up firewalls, encryptions, and backups to keep your data safe."
      },
      {
        name: "Real-time Threat Monitoring",
        description: "Keep your systems secure with 24/7 threat alerts and responses."
      },
      {
        name: "Employee Security Training",
        description: "Teach your team how to avoid phishing, scams, and data leaks."
      }
    ]
  },
  "Cloud Solutions": {
    title: "☁️ Cloud Services",
    services: [
      {
        name: "Cloud Setup & Migration",
        description: "Move your business online with services like AWS, Google Cloud, or Azure."
      },
      {
        name: "Data Backup Solutions",
        description: "Never lose your data with secure cloud backups."
      },
      {
        name: "Server Management",
        description: "We take care of your cloud infrastructure so it runs smoothly."
      },
      {
        name: "Scalable App Hosting",
        description: "Apps that can handle thousands of users without crashing."
      }
    ]
  },
  "Data Science": {
    title: "🧠 Data Science Services",
    services: [
      {
        name: "Data Analysis & Reports",
        description: "We turn your raw data into useful insights and reports to help you make smarter business decisions."
      },
      {
        name: "Customer Behavior Tracking",
        description: "Find out what your customers like and how they interact with your services."
      },
      {
        name: "Sales & Revenue Forecasting",
        description: "We use data to predict your future sales, helping you plan ahead."
      },
      {
        name: "Dashboard Creation",
        description: "Beautiful, real-time dashboards that show all your business metrics in one place."
      }
    ]
  },
  "Web Development": {
    title: "🌐 Web Development Services",
    services: [
      {
        name: "Custom Websites",
        description: "Build beautiful websites tailored to your brand and business goals."
      },
      {
        name: "E-commerce Stores",
        description: "Online stores with payment gateways, carts, and order tracking."
      },
      {
        name: "Portfolio or Business Sites",
        description: "Showcase your work, services, or products online."
      },
      {
        name: "SEO Optimization",
        description: "Help your website appear higher in Google search results."
      }
    ]
  },
  "Custom Solutions": {
    title: "🛠️ Custom Software Solutions",
    services: [
      {
        name: "Business-specific Tools",
        description: "Software that fits your unique workflow or needs."
      },
      {
        name: "ERP/CRM Systems",
        description: "Manage your team, clients, or inventory all in one place."
      },
      {
        name: "Booking & Ticketing Systems",
        description: "Ideal for hotels, clinics, events, or travel agencies."
      },
      {
        name: "Form Builders & Internal Tools",
        description: "Any internal software your company needs, we'll build it."
      }
    ]
  },
  "Mobile Development": {
    title: "📱 Mobile & App Development",
    services: [
      {
        name: "Android & iOS Apps",
        description: "Build smooth, fast, and user-friendly apps for your customers."
      },
      {
        name: "Cross-platform Apps",
        description: "One app that works on both Android and iPhone."
      },
      {
        name: "App UI/UX Design",
        description: "Apps that not only work well but also look amazing."
      },
      {
        name: "API Integration",
        description: "Connect your app to payment systems, maps, or other tools."
      }
    ]
  },
  "Automation": {
    title: "⚙️ Automation Services",
    services: [
      {
        name: "Workflow Automation",
        description: "Automate repetitive tasks like sending emails, generating reports, or updating records."
      },
      {
        name: "Data Migration & Cleaning",
        description: "Automatically shift your old data to new systems without a mess."
      },
      {
        name: "Inventory & Billing Automation",
        description: "Save time by automating your stock tracking and billing processes."
      },
      {
        name: "Excel & File Automation",
        description: "Automatically generate Excel sheets, PDFs, or merge documents using scripts."
      }
    ]
  }
};

interface ServiceDetailsProps {
  serviceTitle: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ServiceDetails({ serviceTitle, open, onOpenChange }: ServiceDetailsProps) {
  // Find the service details based on the title or return a default
  const serviceDetail = servicesDetails[serviceTitle as keyof typeof servicesDetails] || {
    title: serviceTitle,
    services: []
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] bg-[#0A0A10] text-white border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-outfit font-bold">
            {serviceDetail.title}
          </DialogTitle>
          <DialogDescription className="text-gray-400 text-lg">
            Explore our comprehensive {serviceTitle} offerings
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="mt-6 max-h-[60vh] pr-4">
          <div className="space-y-8">
            {serviceDetail.services.map((service, index) => (
              <div key={index} className="pb-3 border-b border-gray-800 last:border-0">
                <h3 className="text-xl font-medium text-[#4F8FFF] mb-2">{service.name}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}