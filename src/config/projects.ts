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
    description: "WorkFlow Pro is built to solve inefficiencies in employee management by giving teams a centralized platform for tracking performance, analyzing data, and generating reports. The product emphasizes usability and decision-making, combining intuitive UI with powerful analytics.",
    tech: ["React.js", "React Router", "MongoDB", "JWT", "TailwindCSS", "Axios", "Recharts" ],
    github: "https://github.com/soumiblink/react.js_dashboard",
    live: "https://react-js-dashboard-chi.vercel.app/",
  },

  {
    title: "FinSight",
    description: "FinSight is a backend system for managing personal financial data with a strong focus on secure and structured access. I designed a role-aware REST API to ensure that sensitive data is handled correctly at the server level, emphasizing robust data modeling and access control rather than relying on the client. The frontend is built with React and Tailwind CSS, providing a clean and responsive interface for users to interact with their financial data. The backend is developed using Django and Django REST Framework, utilizing SQLite for data storage. JWT is implemented for secure authentication and authorization, ensuring that users can only access their own financial information.",
    tech: ["Python", "Django", "Django REST Framework", "SQLite", "React 18", "Tailwind CSS", "JWT"],
    github: "https://github.com/soumiblink/finsight",
    live: "https://finsight-brown.vercel.app/",
  },

  {
    title: "FlowGraph AI",
    description: "An LLM-powered business intelligence system built on SAP Order-to-Cash (O2C) data, enabling users to query data using natural language and explore results through interactive graph visualizations. I focused on bridging the gap between complex data systems and user-friendly insights.",
    tech: [" Groq (LLaMA 3.3)", " Streamlit", "SQLite", "Python"],
    github: "https://github.com/soumiblink/flowgraph-ai",
    live: "https://flowgraph-ai-adm2yzuqqkju2we9jrkpjf.streamlit.app//",
  },
  
  {
    title: "Conversa AI",
    description: "Conversa AI is a real-time meeting assistant that listens to conversations, transcribes them, and generates context-aware suggestions to help users respond more effectively. The goal is to reduce hesitation in conversations and improve communication in high-stakes situations. The system is designed to be fast and responsive, providing users with actionable insights during meetings.",
    tech: ["React", "Next.js", "Tailwind CSS", "Next.js API Routes", "Whisper Large V3", "GPT-OSS 120B"],
    github: "https://github.com/soumiblink/conversa-ai",
    live: "https://conversa-ai-three.vercel.app/",
  },

 {
    title: "LedgerFlow",
    description: "A minimal yet production-ready payout engine that allows merchants to accumulate earnings and withdraw funds securely. I focused on ensuring financial correctness by enforcing balance checks and building a reliable payout flow that prevents over-withdrawal. The backend is built with Django and Django REST Framework, utilizing PostgreSQL (Neon) for data storage. Celery and Redis are used for handling asynchronous tasks related to payout processing. The frontend is developed with React 1 8 and styled with Tailwind CSS, providing a clean and responsive interface for users to manage their earnings and withdrawals. Axios is used for making API requests to the backend.",
    tech: ["Django", "Django REST Framework", "PostgreSQL (Neon)", "Celery", "Redis", "React 18", "Tailwind CSS", "Axios"],
    github: "https://github.com/soumiblink/LedgerFlow",
    live: "https://ledger-flow-mu.vercel.app/",
  },


  
  {
    title: "Full Stack Portfolio",
    description: "A personal portfolio website designed to showcase my projects, skills, and approach to building products. I focused on creating a clean, responsive experience while highlighting both my engineering work and product thinking.",
    tech: ["React.js", "Node.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/soumiblink/full_stack_portfolio",
    live: "https://soumighosh.vercel.app/",
  },

  {
    title: "AI powered Applicant Tracking System",
    description: "AI powered applicant tracking system - An advanced ATS that leverages AI to streamline recruitment processes, enhance candidate matching, and improve hiring decisions.",
    tech: ["React.js", "TypeScript", "Vite", "Tailwind"],
    github: "https://github.com/soumiblink/AI_powered_applicant_tracking_system",
    live: "https://ai-powered-applicant-tracking-syste-pink.vercel.app/",
  },
  
  {
    title: "Fuel Route Optimizer",
    description: "A Django REST API APP that calculates an optimized driving route between two coordinates and estimates fuel stops and fuel cost along the route. This project integrates with the OpenRouteService API and uses fuel price data to simulate fuel optimization.",
    tech: ["Python", "Django", "Django REST Framework", "OpenRouteService API", "CSV-based fuel price dataset"],
    github: "https://github.com/soumiblink/spotter_python_django_assignment",
    live: "https://github.com/soumiblink/spotter_python_django_assignment",
  },
  
  

  {
    title: "StudyBuddy",
    description: "StudyBuddy - A collaborative study platform that connects students for group study sessions, resource sharing, and peer support by leveraging real-time communication and interactive tools.",
    tech: ["Python", "Django", "Node.js", "Tailwind CSS", "JWT"],
    github: "https://github.com/soumiblink/StudyBuddy",
    live: "https://github.com/soumiblink/StudyBuddy",
  },
  {
    title: "Project Management App",
    description: "PRO - a project management app designed to help you manage your projects more efficiently.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Framer Motion", "Nodemailer", "JWT", "TypeScript", "Zustand", "Zod", ],
    github: "https://github.com/soumiblink/Project_Management_App",
    live: "https://github.com/soumiblink/Project_Management_App",
  },
];

