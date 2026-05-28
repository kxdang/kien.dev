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
            Hi, I&apos;m Kien, a software developer focused on frontend. I build
            responsive, accessible interfaces and care a lot about how a product
            actually feels to use.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            My path here was unconventional: biochem at Waterloo, a costing job
            where I started automating Excel with VBA, then a self-taught pivot
            into software.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            AI tools like Claude Code are part of how I work day-to-day. Pairing
            with it lets me ship faster and refactor smarter. I learn at a speed
            that wasn&apos;t possible a few years ago.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            That speed has carried me from frontend into data engineering and
            broader full-stack work, reasoning about trade-offs across the
            stack. The space I&apos;m drawn to is bridging older systems with
            modern AI tooling, where there&apos;s still real friction worth
            untangling.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
