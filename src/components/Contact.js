import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  CircleDot,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./BrandIcons";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "mallikarjunbendawade9972@gmail.com";

  const getIndianTime = () => {
    const now = new Date();
    const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    return istTime.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    });
  };

  const socialLinks = [
    {
      label: "LinkedIn",
      value: "linkedin.com/in/mallikarjunbendawade",
      url: "https://www.linkedin.com/in/mallikarjunbendawade",
      icon: LinkedinIcon,
    },
    {
      label: "GitHub",
      value: "github.com/Mallikarjun85-bot",
      url: "https://github.com/Mallikarjun85-bot",
      icon: GithubIcon,
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const detailItems = [
    { icon: MapPin, label: "Location", value: "Bengaluru, India" },
    { icon: Phone, label: "Phone", value: "+91 8546964951", href: "tel:+918546964951" },
    { icon: Clock, label: "Local Time", value: `${getIndianTime()} GMT+5:30` },
  ];

  return (
    <motion.section
      className="px-4 sm:px-6 py-20 sm:py-28 lg:pl-[300px] lg:pr-10"
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="glass-card grid grid-cols-1 gap-12 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16"
          variants={containerVariants}
        >
          {/* Left Side */}
          <motion.div className="flex flex-col" variants={itemVariants}>
            <h2 className="mb-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-ink">
              Ready to start something{" "}
              <span className="text-accent">big?</span>
            </h2>

            <div className="flex flex-col gap-6">
              {detailItems.map((item, index) => {
                const Icon = item.icon;
                const Wrapper = item.href ? "a" : "div";
                return (
                  <Wrapper
                    key={index}
                    {...(item.href ? { href: item.href } : {})}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon size={17} strokeWidth={2.2} />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-wider text-ink/40">
                        {item.label}
                      </span>
                      <span className="text-sm font-medium text-ink">
                        {item.value}
                      </span>
                    </div>
                  </Wrapper>
                );
              })}

              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <CircleDot size={17} strokeWidth={2.2} />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink/40">
                    Status
                  </span>
                  <span className="text-sm font-medium text-emerald-600">
                    Available for projects
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div className="flex flex-col gap-6" variants={containerVariants}>
            {/* Email Section */}
            <motion.div variants={itemVariants}>
              <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-ink/40">
                Email Address
              </span>
              <div className="flex items-center justify-between gap-3 rounded-full border border-black/[0.08] bg-white/80 py-2 pl-5 pr-2 shadow-soft">
                <span className="min-w-0 truncate text-sm sm:text-base font-medium text-ink">
                  {email}
                </span>
                <motion.button
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent text-white"
                  onClick={handleCopy}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  title="Copy email"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </motion.button>
              </div>
            </motion.div>

            {/* Digital Presence */}
            <motion.div variants={itemVariants}>
              <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-ink/40">
                Digital Presence
              </span>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-2xl border border-black/[0.06] bg-white/70 p-4 shadow-soft transition-all duration-300"
                      whileHover={{ x: 6, boxShadow: "0 12px 40px rgba(37,99,235,0.12)" }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon size={18} strokeWidth={2.2} />
                      </span>
                      <div className="min-w-0 flex flex-1 flex-col overflow-hidden">
                        <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                          {link.label}
                        </span>
                        <span className="truncate text-sm font-medium text-ink">
                          {link.value}
                        </span>
                      </div>
                      <ArrowUpRight size={17} className="flex-shrink-0 text-accent/60" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
