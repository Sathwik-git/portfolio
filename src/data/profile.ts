import profilePhoto from "../assets/profile-256.png";
import wexaLogo from "../assets/wexa.svg";
import zofLogo from "../assets/zof.svg";
import kartavyaLogo from "../assets/kartavya-64.png";

export const profile = {
  name: "Sathwik Bodakuntla",
  headline: "AI Engineer - Researcher - Developer - Hyderabad, India",
  bio: [
    { text: "I build " },
    { text: "intelligent systems", emphasis: true },
    {
      text: " - agentic AI workflows, RAG architectures, and production AI products. Focused on the intersection of ",
    },
    { text: "LLM engineering", emphasis: true },
    {
      text: ", multi-agent orchestration, and developer tooling. Currently deep in agentic AI research.",
    },
  ],
  socialLinks: [
    { label: "Email", href: "mailto:sathwikbodakuntla041@gmail.com" },
    { label: "GitHub", href: "https://github.com/Sathwik-git" },
    { label: "LinkedIn", href: "https://linkedin.com/in/sathwikbodakuntla" },
    { label: "Twitter", href: "https://twitter.com/Sathwiktwt" },
  ],
  navLinks: [
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ],
  profilePhoto,
  experience: [
    {
      role: "Software Developer Intern",
      company: "Wexa AI",
      type: "Internship",
      dates: "Mar 2026 - Present",
      location: "Hyderabad, Telangana, India",
      mode: "On-site",
      logo: wexaLogo,
      logoTheme: "dark",
    },
    {
      role: "Software Engineer",
      company: "Zof AI",
      type: "Internship",
      dates: "Sep 2025 - Dec 2025",
      location: "San Francisco Bay Area",
      mode: "Remote",
      logo: zofLogo,
    },
    {
      role: "Back End Developer",
      company: "Kartavya Technology",
      type: "Internship",
      dates: "Feb 2025 - Apr 2025",
      location: "Bangalore",
      mode: "Remote",
      logo: kartavyaLogo,
    },
  ],
  projects: [
    {
      name: "Dash - AI-Powered Code Generation Environment",
      description:
        "Browser-based environment that builds full-stack applications from natural language prompts with zero setup. Handles project scaffolding, dependency resolution, and multi-file code synthesis in the browser - inspired by Bolt.new.",
      tags: ["TypeScript", "LLM", "Code Generation", "WebContainers"],
      github: "https://github.com/Sathwik-git/Dash",
      demoId: "R93UF3z6D0A",
    },
    {
      name: "AI Interview Pro - Intelligent Interview Simulation",
      description:
        "Upload a resume; the system parses it, generates role-specific technical questions via RAG, conducts the interview, and returns structured feedback with scoring and improvement suggestions.",
      tags: ["TypeScript", "RAG", "AI Agents", "Resume Parsing"],
      github: "https://github.com/Sathwik-git/AI-Interview-Pro",
      demoId: "Ey3IzqcL9p8",
    },
    {
      name: "Math AI Agent - Agentic RAG with Structured Reasoning",
      description:
        "Professor-like AI using an Agentic RAG architecture. The agent queries a structured knowledge base first; falls back to chain-of-thought reasoning when no answer is found. Demonstrates a retrieval-first, reason-second agent pattern.",
      tags: ["Python", "Agentic RAG", "LangChain", "Vector DB"],
      github: "https://github.com/Sathwik-git/Math-AI-Agent",
      demoId: "gWgks-WzBWg",
    },
    {
      name: "Linux Playground - Browser-based Linux Environment",
      description:
        "Provisions secure, isolated Linux containers on demand. Users run shell commands, write scripts, and explore system internals directly in the browser - no local setup required.",
      tags: ["TypeScript", "Docker", "Container Orchestration"],
      github: "https://github.com/Sathwik-git/linux-playground",
      demoId: "nSrQK_mwaUs",
    },
    {
      name: "PairCode - Real-time Collaborative Code Editor",
      description:
        "Multi-user collaborative coding environment with live cursor sync, shared room sessions, and multiple language support. Designed for pair programming and technical interviews.",
      tags: ["TypeScript", "WebSockets", "Real-time"],
      github: "https://github.com/Sathwik-git/pair-code",
    },
    {
      name: "AI CLI - Natural Language Terminal Interface",
      description:
        "LLM-powered command-line interface. Users describe what they want in plain English; the model selects the appropriate shell command and executes it - with confirmation for destructive operations.",
      tags: ["TypeScript", "CLI", "LLM", "Shell"],
      github: "https://github.com/Sathwik-git/AI-CLI",
      demoId: "nn3_Ml-0Sfs",
    },
  ],
  skills: [
    {
      category: "AI / ML",
      items:
        "Agentic AI, RAG pipelines, LLM engineering, prompt engineering, LangChain, vector databases, multi-agent orchestration",
    },
    { category: "Frontend", items: "React, Next.js, TypeScript, Tailwind CSS" },
    {
      category: "Backend",
      items:
        "Node.js, Express, Python, PostgreSQL, MongoDB, Redis, WebSockets, REST",
    },
    { category: "Infra", items: "Docker, AWS, CI/CD, Linux, Git" },
    { category: "Languages", items: "TypeScript, Python, JavaScript, Java, C" },
  ],
  contactLinks: [
    { label: "Email", href: "mailto:sathwikbodakuntla041@gmail.com" },
    { label: "GitHub", href: "https://github.com/Sathwik-git" },
    { label: "LinkedIn", href: "https://linkedin.com/in/sathwikbodakuntla" },
    { label: "Twitter", href: "https://twitter.com/Sathwiktwt" },
  ],
  blogPosts: [] as { title: string; date: string; summary: string }[],
};

export type Profile = typeof profile;
