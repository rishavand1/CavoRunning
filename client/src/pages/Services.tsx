import { motion } from "framer-motion";
import ServicesCarousel from "@/components/ServicesCarousel";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import Layout from "@/components/Layout";

export default function Services() {
  return (
    <Layout currentTab="services">
      <section className="p-6 md:p-10 lg:p-16 pt-28"> {/* Added pt-28 for navbar spacing */}
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-outfit font-bold">
              <span className="bg-gradient-to-r from-[#4F8FFF] to-[#9D4EDD] bg-clip-text text-transparent">Technology Solutions</span> For Your Business
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              We deliver cutting-edge technology solutions tailored to your business needs, powered by AI and secured with advanced cybersecurity.
            </p>
          </motion.div>
          
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-outfit font-semibold mb-6">Services We Offer</h3>
            <ServicesCarousel />
          </motion.div>
          
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-outfit font-semibold mb-6">Featured Projects</h3>
            <ProjectsCarousel />
            
            <div className="mt-10 text-center">
              <a href="#" className="inline-block py-3 px-6 bg-[#2A2A3A] rounded-lg font-outfit font-medium hover:bg-opacity-80 transition-colors">
                View All Projects
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}