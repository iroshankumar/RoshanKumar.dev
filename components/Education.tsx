import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="space-y-8">
      {EDUCATION.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="pl-4 border-l-2 border-slate-200 dark:border-slate-800"
        >
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
          <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mt-1">{edu.institution}</p>
          <p className="text-slate-500 text-sm mt-1">{edu.year}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Education;