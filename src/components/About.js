import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.section
      className="section about"
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2 variants={itemVariants}>About Me</motion.h2>

      <div className="about-content">
        <motion.div className="about-text" variants={itemVariants}>
          <p>
            I'm a passionate software developer with 4+ years of experience
            building innovative solutions. My journey spans from AI and machine
            learning to full-stack web development and backend systems.
          </p>

          <p>
            I combine technical excellence with creative problem-solving to
            create products that matter. Whether it's implementing deep learning
            models or architecting scalable systems, I'm driven by the challenge
            of turning complex ideas into elegant, working solutions.
          </p>

          <p>
            When I'm not coding, you'll find me exploring new AI technologies,
            contributing to open source, or sharing knowledge with the developer
            community.
          </p>
        </motion.div>

        <motion.div className="about-highlights" variants={itemVariants}>
          <div className="highlight-item">
            <h3>Expertise</h3>
            <p>AI/ML, Python, Web Dev, Backend Systems</p>
          </div>
          <div className="highlight-item">
            <h3>Based In</h3>
            <p>Bengaluru, India</p>
          </div>
          <div className="highlight-item">
            <h3>Currently</h3>
            <p>Building AI solutions</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
