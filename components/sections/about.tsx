"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading">About Me</h2>
        <div className="glass rounded-2xl p-6 space-y-4">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Hello! I&apos;m Kien — a software developer with a strong focus on
            frontend development. I specialize in crafting responsive,
            accessible, and high-performance user interfaces that deliver
            seamless web experiences.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            After graduating from the University of Waterloo with a Bachelor of
            Science in Biochemistry, I found myself working in a costing role
            where I spent most of my time in Excel spreadsheets. While the job
            wasn&apos;t related to my degree, it was there that I discovered a
            passion for problem-solving through automation — I started using VBA
            to streamline repetitive tasks, and that experience ignited a deeper
            curiosity about programming.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Motivated by that spark, I made the decision to leave and pursue a
            self-taught path into software development. Since then, I&apos;ve
            been committed to continuous learning and growth, staying at the
            forefront of frontend technologies to build fast, accessible, and
            user-friendly applications.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
