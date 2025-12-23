import React from 'react';
import { motion } from 'framer-motion';

const LightMarquee: React.FC = () => {
  const words = ["DESIGN", "DEVELOPMENT", "INTERACTION", "REACT", "NEXT.JS", "NODE", "TYPESCRIPT", "UI/UX", "DESIGN", "DEVELOPMENT", "INTERACTION", "REACT", "NEXT.JS", "NODE", "TYPESCRIPT", "UI/UX"];

  return (
    <div className="w-full py-12 bg-white border-y border-lab-border overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...words, ...words].map((word, i) => (
            <div key={i} className="flex items-center gap-16 opacity-30 select-none">
              <span className="text-6xl font-display font-bold text-transparent stroke-text" style={{ WebkitTextStroke: "1px #DADADA" }}>
                {word}
              </span>
              <div className="w-3 h-3 rounded-full bg-lab-neon" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LightMarquee;
