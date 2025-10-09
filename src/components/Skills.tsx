import { Card } from "@/components/ui/card";
import { Code2, Database, Palette, Server, Smartphone, Zap } from "lucide-react";

const skillsData = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["React.js", "HTML5", "Vite", "JavaScript", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Python","Django", "PostgreSQL", "Fast APIs" , "REST APIs"],
  },
  {
    icon: Database,
    title: "Database & Cloud",
    skills: ["MongoDB", "Supabase", "Firebase" , "AWS", "Docker", "Vercel"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: ["React Native", "Progressive Web Apps", "Responsive Design"],
  },
  {
    icon: Zap,
    title: "Tools & DevOps",
    skills: ["Git", "CI/CD", "Linux", "Nginx", "Azure", "Jira", "Agile Methodologies" ,"Gemini AI" , "Vertex AI", "Postman", "OpenCV"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    skills: ["Figma", "Wireframing", "Prototyping", "User Research"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <Card
              key={index}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 hover:glow-primary group"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.skills.map((item, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
