import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { label: "Years Coding", value: "4+" },
    { label: "Projects Built", value: "15+" },
    { label: "Technologies", value: "10+" },
    { label: "Happy Clients", value: "20+" },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="stats-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {stats.map((stat, index) => (
        <motion.div key={index} className="stat-item" variants={itemVariants}>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Stats;
