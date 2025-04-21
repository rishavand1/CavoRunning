import { useState } from "react";
import { motion } from "framer-motion";
import * as Icons from '@heroicons/react/24/outline';
import ServiceDetails from "./ServiceDetails";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({ iconName, title, description, delay = 0 }: ServiceCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  
  // Convert kebab-case icon name to PascalCase for lookup
  const pascalCaseName = iconName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Icon';

  // Dynamically get the icon component from @heroicons/react
  const IconComponent = (Icons as any)[pascalCaseName];

  return (
    <>
      <motion.div 
        className="service-card bg-[#050507] rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
      >
        <div className="h-3 bg-gradient-to-r from-[#4F8FFF] to-[#9D4EDD]"></div>
        <div className="p-6">
          <div className="w-12 h-12 rounded-lg bg-[#2A2A3A] flex items-center justify-center mb-4">
            {IconComponent && <IconComponent className="h-6 w-6 text-[#4F8FFF]" />}
          </div>
          <h3 className="text-xl font-outfit font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <Button 
            variant="link" 
            className="text-[#4F8FFF] font-medium p-0 h-auto"
            onClick={() => setShowDetails(true)}
          >
            <span className="flex items-center">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Button>
        </div>
      </motion.div>
      
      <ServiceDetails 
        serviceTitle={title} 
        open={showDetails} 
        onOpenChange={setShowDetails} 
      />
    </>
  );
}
