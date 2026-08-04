export const SECTIONS = [
  { id: "about", num: "01", label: "About" },
  { id: "experience", num: "02", label: "Experience" },
  { id: "projects", num: "03", label: "Projects" },
  { id: "skills", num: "04", label: "Skills" },
  { id: "education", num: "05", label: "Education" },
  { id: "contact", num: "06", label: "Contact" },
] as const;

export const LINKS = {
  linkedin: "https://linkedin.com/in/avnisingh07",
  github: "https://github.com/avnisingh07",
  email: "avnisinghrana1@gmail.com",
  phone: "+91-8126487575",
};

type ExpItem = { title: string; href?: string; body: string };

export const EXPERIENCE: {
  year: string;
  role: string;
  org: string;
  period: string;
  items: ExpItem[];
}[] = [
  {
    year: "2025 — 2026",
    role: "AI/ML Intern",
    org: "Bharat Forge, Pune",
    period: "Jul 2025 — Jul 2026",
    items: [
      {
        title: "Fleet Management System",
        href: "https://github.com/avnisingh07/Fleet-Management-System",
        body: "Backend REST APIs and graph-based task scheduling over MongoDB, MQTT and Express, with React dashboards for live fleet telemetry.",
      },
      {
        title: "Warehouse Management System",
        href: "https://github.com/avnisingh07/WMS",
        body: "QR-based task creation across React, Node, Express and PostgreSQL, integrated with adjacent internal systems.",
      },
    ],
  },
  {
    year: "2024 — 2025",
    role: "Research Intern",
    org: "DRDO, Mussoorie",
    period: "Dec 2024 — Jan 2025",
    items: [
      {
        title: "AI/ML-enabled air defence systems",
        body: "Comparative study of AI/ML-enabled air defence systems and their operational trade-offs.",
      },
    ],
  },
];

export const PROJECTS = [
  {
    index: "01",
    title: "Interview Coach AI",
    period: "Jul 2026 — Ongoing",
    body: "Multi-agent mock interview system with interviewer, evaluator and router agents running in a stateful loop — RAG over ChromaDB, MCP-based web search, guardrails and LLM-as-judge evals.",
    tags: ["LangGraph", "LangChain", "FastAPI", "ChromaDB", "MCP", "Python"],
    href: "https://github.com/avnisingh07/interview-coach-ai",
  },
  {
    index: "02",
    title: "MultiModal Vision-Language-Action Framework",
    period: "Aug — Nov 2025",
    body: "Explored VLA models combining visual perception, language understanding and action generation for embodied decision-making.",
    tags: ["PyTorch", "HuggingFace Transformers", "Computer Vision"],
    href: "https://github.com/avnisingh07/dexvla",
  },
  {
    index: "03",
    title: "DeepSea Vision",
    period: "Mar — May 2025",
    body: "SRGAN-based underwater image enhancement using adversarial and perceptual learning, served through a FastAPI inference layer.",
    tags: ["Computer Vision", "Deep Learning", "FastAPI"],
    href: "https://github.com/avnisingh07/Deep-Sea-Vision",
  },
  {
    index: "04",
    title: "PlotPoint",
    period: "Aug — Oct 2024",
    body: "AI pipeline for automated movie script and scene generation, blending fine-tuned language models with retrieval and image synthesis.",
    tags: ["GPT-2", "LoRA", "RAG", "FAISS", "Stable Diffusion", "Gemini-Pro"],
    href: "https://github.com/avnisingh07/PlotPoint",
  },
];

export const SKILL_GROUPS = [
  { name: "Languages", items: ["Python", "JavaScript", "TypeScript", "C++", "SQL"] },
  {
    name: "Applied AI",
    items: [
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "AI Agents",
      "Multi-Agent Systems",
      "MCP",
      "LLM Evals",
      "Guardrails",
      "Multimodal AI",
      "Computer Vision",
      "Generative AI",
      "Prompt Engineering",
    ],
  },
  {
    name: "Deep Learning",
    items: ["PyTorch", "Transformers", "Hugging Face", "OpenCV", "YOLO", "GANs", "Diffusion Models"],
  },
  {
    name: "Backend & AI Infra",
    items: ["FastAPI", "REST APIs", "Model Inference", "FAISS", "ChromaDB", "Vector Databases"],
  },
  { name: "Databases & Tools", items: ["PostgreSQL", "MongoDB", "Git", "Docker", "Linux"] },
  {
    name: "Computer Science",
    items: [
      "DSA",
      "Operating Systems",
      "Computer Networks",
      "Distributed Systems",
      "Concurrency",
    ],
  },
  { name: "Cloud", items: ["AWS"] },
];

export const CERTIFICATIONS = [
  {
    label: "ChatGPT for Educators, Researchers & Professionals — World Technocon",
    href: "https://a.wtco.in/certificate/download-certificate/YFSV93EBE6GM9LW",
  },
  {
    label: "GitHub Copilot Global Bootcamp — Microsoft Learn Student Ambassadors",
    href: "https://drive.google.com/file/d/1-AKUmn7WimY13P8ys7Q9oWQE4wMEQfB7/view?usp=drivesdk",
  },
  {
    label: "What Is Generative AI? — LinkedIn",
    href: "https://www.linkedin.com/learning/certificates/15a42fc9ae42bc9f91ff6cfc77c571dfaf5a7270f6a72e217772f59c6c5a7aef",
  },
  {
    label: "Introduction to Generative AI — Simplilearn",
    href: "https://certificates.simplicdn.net/share/10524208_10856424_1785233870590.pdf",
  },
];

