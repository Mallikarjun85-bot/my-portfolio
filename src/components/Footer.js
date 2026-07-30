import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mallikarjunbendawade/" },
    { name: "GitHub", url: "https://github.com/Mallikarjun85-bot" },
    { name: "Email", url: "mailto:mallikarjunbendawade9972@gmail.com" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      className="border-t border-black/[0.06] px-4 sm:px-6 py-12 lg:pl-[300px] lg:pr-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <motion.p className="text-sm text-ink/50" variants={itemVariants}>
          Building intelligent AI solutions that scale.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ink/60 transition-colors duration-300 hover:text-accent"
              variants={itemVariants}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="flex w-full flex-col items-center gap-4 border-t border-black/[0.06] pt-6 sm:flex-row sm:justify-between"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.p className="text-xs text-ink/40" variants={itemVariants}>
            &copy; 2026 Mallikarjun Bendawade. All rights reserved.
          </motion.p>
          <motion.a
            href="#top"
            className="flex items-center gap-1.5 text-xs font-medium text-ink/50 transition-colors duration-300 hover:text-accent"
            variants={itemVariants}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top <ArrowUp size={13} />
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
