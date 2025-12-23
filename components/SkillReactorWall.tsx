import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const SkillReactorWall: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-lab-softgray/50 skew-x-12 translate-x-32" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lab-neon font-mono text-sm tracking-widest uppercase mb-2 block"
          >
            Station 03
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-lab-dark mb-4"
          >
            Skill Reactor Wall
          </motion.h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Core competencies powering the lab's output. Constantly refined and upgraded.
          </p>
        </div>

        <div className="grid gap-12">
          {categories.map((category, catIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-6 pl-2 border-l-2 border-lab-neon">
                // {category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {SKILLS.filter(s => s.category === category).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="cursor-hover glass-panel px-6 py-3 rounded-xl border border-lab-stone hover:border-lab-neon/50 transition-colors shadow-sm"
                  >
                    <span className="font-medium text-lab-dark">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillReactorWall;
