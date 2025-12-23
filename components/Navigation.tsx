import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className="fixed top-6 left-1/2 -translate-x-1/2 z-40"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-6 shadow-sm">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`cursor-hover relative text-sm font-medium transition-colors duration-300 ${
              activeSection === item.href.substring(1) ? 'text-lab-dark' : 'text-gray-400 hover:text-lab-dark'
            }`}
          >
            {activeSection === item.href.substring(1) && (
              <motion.span
                layoutId="activeNav"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-lab-neon"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
