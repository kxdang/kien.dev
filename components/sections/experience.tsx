"use client";

import { motion } from "motion/react";
import { jobs, needsWhiteBgLogo, isTheScore, type Job } from "@/data/portfolio";

function JobLogo({ job }: { job: Job }) {
  const logoWrapperClass = needsWhiteBgLogo(job.company)
    ? "inline-flex items-center justify-center rounded bg-transparent dark:bg-white"
    : "";
  const logoImgClass = isTheScore(job.company)
    ? `h-3 w-auto object-contain ${needsWhiteBgLogo(job.company) ? "p-0.5" : ""}`
    : `h-5 w-auto object-contain ${needsWhiteBgLogo(job.company) ? "p-0.5" : ""}`;

  const img = (
    <span className={logoWrapperClass}>
      <img
        src={job.logoUrl}
        alt={`${job.company} logo`}
        className={logoImgClass}
      />
    </span>
  );

  return job.url ? (
    <a
      href={job.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block hover:opacity-80 transition-opacity"
      aria-label={job.company}
    >
      {img}
    </a>
  ) : (
    img
  );
}

export default function Experience() {
  const currentJobs = jobs.filter((j) => j.period.includes("Present"));
  const pastJobs = jobs.filter((j) => !j.period.includes("Present"));

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

      {/* Currently — concurrent roles */}
      {currentJobs.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 dark:bg-slate-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-600 dark:bg-slate-300" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Currently
            </span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
          </div>

          <div
            className={`grid gap-4 ${
              currentJobs.length > 1 ? "md:grid-cols-2" : ""
            }`}
          >
            {currentJobs.map((job, index) => (
              <motion.div
                key={`current-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="flex flex-col mb-2">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100">
                      {job.role}
                    </h3>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    <JobLogo job={job} />
                  </p>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Past roles — timeline */}
      {pastJobs.length > 0 && (
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />

          <div className="space-y-6">
            {pastJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-[12px] top-8 w-[15px] h-[15px] rounded-full bg-slate-700 dark:bg-slate-300 border-2 border-white dark:border-slate-900 shadow-md hidden md:block" />

                <div className="glass rounded-2xl p-6 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="font-bold text-slate-800 dark:text-slate-100">
                        {job.role}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                        <JobLogo job={job} />
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
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
