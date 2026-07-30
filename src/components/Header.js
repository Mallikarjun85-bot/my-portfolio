import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Building2,
  Code2,
  Briefcase,
  GraduationCap,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./BrandIcons";

const navItems = [
  { name: "Home", href: "#top", id: "top", icon: Home },
  { name: "About", href: "#about", id: "about", icon: User },
  { name: "Experience", href: "#experience", id: "experience", icon: Building2 },
  { name: "Skills", href: "#skills", id: "skills", icon: Code2 },
  { name: "Projects", href: "#projects", id: "projects", icon: Briefcase },
  { name: "Education", href: "#education", id: "education", icon: GraduationCap },
  { name: "Contact", href: "#contact", id: "contact", icon: Mail },
];

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mallikarjunbendawade/", icon: LinkedinIcon },
  { name: "GitHub", url: "https://github.com/Mallikarjun85-bot", icon: GithubIcon },
  { name: "Email", url: "mailto:mallikarjunbendawade9972@gmail.com", icon: Mail },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <>
      {/* Desktop floating sidebar */}
      <motion.aside
        className="hidden lg:flex fixed left-6 top-6 bottom-6 z-50 w-[240px] flex-col justify-between rounded-3xl glass shadow-glass px-5 py-7"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div>
          <a href="#top" className="block px-2 pb-8">
            <span className="text-lg font-bold tracking-tight text-ink">
              Mallikarjun
            </span>
            <span className="block text-sm font-medium text-accent">
              K. Bendawade
            </span>
          </a>

          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;
              return (
                <a key={item.name} href={item.href} className="relative">
                  <motion.div
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "bg-accent text-white shadow-[0_8px_24px_rgba(37,99,235,0.35)]"
                        : "text-ink/70 hover:bg-black/[0.04] hover:text-ink"
                    }`}
                    whileHover={{ x: isActive ? 0 : 4 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Icon size={18} strokeWidth={2.2} />
                    {item.name}
                  </motion.div>
                </a>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center justify-center gap-2 border-t border-black/[0.06] pt-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.04] text-ink/60 transition-colors hover:bg-accent hover:text-white"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={17} strokeWidth={2.2} />
              </motion.a>
            );
          })}
        </div>
      </motion.aside>

      {/* Mobile top bar */}
      <motion.header
        className="lg:hidden fixed top-0 left-0 right-0 z-50 glass shadow-glass"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <a href="#top" className="text-base font-bold tracking-tight text-ink">
            Mallikarjun<span className="text-accent"> K. B</span>
          </a>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.05] text-ink"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="flex flex-col gap-1 px-5 pb-5"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.id;
                return (
                  <a key={item.name} href={item.href} onClick={handleNavClick}>
                    <div
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium ${
                        isActive
                          ? "bg-accent text-white"
                          : "text-ink/70 hover:bg-black/[0.04]"
                      }`}
                    >
                      <Icon size={18} strokeWidth={2.2} />
                      {item.name}
                    </div>
                  </a>
                );
              })}

              <div className="mt-3 flex items-center gap-2 border-t border-black/[0.06] pt-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.05] text-ink/60"
                    >
                      <Icon size={17} strokeWidth={2.2} />
                    </a>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
