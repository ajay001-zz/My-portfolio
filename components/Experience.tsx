"use client";

import { motion } from "framer-motion";

export function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description:
        "Led development of multiple full-stack projects, mentored junior developers, and improved application performance by 40%.",
      highlights: [
        "Architected scalable microservices",
        "Implemented CI/CD pipelines",
        "Led team of 5 developers",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description:
        "Developed and maintained web applications, implemented new features, and improved code quality.",
      highlights: [
        "Built 10+ production applications",
        "Reduced load time by 50%",
        "Implemented automated testing",
      ],
    },
    {
      role: "Junior Developer",
      company: "Web Startup Co.",
      period: "2019 - 2020",
      description:
        "Started my career building web applications and learning best practices in software development.",
      highlights: [
        "Learned React & Node.js",
        "Contributed to 5+ projects",
        "Improved frontend performance",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
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
              Work Experience
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
            />
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-8 rounded-xl border border-border hover:border-primary/50 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {experience.role}
                    </h3>
                    <p className="text-primary font-semibold">
                      {experience.company}
                    </p>
                  </div>
                  <span className="text-muted-foreground font-mono text-sm mt-4 md:mt-0 whitespace-nowrap">
                    {experience.period}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6">
                  {experience.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {experience.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
