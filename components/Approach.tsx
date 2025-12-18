import React from 'react';
import { motion } from 'framer-motion';
import { APPROACH_STEPS } from '../constants';

const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">How I Think</h2>
          <p className="text-slate-600 dark:text-slate-400">My structured approach to solving complex data problems.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPROACH_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden group hover:border-indigo-500/30 transition-colors shadow-sm dark:shadow-none"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-slate-300 dark:text-slate-500 group-hover:text-indigo-500 transition-colors select-none">
                {step.number}
              </div>
              
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-indigo-500 dark:text-indigo-400 font-bold mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;