import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="hero"
      id="top"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="hero-wrapper">
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h1 variants={itemVariants}>
            Mallikarjun K <br /> Bendawade.
          </motion.h1>

          <motion.h2 variants={itemVariants} className="hero-tagline">
            AI-Driven Backend Engineer & Product Developer
          </motion.h2>

          <motion.p variants={itemVariants} className="hero-subtitle">
            Results-driven Software Developer specializing in AI product development. I build intelligent systems from scratch, translating product requirements into scalable backend architectures and AI-powered features. Currently scaling ChikitAI to 2,000+ users and delivering enterprise AI solutions.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <motion.a href="#projects" className="btn btn-primary">
              View My Work
            </motion.a>
            <motion.a href="#contact" className="btn btn-secondary">
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div className="hero-image" variants={profileVariants}>
          <motion.img
            src="/images/profile.jpg"
            alt="Mallikarjun Bendawade"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>

      <motion.div className="hero-scroll" variants={itemVariants}>
        <span>Scroll to explore</span>
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
