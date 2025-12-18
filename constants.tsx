import { Project, Experience, SkillCategory, ApproachStep, EducationItem, Certification } from './types';
import { Github, Linkedin, Mail, FileText, LayoutDashboard, Brain, Database, Cloud } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Roshan Kumar",
  role: "Data Scientist & Generative AI Engineer",
  location: "New Delhi, India",
  email: "roshann.work@gmail.com",
  linkedin: "https://linkedin.com/in/iroshankumar",
  github: "https://github.com/iroshankumar",
  headline: "Data Scientist & Generative AI Engineer",
  description: "I build intelligent, data-driven AI systems using Machine Learning, LLMs, and RAG architectures to solve real-world problems.",
  ctaMessage: "Looking for a Data Scientist or Generative AI Engineer who can deliver real impact? Let’s connect."
};

export const NAVIGATION_LINKS = [
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'How I Think', href: '#approach' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  // AI & Machine Learning
  {
    title: "Heart Disease Prediction",
    category: "AI & Machine Learning",
    problem: "Early diagnosis of heart conditions is critical but often delayed due to manual analysis.",
    solution: "Developed a robust classification model to analyze patient vitals and predict risk levels.",
    tech: ["Python", "Scikit-learn", "Pandas", "Healthcare AI"],
    impact: "Achieved ~88% accuracy, enabling faster preliminary screening for medical professionals.",
    github: "https://github.com/iroshankumar/AIinHealthcareBuildingaLifeSavingHeartDiseasePredictor",
    demo: "#"
  },
  {
    title: "Forest Fire Detection using ML",
    category: "AI & Machine Learning",
    problem: "Wildfires cause massive environmental damage and are difficult to detect early manually.",
    solution: "Implemented an ML model analyzing environmental sensors and imagery to detect fire risks.",
    tech: ["Machine Learning", "Image Processing", "Python"],
    impact: "Reduced detection latency, potentially saving acres of forest through early alerts.",
    github: "https://github.com/iroshankumar/Forest-Fire-Prediction"
  },
  {
    title: "Loan Default Prediction",
    category: "AI & Machine Learning",
    problem: "Financial institutions lose billions annually due to inaccurate credit risk assessment.",
    solution: "Built a predictive model using historical financial data to score borrower risk.",
    tech: ["XGBoost", "Python", "EDA"],
    impact: "Improved risk classification accuracy, aiding in better loan approval decisions.",
    github: "https://github.com/iroshankumar/LOAN-DEFAULT-PREDICTION"
  },
  {
    title: "Diamond Price Prediction",
    category: "AI & Machine Learning",
    problem: "Valuating assets like diamonds and used cars varies wildly based on subjective factors.",
    solution: "Created regression models to objectively estimate prices based on physical attributes.",
    tech: ["Regression Analysis", "Scikit-learn", "Pandas"],
    impact: "Provided a standardized pricing mechanism with low mean absolute error.",
    github: "https://github.com/iroshankumar/DiamondPricePrediction"
  },
  {
    title: "Diabetes Prediction",
    category: "AI & Machine Learning",
    problem: "Diabetes is a silent killer that benefits immensely from early risk profiling.",
    solution: "Implemented and compared multiple algorithms (SVM, KNN, Random Forest) for best performance.",
    tech: ["Ensemble Learning", "Python", "Medical Data"],
    impact: "Identified key biomarkers and delivered a high-sensitivity prediction model.",
    github: "https://github.com/iroshankumar/Diabetes-prediction-using-logistic-regression"
  },
  {
    title: "Anomaly Detection (Isolation Forest)",
    category: "AI & Machine Learning",
    problem: "Detecting outliers in large datasets is difficult using traditional statistical thresholds.",
    solution: "Utilized Isolation Forest algorithms to automatically identify data anomalies.",
    tech: ["Unsupervised Learning", "Isolation Forest", "Python"],
    impact: "Automated quality control by flagging irregular data points instantly.",
    github: "https://github.com/iroshankumar/Isolation-Anamoly-Detection"
  },

  // NLP & Chatbot
  {
    title: "OpenAI Chatbot Assistant",
    category: "NLP & Chatbot",
    problem: "Users need instant, intelligent responses to general queries without human wait times.",
    solution: "Built an LLM-based assistant using OpenAI API to handle complex conversations.",
    tech: ["OpenAI API", "Python", "Prompt Engineering"],
    impact: "Delivered a responsive AI assistant capable of handling context-aware queries.",
    github: "https://github.com/iroshankumar/Chatbot-project-using-LLM-model-OpenAI-API",
    demo: "#"
  },
  {
    title: "Zomato Food Ordering Chatbot",
    category: "NLP & Chatbot",
    problem: "Ordering food via traditional apps can be overwhelming due to too many options.",
    solution: "Developed a conversational agent using Chainlit to guide users through ordering.",
    tech: ["Chainlit", "LangChain", "Python"],
    impact: "Simplified the user journey from food discovery to order placement.",
    github: "https://github.com/iroshankumar/zomatoChatBotUsingchainlit.io",
    documentation: "#"
  },
  {
    title: "RAG + OLLAMA Local Chatbot",
    category: "NLP & Chatbot",
    problem: "Running LLMs in the cloud raises data privacy and cost concerns for some applications.",
    solution: "Implemented a local RAG system using Ollama to query private documents securely.",
    tech: ["RAG", "Ollama", "Local LLMs", "Vector DB"],
    impact: "Enabled secure, offline document querying without data leaving the local environment.",
    github: "https://github.com/iroshankumar/ragOllamaProject"
  },

  // Data Analytics & Dashboards
  {
    title: "India Data Visualization App",
    category: "Data Analytics",
    problem: "Complex public datasets regarding India are often fragmented and hard to visualize.",
    solution: "Interactive dashboard providing dynamic insights into demographics and economic data.",
    tech: ["Streamlit", "Plotly", "Python"],
    impact: "Democratized access to public data through an intuitive visual interface.",
    github: "https://github.com/iroshankumar/India-Data-Visualization-App",
    demo: "#"
  },
  {
    title: "Corona Virus Dashboard",
    category: "Data Analytics",
    problem: "During the pandemic, real-time tracking of spread and recovery was essential.",
    solution: "Built a live-updating dashboard aggregating global and regional case data.",
    tech: ["Python", "Data Visualization", "API Integration"],
    impact: "Provided real-time situational awareness for health trends.",
    github: "https://github.com/iroshankumar/CoronaVirus-Dashboard"
  },
  {
    title: "Startup Funding Analysis",
    category: "Data Analytics",
    problem: "Understanding startup investment trends requires analyzing massive unstructured datasets.",
    solution: "Developed an analytics tool to visualize funding rounds, investors, and sector trends.",
    tech: ["EDA", "Matplotlib", "Seaborn"],
    impact: "Generated actionable insights for potential investors and market analysts.",
    github: "https://github.com/iroshankumar/startup-funding-analysis"
  },

  // Deployment & Automation
  {
    title: "Flask Email Automation",
    category: "Deployment & Automation",
    problem: "Sending bulk personalized emails manually is time-consuming and error-prone.",
    solution: "Created a Flask-based automated system to manage templates and bulk dispatch.",
    tech: ["Flask", "SMTP", "Python Automation"],
    impact: "Reduced manual effort by ~90% for mass communication tasks.",
    github: "https://github.com/iroshankumar/getting-data-from-sql-and-sending-bulk-emails-using-python"
  },
  {
    title: "MongoDB CSV Pipeline",
    category: "Deployment & Automation",
    problem: "Ingesting massive CSV files into NoSQL databases manually is slow and unscalable.",
    solution: "Built an automated ETL pipeline to stream and load CSV data into MongoDB.",
    tech: ["MongoDB", "ETL", "Python"],
    impact: "Streamlined data ingestion, ensuring database consistency and speed.",
    github: "https://github.com/iroshankumar/mongoDb-reading-data-from-csv-pushing-it-into-mongodb"
  },
  {
    title: "Flask App for MongoDB Upload",
    category: "Deployment & Automation",
    problem: "Users need a simple interface to upload data files directly to the database.",
    solution: "Developed a Flask web app allowing CSV uploads directly to MongoDB collections.",
    tech: ["Flask", "MongoDB", "Web Uploads"],
    impact: "Enabled non-technical users to update datasets without direct database access.",
    github: "https://github.com/iroshankumar/flask-app-to-send-csv-file-to-mongodb-by-upload"
  },

  // Web / Full Stack Projects
  {
    title: "AI Resume Builder",
    category: "Web & Full Stack",
    problem: "Job seekers struggle to tailor resumes for specific job descriptions manually.",
    solution: "Generative AI-based tool that parses input data and generates optimized resumes.",
    tech: ["NLP", "LLMs", "LangChain"],
    impact: "Automated content generation reducing writing time significantly.",
    github: "https://github.com/iroshankumar/ai-resume-builder",
    demo: "#"
  },
  {
    title: "Glass Portfolio Website",
    category: "Web & Full Stack",
    problem: "Need for a modern, visually appealing personal portfolio to showcase work.",
    solution: "Designed and built a responsive portfolio using glassmorphism design principles.",
    tech: ["HTML/CSS", "JavaScript", "UI Design"],
    impact: "Established a professional digital identity with improved user engagement.",
    github: "https://github.com/iroshankumar/glass-website"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Wise Online Stores Pvt Ltd",
    role: "Data Scientist",
    duration: "January 2024 – Present",
    responsibilities: [
      "Built ML models improving accuracy by ~18%.",
      "Automated data pipelines reducing manual work by ~40%.",
      "Generated actionable business insights from complex datasets."
    ]
  },
  {
    company: "Coding Tribes",
    role: "Data Scientist",
    duration: "January 2023 – January 2024",
    responsibilities: [
      "Conducted data preprocessing, EDA, and feature engineering.",
      "Led end-to-end ML model development.",
      "Collaborated on project delivery and deployment strategies."
    ]
  },
  {
    company: "Ducat India",
    role: "Data Science Trainee",
    duration: "July 2022 – May 2023",
    responsibilities: [
      "Developed a strong foundation in statistics, ML, and AI.",
      "Executed hands-on projects using Python, TensorFlow, and PyTorch."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Databases",
    skills: ["Python (NumPy, Pandas)", "SQL", "R", "Bash", "Java", "MySQL", "PostgreSQL", "MongoDB", "Snowflake", "BigQuery"]
  },
  {
    category: "Machine Learning & Stats",
    skills: ["Regression & Classification", "Clustering", "XGBoost", "Random Forest", "Hypothesis Testing", "A/B Testing", "Scikit-learn"]
  },
  {
    category: "Deep Learning & NLP",
    skills: ["PyTorch", "TensorFlow", "Transformers (BERT, GPT)", "CNN & RNN", "Transfer Learning", "NLTK", "SpaCy", "OpenCV"]
  },
  {
    category: "Generative AI",
    skills: ["LLMs", "RAG", "LangChain", "Agentic AI", "HuggingFace", "Prompt Engineering", "Fine-tuning"]
  },
  {
    category: "Cloud & MLOps",
    skills: ["AWS (SageMaker)", "Azure ML", "GCP", "Docker", "Kubernetes", "MLflow", "Git/GitHub", "CI/CD", "DVC"]
  },
  {
    category: "Visualization & Tools",
    skills: ["Tableau", "Power BI", "Plotly", "Matplotlib", "Streamlit", "Flask", "FastAPI", "Jupyter"]
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  { number: "01", title: "Business Problem", description: "Deeply understand the core business objective before writing code." },
  { number: "02", title: "Data Exploration", description: "Explore, clean, and validate data to ensure quality inputs." },
  { number: "03", title: "Feature Engineering", description: "Transform raw data into meaningful features that drive model performance." },
  { number: "04", title: "Model Training", description: "Select and train robust architectures suitable for the specific constraints." },
  { number: "05", title: "Evaluation", description: "Rigorous testing and optimization against business metrics." },
  { number: "06", title: "Deployment", description: "Deploy scalable solutions with monitoring for long-term reliability." }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "MTech – Artificial Intelligence & Machine Learning",
    institution: "Delhi Skill and Entrepreneurship University",
    year: "2023–2025"
  },
  {
    degree: "BTech – Computer Science Engineering",
    institution: "Maharshi Dayanand University",
    year: "2019–2023"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Data Science Masters – Python, Machine Learning & AI",
    issuer: "PhysicsWallah (PW)",
    date: "Feb 2024"
  },
  {
    name: "Computer Vision Fundamentals – OpenCV & Deep Learning",
    issuer: "Infosys",
    date: "Feb 2024"
  },
  {
    name: "Introduction to Artificial Intelligence (AI & ML Fundamentals)",
    issuer: "Infosys",
    date: "Feb 2024"
  },
  {
    name: "Introduction to Data Science using Python & Machine Learning",
    issuer: "Infosys",
    date: "Feb 2024"
  },
  {
    name: "Introduction to Deep Learning – Neural Networks, CNN & RNN",
    issuer: "Infosys",
    date: "Feb 2024"
  },
  {
    name: "Natural Language Processing (NLP) Fundamentals using AI",
    issuer: "Infosys",
    date: "Feb 2024"
  },
  {
    name: "Robotic Process Automation (RPA) Fundamentals",
    issuer: "Infosys",
    date: "Feb 2024"
  },
  {
    name: "Data Science Job Simulation",
    issuer: "BCG (Forage)",
    date: "Oct 2023"
  },
  {
    name: "Data Science Certification – Python, ML & Analytics",
    issuer: "Internshala",
    date: "Jun 2023"
  },
  {
    name: "Python Programming Fundamentals",
    issuer: "HackerRank",
    date: "Dec 2022"
  },
  {
    name: "SQL Fundamentals for Data Analysis",
    issuer: "HackerRank",
    date: "Nov 2022"
  },
  {
    name: "SQL for Data Analytics & Business Intelligence",
    issuer: "Internshala",
    date: "Nov 2022"
  },
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Udemy",
    date: "Nov 2021"
  },
  {
    name: "Complete Python Bootcamp",
    issuer: "Udemy",
    date: "Apr 2021"
  }
];