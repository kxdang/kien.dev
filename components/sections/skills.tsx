"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { skillCards, type SkillCard } from "@/data/portfolio";

const iconPaths: Record<string, string> = {
  code: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  platform: "M5 12h14M12 5l7 7-7 7",
  data: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
};

// Static gradient classes so Tailwind doesn't purge them
const iconGradients: Record<string, string> = {
  code: "from-cyan-500 to-blue-600",
  platform: "from-violet-500 to-fuchsia-600",
  data: "from-emerald-400 to-cyan-600",
};

function SkillBadge({
  skill,
  theme,
}: {
  skill: { name: string; logo: string; bgColor: string; invertDark?: boolean };
  theme?: string;
}) {
  return (
    <div
      className={`flex items-center gap-1.5 px-2.5 py-1.5 ${skill.bgColor} rounded-lg border border-white/40 dark:border-white/5 backdrop-blur-sm`}
    >
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
      className="glass rounded-2xl p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20"
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`w-10 h-10 min-w-[2.5rem] bg-gradient-to-br ${iconGradients[card.icon]} rounded-xl flex items-center justify-center shadow-lg ring-1 ring-white/10`}
        >
          <svg
            className="w-5 h-5 text-white"
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
