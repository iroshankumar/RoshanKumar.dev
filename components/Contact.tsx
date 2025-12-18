import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-white dark:bg-slate-950 pt-24 pb-8 overflow-hidden transition-colors duration-300 border-t border-slate-200 dark:border-slate-900">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-600/5 dark:bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Ready to build intelligent <br/> AI systems together?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            {PERSONAL_INFO.ctaMessage}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-semibold transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
            >
                <Mail size={20} />
                Email Me
            </a>
            <a
                href={PERSONAL_INFO.github}
                target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
            >
                <Github size={20} />
                View Github
            </a>
            </div>

            <div className="h-px w-full bg-slate-200 dark:bg-slate-800 mb-8" />

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
                </div>
                
                <div className="flex items-center gap-6">
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin size={20} />
                    </a>
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        <span className="sr-only">GitHub</span>
                        <Github size={20} />
                    </a>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-rose-500 dark:hover:text-white transition-colors">
                        <span className="sr-only">Email</span>
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;