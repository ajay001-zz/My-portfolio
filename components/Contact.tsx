"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Loader2 } from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

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

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section heading */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
              Get In Touch
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"
            />
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg mt-4"
            >
              Have a project in mind? Let's work together to bring your ideas to
              life
            </motion.p>
          </div>

          {/* Contact content */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact info */}
              <motion.div
                variants={itemVariants}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you have a question about pricing, features, or
                    anything else, I'm open to any suggestion. Feel free to get
                    in touch!
                  </p>
                </div>

                {/* Contact methods */}
                <div className="space-y-4">
                  {[
                    {
                      label: "Email",
                      value: "ajay@example.com",
                      href: "mailto:ajay@example.com",
                    },
                    {
                      label: "LinkedIn",
                      value: "linkedin.com/in/ajay",
                      href: "https://linkedin.com",
                    },
                    {
                      label: "GitHub",
                      value: "github.com/ajay",
                      href: "https://github.com",
                    },
                  ].map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 glass rounded-lg border border-border hover:border-primary/50 transition-all group"
                    >
                      <Mail className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {contact.label}
                        </p>
                        <p className="font-medium text-foreground hover:text-primary transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social links */}
                <div>
                  <p className="text-sm text-muted-foreground mb-4">Follow me</p>
                  <div className="flex gap-4">
                    {["Twitter", "GitHub", "LinkedIn", "Instagram"].map(
                      (social) => (
                        <a
                          key={social}
                          href="#"
                          className="w-10 h-10 glass rounded-lg border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all"
                        >
                          <span className="text-xs font-medium">{social.charAt(0)}</span>
                        </a>
                      )
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Contact form */}
              <motion.div variants={itemVariants}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="glass p-8 rounded-xl border border-border space-y-6"
                >
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}

                  {/* Name field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      {...register("name", {
                        required: "Name is required",
                      })}
                      className={`w-full px-4 py-3 bg-muted/50 border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors ${
                        errors.name ? "border-red-500" : "border-border"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className={`w-full px-4 py-3 bg-muted/50 border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors ${
                        errors.email ? "border-red-500" : "border-border"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Subject field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project inquiry"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      className={`w-full px-4 py-3 bg-muted/50 border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors ${
                        errors.subject ? "border-red-500" : "border-border"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Your message..."
                      rows={5}
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters",
                        },
                      })}
                      className={`w-full px-4 py-3 bg-muted/50 border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors resize-none ${
                        errors.message ? "border-red-500" : "border-border"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
