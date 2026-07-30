import React from "react";
import { motion } from "framer-motion";
import { Building2, MapPin, Calendar, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Nyukt.AI",
      companyNote: "Backed by EthAum Venture Partners & LvlUp Partners",
      role: "Software Developer – AI/ML",
      location: "Bangalore, India",
      period: "July 2025 – Present",
      points: [
        "Architected and deployed production-grade backend systems for ChikitAI, designing scalable FastAPI microservices, REST APIs, and Dockerized services on Google Cloud Platform (GCP).",
        "Built and shipped 7+ AI-powered healthcare features including health assessments, medical report analysis, BMI tracking, and medication reminders using LLMs, MongoDB, and ETL pipelines.",
        "Developed enterprise AI agents including a Tender Evaluation Agent, Accounts Payable Agent, Insurance Extraction & Validation Agent, and an OCR-based document processing pipeline for intelligent document automation.",
        "Improved backend scalability and performance by implementing asynchronous FastAPI APIs, MongoDB query optimization, caching, and payload optimization, supporting 2,000+ concurrent users with reduced latency.",
        "Developed a no-code AI workflow orchestration platform (NCP) on AWS and collaborated in agile development, delivering production-ready, modular AI solutions from design through deployment.",
      ],
    },
    {
      company: "Vectrium Ventures",
      companyNote: "Agentic AI, Automation & SaaS",
      role: "Intern – Software Developer",
      location: "Indore, Madhya Pradesh, India",
      period: "Jan 2025 – Feb 2025",
      points: [
        "Demonstrated technical proficiency, problem-solving skills, and a strong work ethic while contributing to software development, debugging, and project documentation.",
      ],
    },
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
      id="experience"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div className="mb-10 flex items-center gap-3" variants={itemVariants}>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <Building2 size={20} strokeWidth={2.2} />
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Experience
          </h2>
        </motion.div>

        <div className="relative flex flex-col gap-6 sm:gap-8">
          <div className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-black/[0.08] sm:block" />

          {experiences.map((exp, index) => (
            <motion.div key={index} className="relative sm:pl-16" variants={itemVariants}>
              <span className="absolute left-0 top-8 hidden h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-white sm:flex" />

              <motion.div
                className="glass-card p-7 sm:p-8 transition-shadow duration-300"
                whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(37,99,235,0.12)" }}
              >
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-ink">{exp.role}</h3>
                    <p className="mt-1 text-sm font-semibold text-accent">
                      {exp.company}
                      <span className="ml-2 font-normal text-ink/40">
                        {exp.companyNote}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 text-xs font-medium text-ink/50 sm:items-end sm:text-sm">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-accent/60" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-accent/60" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm sm:text-[0.95rem] leading-relaxed text-ink/65">
                      <ChevronRight size={15} className="mt-1 flex-shrink-0 text-accent/50" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
