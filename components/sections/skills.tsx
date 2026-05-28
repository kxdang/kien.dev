"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { skillCards, type SkillCard } from "@/data/portfolio";

const iconPaths: Record<string, string> = {
  code: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  platform: "M5 12h14M12 5l7 7-7 7",
  data: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
};

function SkillBadge({
  skill,
  theme,
}: {
  skill: { name: string; logo: string; invertDark?: boolean };
  theme?: string;
}) {
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-100/80 dark:bg-white/5 rounded-lg border border-slate-200/60 dark:border-white/10">
      <img
        src={skill.logo}
        alt={skill.name}
        className={`w-4 h-4 ${
          skill.invertDark && theme === "dark" ? "invert" : ""
        }`}
      />
      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
        {skill.name}
      </span>
    </div>
  );
}

function SkillCardComponent({ card, index }: { card: SkillCard; index: number }) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`glass rounded-2xl p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 ${
        card.wide ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 min-w-[2.5rem] bg-slate-900 dark:bg-white rounded-xl flex items-center justify-center shadow-sm">
          <svg
            className="w-5 h-5 text-white dark:text-slate-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={iconPaths[card.icon]}
            />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
            {card.title}
          </h3>
        </div>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
        {card.description}
      </p>

      <div className="space-y-4">
        {card.categories.map((category) => (
          <div key={category.title}>
            <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-wider">
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} theme={theme} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        Skills
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-5">
        {skillCards.map((card, index) => (
          <SkillCardComponent key={card.title} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
