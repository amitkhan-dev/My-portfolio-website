import {Cpu, Code2, Database, Wrench, Users,} from "lucide-react";

import { SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs,SiTailwindcss,
  SiDaisyui, SiNodedotjs, SiExpress, SiMongodb, SiMongoose, SiGit,
  SiGithub, SiVercel, SiNpm, } from "react-icons/si";

export const skillCategories = [
  { id: "all", label: "All Skills", icon: Cpu,},
  { id: "frontend", label: "Frontend", icon: Code2,},
  { id: "backend", label: "Backend & Database", icon: Database,},
  { id: "tools", label: "Tools & DevOps", icon: Wrench, },
  { id: "professional", label: "Professional", icon: Users,},
];

export const skillsData = [

  // Frontend
  { name: "HTML5", category: "frontend", type: "Core Technology",
    description: "Semantic and accessible web structure",
    highlights: ["Semantic HTML", "Accessibility", "SEO-friendly markup"],
    icon: SiHtml5 },

  { name: "CSS3", category: "frontend", type: "Core Technology",
    description: "Responsive and modern interface styling",
    highlights: ["Responsive Design", "Flexbox", "Grid"],
    icon: SiCss, },

  { name: "JavaScript",
    category: "frontend",
    type: "Core Technology",
    description: "Building interactive and dynamic web applications",
    highlights: ["ES6+", "DOM", "Async JavaScript"],
    icon: SiJavascript,
  },

  {
    name: "React.js",
    category: "frontend",
    type: "Core Technology",
    description: "Building reusable and interactive user interfaces",
    highlights: ["Components", "Hooks", "State Management"],
    icon: SiReact,
  },

  {
    name: "Next.js",
    category: "frontend",
    type: "Full-Stack Framework",
    description: "Developing modern production-ready web applications",
    highlights: ["App Router", "SSR", "Routing"],
    icon: SiNextdotjs,
  },

  {
    name: "Tailwind CSS",
    category: "frontend",
    type: "UI & Styling",
    description: "Creating responsive and scalable UI systems",
    highlights: ["Responsive UI", "Utility Classes", "Design Systems"],
    icon: SiTailwindcss,
  },

  {
    name: "DaisyUI",
    category: "frontend",
    type: "UI Component Library",
    description: "Building consistent interfaces with reusable components",
    highlights: ["Components", "Themes", "Tailwind Integration"],
    icon: SiDaisyui,
  },

  // Backend & Database
  {
    name: "Node.js",
    category: "backend",
    type: "Backend Runtime",
    description: "Building scalable server-side applications",
    highlights: ["REST APIs", "Async Programming", "Server Logic"],
    icon: SiNodedotjs,
  },

  {
    name: "Express.js",
    category: "backend",
    type: "Backend Framework",
    description: "Developing structured and maintainable REST APIs",
    highlights: ["Routing", "Middleware", "API Architecture"],
    icon: SiExpress,
  },

  {
    name: "MongoDB",
    category: "backend",
    type: "Database",
    description: "Working with flexible NoSQL data models",
    highlights: ["CRUD", "Data Modeling", "Queries"],
    icon: SiMongodb,
  },

  {
    name: "Mongoose",
    category: "backend",
    type: "ODM",
    description: "Managing MongoDB data models and validation",
    highlights: ["Schemas", "Validation", "Relationships"],
    icon: SiMongoose,
  },

  {
    name: "REST APIs",
    category: "backend",
    type: "API Development",
    description: "Designing and integrating RESTful web services",
    highlights: ["CRUD APIs", "Authentication", "API Integration"],
    icon: Code2,
  },

  // Tools & DevOps

  {
    name: "Git",
    category: "tools",
    type: "Version Control",
    description: "Managing source code and development workflows",
    highlights: ["Branching", "Merging", "Version Control"],
    icon: SiGit,
  },

  {
    name: "GitHub",
    category: "tools",
    type: "Collaboration",
    description: "Managing repositories and collaborative development",
    highlights: ["Repositories", "Pull Requests", "Git Workflow"],
    icon: SiGithub,
  },

  {
    name: "Vercel",
    category: "tools",
    type: "Deployment",
    description: "Deploying and managing modern web applications",
    highlights: ["Deployment", "CI/CD", "Preview Builds"],
    icon: SiVercel,
  },

  {
    name: "npm",
    category: "tools",
    type: "Package Management",
    description: "Managing dependencies and JavaScript packages",
    highlights: ["Dependencies", "Scripts", "Packages"],
    icon: SiNpm,
  },

  // Professional Skills

  {
    name: "Problem Solving",
    category: "professional",
    type: "Core Professional Skill",
    description: "Breaking complex problems into practical solutions",
    highlights: ["Debugging", "Logical Thinking", "Troubleshooting"],
    icon: Code2,
  },

  {
    name: "Clean Code",
    category: "professional",
    type: "Development Practice",
    description: "Writing readable, maintainable and reusable code",
    highlights: ["Reusable Components", "Naming", "Organization"],
    icon: Wrench,
  },

  {
    name: "Team Collaboration",
    category: "professional",
    type: "Professional Skill",
    description: "Working effectively with developers and project teams",
    highlights: ["Communication", "Git Workflow", "Knowledge Sharing"],
    icon: Users,
  },

  {
    name: "Continuous Learning",
    category: "professional",
    type: "Growth Mindset",
    description: "Continuously improving technical and problem-solving skills",
    highlights: ["Learning", "Experimentation", "Adaptability"],
    icon: Cpu,
  },
];