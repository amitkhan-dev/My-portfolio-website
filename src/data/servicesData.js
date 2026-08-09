import { Code2, Layout, Server, Zap } from "lucide-react";

export const servicesData = [
  {
    id: "fullstack",
    icon: Code2,
    title: "Full-Stack Web Development",
    description:
      "Building end-to-end, dynamic, and scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js) with clean architecture.",
    features: [
      "RESTful API Integration",
      "Database Architecture",
      "Authentication & Security",
    ],
  },
  {
    id: "frontend",
    icon: Layout,
    title: "Frontend UI/UX Engineering",
    description:
      "Crafting pixel-perfect, responsive, and highly interactive user interfaces using Next.js, React, Tailwind CSS, and Framer Motion.",
    features: [
      "Responsive Mobile-First Design",
      "Modern UI Design Systems",
      "State Management",
    ],
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend & API Development",
    description:
      "Designing fast, secure, and well-documented server-side architectures, REST APIs, and database schemes tailored to application requirements.",
    features: [
      "Express.js & Node.js Middleware",
      "MongoDB Data Modeling",
      "API Optimization",
    ],
  },
  {
    id: "performance",
    icon: Zap,
    title: "Performance & Optimization",
    description:
      "Auditing and optimizing existing web platforms to achieve top-tier Lighthouse scores, faster load times, and superior Core Web Vitals.",
    features: [
      "Code Splitting & Lazy Loading",
      "SEO Optimization",
      "Cross-Browser Compatibility",
    ],
  },
];