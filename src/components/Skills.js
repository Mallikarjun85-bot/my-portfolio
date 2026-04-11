import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = [
    {
      category: "AI & Machine Learning",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Deep Learning"],
    },
    {
      category: "Web Development",
      skills: ["React", "JavaScript", "HTML/CSS", "Node.js", "Express"],
    },
    {
      category: "Backend & Databases",
      skills: ["Python", "SQL", "MongoDB", "REST APIs", "Microservices"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Linux", "Figma"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      className="section skills"
      id="skills"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2>Skills & Technologies</motion.h2>

      <motion.div className="skills-grid">
        {skillsData.map((category, idx) => (
          <motion.div
            key={idx}
            className="skills-category"
            variants={categoryVariants}
          >
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-tag"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#38bdf8",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
