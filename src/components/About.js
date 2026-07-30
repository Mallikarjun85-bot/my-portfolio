import React from "react";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

const About = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const highlightVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const highlights = [
    { title: "Specialization", value: "Backend Architecture, AI/ML, Healthcare Tech" },
    { title: "Based In", value: "Bangalore, India" },
    { title: "Currently At", value: "Nyukt AI (July 2025 - Present)" },
  ];

  return (
    <motion.section
      className="px-4 sm:px-6 py-20 sm:py-28 lg:pl-[300px] lg:pr-10"
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-10 flex items-center gap-3"
          variants={itemVariants}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <UserRound size={20} strokeWidth={2.2} />
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            About Me
          </h2>
        </motion.div>

        <div className="glass-card grid grid-cols-1 gap-10 p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          <motion.div className="flex flex-col gap-5" variants={itemVariants}>
            <p className="text-[0.95rem] sm:text-base leading-[1.9] text-ink/65">
              I'm a results-driven Software Developer and AI&ML Engineer
              specializing in AI product development with hands-on
              experience building and launching intelligent systems from
              scratch. Currently at Nyukt AI, I translate product
              requirements into scalable backend architectures and develop
              AI-powered features that matter.
            </p>

            <p className="text-[0.95rem] sm:text-base leading-[1.9] text-ink/65">
              My expertise spans translating PRDs into production-ready
              systems, designing scalable APIs, engineering data handling
              workflows for healthcare insights, and building agentic AI
              platforms. I combine deep technical knowledge with a
              product-oriented mindset, proven by scaling ChikitAI Patient
              Module to 2,000+ users and delivering custom enterprise
              solutions.
            </p>

            <p className="text-[0.95rem] sm:text-base leading-[1.9] text-ink/65">
              Strong foundation in backend development, system design, and
              data handling - complemented by hands-on experience with modern
              AI/ML tooling (LangChain, OpenAI APIs, RAG systems) and proven
              ability to collaborate cross-functionally to deliver impactful
              solutions.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border border-black/[0.06] bg-white/70 p-5 shadow-soft transition-all duration-300"
                variants={highlightVariants}
                whileHover={{ x: 6, boxShadow: "0 12px 40px rgba(37,99,235,0.12)" }}
              >
                <h3 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-accent">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-[0.95rem] text-ink/70">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
