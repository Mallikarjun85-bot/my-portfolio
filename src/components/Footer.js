import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mallikarjun-bendawade-a37050225/" },
    { name: "GitHub", url: "https://github.com/MallikarjunNyukt" },
    { name: "Email", url: "mailto:mallikarjunbendawade9972@gmail.com" },
  ];

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <div className="footer-text">
          <p>Building elegant solutions for complex problems.</p>
        </div>

        <div className="footer-links">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Mallikarjun Bendawade. All rights reserved.</p>
          <motion.a href="#top" className="back-to-top" whileHover={{ y: -5 }}>
            Back to top ↑
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
