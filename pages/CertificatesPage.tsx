import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';

const CertificatesPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
       <div className="max-w-4xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-400">
                    <Award size={32} />
                </div>
                 <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Certifications</h1>
            </div>
         
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Continuous learning is key in the AI field. Here are the certifications and professional training I have completed.
          </p>
        </motion.div>

        <Certificates />
      </div>
      <Contact />
    </div>
  );
};

export default CertificatesPage;