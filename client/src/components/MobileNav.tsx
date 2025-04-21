import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
  currentTab: string;
}

export default function MobileNav({ currentTab }: MobileNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "services", label: "Services", path: "/services" },
    { id: "contact", label: "Contact", path: "/contact" },
    { id: "about", label: "About", path: "/about" }
  ];

  return (
    <div className="md:hidden bg-[#050507] p-4 sticky top-0 z-20">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#4F8FFF] to-[#9D4EDD] flex items-center justify-center">
            <span className="text-white font-outfit font-bold text-lg">C</span>
          </div>
          <h1 className="ml-2 text-lg font-outfit font-semibold text-white">CAVO</h1>
        </div>
        <button onClick={toggleMenu} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="pt-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.path}>
                    <a 
                      className={`mobile-nav-link block py-2 px-3 rounded-md text-[#F8F9FA] font-outfit font-medium transition-colors ${
                        currentTab === item.id 
                          ? 'bg-[#2A2A3A]' 
                          : 'hover:bg-[#2A2A3A]'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
