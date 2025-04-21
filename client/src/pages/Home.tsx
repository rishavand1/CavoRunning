import { motion } from "framer-motion";
import { Link } from "wouter";
import HomeSphere from "@/components/HomeSphere";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout currentTab="home">
      <section className="p-6 md:p-10 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <motion.div 
              className="w-full md:w-1/2 mb-10 md:mb-0 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold leading-tight">
                Powering Your <span className="bg-gradient-to-r from-[#4F8FFF] to-[#9D4EDD] bg-clip-text text-transparent">Digital Future</span> with AI
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-md">
                We create intelligent solutions for businesses with cutting-edge AI, cybersecurity, and cloud services.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/services" className="py-3 px-6 bg-gradient-to-r from-[#4F8FFF] to-[#9D4EDD] rounded-lg font-outfit font-medium">
                  Explore Services
                </Link>
                <Link href="/contact" className="py-3 px-6 bg-transparent border border-[#4F8FFF] text-[#4F8FFF] rounded-lg font-outfit font-medium hover:bg-[#4F8FFF] hover:text-white transition-colors">
                  Contact Us
                </Link>
              </div>
              
              <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-outfit font-bold text-[#4F8FFF]">12+</span>
                  <span className="text-sm text-gray-400 mt-1">Clients Worldwide</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-outfit font-bold text-[#9D4EDD]">99%</span>
                  <span className="text-sm text-gray-400 mt-1">Client Retention</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-outfit font-bold text-[#4F8FFF]">20+</span>
                  <span className="text-sm text-gray-400 mt-1">Projects Delivered</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 flex justify-center relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-full h-[400px] relative">
                <HomeSphere />
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-20 border-t border-gray-800 pt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-outfit font-semibold mb-8">Trusted By</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="flex items-center justify-center h-12 opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-xl font-outfit font-semibold text-gray-400">TechCorp</div>
              </div>
              <div className="flex items-center justify-center h-12 opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-xl font-outfit font-semibold text-gray-400">DataFlow</div>
              </div>
              <div className="flex items-center justify-center h-12 opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-xl font-outfit font-semibold text-gray-400">NexGen</div>
              </div>
              <div className="flex items-center justify-center h-12 opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-xl font-outfit font-semibold text-gray-400">CloudSys</div>
              </div>
              <div className="flex items-center justify-center h-12 opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-xl font-outfit font-semibold text-gray-400">AI Labs</div>
              </div>
              <div className="flex items-center justify-center h-12 opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-xl font-outfit font-semibold text-gray-400">SecureX</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}