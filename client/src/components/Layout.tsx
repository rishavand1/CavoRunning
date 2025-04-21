import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "./Navbar";
import ThreeCanvas from "./ThreeCanvas";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  currentTab?: string;
}

export default function Layout({ children, currentTab: propCurrentTab }: LayoutProps) {
  const [location] = useLocation();
  const [currentTab, setCurrentTab] = useState<string>(propCurrentTab || "home");
  
  useEffect(() => {
    if (!propCurrentTab) {
      const path = location === "/" ? "home" : location.substring(1);
      setCurrentTab(path);
    }
  }, [location, propCurrentTab]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A10] text-[#F8F9FA] font-inter">
      {/* Three.js Background Container */}
      <ThreeCanvas />
      
      {/* Horizontal Navigation */}
      <Navbar currentTab={currentTab} />
      
      {/* Main Content */}
      <main className="flex-1 z-10 relative mt-16 pt-4">
        {/* Content Section */}
        <div className="min-h-[calc(100vh-80px)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
        
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
