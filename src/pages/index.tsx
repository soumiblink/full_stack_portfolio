import { lazy, Suspense } from "react";
import SkipToContent from "@/components/SkipToContent";
import ThemeToggle from "@/components/ThemeToggle";
import milkywayBg from "@/assets/milkyway.jpg";
import { motion, useScroll, useSpring } from "framer-motion";

const Hero = lazy(() => import("@/components/Hero"));
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("@/components/Projects"));
const Experience = lazy(() => import("@/components/Experience"));
const Contact = lazy(() => import("@/components/Contact"));

const SectionLoader = () => (
  <div className="py-20 px-4 flex justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent" />
  </div>
);

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <SkipToContent />
      <ThemeToggle />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen relative"
        style={{
          backgroundImage: `url(${milkywayBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
        role="main"
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/85" aria-hidden="true" />
        
        {/* Content */}
        <main id="main-content" className="relative z-10">
          <Suspense fallback={<SectionLoader />}>
            <Hero />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Skills />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Projects />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Experience />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
          
          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-border py-8 px-4"
            role="contentinfo"
          >
            <div className="container mx-auto text-center text-muted-foreground">
              <p>© 2026 Soumi Ghosh. Built with React, TypeScript, and Tailwind CSS.</p>
            </div>
          </motion.footer>
        </main>
      </motion.div>
    </>
  );
};

export default Index;
