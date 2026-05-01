"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, FlaskConical } from "lucide-react";
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
  const [isFuelWiseModalOpen, setIsFuelWiseModalOpen] = useState(false);

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
              {/* Image / Stealth header */}
              {project.isStealth ? (
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-violet-900 via-blue-900 to-slate-900 dark:from-violet-950 dark:via-blue-950 dark:to-slate-950">
                  {/* shimmer sweep */}
                  <motion.div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  {/* center icon with breathing pulse */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ opacity: [0.4, 0.7, 0.4] }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <FlaskConical className="h-16 w-16 text-slate-300" />
                    </motion.div>
                  </div>
                  {/* corner badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-slate-300 uppercase">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-60" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-slate-300" />
                      </span>
                      In the Lab
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`Project ${project.name}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}

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
                  {project.isStealth ? (
                    <div className="flex items-center justify-between text-sm">
                      <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
                        </span>
                        <span className="font-medium">
                          {project.comingLabel ?? "Coming soon"}
                        </span>
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-500 italic">
                        more soon
                      </span>
                    </div>
                  ) : (
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
                          window.open(project.codeUrl, "_blank");
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
                          if (project.name === "FuelWise") {
                            setIsFuelWiseModalOpen(true);
                            return;
                          }
                          window.open(project.demoUrl, "_blank");
                        }}
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Explore</span>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

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
