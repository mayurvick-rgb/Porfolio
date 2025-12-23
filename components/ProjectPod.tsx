import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectPodProps {
  project: Project;
  index: number;
}

const ProjectPod: React.FC<ProjectPodProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-hover relative bg-white rounded-3xl p-6 border border-lab-stone shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl mb-6 bg-lab-softgray">
        <div className="absolute inset-0 bg-lab-dark/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono font-medium border border-white/50">
            {project.category}
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-lab-dark transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-md bg-lab-softgray text-gray-600 border border-lab-stone">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-lab-stone mt-auto">
          <span className="text-xs text-gray-400 font-mono">PROJECT_ID_0{project.id}</span>
          <button 
            onClick={() => project.link && window.open(project.link, '_blank')}
            className="flex items-center gap-2 text-sm font-medium hover:text-lab-neon transition-colors"
          >
            View Case <ArrowRight size={14} />
          </button> 
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPod;
