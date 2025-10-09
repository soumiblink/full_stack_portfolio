import { Briefcase } from "lucide-react";

const experienceData = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Leading development of enterprise applications, mentoring junior developers, and architecting scalable solutions.",
    achievements: [
      "Reduced application load time by 60%",
      "Led team of 5 developers",
      "Implemented CI/CD pipeline",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects using modern web technologies.",
    achievements: [
      "Built 12+ production applications",
      "Improved code quality with testing",
      "Implemented responsive designs",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Creative Agency Co.",
    period: "2018 - 2020",
    description: "Created engaging user interfaces and interactive web experiences for various clients.",
    achievements: [
      "Delivered 20+ client projects",
      "Optimized website performance",
      "Collaborated with design team",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-primary/30"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary glow-primary" />
              
              <div className="glass-card p-6 hover:scale-105 transition-all duration-300 hover:glow-primary">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-secondary mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
