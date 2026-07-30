import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { useParallax } from "../hooks/useAnimations";

const Hero = () => {
  const { ref: parallaxRef } = useParallax(0.5);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.section
      className="relative pt-28 pb-10 px-4 sm:px-6 lg:pl-[300px] lg:pr-10 lg:pt-12"
      id="top"
      ref={parallaxRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl glass shadow-glass p-6 sm:p-10 lg:p-16">
          {/* Subtle gradient background accents */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/[0.07] blur-3xl" />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <motion.div className="flex flex-col" variants={itemVariants}>
              <motion.span
                variants={itemVariants}
                className="section-eyebrow mb-6 w-fit"
              >
                <Sparkles size={14} />
                Software Developer &ndash; AI/ML
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight"
              >
                Mallikarjun K
                <br /> Bendawade.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-ink/60"
              >
                Results-driven Software Developer specializing in AI product
                development. I build intelligent systems from scratch,
                translating product requirements into scalable backend
                architectures and AI-powered features. Currently scaling
                ChikitAI to 2,000+ users and delivering enterprise AI
                solutions.
              </motion.p>

              <motion.div
                className="mt-9 flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <motion.a
                  href="#projects"
                  className="btn-primary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                  <ArrowRight size={17} />
                </motion.a>
                <motion.a
                  href="#contact"
                  className="btn-secondary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink/60"
              >
                <span className="flex items-center gap-1.5">
                  <MapPin size={15} className="text-accent" />
                  Bangalore, India
                </span>
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Available for opportunities
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              className="mx-auto w-full max-w-[320px] lg:max-w-none"
              variants={profileVariants}
            >
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/15 to-transparent p-3 shadow-card"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/images/profile.jpg"
                  alt="Mallikarjun Bendawade"
                  className="w-full h-auto rounded-2xl object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
