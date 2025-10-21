"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  // @ts-ignore - Github icon is deprecated but still functional
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Moon,
  Sun,
  Volume2,
  PenTool,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const getYearsOfExperience = () => {
  const startYear = 2018;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

// Helper: returns true if the company is Penn, theScore, or Coveo
const needsWhiteBgLogo = (company: string) =>
  company === "Penn Entertainment" ||
  company === "theScore" ||
  company === "Coveo" ||
  company === "Collingwood General & Marine Hospital";

// Helper: returns true if the company is theScore
const isTheScore = (company: string) => company === "theScore";

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFuelWiseModalOpen, setIsFuelWiseModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDataSolutionsExpanded, setIsDataSolutionsExpanded] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;

            const heading = section.querySelector("h2");
            if (heading instanceof HTMLElement) {
              requestAnimationFrame(() => {
                heading.style.transition =
                  "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
                heading.style.opacity = "1";
                heading.style.transform = "translateY(0) scale(1)";
              });
            }

            const paragraphs = section.querySelectorAll("p");
            paragraphs.forEach((p, i) => {
              if (p instanceof HTMLElement) {
                setTimeout(() => {
                  p.style.transition =
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
                  p.style.opacity = "1";
                  p.style.transform = "translateY(0)";
                }, 100 + i * 75);
              }
            });

            const cards = section.querySelectorAll(
              ".bg-white, .card, .grid > div"
            );
            cards.forEach((card, i) => {
              if (card instanceof HTMLElement) {
                setTimeout(() => {
                  card.style.transition =
                    "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
                  card.style.opacity = "1";
                  card.style.transform = "translateY(0) scale(1)";
                }, 150 + i * 100);
              }
            });

            const buttons = section.querySelectorAll("button");
            buttons.forEach((button, i) => {
              if (button instanceof HTMLElement) {
                if (button.classList.contains("rounded-full")) return;

                setTimeout(() => {
                  button.style.transition =
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
                  button.style.opacity = "1";
                  button.style.transform = "translateY(0) scale(1)";
                }, 200 + i * 50);
              }
            });

            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.05, rootMargin: "-50px" }
    );

    const sections = scrollContainer.querySelectorAll("section");
    sections.forEach((section) => {
      // Enhanced initial styles for elements
      const heading = section.querySelector("h2");
      if (heading instanceof HTMLElement) {
        heading.style.transform = "translateY(30px) scale(0.95)";
      }

      const cards = section.querySelectorAll(".bg-white, .card, .grid > div");
      cards.forEach((card) => {
        if (card instanceof HTMLElement) {
          card.style.transform = "translateY(30px) scale(0.98)";
        }
      });

      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isMounted]);

  const handleDownloadResumeClick = () => {
    toast({
      title: "Coming soon!",
      variant: "default",
    });
  };

  const handleProjectClick = (projectName: string, url: string) => {
    if (projectName === "RedFlagDeals Discord Bot" && url === "#") {
      toast({
        title: "Private Repository",
        description: "The code for this project is currently private.",
        variant: "default",
      });
      return;
    }

    if (projectName === "RedFlagDeals Discord Bot" && url === "soon") {
      setIsModalOpen(true);
      return;
    }

    window.open(url, "_blank");
  };

  return (
    <div className="max-w-[1200px] mx-auto relative">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <div
          className="h-full bg-gradient-to-r from-slate-500 to-blue-500 dark:from-slate-400 dark:to-blue-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/3 p-4 lg:p-6 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col">
          <Card className="w-full shadow-2xl dark:bg-slate-800 backdrop-blur-md bg-white/95 dark:bg-slate-800/95 border border-slate-200 dark:border-slate-700">
            <div className="flex justify-end p-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
              >
                {isMounted && theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-slate-200 dark:border-slate-600 shadow-xl group">
                <Image
                  src="/kien.png"
                  alt="Profile"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <h1 className="text-3xl font-bold mb-1 bg-gradient-to-r from-slate-700 to-blue-800 dark:from-slate-300 dark:to-blue-400 bg-clip-text text-transparent">
                Kien Dang
              </h1>
              <h2 className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                Software Engineer
              </h2>
              <div className="flex gap-2 mb-6 flex-wrap justify-center">
                Toronto, Canada 🇨🇦
              </div>
              <p className="text-slate-600 mb-6 dark:text-slate-400 ">
                From biochemistry labs to code, catalyzed by coffee and
                curiosity
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:scale-110 transition-transform border-slate-300 dark:border-slate-600 hover:border-slate-600 dark:hover:border-slate-400"
                >
                  <Link
                    href="https://github.com/kxdang"
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:scale-110 transition-transform border-slate-300 dark:border-slate-600 hover:border-slate-600 dark:hover:border-slate-400"
                >
                  <Link
                    href="https://www.linkedin.com/in/kien-dang/"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:scale-110 transition-transform border-slate-300 dark:border-slate-600 hover:border-slate-600 dark:hover:border-slate-400"
                >
                  <Link
                    href="https://kiendang.me"
                    target="_blank"
                    aria-label="Blog"
                  >
                    <PenTool className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 transition-transform border-slate-300 dark:border-slate-600 hover:border-slate-600 dark:hover:border-slate-400"
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  aria-label="Contact"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div ref={scrollContainerRef} className="lg:w-2/3 p-4 lg:p-8">
          <section id="about" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-slate-300 dark:border-slate-700 pb-3 text-slate-800 dark:text-slate-100">
              About Me
            </h2>
            <p className="text-slate-600 mb-4 dark:text-slate-300">
              Hello! I'm{" "}
              <button
                onClick={() => {
                  const audio = new Audio("/kien.mp3");
                  audio.play();
                }}
                className="relative inline-flex items-center gap-1 hover:scale-105 transition-transform cursor-pointer group"
                aria-label="Play pronunciation of Kien"
              >
                <span className="font-bold group-hover:text-slate-800 dark:group-hover:text-slate-200">
                  Kien
                </span>
                <Volume2 className="h-4 w-4 text-slate-600 dark:text-slate-400 align-text-bottom" />
                {/* Tooltip */}
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap">
                  <span className="bg-slate-900 dark:bg-slate-700 text-white text-xs px-3 py-1.5 rounded-md shadow-lg">
                    \key-in\
                  </span>
                </span>
              </button>{" "}
              — a software developer with {getYearsOfExperience()} years of
              experience and a strong focus on frontend development. I
              specialize in crafting responsive, accessible, and
              high-performance user interfaces that deliver seamless web
              experiences.
            </p>
            <p className="text-slate-600 mb-4 dark:text-slate-300">
              After graduating from the University of Waterloo with a Bachelor
              of Science in Biochemistry, I found myself working in a costing
              role where I spent most of my time in Excel spreadsheets.
            </p>
            <p className="text-slate-600 mb-4 dark:text-slate-300">
              While the job wasn't related to my degree, it was there that I
              discovered a passion for problem-solving through automation — I
              started using VBA to streamline repetitive tasks, and that
              experience ignited a deeper curiosity about programming.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              Motivated by that spark, I made the decision to leave and pursue a
              self-taught path into software development. Since then, I've been
              committed to continuous learning and growth, staying at the
              forefront of frontend technologies to build fast, accessible, and
              user-friendly applications.
            </p>
          </section>

          <section id="skills" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-slate-300 dark:border-slate-700 pb-3 text-slate-800 dark:text-slate-100">
              Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Frontend Development Card */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 card-hover">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                    Frontend Development
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Building responsive, accessible, and performant user
                  interfaces
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
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
                      ].map((skill) => (
                        <div
                          key={skill.name}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 ${skill.bgColor} rounded-md border border-slate-200 dark:border-slate-600`}
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className={`w-4 h-4 ${
                              skill.invertDark && theme === "dark"
                                ? "invert"
                                : ""
                            }`}
                          />
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                      Libraries & Styling
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
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
                      ].map((skill) => (
                        <div
                          key={skill.name}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 ${skill.bgColor} rounded-md border border-slate-200 dark:border-slate-600`}
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-4 h-4"
                          />
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                      Design & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        {
                          name: "Figma",
                          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                          bgColor: "bg-purple-100 dark:bg-purple-900/30",
                        },
                        {
                          name: "Photoshop",
                          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
                          bgColor: "bg-blue-100 dark:bg-blue-900/30",
                        },
                      ].map((skill) => (
                        <div
                          key={skill.name}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 ${skill.bgColor} rounded-md border border-slate-200 dark:border-slate-600`}
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-4 h-4"
                          />
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Platform Engineering Card */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 card-hover">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                    Platform Engineering
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Building tools, improving DX, and ensuring system reliability
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                      CI/CD & Build Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        {
                          name: "CircleCI",
                          logo: "https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg",
                          bgColor: "bg-gray-100 dark:bg-gray-900/30",
                        },
                        {
                          name: "Webpack",
                          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
                          bgColor: "bg-sky-100 dark:bg-sky-900/30",
                        },
                        {
                          name: "Vite",
                          logo: "https://vitejs.dev/logo.svg",
                          bgColor: "bg-purple-100 dark:bg-purple-900/30",
                        },
                      ].map((skill) => (
                        <div
                          key={skill.name}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 ${skill.bgColor} rounded-md border border-slate-200 dark:border-slate-600`}
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-4 h-4"
                          />
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                      Monitoring & Analytics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
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
                      ].map((skill) => (
                        <div
                          key={skill.name}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 ${skill.bgColor} rounded-md border border-slate-200 dark:border-slate-600`}
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-4 h-4"
                          />
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                      Testing & Quality
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
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
                      ].map((skill) => (
                        <div
                          key={skill.name}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 ${skill.bgColor} rounded-md border border-slate-200 dark:border-slate-600`}
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-4 h-4"
                          />
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                      Version Control
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
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
                      ].map((skill) => (
                        <div
                          key={skill.name}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 ${skill.bgColor} rounded-md border border-slate-200 dark:border-slate-600`}
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className={`w-4 h-4 ${
                              skill.invertDark && theme === "dark"
                                ? "invert"
                                : ""
                            }`}
                          />
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Engineering Card - Full Width */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 mt-6 card-hover">
              <div
                className="relative flex items-center gap-2 mb-4 cursor-pointer group"
                onClick={() =>
                  setIsDataSolutionsExpanded(!isDataSolutionsExpanded)
                }
              >
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                  Data Engineering
                  <span className="text-base">🌱</span>
                </h3>
                <svg
                  className={`w-5 h-5 text-slate-600 dark:text-slate-400 transition-transform ${
                    isDataSolutionsExpanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {/* Tooltip */}
                <div className="absolute left-0 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                  <div className="bg-slate-900 dark:bg-slate-700 text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg">
                    🌱 Currently developing these skills below
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Building data engineering and analytics skills for healthcare
                transformation
              </p>
              {isDataSolutionsExpanded && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                      Data Platforms & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
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
                          name: "Azure Data Factory",
                          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
                          bgColor: "bg-blue-100 dark:bg-blue-900/30",
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
                        {
                          name: "Apache Spark",
                          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg",
                          bgColor: "bg-orange-100 dark:bg-orange-900/30",
                        },
                        {
                          name: "Databricks",
                          logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FF3621' d='M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5'/%3E%3C/svg%3E",
                          bgColor: "bg-red-100 dark:bg-red-900/30",
                        },
                      ].map((skill) => (
                        <div
                          key={skill.name}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 ${skill.bgColor} rounded-md border border-slate-200 dark:border-slate-600`}
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-4 h-4"
                          />
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                      Healthcare Data & Standards
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        {
                          name: "MEDITECH Expanse",
                          logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2310B981' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E",
                          bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
                        },
                        {
                          name: "CIHI Datasets",
                          logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%236366F1' d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z'/%3E%3C/svg%3E",
                          bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
                        },
                        {
                          name: "MOH Integration",
                          logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23EC4899' d='M22 12h-4l-3 9L9 3l-3 9H2'/%3E%3C/svg%3E",
                          bgColor: "bg-pink-100 dark:bg-pink-900/30",
                        },
                        {
                          name: "Medallion Architecture",
                          logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23A855F7' d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'/%3E%3C/svg%3E",
                          bgColor: "bg-purple-100 dark:bg-purple-900/30",
                        },
                        {
                          name: "Data Governance",
                          logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2314B8A6' d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z'/%3E%3C/svg%3E",
                          bgColor: "bg-teal-100 dark:bg-teal-900/30",
                        },
                      ].map((skill) => (
                        <div
                          key={skill.name}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 ${skill.bgColor} rounded-md border border-slate-200 dark:border-slate-600`}
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-4 h-4"
                          />
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                      DevOps & Development
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        {
                          name: "Azure DevOps",
                          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
                          bgColor: "bg-blue-100 dark:bg-blue-900/30",
                        },
                        {
                          name: "CI/CD Pipelines",
                          logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2310B981' d='M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z'/%3E%3C/svg%3E",
                          bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
                        },
                        {
                          name: "AGILE/Scrum",
                          logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23F59E0B' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'/%3E%3C/svg%3E",
                          bgColor: "bg-amber-100 dark:bg-amber-900/30",
                        },
                      ].map((skill) => (
                        <div
                          key={skill.name}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 ${skill.bgColor} rounded-md border border-slate-200 dark:border-slate-600`}
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-4 h-4"
                          />
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          <section id="experience" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-slate-300 dark:border-slate-700 pb-3 text-slate-800 dark:text-slate-100">
              Experience
            </h2>
            <div className="space-y-6">
              {[
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
                  logoUrl:
                    "https://cdn.brandfetch.io/idL7aMtexJ/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1667569467815",
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
              ].map((job, index) => {
                const hasLogo = !!job.logoUrl;
                // Add a white background in dark mode for Penn, theScore, and Coveo logos
                const logoWrapperClass = needsWhiteBgLogo(job.company)
                  ? "inline-flex items-center justify-center rounded bg-transparent dark:bg-white"
                  : "";
                // Make theScore logo slightly smaller
                const logoImgClass = isTheScore(job.company)
                  ? `h-4 w-auto object-contain ${
                      needsWhiteBgLogo(job.company) ? "p-0.5" : ""
                    }`
                  : `h-5 w-auto object-contain ${
                      needsWhiteBgLogo(job.company) ? "p-0.5" : ""
                    }`;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg card-hover border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="font-bold">{job.role}</h3>
                        <p className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                          {hasLogo && job.url ? (
                            <a
                              href={job.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block"
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
                          ) : hasLogo ? (
                            <span className={logoWrapperClass}>
                              <img
                                src={job.logoUrl}
                                alt={`${job.company} logo`}
                                className={logoImgClass}
                              />
                            </span>
                          ) : job.url ? (
                            <a
                              href={job.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {job.company}
                            </a>
                          ) : (
                            job.company
                          )}
                        </p>
                      </div>
                      <span className="text-sm text-slate-500">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {job.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="projects" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-slate-300 dark:border-slate-700 pb-3 text-slate-800 dark:text-slate-100">
              Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Personal Blog",
                  description:
                    "My space to reflect on programming, track progress, and stay accountable with Pomodoro-fueled learning sessions.",
                  badges: ["React", "Next.js", "Tailwind"],
                  imageUrl:
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
                  demoUrl: "rfd-demo", // Use a unique string to trigger modal
                },
                {
                  name: "Canadian Recalls",
                  description:
                    "A website that provides Canadians a better UX experience when checking for product recalls.",
                  badges: ["React", "Next.js", "Tailwind"],
                  imageUrl: "/recalls.png",
                  codeUrl: "https://kiendang.me/blog/building-canadian-recalls",
                  demoUrl: "https://canadianrecalls.ca",
                },
                {
                  name: "FuelWise",
                  description:
                    "AI-powered web app that predicts tomorrow's gas prices in Ontario, helping drivers save money by timing their fill-ups.",
                  badges: ["Next.js", "PostgreSQL", "Redis", "AI/ML"],
                  imageUrl:
                    theme === "dark"
                      ? "/fuelwise-dark.png"
                      : "/fuelwise-light.png",
                  codeUrl: "#",
                  demoUrl: "https://fuelwise.app",
                },
              ].map((project) => (
                <Card
                  key={project.name}
                  className="overflow-hidden dark:bg-slate-800 flex flex-col h-full card-hover group border border-slate-200 dark:border-slate-700"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={
                        project.imageUrl ??
                        `/placeholder.svg?height=192&width=384&text=Project+${project.name}`
                      }
                      alt={`Project ${project.name}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-4 flex flex-col flex-grow">
                    <h3 className="font-bold text-lg mb-1">{project.name}</h3>
                    <p className="text-sm text-slate-600 mb-3 dark:text-slate-400">
                      {project.description}
                    </p>

                    <div className="flex flex-col gap-2 mt-auto">
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {project.badges.map((badge) => (
                          <Badge
                            key={badge}
                            className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                      {
                        <div className="flex gap-2">
                          {/* Show the code button for RFD, but make it show the private repo toast */}
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1 hover:border-slate-600 hover:text-slate-700 dark:hover:border-slate-400 dark:hover:text-slate-300 transition-colors"
                            onClick={() => {
                              if (
                                project.name === "RedFlagDeals Discord Bot" ||
                                project.name === "FuelWise"
                              ) {
                                // Show private repo toast
                                toast({
                                  title: "Private Repository",
                                  description:
                                    "The code for this project is currently private.",
                                  variant: "default",
                                });
                                return;
                              }
                              handleProjectClick(project.name, project.codeUrl);
                            }}
                          >
                            {project.name === "Canadian Recalls" ? (
                              <>
                                <ExternalLink className="h-3.5 w-3.5" />
                                <span>Blog</span>
                              </>
                            ) : (
                              <>
                                <Github className="h-3.5 w-3.5" />
                                <span>Code</span>
                              </>
                            )}
                          </Button>
                          <Button
                            size="sm"
                            className="flex items-center gap-1 bg-gradient-to-r from-slate-700 to-blue-900 hover:from-slate-800 hover:to-blue-950 text-white transition-all"
                            onClick={() => {
                              if (project.name === "RedFlagDeals Discord Bot") {
                                // Open modal for demo
                                setIsModalOpen(true);
                                return;
                              }
                              if (project.name === "FuelWise") {
                                // Open FuelWise modal for demo
                                setIsFuelWiseModalOpen(true);
                                return;
                              }
                              handleProjectClick(project.name, project.demoUrl);
                            }}
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>{"Explore"}</span>
                          </Button>
                        </div>
                      }
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="contact" className="mb-6">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-slate-300 dark:border-slate-700 pb-3 text-slate-800 dark:text-slate-100">
              Contact
            </h2>
            <p className="text-slate-600 mb-4 dark:text-slate-300">
              If you'd like to have a coffee chat ☕ — feel free to reach out
              using the form below!
            </p>
            <form
              action="https://formspree.io/f/mzzvvzbl"
              method="POST"
              className="space-y-4 max-w-lg"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white dark:bg-slate-800 dark:border-slate-700 text-black dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white dark:bg-slate-800 dark:border-slate-700 text-black dark:text-white"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white dark:bg-slate-800 dark:border-slate-700 text-black dark:text-white"
                  placeholder="How can I help you?"
                />
              </div>
              {/* Formspree honeypot field for spam prevention */}
              <input type="text" name="_gotcha" style={{ display: "none" }} />
              <Button
                type="submit"
                className="flex items-center gap-2 bg-gradient-to-r from-slate-700 to-blue-900 hover:from-slate-800 hover:to-blue-950 text-white transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                <span>Send Message</span>
              </Button>
            </form>
          </section>

          <footer className="text-center text-sm text-slate-500 pt-4 border-t">
            © {new Date().getFullYear()}{" "}
            <Link href={"https://kiendang.ca"}>Kien Dang.</Link> All rights
            reserved.
          </footer>
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto ">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold flex items-center justify-between">
                  <span>RedFlagDeals Bot Demo</span>
                </DialogTitle>
                <DialogDescription className="text-sm text-slate-600 dark:text-slate-400">
                  A showcase of my bot constantly scanning every few seconds and
                  alerting me when its found a deal.
                </DialogDescription>
              </DialogHeader>

              <div className="relative w-full mb-4 rounded-md overflow-hidden">
                <video
                  src="/rfd.mp4"
                  autoPlay
                  loop
                  muted
                  controls // Optional if you want play/pause controls
                  className="object-cover w-full h-auto"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Project Overview</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    I built this to avoid endless RFD scrolling and impulse
                    buying. My Discord bot runs on my home server using Node.js
                    and pm2, stores keywords with Upstash, and sends alerts only
                    for deals I actually care about.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-2 ">Key Features</h3>
                  <ul className="text-sm  text-slate-600 dark:text-slate-400 space-y-1 list-disc pl-5">
                    <li>Real-time keyword storage with Upstash</li>
                    <li>Instant deal alerts via user pings</li>
                    <li>Utilizes RSS feed to constantly scan for deals</li>
                    <li>Built with DiscordJS and custom bot commands</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>JavaScript</Badge>
                    <Badge>Discord.js</Badge>
                    <Badge>Upstash</Badge>
                    <Badge>Node.js</Badge>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {" "}
                  This private bot was built for personal use and for friends.
                  The code isn’t public to protect API keys and avoid potential
                  misuses.
                </p>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog
            open={isFuelWiseModalOpen}
            onOpenChange={setIsFuelWiseModalOpen}
          >
            <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold flex items-center justify-between">
                  <span>FuelWise Demo</span>
                </DialogTitle>
                <DialogDescription className="text-sm text-slate-600 dark:text-slate-400">
                  AI-powered gas price predictions for Ontario drivers, saving
                  money one fill-up at a time.
                </DialogDescription>
              </DialogHeader>

              <div className="relative w-full mb-4 rounded-md overflow-hidden">
                <Image
                  src={
                    theme === "dark"
                      ? "/fuelwise-dark.png"
                      : "/fuelwise-light.png"
                  }
                  alt="FuelWise App Screenshot"
                  width={700}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Project Overview</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    FuelWise uses machine learning to analyze historical gas
                    price data and predict tomorrow's prices across Ontario. The
                    app helps drivers make informed decisions about when to fill
                    up, potentially saving significant money over time.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Key Features</h3>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc pl-5">
                    <li>
                      AI-powered price predictions with machine learning models
                    </li>
                    <li>
                      Real-time data storage and caching with Redis (Upstash)
                    </li>
                    <li>Historical price tracking with PostgreSQL database</li>
                    <li>Location-based predictions for major Ontario cities</li>
                    <li>Daily price trend analysis and alerts</li>
                    <li>Mobile-responsive design for on-the-go checking</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Next.js</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>PostgreSQL</Badge>
                    <Badge>Redis (Upstash)</Badge>
                    <Badge>AI/ML Models</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>Vercel</Badge>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <div className="flex flex-col gap-2 w-full">
                  <Button
                    className="w-full"
                    onClick={() =>
                      window.open("https://fuelwise.app", "_blank")
                    }
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit FuelWise
                  </Button>
                  <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                    The code is private to protect API keys and proprietary
                    prediction algorithms.
                  </p>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
