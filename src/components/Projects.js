import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  ArrowUpRight,
  Stethoscope,
  FileText,
  ShieldCheck,
  Eye,
  PawPrint,
  Leaf,
  Fingerprint,
} from "lucide-react";

const colorMap = {
  rose: "bg-rose-50 text-rose-600",
  amber: "bg-amber-50 text-amber-600",
  indigo: "bg-indigo-50 text-indigo-600",
  purple: "bg-purple-50 text-purple-600",
  teal: "bg-teal-50 text-teal-600",
  emerald: "bg-emerald-50 text-emerald-600",
  sky: "bg-sky-50 text-sky-600",
};

const Projects = () => {
  const projects = [
    {
      title: "ChikitAI - Healthcare Platform",
      description:
        "Developed and deployed backend systems for AI-powered healthcare platform. Built 7+ AI features including health assessment, report analysis, BMI tracking, and medication reminders. Scaled patient module to 2,000+ users by optimizing backend performance and supporting feature reliability.",
      tags: ["Flask", "LangChain", "OpenAI", "Healthcare AI"],
      link: "https://www.healthcare.chikit.ai/",
      icon: Stethoscope,
      color: "rose",
    },
    {
      title: "Tender Evaluation Agent",
      description:
        "Scoped and delivered custom enterprise AI solution. Automated tender document analysis and evaluation using LLMs and RAG systems.",
      tags: ["LangChain", "RAG", "LLMs", "Enterprise AI"],
      link: "#",
      icon: FileText,
      color: "amber",
    },
    {
      title: "Accounts Payable & Insurance Agents",
      description:
        "Developed intelligent document processing systems. Built data extraction for structured documents and insurance policy extraction & validation pipeline with high accuracy.",
      tags: ["NLP", "Document Processing", "Python", "RAG"],
      link: "#",
      icon: ShieldCheck,
      color: "indigo",
    },
    {
      title: "Lip Reading AI (Deep Learning)",
      description:
        "Developed sentence-level lipreading system using LipNet architecture. Implemented preprocessing pipelines and model training for video-to-speech prediction.",
      tags: ["Python", "Deep Learning", "LipNet", "Computer Vision"],
      link: "#",
      icon: Eye,
      color: "purple",
    },
    {
      title: "VetPharma AI Platform",
      description:
        "An AI-powered platform for veterinary sales, marketing, and livestock health management. Features an AI chatbot offering real-time insights on vaccinations, treatments, and products. Enables field representatives to track visits, locations, and manage doctor data. Built with React and Flask, it streamlines field data collection and delivers actionable analytics for the veterinary pharmaceutical industry.",
      tags: ["React", "Flask", "AI Chatbot", "Healthcare", "Analytics"],
      link: "#",
      icon: PawPrint,
      color: "teal",
    },
    {
      title: "Agriculture AI Agent (Agri Assistant)",
      description:
        "An AI-powered tool helping farmers with crop disease detection and agricultural guidance. Users can upload crop images for real-time disease identification using GPT-4o models. Provides personalized fertilizer suggestions and treatment solutions. Includes weather forecasting to support better farming decisions, enabling smarter, data-driven agriculture.",
      tags: ["React", "GPT-4o", "Computer Vision", "AI", "Agriculture"],
      link: "https://raitmitra.vercel.app",
      icon: Leaf,
      color: "emerald",
    },
    {
      title: "CandidateSense AI - Real-Time Candidate Identification Engine",
      description:
        "Built an AI-powered candidate identification engine using Bayesian evidence fusion and multi-signal behavioral analysis to generate explainable, confidence-based identity predictions during interviews. Developed a FastAPI backend with WebSocket-based real-time communication and a React dashboard for live monitoring, combining LLM-powered role classification with heuristic fallbacks for robust identity inference.",
      tags: ["FastAPI", "WebSocket", "React", "LLM", "Bayesian Inference"],
      link: "#",
      icon: Fingerprint,
      color: "sky",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.section
      className="px-4 sm:px-6 py-20 sm:py-28 lg:pl-[300px] lg:pr-10"
      id="projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div className="mb-10 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <Briefcase size={20} strokeWidth={2.2} />
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                className="glass-card flex flex-col p-7 sm:p-8 transition-shadow duration-300"
                variants={projectVariants}
                whileHover="hover"
              >
                <div className="mb-5 flex items-start justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${colorMap[project.color]}`}
                  >
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <motion.a
                    href={project.link}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.04] text-ink/60 transition-colors duration-300 hover:bg-accent hover:text-white"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </motion.a>
                </div>

                <h3 className="mb-3 text-lg sm:text-xl font-bold text-ink">
                  {project.title}
                </h3>

                <p className="mb-6 flex-grow text-sm sm:text-[0.95rem] leading-relaxed text-ink/60">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      className="rounded-lg border border-accent/15 bg-accent/5 px-2.5 py-1 text-xs font-medium text-accent"
                      custom={idx}
                      initial="hidden"
                      whileInView="visible"
                      whileHover={{ scale: 1.08 }}
                      variants={tagVariants}
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
