import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout currentTab="contact">
      <section className="p-6 md:p-10 lg:p-16 pt-28"> {/* Added pt-28 for navbar spacing */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6">
                <span className="bg-gradient-to-r from-[#4F8FFF] to-[#9D4EDD] bg-clip-text text-transparent">Get in Touch</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Ready to transform your business with cutting-edge technology? Contact us today to discuss your project or schedule a consultation.
              </p>
              
              <ContactForm />
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactInfo />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}