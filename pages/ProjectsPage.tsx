import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Github } from 'lucide-react';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const ProjectsPage: React.FC = () => {
  const highlights = [
    "Machine Learning",
    "NLP Chatbots & RAG",
    "Full-stack Apps",
    "Data Visualization",
    "Cloud Deployment"
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Featured Projects</h1>
          
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 max-w-4xl shadow-sm">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 font-medium leading-relaxed">
              Explore some of my best real-world machine learning, automation, full-stack, and chatbot projects. 
              All source code is publicly available on GitHub at <a href="https://github.com/iroshankumar" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold inline-flex items-center gap-1">github.com/iroshankumar <Github size={16}/></a>
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
                {highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <CheckCircle2 size={18} className="text-indigo-500" />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
          </div>
        </motion.div>
        
        <Projects />
      </div>
      <Contact />
    </div>
  );
};

export default ProjectsPage;