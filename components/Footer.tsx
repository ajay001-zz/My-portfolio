"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Heart,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:ajay@example.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-border py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text font-display">
                Ajay
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full stack developer crafting beautiful and functional web
                experiences. Let's build something amazing together.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-semibold text-lg">Connect</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 glass rounded-lg border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/20 transition-all"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8"
          />

          {/* Bottom footer */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-1">
              <span>© {currentYear} Ajay. Built with</span>
              <Heart className="w-4 h-4 text-primary" />
              <span>using Next.js & Tailwind CSS</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                Privacy
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="w-1 h-1 rounded-full bg-border" />
              <a
                href="#"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                Terms
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
