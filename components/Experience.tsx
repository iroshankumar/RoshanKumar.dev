import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-6 space-y-12">
      {EXPERIENCES.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative pl-8 md:pl-12"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-50 dark:bg-slate-950 border-2 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/20 w-fit mt-2 md:mt-0">
              {exp.duration}
            </span>
          </div>
          
          <div className="flex items-center gap-2 mb-4 text-slate-700 dark:text-slate-300">
            <Briefcase size={16} />
            <span className="font-semibold">{exp.company}</span>
          </div>

          <ul className="space-y-3">
            {exp.responsibilities.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;