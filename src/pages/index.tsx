import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import milkywayBg from "@/assets/milkyway.jpg";

const Index = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${milkywayBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/85" />
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        
        {/* Footer */}
        <footer className="border-t border-border py-8 px-4">
          <div className="container mx-auto text-center text-muted-foreground">
            <p>© 2025 Soumi Ghosh. Built with React, TypeScript, and Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
