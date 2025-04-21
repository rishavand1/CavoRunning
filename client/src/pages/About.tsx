import { motion } from "framer-motion";
import TeamMember from "@/components/TeamMember";
import { teamData } from "@/lib/constants";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout currentTab="about">
      <section className="p-6 md:p-10 lg:p-16 pt-28"> {/* Added pt-28 for navbar spacing */}
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-outfit font-bold">
              About <span className="bg-gradient-to-r from-[#4F8FFF] to-[#9D4EDD] bg-clip-text text-transparent">Cavo</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              We're a team of technology experts dedicated to helping businesses thrive in the digital era with cutting-edge AI and cybersecurity solutions.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-10 mb-16">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-outfit font-semibold mb-6">Our Mission</h3>
              <p className="text-gray-300 mb-6">
                At Cavo, our mission is to empower businesses with intelligent technology solutions that drive growth, enhance security, and create exceptional user experiences. We believe in harnessing the power of AI to solve complex business challenges and unlock new opportunities.
              </p>
              <p className="text-gray-300">
                We're committed to staying at the forefront of technological innovation, continuously evolving our expertise to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
              
              <div className="mt-10">
                <h3 className="text-2xl font-outfit font-semibold mb-6">Our Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-[#2A2A3A] flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4F8FFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-outfit font-medium mb-2">Innovation</h4>
                      <p className="text-gray-400 text-sm">We constantly push the boundaries of what's possible with technology.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-[#2A2A3A] flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4F8FFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-outfit font-medium mb-2">Security</h4>
                      <p className="text-gray-400 text-sm">We prioritize data protection and cybersecurity in everything we build.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-[#2A2A3A] flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4F8FFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-outfit font-medium mb-2">Collaboration</h4>
                      <p className="text-gray-400 text-sm">We work closely with our clients to create tailored solutions that meet their specific needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-[#2A2A3A] flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4F8FFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-outfit font-medium mb-2">Excellence</h4>
                      <p className="text-gray-400 text-sm">We strive for the highest quality in every solution we deliver.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#050507] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-outfit font-semibold mb-6">Our Team</h3>
                <p className="text-gray-300 mb-8">
                  Our diverse team of experts brings together deep knowledge in AI, machine learning, cybersecurity, cloud computing, and software development. We're passionate about technology and committed to delivering exceptional results.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {teamData.map((member, index) => (
                    <TeamMember 
                      key={index}
                      image={member.image}
                      name={member.name}
                      role={member.role}
                    />
                  ))}
                </div>
                
                <div className="mt-10 pt-6 border-t border-gray-800">
                  <h3 className="text-xl font-outfit font-semibold mb-4">Technology Partners</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center justify-center h-12 opacity-70 hover:opacity-100 transition-opacity">
                      <div className="text-lg font-outfit font-semibold text-gray-400">AWS</div>
                    </div>
                    <div className="flex items-center justify-center h-12 opacity-70 hover:opacity-100 transition-opacity">
                      <div className="text-lg font-outfit font-semibold text-gray-400">Google</div>
                    </div>
                    <div className="flex items-center justify-center h-12 opacity-70 hover:opacity-100 transition-opacity">
                      <div className="text-lg font-outfit font-semibold text-gray-400">Microsoft</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}