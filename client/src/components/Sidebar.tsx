import { Link } from "wouter";
import { motion } from "framer-motion";

interface SidebarProps {
  currentTab: string;
}

export default function Sidebar({ currentTab }: SidebarProps) {
  const navItems = [
    { id: "home", label: "Home", path: "/", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { id: "services", label: "Services", path: "/services", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )},
    { id: "contact", label: "Contact", path: "/contact", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )},
    { id: "about", label: "About", path: "/about", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )}
  ];

  return (
    <motion.nav 
      className="bg-[#050507] md:w-64 p-6 flex-shrink-0 z-10 hidden md:block"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-10">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#4F8FFF] to-[#9D4EDD] flex items-center justify-center">
          <span className="text-white font-outfit font-bold text-xl">C</span>
        </div>
        <h1 className="ml-3 text-xl font-outfit font-semibold text-white">CAVO</h1>
      </div>
      
      <ul className="space-y-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link href={item.path}>
              <a className={`nav-link flex items-center text-[#F8F9FA] font-outfit font-medium hover:text-[#4F8FFF] transition-colors relative ${currentTab === item.id ? 'active text-[#4F8FFF]' : ''}`}>
                {item.icon}
                {item.label}
                {currentTab === item.id && (
                  <motion.span 
                    className="absolute bottom-[-5px] left-0 h-[2px] bg-gradient-to-r from-[#4F8FFF] to-[#9D4EDD]"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      
      <div className="mt-10 pt-10 border-t border-gray-800">
        <Link href="/contact">
          <a className="block w-full py-3 px-4 text-center bg-gradient-to-r from-[#4F8FFF] to-[#9D4EDD] rounded-lg font-outfit font-medium">
            Get in Touch
          </a>
        </Link>
      </div>
    </motion.nav>
  );
}
