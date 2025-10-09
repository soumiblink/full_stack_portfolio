import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "Project Management App",
    description: "PRO - a project management app designed to help you manage your projects more efficiently.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Material-UI", "Nodemailer"],
    github: "https://github.com/soumiblink/Project_Management_App",
    live: "https://example.com",
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
    live: "https://example.com",
  },
  {
    title: "Multi Tenant Notes App",
    description: " Multi Tenant Notes App - A secure and scalable notes application that allows multiple users to create, manage, and share their notes in a multi-tenant environment.",
    tech: ["React.js", "Node.js", "MongoDB", "Jwt", "Express.js", "Tailwind CSS", " SQLite"],
    github: "https://github.com/soumiblink/multi_tenant_notes_app",
    live: "https://example.com",
  },
  {
    title: "Full Stack Portfolio",
    description: " Full Stack Portfolio - A personal portfolio website showcasing my projects, skills, and experience, built with a modern tech stack to demonstrate my full-stack development capabilities.",
    tech: ["React.js", "Node.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/soumibfull_stack_portfolio",
    live: "https://full-stack-portfolio-rust.vercel.app/",
  },
  {
    title: "Crop Recommendation System Using ML",
    description: " Crop Recommendation System Using ML - A machine learning-based application that analyzes soil, weather, and crop data to provide personalized crop recommendations for farmers, optimizing yield and sustainability.",
    tech: ["Python", "Jupyter Notebook", "HTML5", "CSS3", ],
    github: "https://github.com/soumiblink/Crop-Recommendation-System-Using-ML",
    live: "https://example.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 hover:glow-secondary group"
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
