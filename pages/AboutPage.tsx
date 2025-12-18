import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">About Me</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I am a Data Scientist and Generative AI Engineer passionate about building intelligent systems. 
            With a strong foundation in Machine Learning and a knack for problem-solving, I turn complex data into actionable insights.
          </p>
        </motion.div>

        <div className="grid gap-16">
            {/* Experience Section */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                        <Briefcase size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Experience</h2>
                </div>
                <Experience />
            </section>

             {/* Education Section */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                     <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                        <GraduationCap size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h2>
                </div>
                <Education />
            </section>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default AboutPage;