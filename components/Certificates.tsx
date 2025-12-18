import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import { Award, Calendar, BadgeCheck } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {CERTIFICATIONS.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="flex flex-col p-5 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all shadow-sm hover:shadow-md"
        >
          <div className="flex items-start justify-between mb-2">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg text-indigo-600 dark:text-indigo-400">
                <BadgeCheck size={20} />
            </div>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
                <Calendar size={12} />
                {cert.date}
            </span>
          </div>

          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 leading-snug">
            {cert.name}
          </h3>
          
          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
            {cert.issuer}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Certificates;