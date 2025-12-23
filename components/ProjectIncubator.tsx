import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import ProjectPod from './ProjectPod';

const ProjectIncubator: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-4 bg-lab-softgray relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-lab-neon font-mono text-sm tracking-widest uppercase mb-2 block">Station 02</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-lab-dark">Project Incubator</h2>
          </div>
          <p className="text-gray-500 max-w-md text-sm md:text-base text-right md:text-left">
            A collection of experiments and deployed solutions focusing on scalability, user experience, and modern architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectPod key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectIncubator;
