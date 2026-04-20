import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "ChikitAI - Healthcare Platform",
      description:
        "Developed and deployed backend systems for AI-powered healthcare platform. Built 7+ AI features including health assessment, report analysis, BMI tracking, and medication reminders. Scaled patient module to 2,000+ users by optimizing backend performance and supporting feature reliability.",
      tags: ["Flask", "LangChain", "OpenAI", "Healthcare AI"],
      link: "#",
    },
    {
      title: "Tender Evaluation Agent",
      description:
        "Scoped and delivered custom enterprise AI solution for Government of Odisha. Automated tender document analysis and evaluation using LLMs and RAG systems.",
      tags: ["LangChain", "RAG", "LLMs", "Enterprise AI"],
      link: "#",
    },
    {
      title: "Accounts Payable & Insurance Agents",
      description:
        "Developed intelligent document processing systems. Built data extraction for structured documents and insurance policy extraction & validation pipeline with high accuracy.",
      tags: ["NLP", "Document Processing", "Python", "RAG"],
      link: "#",
    },
    {
      title: "Lip Reading AI (Deep Learning)",
      description:
        "Developed sentence-level lipreading system using LipNet architecture. Implemented preprocessing pipelines and model training for video-to-speech prediction.",
      tags: ["Python", "Deep Learning", "LipNet", "Computer Vision"],
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      className="section projects"
      id="projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2>Featured Projects.</motion.h2>

      <motion.div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={projectVariants}
            whileHover={{ y: -10 }}
          >
            <div className="project-header">
              <h3>{project.title}</h3>
              <motion.a
                href={project.link}
                className="project-link"
                whileHover={{ x: 5 }}
              >
                →
              </motion.a>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
