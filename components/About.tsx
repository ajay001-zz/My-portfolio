"use client";

import { motion } from "framer-motion";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const skills = [
    ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    ["REST APIs", "GraphQL", "Git", "Docker"],
    ["AWS", "Vercel", "Firebase", "Stripe"],
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section heading */}
          <div className="max-w-3xl mb-16">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
              About Me
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
            />
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a full-stack developer with a passion for creating beautiful
                and functional web applications. With expertise spanning both
                frontend and backend technologies, I build complete solutions
                that solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in web development started with a curiosity about how
                websites work. Today, I specialize in building scalable
                applications using modern technologies like React, Next.js, and
                Node.js.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the community.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((row, rowIdx) => (
                  <div key={rowIdx} className="space-y-3">
                    {row.map((skill) => (
                      <div
                        key={skill}
                        className="px-4 py-2 glass rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors cursor-pointer"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Experience highlight */}
          <motion.div
            variants={itemVariants}
            className="glass p-8 rounded-xl border border-border"
          >
            <h3 className="text-2xl font-bold mb-6">Key Highlights</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Full Stack Development",
                  desc: "Building complete web applications from frontend to backend",
                },
                {
                  title: "Performance Optimized",
                  desc: "Creating fast, efficient applications with best practices",
                },
                {
                  title: "User Focused Design",
                  desc: "Prioritizing excellent UX and accessibility in all projects",
                },
              ].map((item) => (
                <div key={item.title} className="space-y-2">
                  <h4 className="font-semibold text-lg text-primary">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
