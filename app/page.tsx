"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Moon, Sun } from "lucide-react";
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

  useEffect(() => {
    setIsMounted(true);
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
              setTimeout(() => {
                heading.style.transition =
                  "opacity 0.4s ease, transform 0.4s ease";
                heading.style.opacity = "1";
                heading.style.transform = "translateY(0)";
              }, 0);
            }

            const paragraphs = section.querySelectorAll("p");
            paragraphs.forEach((p, i) => {
              if (p instanceof HTMLElement) {
                setTimeout(() => {
                  p.style.transition = "opacity 0.4s ease, transform 0.4s ease";
                  p.style.opacity = "1";
                  p.style.transform = "translateY(0)";
                }, 100 + i * 100);
              }
            });

            const cards = section.querySelectorAll(
              ".bg-white, .card, .grid > div"
            );
            cards.forEach((card, i) => {
              if (card instanceof HTMLElement) {
                setTimeout(() => {
                  card.style.transition =
                    "opacity 0.4s ease, transform 0.4s ease";
                  card.style.opacity = "1";
                  card.style.transform = "translateY(0)";
                }, 200 + i * 100);
              }
            });

            const buttons = section.querySelectorAll("button");
            buttons.forEach((button, i) => {
              if (button instanceof HTMLElement) {
                if (button.classList.contains("rounded-full")) return;

                setTimeout(() => {
                  button.style.transition =
                    "opacity 0.3s ease, transform 0.3s ease";
                  button.style.opacity = "1";
                  button.style.transform = "translateY(0) scale(1)";
                }, 300 + i * 50);
              }
            });

            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = scrollContainer.querySelectorAll("section");
    sections.forEach((section) => {
      const elements = section.querySelectorAll(
        "h2, p, .bg-white, .card, button:not(.rounded-full), .grid > div"
      );
      elements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.opacity = "0";
          el.style.transform = "translateY(20px)";
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
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/3 p-4 lg:p-6 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col">
          <Card className="w-full shadow-lg dark:bg-slate-800">
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
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-slate-100 dark:border-slate-700 shadow-sm">
                <Image
                  src="/kien.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold mb-1">Kien Dang</h1>
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
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://github.com/kxdang"
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://www.linkedin.com/in/kien-dang/"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:hello@kien.dev" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Button className="w-full" onClick={handleDownloadResumeClick}>
                Download Resume
              </Button>
            </CardContent>
          </Card>
        </div>

        <div ref={scrollContainerRef} className="lg:w-2/3 p-4 lg:p-8">
          <section id="about" className="mb-12">
            <h2 className="text-2xl font-bold mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
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

          <section id="skills" className="mb-12">
            <h2 className="text-2xl font-bold mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">Frontend</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>React / Next.js</li>
                  <li>TypeScript / Zustand / Redux</li>
                  <li>GraphQL / Apollo </li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">Tools</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>Git / GitHub</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                  <li>Webpack / Vite</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">Other</h3>
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

          <section id="experience" className="mb-12">
            <h2 className="text-2xl font-bold mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
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
                    className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm"
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

          <section id="projects" className="mb-12">
            <h2 className="text-2xl font-bold mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
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
                  name: "Freelancer / Contract Work",
                  description:
                    "Available weekends for freelance web work (React, CI/CD, platform). No conflict with full-time role.",
                  badges: ["Consulting", "Small Business"],
                  imageUrl: "/freelance.png",
                  codeUrl: "#",
                  demoUrl: "soon",
                },
              ]
                // Hide the freelance project buttons since there's nothing to show
                .map((project) => (
                  <Card
                    key={project.name}
                    className="overflow-hidden dark:bg-slate-800"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={
                          project.imageUrl ??
                          `/placeholder.svg?height=192&width=384&text=Project+${project.name}`
                        }
                        alt={`Project ${project.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-1">{project.name}</h3>
                      <p className="text-sm text-slate-600 mb-3 dark:text-slate-400">
                        {project.description}
                      </p>

                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2 mb-3 flex-wrap">
                          {project.badges.map((badge) => (
                            <Badge key={badge}>{badge}</Badge>
                          ))}
                        </div>
                        {/* Hide the buttons for the Freelancer / Contract Work project */}
                        {project.name !== "Freelancer / Contract Work" && (
                          <div className="flex gap-2">
                            {/* Show the code button for RFD, but make it show the private repo toast */}
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex items-center gap-1"
                              onClick={() => {
                                if (
                                  project.name === "RedFlagDeals Discord Bot"
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
                              className="flex items-center gap-1"
                              onClick={() => {
                                if (
                                  project.name === "RedFlagDeals Discord Bot"
                                ) {
                                  // Open modal for demo
                                  setIsModalOpen(true);
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
            <h2 className="text-2xl font-bold mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
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
              <Button type="submit" className="flex items-center gap-2">
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
        </div>
      </div>
    </div>
  );
}
