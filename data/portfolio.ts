export const getYearsOfExperience = () => {
  const startYear = 2018;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

export interface Skill {
  name: string;
  logo: string;
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
  categories: SkillCategory[];
  wide?: boolean;
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
  isStealth?: boolean;
  comingLabel?: string;
}

export const skillCards: SkillCard[] = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and performant user interfaces",
    icon: "code",
    categories: [
      {
        title: "Core Technologies",
        skills: [
          {
            name: "TypeScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          },
          {
            name: "React",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          },
          {
            name: "Next.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            invertDark: true,
          },
          {
            name: "JavaScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          },
          {
            name: "Node.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          },
        ],
      },
      {
        title: "Libraries & Styling",
        skills: [
          {
            name: "Redux",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
          },
          {
            name: "Zustand",
            logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='70' font-size='70'%3E🐻%3C/text%3E%3C/svg%3E",
          },
          {
            name: "GraphQL",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
          },
          {
            name: "Tailwind",
            logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
          },
          {
            name: "Apollo",
            logo: "https://www.vectorlogo.zone/logos/apollographql/apollographql-icon.svg",
          },
        ],
      },
      {
        title: "Design & Tools",
        skills: [
          {
            name: "Figma",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
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
    categories: [
      {
        title: "CI/CD & Build Tools",
        skills: [
          {
            name: "CircleCI",
            logo: "https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg",
          },
          {
            name: "Vite",
            logo: "https://vitejs.dev/logo.svg",
          },
          {
            name: "Docker",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          },
        ],
      },
      {
        title: "Monitoring & Analytics",
        skills: [
          {
            name: "Datadog",
            logo: "https://www.vectorlogo.zone/logos/datadoghq/datadoghq-icon.svg",
          },
          {
            name: "Bugsnag",
            logo: "https://www.vectorlogo.zone/logos/bugsnag/bugsnag-icon.svg",
          },
          {
            name: "PostHog",
            logo: "https://posthog.com/brand/posthog-logomark.svg",
          },
        ],
      },
      {
        title: "Testing & Quality",
        skills: [
          {
            name: "RTL",
            logo: "https://testing-library.com/img/octopus-128x128.png",
          },
          {
            name: "Playwright",
            logo: "https://playwright.dev/img/playwright-logo.svg",
          },
          {
            name: "Happo",
            logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='70' font-size='60'%3E📸%3C/text%3E%3C/svg%3E",
          },
        ],
      },
      {
        title: "Version Control",
        skills: [
          {
            name: "Git",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          },
          {
            name: "GitHub",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            invertDark: true,
          },
        ],
      },
    ],
  },
  {
    title: "Data Engineering",
    description:
      "Building analytics pipelines and modern data platforms for healthcare transformation",
    icon: "data",
    wide: true,
    categories: [
      {
        title: "Data Platforms & Tools",
        skills: [
          {
            name: "Microsoft Fabric",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
          },
          {
            name: "Power BI",
            logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23F2C811' d='M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z'/%3E%3C/svg%3E",
          },
          {
            name: "SQL Server",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
          },
          {
            name: "Python (PySpark)",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          },
        ],
      },
      {
        title: "Healthcare & DevOps",
        skills: [
          {
            name: "MEDITECH Expanse",
            logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2310B981' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E",
          },
          {
            name: "Azure DevOps",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
          },
        ],
      },
    ],
  },
];

export const jobs: Job[] = [
  {
    role: "Data Engineer (Part-time)",
    company: "Collingwood General & Marine Hospital",
    period: "2025 – Present",
    url: "https://cgmh.on.ca",
    logoUrl: "https://cgmh.on.ca/images/layout/logo.png",
    description:
      "Engineering the transformation of healthcare data from multiple sources (EMR, MOH, CIHI) into unified analytics platforms on Microsoft Fabric, supporting better patient outcomes.",
  },
  {
    role: "Software Developer",
    company: "Penn Entertainment",
    period: "2025 – 2026",
    url: "https://www.pennentertainment.com/",
    logoUrl:
      "https://cdn.brandfetch.io/idVwEt7uTD/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1748340049391",
    description:
      "Joined Penn Entertainment via theScore's migration under the Penn umbrella, on the Sportsbook Experience team contributing to ESPN BET's web platform. Worked on UI/UX enhancements, performance tuning, and feature delivery across espnbet.com.",
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
    name: "Untitled",
    description:
      "Quietly cooking up something at the intersection of data and craft. The shape of it will become clearer soon.",
    badges: ["Side Project", "WIP"],
    imageUrl: "",
    codeUrl: "",
    demoUrl: "",
    isStealth: true,
  },
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
