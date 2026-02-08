export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export const experienceData: Experience[] = [
  {
    title: "Full-Stack Developer(Intern)",
    company: "Jabsz Gaming Studio",
    period: "01/08/2025 - 30/11/2025",
    description: "Developed and maintained a React Native/Expo mobile app and a responsive React web interface, ensuring seamless performance across devices.",
    achievements: [
      "Revamped the UI/UX architecture, improving design consistency, responsiveness, and user satisfaction by 50%.",
      "Optimized backend performance with Firebase, improving real-time updates, data synchronization, and cloud security.",
      "Collaborated with design and QA teams to ensure high-quality, scalable, and well-tested releases.",
    ],
  },
  {
    title: "Full Stack Developer(Freelance)",
    company: "Zesframe",
    period: "12/05/2024 - 30/09/2025",
    description: "Created engaging user interfaces and interactive web experiences for various clients.",
    achievements: [
      "Improved website responsiveness by 40% using Next.js and server-side rendering to prevent data leaks.",
      "Integrated backend with React components and maintained 100% version control using Git and GitHub.",
      "Managed deployment and hosting, ensuring 99.9% uptime with optimized workflows and infrastructure monitoring.",
    ],
  },
];
