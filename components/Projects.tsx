"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce platform with payment integration and admin dashboard",
      category: "fullstack",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "bg-gradient-to-br from-blue-600 to-cyan-500",
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Real-time task management application with collaborative features",
      category: "frontend",
      tags: ["Next.js", "Tailwind", "Firebase", "Framer Motion"],
      image: "bg-gradient-to-br from-purple-600 to-pink-500",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Interactive analytics dashboard with real-time data visualization",
      category: "fullstack",
      tags: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      image: "bg-gradient-to-br from-orange-600 to-red-500",
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Social Media App",
      description:
        "Social networking platform with real-time messaging and notifications",
      category: "fullstack",
      tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      image: "bg-gradient-to-br from-green-600 to-teal-500",
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "Design System",
      description: "Comprehensive component library and design system documentation",
      category: "frontend",
      tags: ["React", "Storybook", "Tailwind", "TypeScript"],
      image: "bg-gradient-to-br from-indigo-600 to-blue-500",
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "API Gateway",
      description: "Scalable API gateway with rate limiting and authentication",
      category: "backend",
      tags: ["Node.js", "Express", "Redis", "JWT"],
      image: "bg-gradient-to-br from-yellow-600 to-orange-500",
      github: "#",
      demo: "#",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full Stack" },
    { id: "backend", label: "Backend" },
  ];

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Section heading */}
          <div className="max-w-3xl mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
            />
          </div>

          {/* Filter buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === cat.id
                    ? "bg-primary text-white shadow-lg shadow-primary/50"
                    : "glass border border-border hover:border-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="wait">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  className="group h-full"
                >
                  <div className="glass border border-border rounded-xl overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                    {/* Project image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-600/20 to-cyan-500/20">
                      <motion.div
                        className={`${project.image} w-full h-full`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                        <div className="text-white">
                          <p className="text-xs text-gray-300">Featured Project</p>
                          <h4 className="font-bold">{project.title}</h4>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 pt-4 border-t border-border">
                        <a
                          href={project.github}
                          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                        <a
                          href={project.demo}
                          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
