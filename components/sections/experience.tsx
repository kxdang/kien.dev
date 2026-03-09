"use client";

import { motion } from "motion/react";
import { jobs, needsWhiteBgLogo, isTheScore } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/50 via-blue-500/50 to-transparent hidden md:block" />

        <div className="space-y-6">
          {jobs.map((job, index) => {
            const logoWrapperClass = needsWhiteBgLogo(job.company)
              ? "inline-flex items-center justify-center rounded bg-transparent dark:bg-white"
              : "";
            const logoImgClass = isTheScore(job.company)
              ? `h-3 w-auto object-contain ${
                  needsWhiteBgLogo(job.company) ? "p-0.5" : ""
                }`
              : `h-5 w-auto object-contain ${
                  needsWhiteBgLogo(job.company) ? "p-0.5" : ""
                }`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-[12px] top-8 w-[15px] h-[15px] rounded-full bg-gradient-to-r from-violet-500 to-blue-500 border-2 border-white dark:border-slate-900 shadow-lg hidden md:block" />

                <div className="glass rounded-2xl p-6 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="font-bold text-slate-800 dark:text-slate-100">
                        {job.role}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                        {job.url ? (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block hover:opacity-80 transition-opacity"
                            aria-label={job.company}
                          >
                            <span className={logoWrapperClass}>
                              <img
                                src={job.logoUrl}
                                alt={`${job.company} logo`}
                                className={logoImgClass}
                              />
                            </span>
                          </a>
                        ) : (
                          <span className={logoWrapperClass}>
                            <img
                              src={job.logoUrl}
                              alt={`${job.company} logo`}
                              className={logoImgClass}
                            />
                          </span>
                        )}
                      </p>
                    </div>
                    <span className="text-sm text-slate-400 dark:text-slate-500 font-medium mt-1 md:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
