"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const { theme } = useTheme();
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFuelWiseModalOpen, setIsFuelWiseModalOpen] = useState(false);

  const handleProjectClick = (projectName: string, url: string) => {
    if (projectName === "RedFlagDeals Discord Bot" && url === "#") {
      toast({
        title: "Private Repository",
        description: "The code for this project is currently private.",
        variant: "default",
      });
      return;
    }
    if (projectName === "RedFlagDeals Discord Bot" && url === "rfd-demo") {
      setIsModalOpen(true);
      return;
    }
    window.open(url, "_blank");
  };

  return (
    <section id="projects" className="mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project, index) => {
          const imageUrl =
            typeof project.imageUrl === "function"
              ? project.imageUrl(theme ?? "light")
              : project.imageUrl;

          return (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl overflow-hidden group transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={`Project ${project.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-lg mb-1 text-slate-800 dark:text-slate-100">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-col gap-3 mt-auto">
                  <div className="flex gap-2 flex-wrap">
                    {project.badges.map((badge) => (
                      <Badge
                        key={badge}
                        className="bg-slate-100/80 text-slate-600 dark:bg-white/5 dark:text-slate-400 border border-slate-200/50 dark:border-white/10 text-xs"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 glass-subtle border-0 hover:bg-white/60 dark:hover:bg-white/10 transition-colors"
                      onClick={() => {
                        if (project.isPrivate) {
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
                      {project.blogInsteadOfCode ? (
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
                      className="flex items-center gap-1 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white shadow-lg shadow-violet-500/20 transition-all"
                      onClick={() => {
                        if (project.name === "RedFlagDeals Discord Bot") {
                          setIsModalOpen(true);
                          return;
                        }
                        if (project.name === "FuelWise") {
                          setIsFuelWiseModalOpen(true);
                          return;
                        }
                        handleProjectClick(project.name, project.demoUrl);
                      }}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Explore</span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* RFD Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto glass-strong border-0">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              RedFlagDeals Bot Demo
            </DialogTitle>
            <DialogDescription className="text-sm text-slate-500 dark:text-slate-400">
              A showcase of my bot constantly scanning every few seconds and
              alerting me when its found a deal.
            </DialogDescription>
          </DialogHeader>
          <div className="relative w-full mb-4 rounded-xl overflow-hidden">
            <video
              src="/rfd.mp4"
              autoPlay
              loop
              muted
              controls
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Project Overview</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                I built this to avoid endless RFD scrolling and impulse buying.
                My Discord bot runs on my home server using Node.js and pm2,
                stores keywords with Upstash, and sends alerts only for deals I
                actually care about.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Key Features</h3>
              <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-1 list-disc pl-5">
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
            <p className="text-sm text-slate-500 dark:text-slate-400">
              This private bot was built for personal use and for friends. The
              code isn&apos;t public to protect API keys and avoid potential
              misuses.
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* FuelWise Modal */}
      <Dialog
        open={isFuelWiseModalOpen}
        onOpenChange={setIsFuelWiseModalOpen}
      >
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto glass-strong border-0">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              FuelWise Demo
            </DialogTitle>
            <DialogDescription className="text-sm text-slate-500 dark:text-slate-400">
              AI-powered gas price predictions for Ontario drivers, saving money
              one fill-up at a time.
            </DialogDescription>
          </DialogHeader>
          <div className="relative w-full mb-4 rounded-xl overflow-hidden">
            <Image
              src={
                theme === "dark" ? "/fuelwise-dark.png" : "/fuelwise-light.png"
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
              <p className="text-sm text-slate-500 dark:text-slate-400">
                FuelWise uses machine learning to analyze historical gas price
                data and predict tomorrow&apos;s prices across Ontario. The app
                helps drivers make informed decisions about when to fill up,
                potentially saving significant money over time.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Key Features</h3>
              <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-1 list-disc pl-5">
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
                className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white"
                onClick={() =>
                  window.open("https://fuelwise.app", "_blank")
                }
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit FuelWise
              </Button>
              <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
                The code is private to protect API keys and proprietary
                prediction algorithms.
              </p>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
