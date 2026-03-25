"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Zap, Palette } from "lucide-react";

export function Services() {
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
      transition: { duration: 0.6 },
    },
  };

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Building modern, responsive web applications using latest technologies and best practices.",
      features: [
        "React & Next.js",
        "Full Stack Development",
        "API Integration",
        "Database Design",
      ],
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Creating beautiful, user-friendly interfaces that work seamlessly across all devices.",
      features: [
        "Mobile-First Design",
        "Cross-browser Testing",
        "Accessibility",
        "UI/UX Implementation",
      ],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimizing applications for speed, efficiency, and better user experience.",
      features: [
        "Code Optimization",
        "Load Time Reduction",
        "Caching Strategies",
        "SEO Optimization",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Designing intuitive interfaces with focus on user experience and visual appeal.",
      features: [
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "User Testing",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 relative">
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
              Services
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
            />
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg mt-4"
            >
              I offer comprehensive web development services tailored to your
              needs
            </motion.p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                  whileHover={{ y: -5 }}
                >
                  <div className="glass p-8 rounded-xl border border-border h-full flex flex-col hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-6 flex-1">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 pt-6 border-t border-border">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
