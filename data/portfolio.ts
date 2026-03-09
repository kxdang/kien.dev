export const getYearsOfExperience = () => {
  const startYear = 2018;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

export interface Skill {
  name: string;
  logo: string;
  bgColor: string;
  invertDark?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface SkillCard {
  title: string;
  description: string;
  icon: "code" | "platform" | "data";
  gradient: string;
  categories: SkillCategory[];
  expandable?: boolean;
}

export interface Job {
  role: string;
  company: string;
  period: string;
  url: string;
  logoUrl: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  badges: string[];
  imageUrl: string | ((theme: string) => string);
  codeUrl: string;
  demoUrl: string;
  isPrivate?: boolean;
  blogInsteadOfCode?: boolean;
}

export const skillCards: SkillCard[] = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and performant user interfaces",
    icon: "code",
    gradient: "from-cyan-500 to-blue-600",
    categories: [
      {
        title: "Core Technologies",
        skills: [
          {
            name: "TypeScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            bgColor: "bg-blue-100 dark:bg-blue-900/30",
          },
          {
            name: "React",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            bgColor: "bg-cyan-100 dark:bg-cyan-900/30",
          },
          {
            name: "Next.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            bgColor: "bg-gray-100 dark:bg-gray-800",
            invertDark: true,
          },
          {
            name: "JavaScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
          },
          {
            name: "Node.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            bgColor: "bg-green-100 dark:bg-green-900/30",
          },
        ],
      },
      {
        title: "Libraries & Styling",
        skills: [
          {
            name: "Redux",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
            bgColor: "bg-purple-100 dark:bg-purple-900/30",
          },
          {
            name: "Zustand",
            logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='70' font-size='70'%3E🐻%3C/text%3E%3C/svg%3E",
            bgColor: "bg-amber-100 dark:bg-amber-900/30",
          },
          {
            name: "GraphQL",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
            bgColor: "bg-pink-100 dark:bg-pink-900/30",
          },
          {
            name: "Tailwind",
            logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
            bgColor: "bg-teal-100 dark:bg-teal-900/30",
          },
          {
            name: "Apollo",
            logo: "https://www.vectorlogo.zone/logos/apollographql/apollographql-icon.svg",
            bgColor: "bg-purple-100 dark:bg-purple-900/30",
          },
        ],
      },
      {
        title: "Design & Tools",
        skills: [
          {
            name: "Figma",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
            bgColor: "bg-purple-100 dark:bg-purple-900/30",
          },
        ],
      },
    ],
  },
  {
    title: "Platform Engineering",
    description:
      "Building tools, improving DX, and ensuring system reliability",
    icon: "platform",
    gradient: "from-violet-500 to-fuchsia-600",
    categories: [
      {
        title: "CI/CD & Build Tools",
        skills: [
          {
            name: "CircleCI",
            logo: "https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg",
            bgColor: "bg-gray-100 dark:bg-gray-900/30",
          },
          {
            name: "Vite",
            logo: "https://vitejs.dev/logo.svg",
            bgColor: "bg-purple-100 dark:bg-purple-900/30",
          },
          {
            name: "Docker",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            bgColor: "bg-sky-100 dark:bg-sky-900/30",
          },
        ],
      },
      {
        title: "Monitoring & Analytics",
        skills: [
          {
            name: "Datadog",
            logo: "https://www.vectorlogo.zone/logos/datadoghq/datadoghq-icon.svg",
            bgColor: "bg-purple-100 dark:bg-purple-900/30",
          },
          {
            name: "Bugsnag",
            logo: "https://www.vectorlogo.zone/logos/bugsnag/bugsnag-icon.svg",
            bgColor: "bg-blue-100 dark:bg-blue-900/30",
          },
          {
            name: "PostHog",
            logo: "https://posthog.com/brand/posthog-logomark.svg",
            bgColor: "bg-orange-100 dark:bg-orange-900/30",
          },
        ],
      },
      {
        title: "Testing & Quality",
        skills: [
          {
            name: "RTL",
            logo: "https://testing-library.com/img/octopus-128x128.png",
            bgColor: "bg-red-100 dark:bg-red-900/30",
          },
          {
            name: "Playwright",
            logo: "https://playwright.dev/img/playwright-logo.svg",
            bgColor: "bg-green-100 dark:bg-green-900/30",
          },
          {
            name: "Happo",
            logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='70' font-size='60'%3E📸%3C/text%3E%3C/svg%3E",
            bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
          },
        ],
      },
      {
        title: "Version Control",
        skills: [
          {
            name: "Git",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            bgColor: "bg-orange-100 dark:bg-orange-900/30",
          },
          {
            name: "GitHub",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            bgColor: "bg-gray-100 dark:bg-gray-800",
            invertDark: true,
          },
        ],
      },
    ],
  },
  {
    title: "Data Engineering",
    description:
      "Building data engineering and analytics skills for healthcare transformation",
    icon: "data",
    gradient: "from-emerald-400 to-cyan-600",
    expandable: true,
    categories: [
      {
        title: "Data Platforms & Tools",
        skills: [
          {
            name: "Microsoft Fabric",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
            bgColor: "bg-blue-100 dark:bg-blue-900/30",
          },
          {
            name: "Power BI",
            logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23F2C811' d='M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z'/%3E%3C/svg%3E",
            bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
          },
          {
            name: "SQL Server",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
            bgColor: "bg-red-100 dark:bg-red-900/30",
          },
          {
            name: "Python (PySpark)",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            bgColor: "bg-blue-100 dark:bg-blue-900/30",
          },
        ],
      },
      {
        title: "Healthcare & DevOps",
        skills: [
          {
            name: "MEDITECH Expanse",
            logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2310B981' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E",
            bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
          },
          {
            name: "Azure DevOps",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
            bgColor: "bg-blue-100 dark:bg-blue-900/30",
          },
        ],
      },
    ],
  },
];

