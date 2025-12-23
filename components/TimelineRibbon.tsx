import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const TimelineRibbon: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-lab-softgray relative">
      <div className="container mx-auto px-4 max-w-4xl">
         <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-lab-neon">
            <Briefcase size={24} />
          </div>
          <div>
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Station 04</span>
            <h2 className="text-3xl font-display font-bold text-lab-dark">Timeline Conveyor</h2>
          </div>
        </motion.div>

        <div className="relative border-l border-lab-border ml-6 md:ml-0 space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-0 md:grid md:grid-cols-5 md:gap-12 group"
            >
              {/* Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-lab-border group-hover:bg-lab-neon transition-colors md:hidden" />
              
              <div className="md:col-span-1 md:text-right md:pr-12 relative">
                 <div className="hidden md:block absolute -right-[5px] top-2 w-2.5 h-2.5 rounded-full bg-lab-border group-hover:bg-lab-neon transition-colors z-10" />
                 <span className="text-sm font-mono text-gray-400 block pt-1">{exp.period}</span>
              </div>
              
              <div className="md:col-span-4 bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-lab-border transition-colors">
                <h3 className="text-xl font-bold text-lab-dark">{exp.role}</h3>
                <h4 className="text-lab-neon font-medium mb-4">{exp.company}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineRibbon;
