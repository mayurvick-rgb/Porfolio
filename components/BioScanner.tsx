import React from 'react';
import { motion } from 'framer-motion';


const BioScanner: React.FC = () => {
  return (
    <section id="bio" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Visual Scanner Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden bg-lab-softgray border border-lab-border">
              {/* Image Placeholder */}
              <img 
                src="../components/assets/image.png" 
                alt="Mayur"
                className="w-full h-full object-cover filter grayscale opacity-90"
              />
              
              {/* Scanner Line Overlay */}
              <motion.div 
                className="absolute inset-x-0 h-1 bg-lab-neon shadow-[0_0_20px_rgba(195,228,29,0.8)] z-10"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
              
              {/* HUD Elements */}
              <div className="absolute top-4 left-4 text-[10px] font-mono text-lab-neon bg-black/50 backdrop-blur-md px-2 py-1 rounded">
                BIO_SCANNER_ACTIVE
              </div>
              <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white bg-black/50 backdrop-blur-md px-2 py-1 rounded flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/> MATCH: 99.9%
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <div className="space-y-8">
            <div>
              <span className="text-lab-neon font-mono text-sm tracking-widest uppercase mb-2 block">Station 05</span>
              <h2 className="text-4xl font-display font-bold text-lab-dark">Mayur Bharat Kumawat</h2>
              <p className="text-xl text-gray-400 font-light mt-2">Full Stack Developer • India</p>
            </div>

            <div className="prose prose-gray">
              <p className="text-gray-600 leading-relaxed">
                I'm a junior full stack developer with a relentless focus on building modern web and mobile experiences. 
                My workspace is a blend of clean UI, smooth interactions, and robust product thinking. 
              </p>
              <p className="text-gray-600 leading-relaxed">
                Currently based in Badlapur, India, I treat every project as a lab experiment—iterating until the 
                result is pure, functional, and aesthetically pleasing. Whether it's architecting a MongoDB backend 
                or fine-tuning a Framer Motion transition, I bring a detail-oriented approach to the entire stack.
              </p>
            </div>

            <div className="pt-8 border-t border-lab-stone">
              <div className="grid grid-cols-2 gap-4">
                <div>
                   <span className="block text-xs font-mono text-gray-400 uppercase">Current Status</span>
                   <span className="block text-sm font-medium text-lab-dark mt-1">Open for Opportunities</span>
                </div>
                <div>
                   <span className="block text-xs font-mono text-gray-400 uppercase">Location</span>
                   <span className="block text-sm font-medium text-lab-dark mt-1">Badlapur, India</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BioScanner;
