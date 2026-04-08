export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

export const projectsData: Project[] = [

  {
    title: "WorkFlow Pro",
    description: "WorkFlow Pro - WorkFlow Pro is a modern, full-featured employee management system built with React 18 and Vite. It features comprehensive set of tools for managing employees, viewing analytics, and generating reports.",
    tech: ["React.js", "React Router", "MongoDB", "JWT", "TailwindCSS", "Axios", "Recharts" ],
    github: "https://github.com/soumiblink/react.js_dashboard",
    live: "https://react-js-dashboard-chi.vercel.app/",
  },

  {
    title: "FinSight",
    description: "FinSight - FinSight is a system designed to manage personal financial data through a structured, role-aware REST API. The core focus of the project is API design, data modeling, and enforcing access control at the server level — not at the client",
    tech: ["Python", "Django", "Django REST Framework", "SQLite", "React 18", "Tailwind CSS", "JWT"],
    github: "https://github.com/soumiblink/finsight",
    live: "https://finsight-brown.vercel.app/",
  },

  {
    title: "FlowGraph AI",
    description: "An LLM-powered business data query system with interactive graph visualization, built on top of SAP Order-to-Cash (O2C) data..",
    tech: [" Groq (LLaMA 3.3)", " Streamlit", "SQLite", "Python"],
    github: "https://github.com/soumiblink/flowgraph-ai",
    live: "https://flowgraph-ai-adm2yzuqqkju2we9jrkpjf.streamlit.app//",
  },
  
  {
    title: "AI powered Applicant Tracking System",
    description: "AI powered applicant tracking system - An advanced ATS that leverages AI to streamline recruitment processes, enhance candidate matching, and improve hiring decisions.",
    tech: ["React.js", "TypeScript", "Vite", "Tailwind"],
    github: "https://github.com/soumiblink/AI_powered_applicant_tracking_system",
    live: "https://ai-powered-applicant-tracking-syste-pink.vercel.app/",
  },
  {
    title: "StudyBuddy",
    description: "StudyBuddy - A collaborative study platform that connects students for group study sessions, resource sharing, and peer support by leveraging real-time communication and interactive tools.",
    tech: ["Python", "Django", "Node.js", "Tailwind CSS", "JWT"],
    github: "https://github.com/soumiblink/StudyBuddy",
    live: "https://github.com/soumiblink/StudyBuddy",
  },
  
  {
    title: "Full Stack Portfolio",
    description: "Full Stack Portfolio - A personal portfolio website showcasing my projects, skills, and experience, built with a modern tech stack to demonstrate my full-stack development capabilities.",
    tech: ["React.js", "Node.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/soumiblink/full_stack_portfolio",
    live: "https://soumighosh.vercel.app/",
  },
  {
    title: "Fuel Route Optimizer",
    description: "A Django REST API APP that calculates an optimized driving route between two coordinates and estimates fuel stops and fuel cost along the route. This project integrates with the OpenRouteService API and uses fuel price data to simulate fuel optimization.",
    tech: ["Python", "Django", "Django REST Framework", "OpenRouteService API", "CSV-based fuel price dataset"],
    github: "https://github.com/soumiblink/spotter_python_django_assignment",
    live: "https://github.com/soumiblink/spotter_python_django_assignment",
  },
  {
    title: "Crop Recommendation System Using ML",
    description: "Crop Recommendation System Using ML - A machine learning-based application that analyzes soil, weather, and crop data to provide personalized crop recommendations for farmers, optimizing yield and sustainability.",
    tech: ["Python", "Jupyter Notebook", "HTML5", "CSS3"],
    github: "https://github.com/soumiblink/Crop-Recommendation-System-Using-ML",
    live: "https://github.com/soumiblink/Crop-Recommendation-System-Using-ML",
  },
  
  {
    title: "Project Management App",
    description: "PRO - a project management app designed to help you manage your projects more efficiently.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Framer Motion", "Nodemailer", "JWT", "TypeScript", "Zustand", "Zod", ],
    github: "https://github.com/soumiblink/Project_Management_App",
    live: "https://github.com/soumiblink/Project_Management_App",
  },
];

