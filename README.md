# Avni Singh: Applied AI Portfolio

Build a modern, editorial-style personal portfolio website for Avni Singh, an Applied AI Engineer. The design should feel like a premium digital magazine meets tech portfolio — sophisticated, confident, and memorable. NOT a generic template.
Design Direction:
Typography-led design: Pair a bold serif display font (e.g. "Fraunces," "Playfair Display," or "Instrument Serif") for headlines/names with a clean modern sans-serif (e.g. "Inter," "Neue Montreal," or "General Sans") for body text. Dramatic type scale contrast — huge headlines, small refined body copy.
Color palette: Warm off-white/cream background (not pure white), deep ink/charcoal text, one striking accent color (burnt orange, deep emerald, or electric cobalt) used sparingly. Optional dark-mode toggle.
Layout: Asymmetric, magazine-style grids — overlapping text/image blocks, oversized pull quotes, generous negative space, editorial section numbering (e.g. "01 — Experience").
Motion (heavy but tasteful): staggered text reveal on hero load; custom cursor that morphs into a label ("View," "GitHub") on hover; scroll-triggered fade/slide reveals per section; subtle parallax on images/backgrounds; magnetic hover on buttons and project cards; smooth eased scrolling (Lenis-style); animated underline on nav links.
Sections & Content:
Hero — Large serif "Avni Singh," staggered animation on load. Tagline: "Applied AI Engineer — building AI-powered software & production-grade backend systems." Photo [uploading]. Icon row linking to LinkedIn (linkedin.com/in/avnisingh07), GitHub (github.com/avnisingh07), email (avnisinghrana1@gmail.com). Resume download CTA. Scroll-cue indicator.
About — Pull-quote style intro. Bio: Applied AI Engineer with 1+ year of industry experience building AI-powered software and production-grade backend systems — LLM applications, RAG pipelines, AI agents, scalable REST APIs, full-stack systems. Strong in Python, FastAPI, distributed systems. B.Tech in AI/ML, Symbiosis Institute of Technology (graduating May 2026).
Experience — Editorial timeline, year markers left, content right:
AI/ML Intern, Bharat Forge, Pune — Jul 2025–Jul 2026.
Fleet Management System (github.com/avnisingh07/Fleet-Management-System) — backend REST APIs, graph-based task scheduling, MongoDB/MQTT/Express, React dashboards.
Warehouse Management System (github.com/avnisingh07/WMS) — QR-based task creation, React/Node/Express/PostgreSQL, cross-system integration.
Research Intern, DRDO, Mussoorie — Dec 2024–Jan 2025. Comparative study of AI/ML-enabled air defence systems.
Callout badge: "1 of 7 winners from 7,800+ applicants — Kalyani Group & WeCP Data, AI & Robotics Hackathon 2025."
Projects — Large featured blocks, revealed one at a time on scroll, each with title, description, tech tags, and GitHub link:
Interview Coach AI (Jul 2026–Ongoing) — LangGraph, LangChain, FastAPI, ChromaDB, MCP, Python. Multi-agent mock interview system with interviewer/evaluator/router agents in a stateful loop, RAG over ChromaDB, MCP-based web search, guardrails, and LLM-as-judge evals. GitHub: github.com/avnisingh07/interview-coach-ai
MultiModal Vision-Language-Action Framework (Aug–Nov 2025) — PyTorch, HuggingFace Transformers, Computer Vision. Explored VLA models combining visual perception, language understanding, and action generation. GitHub: github.com/avnisingh07/dexvla
DeepSea Vision (Mar–May 2025) — Computer Vision, Deep Learning, FastAPI. SRGAN-based underwater image enhancement with adversarial/perceptual learning. GitHub: github.com/avnisingh07/Deep-Sea-Vision
PlotPoint (Aug–Oct 2024) — GPT-2, LoRA, RAG, FAISS, Stable Diffusion, Gemini-Pro. AI pipeline for automated movie script/scene generation. GitHub: github.com/avnisingh07/PlotPoint
Skills — Animated tag cloud or horizontal scrolling marquee, grouped subtly by category rather than boring pill grids:
Languages: Python, JavaScript, TypeScript, C++, SQL
Applied AI: LLMs, RAG, LangChain, LangGraph, AI Agents, Multi-Agent Systems, MCP, LLM Evals, Guardrails, Multimodal AI, Computer Vision, Generative AI, Prompt Engineering
Deep Learning: PyTorch, Transformers, Hugging Face, OpenCV, YOLO, GANs, Diffusion Models
Backend & AI Infra: FastAPI, REST APIs, Model Inference, FAISS, ChromaDB, Vector Databases
Databases & Tools: PostgreSQL, MongoDB, Git, Docker, Linux
Computer Science: DSA, Operating Systems, Computer Networks, Distributed Systems, Concurrency
Cloud: AWS
Education & Recognition — B.Tech AI/ML, Symbiosis Institute of Technology (Aug 2022–May 2026), CGPA 7.8. Certifications: ChatGPT for Educators/Researchers/Professionals (World Technocon), GitHub Copilot Global Bootcamp (Microsoft Learn Student Ambassadors), What Is Generative AI? (LinkedIn), Introduction to Generative AI (Simplilearn). Publication: "LLM-based Abstractive Legal Document Summarization using Transformer Architectures" — ICIRD 2024, Shinawatra University.
Contact — Bold closing statement ("Let's build something.") with large animated email link (avnisinghrana1@gmail.com), phone (+91-8126487575), social icons (LinkedIn, GitHub), footer.
Technical requirements:
Fully responsive, mobile-first with motion gracefully simplified on mobile
Sticky nav with active-section highlighting and smooth-scroll anchors
Fast load despite heavy animation (lazy-load, optimize assets)
Clean, well-organized component structure for easy future edits

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ae5d8484-4450-4b2e-ab39-85353b99fcd4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
