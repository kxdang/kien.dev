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
  Sun 
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
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

// Helper: returns true if the company is Penn, theScore, or Coveo
const needsWhiteBgLogo = (company: string) =>
  company === "Penn Entertainment" ||
  company === "theScore" ||
  company === "Coveo";

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
                  p.style.transition = "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
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
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-slate-700 to-blue-900 transition-all duration-150"
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
              <h1 className="text-3xl font-bold mb-1 bg-gradient-to-r from-slate-700 to-blue-800 dark:from-slate-300 dark:to-blue-400 bg-clip-text text-transparent">Kien Dang</h1>
              <h2 className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                Software Developer
              </h2>
              <div className="flex gap-2 mb-6 flex-wrap justify-center">
                Toronto, Canada 🇨🇦
              </div>
              <p className="text-slate-600 mb-6 dark:text-slate-400 ">
                I build beautiful, responsive web applications with modern
                technologies.
              </p>
              <div className="flex gap-3 mb-6">
                <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform hover:border-slate-600 dark:hover:border-slate-400">
                  <Link
                    href="https://github.com/kxdang"
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform hover:border-slate-600 dark:hover:border-slate-400">
                  <Link
                    href="https://www.linkedin.com/in/kien-dang/"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform hover:border-slate-600 dark:hover:border-slate-400">
                  <Link href="mailto:hello@kien.dev" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Button className="w-full bg-gradient-to-r from-slate-700 to-blue-900 hover:from-slate-800 hover:to-blue-950 text-white transition-all duration-300 transform hover:scale-105" onClick={handleDownloadResumeClick}>
                Download Resume
              </Button>
            </CardContent>
          </Card>
        </div>

        <div ref={scrollContainerRef} className="lg:w-2/3 p-4 lg:p-8">
          <section id="about" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-slate-300 dark:border-slate-700 pb-3 text-slate-800 dark:text-slate-100">
              About Me
            </h2>
            <p className="text-slate-600 mb-4 dark:text-slate-300">
              Hello! I'm Kien — a software developer with{" "}
              {getYearsOfExperience()} years of experience and a strong focus on
              frontend development. I specialize in crafting responsive,
              accessible, and high-performance user interfaces that deliver
              seamless web experiences.
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger-animation">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg card-hover skill-card border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold mb-2 text-slate-700 dark:text-slate-300">Frontend</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>React / Next.js</li>
                  <li>TypeScript / Zustand / Redux</li>
                  <li>GraphQL / Apollo </li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg card-hover skill-card border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold mb-2 text-slate-700 dark:text-slate-300">Tools</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>Git / GitHub</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                  <li>Webpack / Vite</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg card-hover skill-card border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold mb-2 text-slate-700 dark:text-slate-300">Other</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>
                    Platform Engineering, CI/CD, and Observability
                    <br />
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      (CircleCI, deployment pipelines, Datadog, Bugsnag)
                    </span>
                  </li>
                  <li>Accessibility &amp; Responsive Web Design</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="experience" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-slate-300 dark:border-slate-700 pb-3 text-slate-800 dark:text-slate-100">
              Experience
            </h2>
            <div className="space-y-6">
              {[
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
                  imageUrl: "/blog.png",
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
                  imageUrl: "/fuelwise.png",
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
                            <Badge key={badge} className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">{badge}</Badge>
                          ))}
                        </div>
                        {(
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
                                handleProjectClick(
                                  project.name,
                                  project.codeUrl
                                );
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
                                if (
                                  project.name === "RedFlagDeals Discord Bot"
                                ) {
                                  // Open modal for demo
                                  setIsModalOpen(true);
                                  return;
                                }
                                if (project.name === "FuelWise") {
                                  // Open FuelWise modal for demo
                                  setIsFuelWiseModalOpen(true);
                                  return;
                                }
                                handleProjectClick(
                                  project.name,
                                  project.demoUrl
                                );
                              }}
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              <span>{"Explore"}</span>
                            </Button>
                          </div>
                        )}
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
              <Button type="submit" className="flex items-center gap-2 bg-gradient-to-r from-slate-700 to-blue-900 hover:from-slate-800 hover:to-blue-950 text-white transition-all duration-300 transform hover:scale-105">
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
                    <li>Scans RFD every 30 seconds</li>
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

          <Dialog open={isFuelWiseModalOpen} onOpenChange={setIsFuelWiseModalOpen}>
            <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold flex items-center justify-between">
                  <span>FuelWise Demo</span>
                </DialogTitle>
                <DialogDescription className="text-sm text-slate-600 dark:text-slate-400">
                  AI-powered gas price predictions for Ontario drivers, saving money one fill-up at a time.
                </DialogDescription>
              </DialogHeader>

              <div className="relative w-full mb-4 rounded-md overflow-hidden">
                <Image
                  src="/fuelwise.png"
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
                    FuelWise uses machine learning to analyze historical gas price data and predict tomorrow's prices across Ontario. 
                    The app helps drivers make informed decisions about when to fill up, potentially saving significant money over time.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Key Features</h3>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc pl-5">
                    <li>AI-powered price predictions with machine learning models</li>
                    <li>Real-time data storage and caching with Redis (Upstash)</li>
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
                    onClick={() => window.open('https://fuelwise.app', '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit FuelWise
                  </Button>
                  <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                    The code is private to protect API keys and proprietary prediction algorithms.
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
