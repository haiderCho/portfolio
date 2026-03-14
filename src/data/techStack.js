import { 
  SiPython, SiPytorch, SiTensorflow, SiScikitlearn, 
  SiHuggingface, SiOpencv, SiNumpy, SiR,
  SiWeightsandbiases, SiDocker, SiJupyter, SiRoboflow, SiAnaconda, SiGit, SiGitbook, SiPydantic,
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiVuedotjs, SiNodedotjs, SiDjango, SiFlask, SiLaravel,
  SiFlutter, SiStreamlit, SiTailwindcss, SiBootstrap,
  SiPostgresql, SiMongodb, SiMysql, SiSupabase, SiVercel, SiNetlify, SiPostman,
  SiCplusplus, SiRust, SiKotlin, SiArduino, SiRaspberrypi, SiDotnet, SiOpenjdk, SiPhp,
  SiLinux, SiApple, SiNpm, SiPnpm,
  SiUltralytics, SiPandas, SiFastapi, SiGithub
} from 'react-icons/si';
import { FaWindows } from 'react-icons/fa';

export const techStack = [
  {
    category: "Languages",
    description: "Core programming languages used across systems, AI research, and application development.",
    skills: [
      { name: "Python", icon: SiPython, proficiency: "Expert", experience: "6+ Years", tags: ["Scripting", "Automation", "ML Pipelines"] },
      { name: "C++", icon: SiCplusplus, proficiency: "Advanced", experience: "4+ Years", tags: ["Systems Programming", "Qt"] },
      { name: "Java", icon: SiOpenjdk, proficiency: "Intermediate", experience: "4+ Years", tags: ["OOP", "Backend Development"] },
      { name: "Rust", icon: SiRust, proficiency: "Beginner", experience: "1+ Year", tags: ["Memory Safety", "Concurrency"] },
      { name: "Kotlin", icon: SiKotlin, proficiency: "Beginner", experience: "2+ Years", tags: ["Android", "JVM"] },
      { name: "C#", icon: SiDotnet, proficiency: "Beginner", experience: "1+ Years", tags: [".NET", "Unity"] },
      { name: "R", icon: SiR, proficiency: "Intermediate", experience: "1+ Year", tags: ["Statistical Analysis", "Data Mining"] },
      { name: "PHP", icon: SiPhp, proficiency: "Intermediate", experience: "2+ Years", tags: ["Laravel", "Backend"] },
      { name: "JavaScript", icon: SiJavascript, proficiency: "Advanced", experience: "3+ Years", tags: ["ES6+", "Async Programming", "DOM"] },
      { name: "TypeScript", icon: SiTypescript, proficiency: "Advanced", experience: "2+ Years", tags: ["Type Safety", "Strict Mode"] },
    ]
  },

  {
    category: "AI / Machine Learning",
    description: "Deep learning, computer vision, NLP, and data science frameworks.",
    skills: [
      { name: "Pandas", icon: SiPandas, proficiency: "Expert", experience: "3+ Years", tags: ["Data Analysis", "Data Wrangling"], isAI: true },
      { name: "Scikit-Learn", icon: SiScikitlearn, proficiency: "Expert", experience: "3+ Years", tags: ["Classification", "Feature Engineering"], isAI: true },
      { name: "NumPy", icon: SiNumpy, proficiency: "Expert", experience: "3+ Years", tags: ["Numerical Computing"], isAI: true },
      { name: "PyTorch", icon: SiPytorch, proficiency: "Advanced", experience: "2+ Years", tags: ["Deep Learning", "TorchVision"], isAI: true },
      { name: "TensorFlow", icon: SiTensorflow, proficiency: "Advanced", experience: "2+ Years", tags: ["Keras", "Model Training"], isAI: true },
      { name: "OpenCV", icon: SiOpencv, proficiency: "Advanced", experience: "2+ Years", tags: ["Image Processing", "Computer Vision"], isAI: true },
      { name: "YOLOv8", icon: SiUltralytics, proficiency: "Expert", experience: "2+ Years", tags: ["Object Detection", "Real-Time Vision"], isAI: true },
      { name: "Roboflow", icon: SiRoboflow, proficiency: "Advanced", experience: "1+ Year", tags: ["Dataset Management", "Annotation"], isAI: true },
      { name: "Hugging Face", icon: SiHuggingface, proficiency: "Intermediate", experience: "2+ Years", tags: ["Transformers", "NLP"], isAI: true },
      { name: "Weights & Biases", icon: SiWeightsandbiases, proficiency: "Intermediate", experience: "1+ Year", tags: ["Experiment Tracking", "Model Monitoring"], isAI: true },
    ]
  },

  {
    category: "Frontend",
    description: "Modern web UI frameworks and styling systems.",
    skills: [
      { name: "React", icon: SiReact, proficiency: "Advanced", experience: "3+ Years", tags: ["Hooks", "Component Architecture", "SPA"] },
      { name: "Next.js", icon: SiNextdotjs, proficiency: "Advanced", experience: "2+ Years", tags: ["SSR", "App Router", "Server Components"] },
      { name: "Tailwind CSS", icon: SiTailwindcss, proficiency: "Advanced", experience: "3+ Years", tags: ["Utility-First", "Design Systems"] }
    ]
  },

  {
    category: "Backend & APIs",
    description: "Server frameworks, API development, and application backends.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, proficiency: "Advanced", experience: "2+ Years", tags: ["Express", "REST APIs"] },
      { name: "Django", icon: SiDjango, proficiency: "Intermediate", experience: "2+ Years", tags: ["ORM", "REST APIs", "Admin"] },
      { name: "Flask", icon: SiFlask, proficiency: "Advanced", experience: "2+ Years", tags: ["Microservices", "APIs"] },
      { name: "FastAPI", icon: SiFastapi, proficiency: "Advanced", experience: "2+ Years", tags: ["Async APIs", "Pydantic"] },
      { name: "Laravel", icon: SiLaravel, proficiency: "Intermediate", experience: "2+ Years", tags: ["MVC", "Eloquent"] }
    ]
  },

  {
    category: "Databases",
    description: "Relational and NoSQL database systems.",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, proficiency: "Advanced", experience: "2+ Years", tags: ["SQL", "Relational Databases"] },
      { name: "MongoDB", icon: SiMongodb, proficiency: "Intermediate", experience: "2+ Years", tags: ["NoSQL", "Document Databases"] }
    ]
  },

  {
    category: "DevOps & Tooling",
    description: "Development infrastructure, containers, environments, and workflows.",
    skills: [
      { name: "Docker", icon: SiDocker, proficiency: "Intermediate", experience: "1+ Year", tags: ["Containers", "Images", "Docker Compose"] },
      { name: "Git", icon: SiGit, proficiency: "Expert", experience: "4+ Years", tags: ["Version Control", "Branching"] },
      { name: "GitHub", icon: SiGithub, proficiency: "Expert", experience: "4+ Years", tags: ["Pull Requests", "GitHub Actions"] },
      { name: "Jupyter", icon: SiJupyter, proficiency: "Expert", experience: "3+ Years", tags: ["Notebooks", "Data Exploration"] },
      { name: "Anaconda", icon: SiAnaconda, proficiency: "Advanced", experience: "3+ Years", tags: ["Conda Environments", "Dependency Management"] },
      { name: "Pydantic", icon: SiPydantic, proficiency: "Advanced", experience: "2+ Years", tags: ["Data Validation", "Schemas"] },
      { name: "npm", icon: SiNpm, proficiency: "Advanced", experience: "3+ Years", tags: ["Package Management"] },
      { name: "pnpm", icon: SiPnpm, proficiency: "Advanced", experience: "2+ Years", tags: ["Monorepos", "Package Management"] }
    ]
  },

  {
    category: "Platforms & Systems",
    description: "Operating systems, embedded platforms, and hardware environments.",
    skills: [
      { name: "Linux", icon: SiLinux, proficiency: "Expert", experience: "8+ Years", tags: ["Ubuntu", "Arch", "Debian", "Fedora", "Shell"] },
      { name: "Windows", icon: FaWindows, proficiency: "Expert", experience: "15+ Years", tags: ["PowerShell", "System Optimization"] },
      { name: "Arduino", icon: SiArduino, proficiency: "Intermediate", experience: "2+ Years", tags: ["Embedded Systems", "IoT"] },
      { name: "Raspberry Pi", icon: SiRaspberrypi, proficiency: "Advanced", experience: "2+ Years", tags: ["Edge Computing", "Linux"] }
    ]
  },

  {
    category: "Cloud & Deployment",
    description: "Hosting platforms and deployment infrastructure.",
    skills: [
      { name: "Vercel", icon: SiVercel, proficiency: "Advanced", experience: "2+ Years", tags: ["Edge Functions", "Frontend Hosting"] },
      { name: "Netlify", icon: SiNetlify, proficiency: "Advanced", experience: "2+ Years", tags: ["Static Hosting", "CI/CD"] }
    ]
  }
];

export const workspaceInfo = {
  os: "Windows 11 Pro",
  cpu: "Intel Core i7 (11th Gen)",
  ram: "32 GB RAM",
  gpu: "NVIDIA RTX 3060"
};
