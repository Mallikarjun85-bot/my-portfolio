import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      school: "NMIT Bengaluru",
      note: "Visvesvaraya Technological University, Belagavi",
      degree: "Bachelor of Engineering – Artificial Intelligence and Machine Learning",
      period: "Jan 2022 – June 2025",
    },
    {
      school: "C B Kore Polytechnic, Chikodi",
      note: "DTE Bengaluru",
      degree: "Diploma – Computer Science and Engineering",
      period: "June 2018 – April 2021",
    },
  ];

  const certifications = [
    { title: "Reinforcement Learning", issuer: "Udemy — by Hoang Quy La" },
    { title: "Advanced Java Certificate", issuer: "Besant Technologies" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.section
      className="px-4 sm:px-6 py-20 sm:py-28 lg:pl-[300px] lg:pr-10"
      id="education"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div className="mb-10 flex items-center gap-3" variants={itemVariants}>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <GraduationCap size={20} strokeWidth={2.2} />
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Education
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="glass-card p-7 transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 20px 60px rgba(37,99,235,0.15)" }}
            >
              <h3 className="text-base sm:text-lg font-bold text-ink">{edu.school}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent">
                {edu.note}
              </p>
              <p className="mt-3 text-sm sm:text-[0.95rem] leading-relaxed text-ink/65">
                {edu.degree}
              </p>
              <span className="mt-4 flex items-center gap-1.5 text-xs font-medium text-ink/50">
                <Calendar size={13} className="text-accent/60" />
                {edu.period}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.h3
          className="mb-6 mt-14 text-xl sm:text-2xl font-bold tracking-tight text-ink"
          variants={itemVariants}
        >
          Certifications
        </motion.h3>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="glass-card flex items-center gap-4 p-6 transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 20px 60px rgba(37,99,235,0.15)" }}
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                <Award size={22} strokeWidth={2} />
              </span>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-ink">{cert.title}</h4>
                <p className="text-xs sm:text-sm text-ink/50">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
