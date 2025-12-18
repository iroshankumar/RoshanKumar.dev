export interface Project {
  title: string;
  category: string;
  problem: string;
  solution: string;
  tech: string[];
  impact: string;
  github?: string;
  demo?: string;
  documentation?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}