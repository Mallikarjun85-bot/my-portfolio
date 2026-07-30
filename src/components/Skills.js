import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: ["Python", "C Programming"],
    },
    {
      category: "Backend & APIs",
      skills: ["FastAPI", "Flask", "REST APIs", "System Design"],
    },
    {
      category: "AI & Machine Learning",
      skills: ["LLMs", "OpenAI APIs", "LangChain", "Prompt Engineering", "RAG", "NLP", "Agentic AI", "GAN", "Generative AI", "OCR (Tesseract)", "TensorFlow"],
    },
    {
      category: "Frontend",
      skills: ["React.js", "HTML", "CSS"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "SQL"],
    },
    {
      category: "Cloud",
      skills: ["Google Cloud Platform (GCP)", "AWS"],
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "Postman", "VS Code", "Stripe", "Razorpay"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.08,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.section
      className="px-4 sm:px-6 py-20 sm:py-28 lg:pl-[300px] lg:pr-10"
      id="skills"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div className="mb-10 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <Code2 size={20} strokeWidth={2.2} />
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Skills &amp; Technologies
          </h2>
        </motion.div>

        <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-6 transition-shadow duration-300"
              variants={categoryVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 20px 60px rgba(37,99,235,0.15)",
              }}
            >
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-accent">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="cursor-default rounded-full border border-accent/15 bg-accent/5 px-3.5 py-1.5 text-sm font-medium text-ink/75 transition-colors duration-300 hover:bg-accent hover:text-white hover:border-accent"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    variants={skillVariants}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
