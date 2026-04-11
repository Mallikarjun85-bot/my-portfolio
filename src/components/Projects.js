import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Lip Reading AI",
      description:
        "LipNet architecture for sentence-level lip reading using deep learning. Real-time video processing with TensorFlow.",
      tags: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
      link: "#",
    },
    {
      title: "AI Medical Diagnosis System",
      description:
        "Intelligent system for medical diagnosis predictions with multi-language support and real-time analysis.",
      tags: ["AI/ML", "Python", "React", "Healthcare"],
      link: "#",
    },
    {
      title: "Full-Stack Web Application",
      description:
        "Scalable web application with React frontend, Node.js backend, and MongoDB database with microservices architecture.",
      tags: ["React", "Node.js", "MongoDB", "AWS"],
      link: "#",
    },
    {
      title: "Data Analysis Dashboard",
      description:
        "Interactive dashboard for real-time data visualization and analytics with advanced filtering and reporting.",
      tags: ["React", "Python", "SQL", "Data Viz"],
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
      <motion.h2>Featured Projects</motion.h2>

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
