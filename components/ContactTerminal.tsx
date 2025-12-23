import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../constants';
import { Send, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactTerminal: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');
    
    try {
      await emailjs.send(
        'service_wkvqa1h',
        'template_ci1tdev',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'mayurvicky01234@gmail.com'
        },
        'cvd_ISnTmH_yYSQIH'
      );
      
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <footer id="contact" className="bg-lab-dark text-white pt-32 pb-12 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-lab-neon/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          
          <div>
            <span className="text-lab-neon font-mono text-sm tracking-widest uppercase mb-4 block">Station 06</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8">Let's build something future-proof.</h2>
            <p className="text-gray-400 text-lg max-w-md mb-12">
              Ready to collaborate on your next big idea? The lab is open for commissions and employment opportunities.
            </p>
            
            <div className="flex flex-col gap-4">
              {SOCIALS.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url}
                  className="cursor-hover group flex items-center justify-between p-4 border border-white/10 rounded-xl hover:bg-white/5 hover:border-lab-neon/30 transition-all"
                >
                  <span className="font-medium">{social.platform}</span>
                  <span className="flex items-center gap-2 text-gray-400 group-hover:text-lab-neon text-sm transition-colors">
                    {social.label} <ArrowUpRight size={16} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase mb-2">Identification</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:outline-none focus:border-lab-neon transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase mb-2">Transmission Frequency</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com" 
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:outline-none focus:border-lab-neon transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase mb-2">Data Packet</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..." 
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:outline-none focus:border-lab-neon transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="cursor-hover w-full bg-lab-neon text-lab-dark font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Transmission'} <Send size={18} />
              </button>
              {status && (
                <p className={`text-center text-sm ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 text-gray-500 text-sm">
          <p>© 2025 Mayur Bharat Kumawat. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0 font-mono text-xs">
            <span>LIGHT_EDITION_BUILD_2.0</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactTerminal;
