
export const projectsData = [
  {
    id: "clay-and-crown",
    title: "Clay & Crown",
    slug: "clay-and-crown",
    category: "Full-Stack",
    featured: true,
    tagline: "E-commerce & showroom platform for luxury ceramic tiles.",
    description: "A full-stack modern web platform for showcasing and ordering premium ceramic tiles. Features robust Google OAuth authentication, optimized product carousels, proxy-based API handling, and direct database sync.",
    
    images: [
      "/images/projects/banner-clay-crown.png",// Hero
      "/images/projects/catelog-clay-crown.png",// Catalog
      "/images/projects/login-clay-crown.png"// Mobile View
  
    ],
    
    impact: "Implemented BetterAuth with Google OAuth & API Proxy routing to deliver secure, seamless authentication with zero client-side credential leaks.",
    
    tags: ["Next.js", "BetterAuth", "Google Login", "MongoDB", "Swiper", "API Proxy", "Vercel"],
    
    links: {
      live: "https://tiles-view.vercel.app/",
      github: "https://github.com/amitkhan-dev/Tiles-view",
    },
    
    metrics: {
      stars: 15,
      forks: 5,
    },
    
    challenges: [
      "Setting up secure API proxying in Next.js to bypass CORS issues while maintaining strict session cookies.",
      "Optimizing high-resolution tile product carousels with Swiper.js for zero layout shift on mobile screens."
    ]
  },
  {
    id: "digitools-platform",
    title: "DigiTools Platform",
    slug: "digitools-platform",
    category: "Frontend App",
    featured: true,
    tagline: "SaaS hub interface for digital utility tools & pricing models.",
    description: "Built a consolidated frontend web interface offering utility tools for developers and creators. Focused on modular Tailwind CSS components, custom theme toggles, and responsive pricing layouts.",

    images: [
      "/images/projects/digitools-banner.png",// Hero
      "/images/projects/digitools-apps.png",// Catalog
      "/images/projects/digitools-cart.png"// Mobile View
  
    ],
    
    impact: "Designed zero-dependency UI components with DaisyUI, improving overall frontend render speed and interactive state responsiveness.",
    
    tags: ["React.js", "Tailwind CSS", "DaisyUI", "JavaScript (ES6+)", "Vite"],
    
    links: {
      live: "digitools-ai-hub.netlify.app",
      github: "https://github.com/amitkhan-dev/DigiTools-Platform",
    },
    
    metrics: {
      stars: 12,
      forks: 4,
    },
    
    challenges: [
      "Designing a flexible multi-tier pricing table that cleanly adapts to mobile views without horizontal scroll breaks.",
      "Managing complex frontend state across persistent local tool preferences."
    ]
  },
  {
  id: "job-tracker",
  title: "Job Tracker Application",
  slug: "job-tracker-application",
  category: "Frontend",
  featured: false,
  tagline: "Browser-based application for tracking job applications.",
  description: "A responsive web application built to organize and monitor job application progress in real-time. Features interactive UI state management, client-side data persistence with Local Storage, and dynamic filtering.",
  
  images: [
    "/images/projects/Job-TackerBanner.png", // Hero
    "/images/projects/Job-tracker-interview.png", // List View
    "/images/projects/job-tracker-rejected.png" // Mobile View
  ],
  
  impact: "Utilized client-side LocalStorage persistence and dynamic DOM state management to ensure zero data loss during application tracking.",
  
  tags: ["JavaScript (ES6+)", "HTML5", "CSS3", "Local Storage", "DOM Manipulation", "GitHub Pages"],
  
  links: {
    live: "https://amitkhan-dev.github.io/JobTracker-Application-/",
    github: "https://github.com/amitkhan-dev/JobTracker-Application",
  },
  
  metrics: {
    stars: 8,
    forks: 2,
  },
  
  challenges: [
    "Managing complex UI state updates and DOM manipulation efficiently using plain vanilla JavaScript.",
    "Handling browser LocalStorage synchronization to prevent data loss or corruption during state modifications."
  ]
  },
  {
    id: "github-issue-tracker",
    title: "GitHub Issues Tracker",
    slug: "github-issue-tracker",
    category: "JavaScript / API",
    featured: false,
    tagline: "Lightweight browser app for filtering & tracking repository issues.",
    description: "A developer tool fetching public repository issues via REST APIs, featuring real-time search, tag filtering, and responsive state rendering.",
    
    images: [
      "/images/projects/github-dashboard.png",// Hero
      "/images/projects/github-colseIssue.png",// Catalog
      "/images/projects/github-login.png"// Mobile View
  
    ],
    
    impact: "Eliminated unnecessary API rate consumption using debounced input handlers.",
    
    tags: ["Vanilla JS", "DOM Manipulation", "GitHub REST API", "CSS3"],
    
    links: {
      live: "https://amitkhan-dev.github.io/GitHub-Issue-Tracker/",
      github: "https://github.com/amitkhan-dev/GitHub-Issue-Tracker",
    },
    
    metrics: {
      stars: 8,
      forks: 2,
    },
    
    challenges: [
      "Handling GitHub REST API pagination and rate limits smoothly.",
      "Creating accessible keyboard navigation for multi-select dropdown filters."
    ]
  }
];