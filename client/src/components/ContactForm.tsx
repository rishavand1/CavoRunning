import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error for this field if exists
    if (formErrors[id]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormErrors({});

    try {
      // Prepare data for submission
      const contactData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
        subject: `New inquiry about ${formData.service || "your services"}`,
        message: formData.message.trim()
      };
      
      // Validate data
      if (!contactData.name) {
        setFormErrors(prev => ({ ...prev, name: "Name is required" }));
        setIsSubmitting(false);
        return;
      }
      if (!contactData.email) {
        setFormErrors(prev => ({ ...prev, email: "Email is required" }));
        setIsSubmitting(false);
        return;
      }
      if (!contactData.message) {
        setFormErrors(prev => ({ ...prev, message: "Message is required" }));
        setIsSubmitting(false);
        return;
      }

      // Submit to API
      const response = await apiRequest(
        'POST',
        '/api/contact',
        contactData
      );

      if (response.ok) {
        const result = await response.json();
        
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. We'll get back to you soon.",
          variant: "default",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: ""
        });
      } else {
        const errorData = await response.json();
        
        // Handle validation errors from the server
        if (errorData.errors && Array.isArray(errorData.errors)) {
          const newErrors: Record<string, string> = {};
          errorData.errors.forEach((err: {field: string, message: string}) => {
            newErrors[err.field] = err.message;
          });
          setFormErrors(newErrors);
        }
        
        toast({
          title: "Error",
          description: errorData.message || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name *</label>
        <input 
          type="text" 
          id="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-[#2A2A3A] border ${formErrors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8FFF] text-white`}
          placeholder="Your name"
          required
        />
        {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
        <input 
          type="email" 
          id="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-[#2A2A3A] border ${formErrors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8FFF] text-white`}
          placeholder="your@email.com"
          required
        />
        {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone (Optional)</label>
          <input 
            type="tel" 
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#2A2A3A] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8FFF] text-white"
            placeholder="Your phone number"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company (Optional)</label>
          <input 
            type="text" 
            id="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#2A2A3A] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8FFF] text-white"
            placeholder="Your company"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">Service Interested In *</label>
        <select 
          id="service"
          value={formData.service}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-[#2A2A3A] border ${formErrors.service ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8FFF] text-white`}
          required
        >
          <option value="" disabled>Select a service</option>
          <option value="ai-automation">AI Automation</option>
          <option value="cybersecurity">Cybersecurity</option>
          <option value="app-development">AI-Backed Applications</option>
          <option value="cloud">Cloud Services</option>
          <option value="data-science">Data Science & ML</option>
          <option value="custom">Custom Solutions</option>
        </select>
        {formErrors.service && <p className="mt-1 text-sm text-red-500">{formErrors.service}</p>}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message *</label>
        <textarea 
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows={4} 
          className={`w-full px-4 py-3 bg-[#2A2A3A] border ${formErrors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8FFF] text-white`}
          placeholder="Tell us about your project..."
          required
        ></textarea>
        {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
      </div>
      
      <div>
        <motion.button 
          type="submit"
          className="w-full py-3 px-6 bg-gradient-to-r from-[#4F8FFF] to-[#9D4EDD] rounded-lg font-outfit font-medium disabled:opacity-70"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>
      </div>
    </form>
  );
}
