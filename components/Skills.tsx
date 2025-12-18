import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database, Cloud, LayoutDashboard } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

const CategoryIcon = ({ category }: { category: string }) => {
  if (category.includes('Languages')) return <Database className="text-blue-500 dark:text-blue-400" size={24} />;
  if (category.includes('Machine')) return <Brain className="text-emerald-500 dark:text-emerald-400" size={24} />;
  if (category.includes('Deep')) return <Brain className="text-purple-500 dark:text-purple-400" size={24} />;
  if (category.includes('Generative')) return <div className="text-indigo-500 dark:text-indigo-400 text-xl font-bold">✨</div>;
  if (category.includes('Cloud')) return <Cloud className="text-sky-500 dark:text-sky-400" size={24} />;
  if (category.includes('Visualization')) return <LayoutDashboard className="text-orange-500 dark:text-orange-400" size={24} />;
  return <Code2 className="text-slate-500 dark:text-slate-400" size={24} />;
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Tech Stack Snapshot</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across Data Science and AI engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-indigo-500/30 dark:hover:border-slate-700 transition-colors shadow-sm dark:shadow-none"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
                  <CategoryIcon category={category.category} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 leading-tight">
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-800 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;