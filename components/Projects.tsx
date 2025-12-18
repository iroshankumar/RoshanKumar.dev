import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Activity, FileText, BarChart3, Cloud, Brain, Book } from 'lucide-react';
import { PROJECTS } from '../constants';

// Get unique categories
const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map(p => p.category)))];

const ProjectIcon = ({ category }: { category: string }) => {
  if (category.includes('Healthcare') || category.includes('Machine Learning')) return <Brain className="text-emerald-500" size={24} />;
  if (category.includes('NLP') || category.includes('Chatbot')) return <Activity className="text-indigo-500" size={24} />;
  if (category.includes('Analytics')) return <BarChart3 className="text-orange-500" size={24} />;
  if (category.includes('Deployment')) return <Cloud className="text-sky-500" size={24} />;
  return <FileText className="text-slate-500" size={24} />;
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 ring-2 ring-indigo-600 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-950'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-indigo-500/30 hover:shadow-xl dark:hover:border-indigo-500/30 transition-all group flex flex-col h-full shadow-sm"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 group-hover:border-indigo-500/30 transition-colors">
                        <ProjectIcon category={project.category} />
                    </div>
                </div>
                
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 px-2 py-1 rounded bg-slate-50 dark:bg-slate-950">
                    {project.category.includes('&') ? project.category.split('&')[0].trim() : project.category.split(' ')[0]}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>

              <div className="space-y-4 mb-6 flex-grow">
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider">Problem</span>
                  <p className="text-sm text-slate-700 dark:text-slate-400 mt-1 line-clamp-2">{project.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-500 uppercase tracking-wider">Solution</span>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-1 line-clamp-2">{project.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                   <span className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-md border border-slate-200 dark:border-slate-700">+{project.tech.length - 3}</span>
                )}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                    <Github size={14} />
                    <span>Code</span>
                    </a>
                )}
                {project.demo && (
                    <a href={project.demo} className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                    </a>
                )}
                {project.documentation && (
                    <a href={project.documentation} className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                    <Book size={14} />
                    <span>Docs</span>
                    </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;