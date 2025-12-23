import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Fingerprint } from 'lucide-react';
import profileImage from './assets/image.png';

const IdentityCore: React.FC = () => {
  return (
    <section id="identity" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-lab-neon/10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="z-10 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          {/* ID Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-panel px-4 py-1.5 rounded-full flex items-center gap-2 mb-8 border-lab-neon/30 w-fit"
          >
            <div className="w-2 h-2 rounded-full bg-lab-neon animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-lab-dark/60 uppercase">System Online • v2.5.0</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-8xl font-bold tracking-tighter text-lab-dark mb-6 relative"
          >
            MAYUR
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lab-dark to-gray-500"> LAB</span>
            <motion.div 
              className="absolute -top-4 -right-8 md:-top-6 md:-right-12 rotate-12"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              <div className="glass-panel px-3 py-1 text-[10px] md:text-xs font-mono border-lab-neon text-lab-dark rounded-md transform rotate-12 shadow-lg">
                LIGHT_EDITION
              </div>
            </motion.div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-500 max-w-lg font-light mb-10 leading-relaxed"
          >
            Full Stack Developer & UI/UX Driven Engineer crafting 
            <span className="text-lab-dark font-medium"> digital experiences </span> 
            with precision, clarity, and purpose.
          </motion.p>

          {/* Access Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#projects" className="group cursor-hover relative inline-flex items-center gap-3 px-8 py-4 bg-lab-dark text-white rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(195,228,29,0.5)]">
              <span className="relative z-10 font-medium tracking-wide">INITIALIZE RESEARCH</span>
              <Fingerprint className="w-5 h-5 text-lab-neon relative z-10 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-64 h-64 md:w-96 md:h-96"
            >
                {/* Decorative rings behind image */}
                <motion.div 
                  className="absolute inset-0 rounded-full border border-lab-border/40 scale-110 opacity-50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute inset-0 rounded-full border border-dashed border-lab-neon/30 scale-125 opacity-40"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />

                {/* Main Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-lab-softgray group z-10">
                    {/* 
                      TODO: Replace the src below with your actual image path: 
                      src="/public/images/mayur-cutout.png" 
                    */}
                    <img 
                      src={profileImage} 
                      alt="Mayur Bharat Kumawat" 
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    
                    {/* Glass overlay sheen */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50 pointer-events-none" />
                </div>

                {/* Floating Badge */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -left-4 glass-panel px-4 py-2 rounded-xl flex items-center gap-3 shadow-lg z-20"
                >
                    <div className="w-10 h-10 rounded-full bg-lab-softgray flex items-center justify-center text-lg">
                        👨‍💻
                    </div>
                    <div>
                        <div className="text-[10px] uppercase text-gray-400 font-mono">Status</div>
                        <div className="text-sm font-bold text-lab-dark">Building</div>
                    </div>
                </motion.div>
            </motion.div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IdentityCore;