import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";
import cavoLogo from '../assets/cavo-logo.jpg';

interface NavbarProps {
  currentTab: string;
}

export default function Navbar({ currentTab }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "services", label: "Services", path: "/services" },
    { id: "blog", label: "Blog", path: "/blog" },
    { id: "about", label: "About", path: "/about" },
    { id: "contact", label: "Contact", path: "/contact" }
  ];

  return (
    <motion.nav 
      className="bg-[#050507]/90 backdrop-blur-md w-full py-4 px-6 fixed top-0 z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="h-10">
            <img src={cavoLogo} alt="CAVO Tech" className="h-full" />
          </div>
          <div className="ml-2 flex flex-col">
            <h1 className="text-lg font-outfit font-semibold text-white">CAVO</h1>
            <span className="text-xs text-gray-400">Tech Beyond Boundaries</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.id} 
              href={item.path}
              className={`nav-link font-outfit font-medium hover:text-[#4F8FFF] transition-colors relative ${currentTab === item.id ? 'text-[#4F8FFF]' : 'text-[#F8F9FA]'}`}
            >
              {item.label}
              {currentTab === item.id && (
                <motion.span 
                  className="absolute bottom-[-5px] left-0 h-[2px] bg-gradient-to-r from-[#4F8FFF] to-[#9D4EDD]"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
          
          <Link 
            href="/contact"
            className="px-4 py-2 bg-gradient-to-r from-[#4F8FFF] to-[#9D4EDD] rounded-lg font-outfit font-medium text-white"
          >
            Get in Touch
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-gray-200 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-16 left-0 right-0 bg-[#050507] shadow-lg py-4 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link 
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-outfit font-medium ${currentTab === item.id ? 'text-[#4F8FFF]' : 'text-[#F8F9FA]'}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-2 px-4 text-center bg-gradient-to-r from-[#4F8FFF] to-[#9D4EDD] rounded-lg font-outfit font-medium text-white"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}