export const jobs: Job[] = [
  {
    role: "Data Solutions Principal (Part-time)",
    company: "Collingwood General & Marine Hospital",
    period: "2025 – Present",
    url: "https://cgmh.on.ca",
    logoUrl: "https://cgmh.on.ca/images/layout/logo.png",
    description:
      "Building expertise in data engineering and Microsoft Fabric while supporting the transformation of healthcare data from multiple sources (EMR, MOH, CIHI) into unified analytics platforms that drive better patient outcomes.",
  },
  {
    role: "Software Developer",
    company: "Penn Entertainment",
    period: "2025 – Present",
    url: "https://www.pennentertainment.com/",
    logoUrl:
      "https://cdn.brandfetch.io/idVwEt7uTD/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1748340049391",
    description:
      "Transitioned to Penn Entertainment as part of theScore's migration under the Penn umbrella. Currently on the Sportsbook Experience team, contributing to ESPN BET's web platform. Focused on UI/UX enhancements, performance tuning, and feature delivery across espnbet.com.",
  },
  {
    role: "Software Developer",
    company: "theScore",
    period: "2023 - 2025",
    url: "https://thescore.bet/",
    logoUrl: "/thescore-logo.svg",
    description:
      "Driven by a focus on developer experience, performance, and frontend scalability, I've led initiatives that improved CI efficiency, test reliability, and application stability, while also mentoring developers, enhancing mobile usability, and building real-time observability with Datadog and Bugsnag",
  },
  {
    role: "Software Developer",
    company: "Coveo",
    url: "https://www.coveo.com/en",
    period: "2020 - 2023",
    logoUrl:
      "https://cdn.brandfetch.io/idG9zVpOx6/w/1365/h/373/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1750793051429",
    description:
      "Developed new trial experiences and contributed to platform tooling for Coveo's Admin-UI using React, TypeScript, and Redux, supporting frontend teams across the organization.",
  },
];

export const projects: Project[] = [
  {
    name: "Personal Blog",
    description:
      "My space to reflect on programming, track progress, and stay accountable with Pomodoro-fueled learning sessions.",
    badges: ["React", "Next.js", "Tailwind"],
    imageUrl: (theme: string) =>
      theme === "dark" ? "/blog-dark.png" : "/blog-white.png",
    codeUrl: "https://github.com/kxdang/kiendang",
    demoUrl: "https://kiendang.me/",
  },
  {
    name: "RedFlagDeals Discord Bot",
    description:
      "A private Discord bot that monitors RedFlagDeals and sends real-time alerts on savings and price errors.",
    badges: ["Node.js", "Discord.js", "Upstash"],
    imageUrl: "/discord.png",
    codeUrl: "#",
    demoUrl: "rfd-demo",
    isPrivate: true,
  },
  {
    name: "Canadian Recalls",
    description:
      "A website that provides Canadians a better UX experience when checking for product recalls.",
    badges: ["React", "Next.js", "Tailwind"],
    imageUrl: "/recalls.png",
    codeUrl: "https://kiendang.me/blog/building-canadian-recalls",
    demoUrl: "https://canadianrecalls.ca",
    blogInsteadOfCode: true,
  },
  {
    name: "FuelWise",
    description:
      "AI-powered web app that predicts tomorrow's gas prices in Ontario, helping drivers save money by timing their fill-ups.",
    badges: ["Next.js", "PostgreSQL", "Redis", "AI/ML"],
    imageUrl: (theme: string) =>
      theme === "dark" ? "/fuelwise-dark.png" : "/fuelwise-light.png",
    codeUrl: "#",
    demoUrl: "https://fuelwise.app",
    isPrivate: true,
  },
];

// Helper: returns true if the company logo needs a white background in dark mode
export const needsWhiteBgLogo = (company: string) =>
  company === "Penn Entertainment" ||
  company === "theScore" ||
  company === "Coveo" ||
  company === "Collingwood General & Marine Hospital";

// Helper: returns true if the company is theScore
export const isTheScore = (company: string) => company === "theScore";
