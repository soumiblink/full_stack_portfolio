export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

export const projectsData: Project[] = [
  {
    title: "Project Management App",
    description: "PRO - a project management app designed to help you manage your projects more efficiently.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Material-UI", "Nodemailer"],
    github: "https://github.com/soumiblink/Project_Management_App",
    live: "https://github.com/soumiblink/Project_Management_App",
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
    tech: ["Python", "Django", "HTML5", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/soumiblink/StudyBuddy",
    live: "https://github.com/soumiblink/StudyBuddy",
  },
  {
    title: "Multi Tenant Notes App",
    description: "Multi Tenant Notes App - A secure and scalable notes application that allows multiple users to create, manage, and share their notes in a multi-tenant environment.",
    tech: ["React.js", "Node.js", "MongoDB", "JWT", "Express.js", "Tailwind CSS", "SQLite"],
    github: "https://github.com/soumiblink/multi_tenant_notes_app",
    live: "https://github.com/soumiblink/multi_tenant_notes_app",
  },
  {
    title: "Full Stack Portfolio",
    description: "Full Stack Portfolio - A personal portfolio website showcasing my projects, skills, and experience, built with a modern tech stack to demonstrate my full-stack development capabilities.",
    tech: ["React.js", "Node.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/soumiblink/full_stack_portfolio",
    live: "https://soumighosh.vercel.app/",
  },
  {
    title: "Crop Recommendation System Using ML",
    description: "Crop Recommendation System Using ML - A machine learning-based application that analyzes soil, weather, and crop data to provide personalized crop recommendations for farmers, optimizing yield and sustainability.",
    tech: ["Python", "Jupyter Notebook", "HTML5", "CSS3"],
    github: "https://github.com/soumiblink/Crop-Recommendation-System-Using-ML",
    live: "https://github.com/soumiblink/Crop-Recommendation-System-Using-ML",
  },
];
