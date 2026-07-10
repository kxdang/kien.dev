export interface Specimen {
  name: string;
  logo?: string; // path under /logos
  emoji?: string; // fallback glyph when no logo exists
  invertDark?: boolean; // near-black logo, invert in dark mode
}

export interface Method {
  num: string;
  title: string;
  note: string;
  specimens: Specimen[];
}

export const methods: Method[] = [
  {
    num: "2.1",
    title: "Frontend development",
    note: "Interfaces that are fast, accessible, and pleasant to use.",
    specimens: [
      { name: "TypeScript", logo: "typescript.svg" },
      { name: "React", logo: "react.svg" },
      { name: "Next.js", logo: "nextjs.svg", invertDark: true },
      { name: "JavaScript", logo: "javascript.svg" },
      { name: "Node.js", logo: "nodejs.svg" },
      { name: "Redux", logo: "redux.svg" },
      { name: "Zustand", emoji: "🐻" },
      { name: "GraphQL", logo: "graphql.svg" },
      { name: "Tailwind", logo: "tailwind.svg" },
      { name: "Apollo", logo: "apollo.svg", invertDark: true },
      { name: "Figma", logo: "figma.svg" },
    ],
  },
  {
    num: "2.2",
    title: "Platform & reliability",
    note: "Tooling, CI, and observability. Keeping teams fast and systems honest.",
    specimens: [
      { name: "CircleCI", logo: "circleci.svg", invertDark: true },
      { name: "Vite", logo: "vite.svg" },
      { name: "Docker", logo: "docker.svg" },
      { name: "Datadog", logo: "datadog.svg" },
      { name: "Bugsnag", logo: "bugsnag.svg" },
      { name: "PostHog", logo: "posthog.svg" },
      { name: "Testing Library", logo: "testinglibrary.png" },
      { name: "Playwright", logo: "playwright.svg" },
      { name: "Git", logo: "git.svg" },
    ],
  },
  {
    num: "2.3",
    title: "Data engineering",
    note: "Hospital data from EMR, MOH, and CIHI sources into unified analytics platforms.",
    specimens: [
      { name: "MS Fabric", logo: "azure.svg" },
      { name: "Power BI", logo: "powerbi.svg" },
      { name: "SQL Server", logo: "sqlserver.svg" },
      { name: "PySpark", logo: "python.svg" },
      { name: "MEDITECH", logo: "meditech.svg" },
      { name: "Azure DevOps", logo: "azuredevops.svg" },
    ],
  },
];

export interface Step {
  period?: string;
  role: string;
  org?: string;
  url?: string;
  desc: string;
  precursor?: boolean;
  current?: boolean;
  transition?: string; // annotation rendered before this step
}

export const pathway: Step[] = [
  {
    period: "b.sc.",
    role: "Biochemistry",
    org: "University of Waterloo",
    url: "https://uwaterloo.ca",
    desc: "Wet labs, assays, and the habit of writing everything down.",
    precursor: true,
  },
  {
    period: "2020 – 2023",
    role: "Software Developer",
    org: "Coveo",
    url: "https://www.coveo.com/en",
    desc: "Built trial experiences and platform tooling for Coveo's Admin-UI with React, TypeScript, and Redux, supporting frontend teams across the organization.",
    transition: "self-taught pivot into software · activation energy: high",
  },
  {
    period: "2023 – 2025",
    role: "Software Developer",
    org: "theScore",
    url: "https://thescore.bet/",
    desc: "Led initiatives that improved CI efficiency, test reliability, and application stability. Mentored developers, enhanced mobile usability, and built real-time observability with Datadog and Bugsnag.",
  },
  {
    period: "2025 – 2026",
    role: "Software Developer",
    org: "Penn Entertainment",
    url: "https://www.pennentertainment.com/",
    desc: "Joined via theScore's migration under the Penn umbrella. On the Sportsbook Experience team for ESPN BET's web platform (since rebranded theScore Bet): UI revamps, performance tuning, and feature delivery across the sportsbook web app.",
  },
  {
    period: "2025 – present",
    role: "Data Engineer",
    org: "Collingwood General & Marine Hospital",
    url: "https://cgmh.on.ca",
    desc: "Transforming healthcare data from EMR, MOH, and CIHI sources into unified analytics platforms on Microsoft Fabric, supporting better patient outcomes.",
    current: true,
    transition: "frontend → data engineering · catalyst: healthcare",
  },
];

export interface AppendixItem {
  index: string;
  name: string;
  desc: string;
  href?: string;
  linkLabel?: string;
  extraHref?: string;
  extraLabel?: string;
  redacted?: boolean;
}

export const appendix: AppendixItem[] = [
  {
    index: "A.0",
    name: "[redacted]",
    desc: "Quietly cooking up something at the intersection of data and craft. The shape of it will become clearer soon.",
    redacted: true,
  },
  {
    index: "A.1",
    name: "Personal blog",
    desc: "Reflections on programming and Pomodoro-fueled learning sessions, since 2019.",
    href: "https://kiendang.me/",
    linkLabel: "kiendang.me",
  },
  {
    index: "A.2",
    name: "Canadian Recalls",
    desc: "A better UX for Canadians checking product recalls.",
    href: "https://canadianrecalls.ca",
    linkLabel: "canadianrecalls.ca",
    extraHref: "https://kiendang.me/blog/building-canadian-recalls",
    extraLabel: "writeup",
  },
  {
    index: "A.3",
    name: "fuelwise",
    desc: "AI-powered predictions for tomorrow's gas prices in Ontario, so drivers can time their fill-ups.",
    href: "https://fuelwise.app",
    linkLabel: "fuelwise.app",
  },
];
