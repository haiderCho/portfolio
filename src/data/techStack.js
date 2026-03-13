import { 
  SiPython, SiPytorch, SiTensorflow, SiScikitlearn, 
  SiHuggingface, SiOpencv, SiNumpy, SiR,
  SiWeightsandbiases, SiDocker, SiJupyter, SiRoboflow, SiAnaconda, SiGit, SiGitbook, SiPydantic,
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiVuedotjs, SiNodedotjs, SiDjango, SiFlask, SiLaravel,
  SiFlutter, SiStreamlit, SiTailwindcss, SiBootstrap,
  SiPostgresql, SiMongodb, SiMysql, SiSupabase, SiVercel, SiNetlify, SiPostman,
  SiCplusplus, SiRust, SiKotlin, SiArduino, SiRaspberrypi, SiDotnet, SiOpenjdk, SiPhp,
  SiLinux, SiApple, SiNpm, SiPnpm
} from 'react-icons/si';
import { FaWindows } from 'react-icons/fa';

export const techStack = [
  {
    category: "Languages",
    description: "Core programming languages across research, web, and systems domains.",
    skills: [
      { name: "Python", icon: SiPython, proficiency: "Expert", experience: "6+ Years", tags: ["Scripting", "ML Pipelines", "FastAPI"] },
      { name: "JavaScript", icon: SiJavascript, proficiency: "Expert", experience: "3+ Years", tags: ["ES6+", "DOM", "Async"] },
      { name: "TypeScript", icon: SiTypescript, proficiency: "Advanced", experience: "2+ Years", tags: ["Type Safety", "Strict Mode"] },
      { name: "C / C++", icon: SiCplusplus, proficiency: "Advanced", experience: "3+ Years", tags: ["Systems Programming", "Qt"] },
      { name: "Rust", icon: SiRust, proficiency: "Intermediate", experience: "1+ Year", tags: ["Memory Safety", "Concurrency"] },
      { name: "Kotlin", icon: SiKotlin, proficiency: "Advanced", experience: "2+ Years", tags: ["Android", "JVM"] },
      { name: "Java", icon: SiOpenjdk, proficiency: "Intermediate", experience: "2+ Years", tags: ["Enterprise", "Spring"] },
      { name: "C#", icon: SiDotnet, proficiency: "Intermediate", experience: "2+ Years", tags: [".NET", "Unity"] },
      { name: "PHP", icon: SiPhp, proficiency: "Intermediate", experience: "2+ Years", tags: ["Laravel", "Backend"] },
      { name: "R", icon: SiR, proficiency: "Intermediate", experience: "1+ Year", tags: ["Statistical Modeling", "Data Mining"] }
    ]
  },
  {
    category: "AI/ML & Data Science",
    description: "Deep learning frameworks, computer vision, NLP, and data analysis.",
    skills: [
      { name: "PyTorch", icon: SiPytorch, proficiency: "Advanced", experience: "2+ Years", tags: ["TorchVision", "Deep Learning"], isAI: true },
      { name: "TensorFlow", icon: SiTensorflow, proficiency: "Advanced", experience: "2+ Years", tags: ["Keras", "Model Hub"], isAI: true },
      { name: "YOLOv8", icon: SiPython, proficiency: "Expert", experience: "2+ Years", tags: ["Object Detection", "Real-Time"], isAI: true },
      { name: "Hugging Face", icon: SiHuggingface, proficiency: "Advanced", experience: "2+ Years", tags: ["Transformers", "NLP"], isAI: true },
      { name: "Scikit-Learn", icon: SiScikitlearn, proficiency: "Expert", experience: "3+ Years", tags: ["Classification", "Preprocessing"], isAI: true },
      { name: "OpenCV", icon: SiOpencv, proficiency: "Advanced", experience: "2+ Years", tags: ["Image Processing", "Vision Pipelines"], isAI: true },
      { name: "NumPy / Pandas", icon: SiNumpy, proficiency: "Expert", experience: "3+ Years", tags: ["Data Wrangling", "Numerical Computing"], isAI: true },
      { name: "Weights & Biases", icon: SiWeightsandbiases, proficiency: "Advanced", experience: "1+ Year", tags: ["Experiment Tracking", "Hyperparameters"], isAI: true },
      { name: "Roboflow", icon: SiRoboflow, proficiency: "Advanced", experience: "1+ Year", tags: ["Dataset Management", "Annotation"], isAI: true }
    ]
  },
  {
    category: "Web & Cloud",
    description: "Frontend frameworks, backend engines, databases, and deployment.",
    skills: [
      { name: "React", icon: SiReact, proficiency: "Expert", experience: "3+ Years", tags: ["Hooks", "SPA", "Component Design"] },
      { name: "Next.js", icon: SiNextdotjs, proficiency: "Advanced", experience: "2+ Years", tags: ["SSR", "App Router"] },
      { name: "Vue.js", icon: SiVuedotjs, proficiency: "Advanced", experience: "1+ Year", tags: ["Composition API", "Nuxt"] },
      { name: "Node.js", icon: SiNodedotjs, proficiency: "Advanced", experience: "2+ Years", tags: ["Express", "REST APIs"] },
      { name: "Django", icon: SiDjango, proficiency: "Advanced", experience: "2+ Years", tags: ["ORM", "Admin"] },
      { name: "Flask", icon: SiFlask, proficiency: "Advanced", experience: "2+ Years", tags: ["Microservices", "API"] },
      { name: "Laravel", icon: SiLaravel, proficiency: "Advanced", experience: "2+ Years", tags: ["MVC", "Eloquent"] },
      { name: "Flutter", icon: SiFlutter, proficiency: "Advanced", experience: "2+ Years", tags: ["Cross-Platform", "Dart"] },
      { name: "Tailwind CSS", icon: SiTailwindcss, proficiency: "Expert", experience: "3+ Years", tags: ["Utility-First", "Design Systems"] },
      { name: "PostgreSQL", icon: SiPostgresql, proficiency: "Advanced", experience: "2+ Years", tags: ["SQL", "Relational"] },
      { name: "MongoDB", icon: SiMongodb, proficiency: "Advanced", experience: "2+ Years", tags: ["NoSQL", "Documents"] },
      { name: "Supabase", icon: SiSupabase, proficiency: "Advanced", experience: "1+ Year", tags: ["BaaS", "Realtime"] },
      { name: "Vercel", icon: SiVercel, proficiency: "Advanced", experience: "2+ Years", tags: ["Hosting", "Edge Functions"] },
      { name: "Netlify", icon: SiNetlify, proficiency: "Advanced", experience: "2+ Years", tags: ["Hosting", "CI/CD"] }
    ]
  },
  {
    category: "DevOps & Tooling",
    description: "Containers, version control, environments, and developer productivity.",
    skills: [
      { name: "Docker", icon: SiDocker, proficiency: "Advanced", experience: "1+ Year", tags: ["Containerization", "Orchestration"] },
      { name: "Git / GitHub", icon: SiGit, proficiency: "Expert", experience: "4+ Years", tags: ["Version Control", "CI/CD"] },
      { name: "Jupyter", icon: SiJupyter, proficiency: "Expert", experience: "3+ Years", tags: ["Notebooks", "Data Visualization"] },
      { name: "Anaconda", icon: SiAnaconda, proficiency: "Advanced", experience: "3+ Years", tags: ["Environment Management", "Conda"] },
      { name: "Pydantic", icon: SiPydantic, proficiency: "Advanced", experience: "2+ Years", tags: ["Data Validation", "Schemas"] },
      { name: "npm / pnpm", icon: SiNpm, proficiency: "Advanced", experience: "3+ Years", tags: ["Package Management", "Monorepos"] },
      { name: "Documentation", icon: SiGitbook, proficiency: "Advanced", experience: "2+ Years", tags: ["GitBook", "Docsify", "LaTeX"] }
    ]
  },
  {
    category: "Systems & Hardware",
    description: "Operating systems, embedded platforms, and low-level development.",
    skills: [
      { name: "Linux / Unix", icon: SiLinux, proficiency: "Expert", experience: "8+ Years", tags: ["Ubuntu", "Arch", "Debian", "Fedora"] },
      { name: "Windows", icon: FaWindows, proficiency: "Expert", experience: "15+ Years", tags: ["Optimization", "PowerShell"] },
      { name: "macOS", icon: SiApple, proficiency: "Intermediate", experience: "1+ Year", tags: ["Development Environment"] },
      { name: "Arduino", icon: SiArduino, proficiency: "Advanced", experience: "2+ Years", tags: ["Embedded Systems", "IoT"] },
      { name: "Raspberry Pi", icon: SiRaspberrypi, proficiency: "Advanced", experience: "2+ Years", tags: ["Edge Computing", "Linux"] }
    ]
  }
];

export const workspaceInfo = {
  os: "Windows 11 Pro",
  cpu: "Intel Core i7 (11th Gen)",
  ram: "32 GB RAM",
  gpu: "NVIDIA RTX 3060"
};
