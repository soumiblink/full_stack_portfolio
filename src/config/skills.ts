import { Code2, Database, Palette, Server, Smartphone, Zap, LucideIcon } from "lucide-react";

export interface Skill {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

export const skillsData: Skill[] = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["React.js", "HTML5", "Vite", "JavaScript", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Python", "Django", "PostgreSQL", "Fast APIs", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database & Cloud",
    skills: ["MongoDB", "Supabase", "Firebase", "AWS", "Docker", "Vercel"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: ["React Native", "Progressive Web Apps", "Responsive Design"],
  },
  {
    icon: Zap,
    title: "Tools & DevOps",
    skills: ["Git", "CI/CD", "Linux", "Nginx", "Azure", "Jira", "Agile Methodologies", "Gemini AI", "Vertex AI", "Postman", "OpenCV"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    skills: ["Figma", "Wireframing", "Prototyping", "User Research"],
  },
];
